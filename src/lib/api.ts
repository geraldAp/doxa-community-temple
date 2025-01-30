import { client } from "@/sanity/lib/client";
import { AboutDocument } from "@/types/About";
import { HomeDocument } from "@/types/Home";
import { groq } from "next-sanity";

export async function getChurchHomePageInfo(): Promise<HomeDocument> {
  try {
    const data: HomeDocument = await client.fetch(
      groq`*[_type =='home'][0]{
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
        }`,
      {},
      {
        cache: "no-store",
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getFaqs(): Promise<FAQ[]> {
  try {
    const data = await client.fetch(
      groq`*[_type == 'faq']{ _id,question,answer}`,
      {},
      {
        cache: "no-store",
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAboutPage(): Promise<AboutDocument> {
  try {
    const data: AboutDocument = await client.fetch(
      groq`*[_type == 'about'][0]{
        _id,
        ourStory,
        beliefs,
        pastors[] {
          name,
          image,
          description,
          role
        },
        serviceActivities
      }`,
      {},
      {
        cache: "no-store",
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
