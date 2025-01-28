import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { eventType } from "./event";
import { homeType } from "./home";
import { galleryType } from "./galleryType";
import { faqType } from "./faqType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    homeType,
    eventType,
    galleryType,
    faqType,
    categoryType,
    postType,
    authorType,
  ],
};
