import Image from "next/image";
import type { EditorialImage as ImageSource } from "@/lib/editorial";
import { urlFor } from "@/sanity/lib/image";

export function EditorialImage({
  image,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  image: ImageSource;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={urlFor(image)}
      alt={image.alt ?? alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
    />
  );
}
