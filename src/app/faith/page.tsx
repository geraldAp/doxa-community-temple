import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
export const metadata: Metadata = { title: "Explore the Christian faith" };
export default function FaithPage() {
  return (
    <>
      <PageIntro
        title="Curious about faith?"
        description="You don’t need to have every answer before you come to church. Bring your questions and get to know us."
      />
      <div className="church-container section-space reading-width">
        <section className="content-panel">
          <h2>Begin with a conversation.</h2>
          <p>
            One of Doxa’s objectives is to bring people to the saving knowledge
            of Jesus Christ. If you’d like to learn more about Jesus, the Bible
            or what it means to follow Christ, we invite you to speak with the
            church team.
          </p>
          <div className="contact-actions">
            <Link className="church-button" href="/contact">
              Speak with us ↗
            </Link>
            <Link className="text-link" href="/visit">
              Join a service ↗
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
