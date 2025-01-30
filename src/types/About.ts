import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface AboutDocument {
  _type?: "about";
  _id: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  ourStory?: string; 
  beliefs?: string[]; 
  pastors?: Pastor[]; 
  serviceActivities?: string[]; 
}

export interface Pastor {
  name: string; 
  image: SanityImageSource; 
  description?: string; 
  role?: string; 
}