"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { churchDetails } from "@/config/church";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return (
    <footer className="site-footer">
      <div className="church-container">
        <div className="footer-top">
          <div>
            <Link
              className="footer-wordmark"
              href="/"
              aria-label="Doxa Community Temple home — Eden Revival Church International"
            >
              <Image
                src="/images/eden-revival-crest.jpg"
                alt=""
                width={276}
                height={260}
                className="church-crest"
              />
              <span>
                DOXA<span className="brand-dot">.</span>
              </span>
            </Link>
            <p>Doxa Community Temple</p>
            <p className="footer-invitation">Come worship with us.</p>
          </div>
          <nav aria-label="Explore">
            <h2>Explore</h2>
            <Link href="/about">Our church</Link>
            <Link href="/visit">Plan a visit</Link>
            <Link href="/events">What’s on</Link>
            <Link href="/church-life">Church life</Link>
          </nav>
          <nav aria-label="Connect">
            <h2>Connect</h2>
            <Link href="/blog">Articles & reflections</Link>
            <Link href="/#daily-message">Doxa’s Patriarch’s PEN</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/give">Give & volunteer</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div>
            <h2>Find us</h2>
            <p>{churchDetails.address}</p>
            <a href={`tel:${churchDetails.phone.replace(/\s/g, "")}`}>
              {churchDetails.phone}
            </a>
            <Link href="/visit">Visitor information ↗</Link>
            {churchDetails.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getUTCFullYear()} Doxa Community Temple</p>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
