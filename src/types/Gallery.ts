interface ImageAsset {
  _id: string;
  url: string;
}

interface Image {
  asset: ImageAsset;
}

interface ImageWithAlt {
  image: Image;
  alt: string;
}

type ImagesArray = ImageWithAlt[];
