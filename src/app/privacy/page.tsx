import type { Metadata } from "next";
import { PageIntro } from "@/components/reusables/PageIntro";
import { churchDetails } from "@/config/church";
export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Your privacy." />
      <div className="church-container reading-width section-space content-panel">
        <h2>Contacting the church.</h2>
        <p>
          This website directs membership and volunteering enquiries to the
          church by telephone. It does not ask you to submit personal details
          through a public enquiry form.
        </p>
        <h2 className="mt-8">Links to other services.</h2>
        <p>
          Maps, social media and any messaging service you choose to open
          operate under their own privacy policies. Photographs and articles are
          delivered through Sanity, our content service. Website hosting and
          content providers may process technical request information needed to
          deliver the pages.
        </p>
        <h2 className="mt-8">Questions about your information.</h2>
        <p>
          Contact Doxa Community Temple on{" "}
          <a
            className="underline"
            href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}
          >
            {churchDetails.phone}
          </a>
          .
        </p>
      </div>
    </>
  );
}
