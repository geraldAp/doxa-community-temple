import React from "react";
import { fetchGalleryAlbumBySlug } from "@/lib/api";
import AlbumDetail from "@/components/gallery/AlbumDetail";
import { notFound } from "next/navigation";

interface Params {
  params: { slug: string };
}

export default async function Page({ params }: Params) {
  const album = await fetchGalleryAlbumBySlug(params.slug);
  if (!album?._id) {
    notFound();
  }
  return <AlbumDetail title={album.title} images={album.images ?? []} />;
}
