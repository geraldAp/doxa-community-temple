import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
import { church } from "@/content/church";
export const metadata: Metadata = {
  title: "Our church",
  description:
    "Discover Doxa Community Temple’s mission, vision and objectives in Adamrobe, Oyibi, Ghana.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro title="Get to know Doxa." description={church.introduction} />
      <div className="church-container section-space">
        <div className="content-grid">
          {church.mission && (
            <section className="content-panel">
              <h2>Our mission.</h2>
              <p>{church.mission}</p>
            </section>
          )}
          {church.vision && (
            <section className="content-panel">
              <h2>Our vision.</h2>
              <p>{church.vision}</p>
            </section>
          )}
        </div>
        {church.story && (
          <section className="content-panel section-space">
            <h2>Our story.</h2>
            <p>{church.story}</p>
          </section>
        )}
        <section className="section-space" aria-labelledby="objectives-heading">
          <h2 id="objectives-heading" className="section-heading">
            What we’re working towards.
          </h2>
          <ol className="objective-list">
            {church.objectives.map((objective, index) => (
              <li key={objective}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{objective}</p>
              </li>
            ))}
          </ol>
        </section>
        {church.beliefs.length > 0 && (
          <section className="content-panel">
            <h2>Our beliefs.</h2>
            <ul>
              {church.beliefs.map((belief) => (
                <li key={belief}>{belief}</li>
              ))}
            </ul>
          </section>
        )}
        <Link href="/visit" className="church-button">
          Come worship with us ↗
        </Link>
      </div>
    </>
  );
}
