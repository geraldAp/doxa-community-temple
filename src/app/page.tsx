import { HomePage } from "@/components/home/HomePage";
import {
  getHomeContent,
  getEvents,
  getArticles,
  getAlbums,
} from "@/lib/editorial";

export default async function Home() {
  const [home, events, articles, albums] = await Promise.all([
    getHomeContent(),
    getEvents(),
    getArticles(1, 3),
    getAlbums(),
  ]);
  return (
    <HomePage
      hero={home?.heroImage}
      dailyMessage={home?.dailyMessage ?? null}
      events={events}
      articles={articles.items}
      albums={albums}
    />
  );
}
