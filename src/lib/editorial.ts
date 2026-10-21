import "server-only";
import { unstable_rethrow } from "next/navigation";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type EditorialImage = SanityImageSource & { alt?: string };
export type ChurchEvent = {
  _id: string;
  title: string;
  slug: string;
  startsAt: string;
  endsAt?: string;
  venue?: string;
  description?: string;
  image?: EditorialImage;
};
export type Article = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage?: EditorialImage;
  excerpt?: string;
  body?: unknown[];
};
export type Album = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  cover?: EditorialImage;
  images?: { _key: string; image: EditorialImage; alt?: string }[];
};

export const sanityConfigured = process.env.SANITY_DISABLED !== "1";

/** An editorial outage must not prevent people from finding the church. */
export async function readEditorial<T>(
  query: string,
  params: Record<string, string | number> = {},
  options: { failOnError?: boolean } = {},
): Promise<T | null> {
  if (!sanityConfigured) return null;
  try {
    const { client } = await import("@/sanity/lib/client");
    return await client.fetch<T>(query, params, { cache: "no-store" });
  } catch (error) {
    unstable_rethrow(error);
    console.error(
      "Church editorial content is unavailable",
      error instanceof Error ? error.message : "Unknown error",
    );
    if (options.failOnError) throw error;
    return null;
  }
}

export function accraDate(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Accra",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function formatChurchDate(value: string, includeTime = false): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date to be confirmed";
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    day: "numeric",
    month: "long",
    year: "numeric",
    ...(includeTime ? ({ hour: "numeric", minute: "2-digit" } as const) : {}),
  }).format(date);
}

const eventFields = `_id, title, "slug": slug.current, startsAt, endsAt, venue, description, image`;
const postFilter = `_type == "post" && defined(slug.current) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())`;
const postFields = `_id, title, "slug": slug.current, publishedAt, mainImage, "excerpt": coalesce(excerpt, array::join(string::split(pt::text(body), " ")[0...35], " "))`;

export async function getEvents() {
  // No-end events remain listed through their start day in Accra (UTC).
  return (
    (await readEditorial<ChurchEvent[]>(
      `*[_type == "event" && defined(slug.current) && defined(startsAt) && ((defined(endsAt) && dateTime(endsAt) >= dateTime(now())) || (!defined(endsAt) && dateTime(startsAt) >= dateTime($today)))] | order(startsAt asc){${eventFields}}`,
      { today: `${accraDate()}T00:00:00Z` },
    )) ?? []
  );
}

export function getEvent(slug: string) {
  return readEditorial<ChurchEvent>(
    `*[_type == "event" && slug.current == $slug && defined(startsAt)][0]{${eventFields}}`,
    { slug },
    { failOnError: true },
  );
}

export async function getArticles(page = 1, limit = 6) {
  const start = (page - 1) * limit;
  return (
    (await readEditorial<{ total: number; items: Article[] }>(
      `{"total": count(*[${postFilter}]), "items": *[${postFilter}] | order(publishedAt desc)[$start...$end]{${postFields}}}`,
      { start, end: start + limit },
    )) ?? { total: 0, items: [] }
  );
}

export function getArticle(slug: string) {
  return readEditorial<Article>(
    `*[${postFilter} && slug.current == $slug][0]{${postFields},body}`,
    { slug },
    { failOnError: true },
  );
}

export async function getAlbums() {
  return (
    (await readEditorial<Album[]>(
      `*[_type == "galleryAlbum" && defined(slug.current)] | order(_createdAt desc){_id,title,"slug":slug.current,description,"cover":images[0].image}`,
    )) ?? []
  );
}

export function getAlbum(slug: string) {
  return readEditorial<Album>(
    `*[_type == "galleryAlbum" && slug.current == $slug][0]{_id,title,"slug":slug.current,description,images[]{_key,image,alt}}`,
    { slug },
    { failOnError: true },
  );
}

export function getHomeContent() {
  return readEditorial<{ heroImage?: EditorialImage; dailyMessage?: string }>(
    `*[_type == "home"] | order(_createdAt asc)[0]{heroImage,dailyMessage}`,
  );
}
