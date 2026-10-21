import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, formatChurchDate } from "@/lib/editorial";
import { PortableTextRenderer } from "@/components/shared/PortableTextRenderer";
import { PageIntro } from "@/components/reusables/PageIntro";
import { EditorialImage } from "@/components/reusables/EditorialImage";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  return { title: article?.title ?? "Article", description: article?.excerpt };
}
export default async function ArticlePage({ params }: Props) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  return (
    <>
      <PageIntro title={article.title} />
      <article className="church-container section-space reading-width">
        <p className="mb-8 text-sm">
          <time dateTime={article.publishedAt}>
            {formatChurchDate(article.publishedAt)}
          </time>
        </p>
        {article.mainImage && (
          <div className="editorial-cover">
            <EditorialImage
              image={article.mainImage}
              alt={article.title}
              priority
            />
          </div>
        )}
        <div className="article-body">
          <PortableTextRenderer value={article.body} />
        </div>
        <Link href="/blog" className="text-link mt-10">
          ← All articles
        </Link>
      </article>
    </>
  );
}
