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
      dailyVerse,
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
        aboutBlocks,
        beliefs,
        pastors[] {
          name,
          image,
          description,
          role
        },
        serviceActivities
      }`,

    );
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchGalleryPage = async (): Promise<ImagesArray> => {
  try {
    const query = groq`*[_type == "galleryPage"][0]{
    images[]{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    }
  }`;
    const data = await client.fetch(
      query,
      {},
      {
        cache: "no-store",
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchGiveSettings = async () => {
  try {
    const data = await client.fetch(
      groq`*[_type == "giveSettings"][0]{ paymentInstructions, volunteerIntroText }`,
      {},
      { cache: "no-store" }
    );
    return data as { paymentInstructions?: string; volunteerIntroText?: string };
  } catch (error) {
    throw error;
  }
};

export const fetchPostsPaginated = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  try {
    const query = groq`{
      "total": count(*[_type == "post"]),
      "items": *[_type == "post"]|order(publishedAt desc)[${offset}...${offset + limit}]{
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        mainImage,
        body[0..2]
      }
    }`;
    const data = await client.fetch(query, {}, { cache: "no-store" });
    return data as { total: number; items: Array<{ _id: string; title: string; slug: string; publishedAt: string; mainImage?: any; body?: unknown[] }> };
  } catch (error) {
    throw error;
  }
};

export const fetchPostBySlug = async (slug: string) => {
  try {
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      body,
      categories[]-> { title, slug }
    }`;
    const data = await client.fetch(query, { slug }, { cache: "no-store" });
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchGalleryAlbums = async () => {
  try {
    const query = groq`*[_type == "galleryAlbum"]|order(title asc){
      _id,
      title,
      slug,
      description,
      "cover": images[0].image
    }`;
    const data = await client.fetch(query, {}, { cache: "no-store" });
    return data as { _id: string; title: string; slug: { current: string }; description?: string; cover?: any }[];
  } catch (error) {
    throw error;
  }
};

export const fetchGalleryAlbumBySlug = async (slug: string) => {
  try {
    const query = groq`*[_type == "galleryAlbum" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      images[]{
        image,
        alt
      }
    }`;
    const data = await client.fetch(query, { slug }, { cache: "no-store" });
    return data;
  } catch (error) {
    throw error;
  }
};
