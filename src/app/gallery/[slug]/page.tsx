import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAlbum } from "@/lib/editorial";
import { PageIntro } from "@/components/reusables/PageIntro";
import { EditorialImage } from "@/components/reusables/EditorialImage";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const album = await getAlbum((await params).slug);
  return { title: album?.title ?? "Gallery", description: album?.description };
}
export default async function AlbumPage({ params }: Props) {
  const album = await getAlbum((await params).slug);
  if (!album) notFound();
  return (
    <>
      <PageIntro title={album.title} description={album.description} />
      <div className="church-container section-space">
        <div className="editorial-grid">
          {album.images
            ?.filter((item) => item.image)
            .map((item) => (
              <figure key={item._key}>
                <div className="editorial-cover">
                  <EditorialImage image={item.image} alt={item.alt ?? ""} />
                </div>
                {item.alt && (
                  <figcaption className="text-sm">{item.alt}</figcaption>
                )}
              </figure>
            ))}
        </div>
        <Link href="/gallery" className="text-link mt-10">
          ← All albums
        </Link>
      </div>
    </>
  );
}
