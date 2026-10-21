import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { church } from "@/content/church";
import { churchDetails } from "@/config/church";
import {
  formatChurchDate,
  type ChurchEvent,
  type Article,
  type Album,
  type EditorialImage as ImageSource,
} from "@/lib/editorial";
import { EditorialImage } from "@/components/reusables/EditorialImage";
import { DailyMessage } from "./DailyMessage";

export function HomePage({
  hero,
  dailyMessage,
  events,
  articles,
  albums,
}: {
  hero?: ImageSource;
  dailyMessage: string | null;
  events: ChurchEvent[];
  articles: Article[];
  albums: Album[];
}) {
  const sunday = churchDetails.services[0];
  return (
    <>
      <section className="home-hero church-container">
        <div className="hero-copy">
          <h1 data-motion>
            A place to worship.
            <br />
            <em>
              A community to
              <br className="desktop-break" /> belong to.
            </em>
          </h1>
          <p data-motion>{church.introduction}</p>
          <div className="hero-actions">
            <Link href="/visit" className="church-button">
              Join us this Sunday <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/about">
              Get to know Doxa <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-service">
            <span className="service-dot" aria-hidden="true" />
            <p>
              {sunday.day} worship <span>{sunday.time}</span>
            </p>
          </div>
        </div>
        <div className={`hero-photo ${hero ? "" : "hero-photo-empty"}`}>
          {hero ? (
            <EditorialImage
              image={hero}
              alt="Worshippers gathered during a church service"
              priority
              sizes="100vw"
            />
          ) : (
            <Image
              src="/images/doxa-worship.jpg"
              alt="Worshippers gathered during a church service"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <a
            className="photo-location"
            href={churchDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} aria-hidden="true" />
            Adamrobe, Oyibi <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="welcome-strip">
        <div className="church-container">
          <p>There’s room for you here.</p>
          <a
            href={churchDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us at Obama Park, Oyibi{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <DailyMessage message={dailyMessage} />
      <section
        className="church-container section-space introduction-grid"
        aria-labelledby="welcome-heading"
      >
        <h2 id="welcome-heading" className="section-heading">
          Come as you are.
          <br />
          <em>Get to know us.</em>
        </h2>
        <div>
          <p className="large-copy">Your first visit begins with a welcome.</p>
          <p className="body-copy">
            Whether you’re exploring faith or looking for a church to call home,
            we’d love to meet you. Join us for Sunday worship, or get in touch
            with the church team before you visit.
          </p>
          <div className="contact-actions">
            <Link href="/visit" className="text-link">
              Your first Sunday <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/faith" className="text-link">
              Exploring faith? <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="church-container section-space"
        aria-labelledby="gatherings-heading"
      >
        <div className="section-top">
          <h2 id="gatherings-heading" className="section-heading">
            Let’s gather.
          </h2>
          <Link href="/events" className="text-link">
            What’s on <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="gathering-list">
          {churchDetails.services.map((service, i) => (
            <Link key={service.name} href="/visit" className="gathering-row">
              <span className="row-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{service.name}</h3>
              <p>
                {service.day}
                <span>{service.time}</span>
              </p>
              <ArrowUpRight aria-hidden="true" size={20} />
            </Link>
          ))}
          {events.slice(0, 3).map((event) => (
            <Link
              key={event._id}
              href={`/events/${event.slug}`}
              className="gathering-row"
            >
              <span className="row-number" aria-hidden="true">
                ↗
              </span>
              <h3>{event.title}</h3>
              <p>
                {formatChurchDate(event.startsAt, true)}
                <span>{event.venue}</span>
              </p>
              <ArrowUpRight aria-hidden="true" size={20} />
            </Link>
          ))}
        </div>
      </section>
      {articles.length > 0 && (
        <section
          className="articles-section section-space"
          aria-labelledby="articles-heading"
        >
          <div className="church-container">
            <div className="section-top">
              <h2 id="articles-heading" className="section-heading">
                Words for the journey.
              </h2>
              <Link className="text-link" href="/blog">
                All articles <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="editorial-grid">
              {articles.slice(0, 3).map((article) => (
                <article key={article._id}>
                  <Link href={`/blog/${article.slug}`}>
                    {article.mainImage && (
                      <div className="editorial-cover">
                        <EditorialImage
                          image={article.mainImage}
                          alt={article.title}
                        />
                      </div>
                    )}
                    <time dateTime={article.publishedAt}>
                      {formatChurchDate(article.publishedAt)}
                    </time>
                    <h3>{article.title}</h3>
                    {article.excerpt && <p>{article.excerpt}…</p>}
                    <span className="text-link">
                      Read article <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {albums.length > 0 && (
        <section
          className="church-container section-space"
          aria-labelledby="life-heading"
        >
          <div className="section-top">
            <h2 id="life-heading" className="section-heading">
              Life at Doxa.
            </h2>
            <Link className="text-link" href="/gallery">
              See the gallery <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="editorial-grid">
            {albums.slice(0, 3).map((album) => (
              <Link key={album._id} href={`/gallery/${album.slug}`}>
                {album.cover && (
                  <div className="editorial-cover">
                    <EditorialImage image={album.cover} alt={album.title} />
                  </div>
                )}
                <h3 className="album-title">{album.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
      <section className="visit-invitation">
        <div className="church-container">
          <div>
            <h2 className="section-heading">See you on Sunday.</h2>
            <p>
              {sunday.time} · {churchDetails.address}
            </p>
          </div>
          <Link href="/visit" className="church-button light-button">
            Plan your visit <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
