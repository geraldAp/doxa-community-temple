import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Reference } from "sanity";

export interface HomeDocument {
  _type: "home";
  _id: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  heroImage?: SanityImageSource; // Image field for the hero image
  dailyMessage?: string; // Text field for the daily message
  vision?: string; // Text field for the vision
  mission?: string; // Text field for the mission
  churchEvents?:EventType[]
}
