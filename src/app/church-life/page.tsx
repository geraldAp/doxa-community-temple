import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
export const metadata: Metadata = { title: "Church life" };
export default function ChurchLifePage() {
  return (
    <>
      <PageIntro
        title="Find your place at Doxa."
        description="Worship with us, get to know the community, and discover how you can take part."
      />
      <div className="church-container section-space content-grid">
        {[
          {
            title: "Gather with us.",
            body: "Join Sunday worship or one of our weekday gatherings.",
            href: "/visit",
            action: "Service information",
          },
          {
            title: "Become part of the church.",
            body: "Speak with us about membership and your next steps at Doxa.",
            href: "/membership",
            action: "Explore membership",
          },
          {
            title: "Lend a hand.",
            body: "Ask the church team where you can use your time and gifts.",
            href: "/give",
            action: "Give & volunteer",
          },
          {
            title: "See life at Doxa.",
            body: "Explore photographs shared by the church team.",
            href: "/gallery",
            action: "Open the gallery",
          },
        ].map((item) => (
          <section className="content-panel" key={item.href}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <Link className="text-link mt-5" href={item.href}>
              {item.action} ↗
            </Link>
          </section>
        ))}
      </div>
    </>
  );
}
