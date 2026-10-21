import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Doxa Community Temple on +233 55 388 5938 or find us at Adamrobe (Obama Park), Oyibi.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Let’s talk."
        description="Planning your first visit, looking to get involved, or have a question? Get in touch with the church team."
      />
      <div className="church-container section-space content-grid">
        <section className="content-panel">
          <h2>Call the church.</h2>
          <a
            className="text-link"
            href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
          >
            {churchDetails.phone} ↗
          </a>
          <p>
            Speak with us about services, membership, volunteering or
            directions.
          </p>
          <div className="contact-actions">
            <a
              className="church-button"
              href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Call the church ↗
            </a>
          </div>
        </section>
        <section className="content-panel">
          <h2>Come and see us.</h2>
          <address className="visit-address">{churchDetails.address}</address>
          <a
            className="text-link"
            href={churchDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open directions ↗
          </a>
          <div className="contact-actions">
            <Link className="church-button light-button" href="/visit">
              Plan a visit ↗
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
