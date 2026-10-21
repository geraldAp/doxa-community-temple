import type { Metadata } from "next";
import Link from "next/link";
import { getArticles, formatChurchDate } from "@/lib/editorial";
import { PageIntro } from "@/components/reusables/PageIntro";
import { EditorialImage } from "@/components/reusables/EditorialImage";
export const metadata: Metadata = { title: "Articles & reflections" };
export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const input = Number((await searchParams).page ?? 1);
  const page =
    Number.isSafeInteger(input) && input > 0 ? Math.min(input, 10000) : 1;
  const data = await getArticles(page);
  const totalPages = Math.max(1, Math.ceil(data.total / 6));
  return (
    <>
      <PageIntro
        title="Words for the journey."
        description="Articles, reflections and news from Doxa Community Temple."
      />
      <div className="church-container section-space">
        {data.items.length ? (
          <div className="editorial-grid">
            {data.items.map((post) => (
              <article key={post._id}>
                <Link href={`/blog/${post.slug}`}>
                  {post.mainImage && (
                    <div className="editorial-cover">
                      <EditorialImage image={post.mainImage} alt={post.title} />
                    </div>
                  )}
                  <time dateTime={post.publishedAt}>
                    {formatChurchDate(post.publishedAt)}
                  </time>
                  <h2 className="album-title">{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="text-link">Read article ↗</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <section className="empty-state">
            <h2>
              {page > 1 ? "No articles on this page." : "More from Doxa, soon."}
            </h2>
            <p>
              Our articles and reflections will appear here as they’re
              published.
            </p>
            <Link
              href={page > 1 ? "/blog" : "/visit"}
              className="text-link mt-5"
            >
              {page > 1 ? "Back to articles" : "Visit us this Sunday"} ↗
            </Link>
          </section>
        )}
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Article pages">
            {page > 1 && (
              <Link
                className="text-link"
                href={`/blog?page=${Math.min(page - 1, totalPages)}`}
              >
                ← Previous
              </Link>
            )}
            <span>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link className="text-link" href={`/blog?page=${page + 1}`}>
                Next →
              </Link>
            )}
          </nav>
        )}
      </div>
    </>
  );
}
