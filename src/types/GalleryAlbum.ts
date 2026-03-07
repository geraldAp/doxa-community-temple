import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface GalleryAlbum {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  images: { image: SanityImageSource; alt?: string }[];
}

export type GalleryAlbumList = GalleryAlbum[];
