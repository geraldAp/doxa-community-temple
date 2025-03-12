type ImageAsset = {
  _id: string;
  url: string;
};

type Image = {
  asset: ImageAsset;
};

type ImageWithAlt = {
  image: Image;
  alt: string;
};

type ImagesArray = ImageWithAlt[];
