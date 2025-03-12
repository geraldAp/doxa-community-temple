import React from "react";
import Gallery from "@/components/gallery/Gallery";
import { fetchGalleryPage } from "@/lib/api";
const page = async () => {
  const data = await fetchGalleryPage();
  return <Gallery galleryData={data} />;
};

export default page;
