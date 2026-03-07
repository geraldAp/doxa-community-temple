import React from "react";
import Gallery from "@/components/gallery/Gallery";
import GalleryAlbums from "@/components/gallery/GalleryAlbums";
import { fetchGalleryPage, fetchGalleryAlbums } from "@/lib/api";
const page = async () => {
  const [albums, imagesFallback] = await Promise.all([
    fetchGalleryAlbums(),
    fetchGalleryPage(),
  ]);
  if (albums && albums.length > 0) {
    return <GalleryAlbums albums={albums} />;
  }
  return <Gallery galleryData={imagesFallback} />;
};

export default page;
