import type { Metadata } from "next";
import Link from "next/link";
import { getAlbums } from "@/lib/editorial";
import { PageIntro } from "@/components/reusables/PageIntro";
import { EditorialImage } from "@/components/reusables/EditorialImage";
export const metadata: Metadata = { title: "Life at Doxa" };
export default async function GalleryPage() {
  const albums = await getAlbums();
  return (
    <>
      <PageIntro
        title="Life at Doxa."
        description="Worship, fellowship and moments from our church community."
      />
      <div className="church-container section-space">
        {albums.length ? (
          <div className="editorial-grid">
            {albums.map((album) => (
              <Link key={album._id} href={`/gallery/${album.slug}`}>
                {album.cover && (
                  <div className="editorial-cover">
                    <EditorialImage image={album.cover} alt={album.title} />
                  </div>
                )}
                <h2 className="album-title">{album.title}</h2>
                {album.description && (
                  <p className="body-copy">{album.description}</p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <section className="empty-state">
            <h2>Come be part of the picture.</h2>
            <p>
              Photographs from the church will appear here as albums are shared.
              In the meantime, we’d love to welcome you in person.
            </p>
            <Link className="text-link mt-5" href="/visit">
              Plan a visit ↗
            </Link>
          </section>
        )}
      </div>
    </>
  );
}
