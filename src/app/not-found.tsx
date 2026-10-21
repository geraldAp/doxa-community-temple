import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
export default function NotFound() {
  return (
    <>
      <PageIntro
        title="Let’s find your way back."
        description="This page isn’t available. You can return home or find the details for your next visit."
      />
      <div className="church-container section-space contact-actions">
        <Link className="church-button" href="/">
          Back to home ↗
        </Link>
        <Link className="text-link" href="/visit">
          Plan a visit ↗
        </Link>
      </div>
    </>
  );
}
