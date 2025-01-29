import { client } from "@/sanity/lib/client";
import { HomeDocument } from "@/types/Home";
import { groq } from "next-sanity";

export async function getChurchHomePageInfo(): Promise<HomeDocument> {
  try {
    const data: HomeDocument = await client.fetch(groq`*[_type =='home'][0]{
      _id,
      heroImage,
      dailyMessage,
      vision,
      mission,
      churchEvents[]->{ 
        _id,
        title,
        date,
        description,
        venue,
        slug { 
          current
        }
      }
        }`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getFaqs(): Promise<FAQ[]> {
  try {
    const data = await client.fetch(
      groq`*[_type == 'faq']{ _id,question,answer}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}
