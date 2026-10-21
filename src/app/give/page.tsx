import type { Metadata } from "next";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
import { readEditorial } from "@/lib/editorial";
export const metadata: Metadata = { title: "Give & volunteer" };
export default async function GivePage() {
  const settings = await readEditorial<{
    paymentInstructions?: string;
    volunteerIntroText?: string;
  }>(`*[_type == "giveSettings"][0]{paymentInstructions,volunteerIntroText}`);
  return (
    <>
      <PageIntro
        title="A part for each of us."
        description="Give your time, share your gifts, and support the work of Doxa Community Temple."
      />
      <div className="church-container section-space content-grid">
        <section className="content-panel">
          <h2>Support the church.</h2>
          <p className="whitespace-pre-line">
            {settings?.paymentInstructions ||
              "Please contact the church team for current giving instructions."}
          </p>
          <a
            className="text-link mt-5"
            href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
          >
            Speak with the team ↗
          </a>
        </section>
        <section className="content-panel">
          <h2>Give your time.</h2>
          <p>
            {settings?.volunteerIntroText ||
              "We’d love to hear how you’d like to help. Speak with us about opportunities to serve in the church."}
          </p>
          <a
            className="church-button mt-6"
            href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
          >
            Ask about volunteering ↗
          </a>
        </section>
      </div>
    </>
  );
}
