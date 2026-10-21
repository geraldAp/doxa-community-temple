import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
export const metadata: Metadata = { title: "Questions about visiting" };
export default function FAQPage() {
  return (
    <>
      <PageIntro
        title="A few things to know."
        description="Practical information for visiting Doxa Community Temple."
      />
      <div className="church-container section-space reading-width">
        {[
          {
            q: "When is Sunday worship?",
            a: `Our Sunday service runs from ${churchDetails.services[0].time}, Ghana time.`,
          },
          { q: "Where is the church?", a: churchDetails.address },
          {
            q: "Do I need to register before visiting?",
            a: "You can join a service without registering or becoming a member.",
          },
          {
            q: "Who can I contact before I visit?",
            a: `Call the church team on ${churchDetails.phone} for directions or questions about your visit.`,
          },
        ].map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
        <Link className="text-link mt-8" href="/contact">
          Ask us a question ↗
        </Link>
      </div>
    </>
  );
}
