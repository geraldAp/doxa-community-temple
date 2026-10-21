import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
export const metadata: Metadata = { title: "Membership" };
export default function MembershipPage() {
  return (
    <>
      <PageIntro
        title="Make Doxa your church home."
        description="Get to know the church, meet the team, and talk with us about becoming a member."
      />
      <div className="church-container section-space content-grid">
        <section className="content-panel">
          <h2>Start with a Sunday.</h2>
          <p>
            You can attend a service before making a decision about membership.
            Come worship with us and ask any questions you have.
          </p>
          <Link href="/visit" className="text-link mt-5">
            Plan your first visit ↗
          </Link>
        </section>
        <section className="content-panel">
          <h2>Let’s take the next step together.</h2>
          <p>
            Call the church team to learn about the membership process and how
            to get involved at Doxa.
          </p>
          <a
            className="church-button mt-6"
            href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
          >
            Call {churchDetails.phone} ↗
          </a>
        </section>
      </div>
    </>
  );
}
