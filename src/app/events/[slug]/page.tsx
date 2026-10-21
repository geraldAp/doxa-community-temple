import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEvent, formatChurchDate } from "@/lib/editorial";
import { PageIntro } from "@/components/reusables/PageIntro";
import { EditorialImage } from "@/components/reusables/EditorialImage";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent((await params).slug);
  return { title: event?.title ?? "Event", description: event?.description };
}
export default async function EventPage({ params }: Props) {
  const event = await getEvent((await params).slug);
  if (!event) notFound();
  return (
    <>
      <PageIntro title={event.title} description={event.venue} />
      <article className="church-container reading-width section-space">
        {event.image && (
          <div className="editorial-cover">
            <EditorialImage image={event.image} alt={event.title} priority />
          </div>
        )}
        <p>
          <time dateTime={event.startsAt}>
            {formatChurchDate(event.startsAt, true)}
          </time>
          {event.endsAt && (
            <>
              {" "}
              —{" "}
              <time dateTime={event.endsAt}>
                {formatChurchDate(event.endsAt, true)}
              </time>
            </>
          )}{" "}
          · Ghana time
        </p>
        <p className="body-copy whitespace-pre-line">{event.description}</p>
        <div className="contact-actions">
          <Link className="church-button" href="/contact">
            Ask about this event ↗
          </Link>
          <Link className="text-link" href="/events">
            All events ↗
          </Link>
        </div>
      </article>
    </>
  );
}
