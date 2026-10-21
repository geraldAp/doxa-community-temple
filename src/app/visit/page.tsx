import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
export const metadata: Metadata = {
  title: "Plan a visit",
  description:
    "Join Doxa Community Temple on Sunday, 8:00–11:00 AM, at Adamrobe (Obama Park), Oyibi, Ghana. Find directions and contact the church.",
};
export default function VisitPage() {
  return (
    <>
      <PageIntro
        title="Your Sunday starts here."
        description="We’d love to welcome you to Doxa. You can come to a service without registering or becoming a member."
      />
      <div className="church-container section-space content-grid">
        <section className="content-panel">
          <h2>Come worship with us.</h2>
          <p>
            Join us on Sunday or during the week. All times below are local to
            Ghana.
          </p>
          <dl className="service-details">
            {churchDetails.services.map((service) => (
              <div key={service.name}>
                <dt>{service.day}</dt>
                <dd>
                  {service.time}
                  <br />
                  {service.name}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="content-panel">
          <h2>Find your way.</h2>
          <address className="visit-address">
            Doxa Community Temple
            <br />
            {churchDetails.address}
          </address>
          <p>
            Call us if you need help finding the church or have a question
            before you visit.
          </p>
          <div className="contact-actions">
            <a
              className="church-button"
              href={churchDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
            >
              Call {churchDetails.phone}
            </a>
          </div>
        </section>
        <section className="content-panel">
          <h2>Your first visit.</h2>
          <p>
            You’re welcome to join us for worship and teaching. If you have
            questions about bringing children, accessibility, transport or the
            service, please call the church team so we can help you plan.
          </p>
        </section>
        <section className="content-panel">
          <h2>Take your next step.</h2>
          <p>
            Get to know the church and our objectives, explore the Christian
            faith, or speak with us about getting involved.
          </p>
          <div className="contact-actions">
            <Link className="text-link" href="/about">
              Meet Doxa ↗
            </Link>
            <Link className="text-link" href="/faith">
              Explore the faith ↗
            </Link>
            <Link className="text-link" href="/membership">
              Membership ↗
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
