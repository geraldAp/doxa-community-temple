import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { eventType } from "./event";
import { homeType } from "./home";
import { galleryType } from "./galleryType";
import { faqType } from "./faqType";
import { aboutType } from "./about";
import { galleryAlbumType } from "./galleryAlbum";
import { giveSettingsType } from "./giveSettings";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    homeType,
    aboutType,
    eventType,
    galleryType,
    galleryAlbumType,
    faqType,
    categoryType,
    postType,
    authorType,
    giveSettingsType,
  ],
};
