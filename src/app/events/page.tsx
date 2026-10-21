import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/reusables/PageIntro";
import { getEvents, formatChurchDate } from "@/lib/editorial";
export const metadata: Metadata = {
  title: "What’s on",
  description: "Upcoming events and gatherings at Doxa Community Temple.",
};
export default async function EventsPage() {
  const events = await getEvents();
  return (
    <>
      <PageIntro
        title="Let’s gather."
        description="Make time for worship, fellowship and life together at Doxa."
      />
      <div className="church-container section-space">
        {events.length ? (
          <div className="gathering-list">
            {events.map((event) => (
              <Link
                key={event._id}
                href={`/events/${event.slug}`}
                className="gathering-row"
              >
                <span className="row-number" aria-hidden="true">
                  ↗
                </span>
                <h2>{event.title}</h2>
                <p>
                  <time dateTime={event.startsAt}>
                    {formatChurchDate(event.startsAt, true)}
                  </time>
                  <span>{event.venue}</span>
                </p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <section className="empty-state">
            <h2>Join our regular gatherings.</h2>
            <p>
              For details about special events, please contact the church team.
              Our regular services continue throughout the week.
            </p>
            <Link href="/visit" className="text-link mt-5">
              See service times ↗
            </Link>
          </section>
        )}
      </div>
    </>
  );
}
