# Shared layout

Flat public header, main and footer; public chrome is hidden on Studio routes.

## src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/:ayoutComponent";

export const metadata: Metadata = {
  title: {
    default: "Doxa Community Temple",
    template: "%s | Doxa Community Temple",
  },
  description:
    "Get to know Doxa Community Temple in Oyibi, Ghana. Plan your visit, explore church life, and read our latest articles and scripture reflections.",
  openGraph: {
    title: "Doxa Community Temple",
    description: "A place to worship. A community to belong to.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout title="DOXA">{children}</Layout>
      </body>
    </html>
  );
}

```

## src/components/:ayoutComponent.tsx

```tsx
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

```

## src/components/Header.tsx

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { href: "/about", label: "Our church" },
  { href: "/events", label: "What’s on" },
  { href: "/blog", label: "Articles" },
  { href: "/church-life", label: "Church life" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/studio")) return null;
  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="site-header">
      <div className="church-container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Doxa Community Temple home"
        >
          <span>
            DOXA<span className="brand-dot">.</span>
          </span>
          <span className="wordmark-subtitle">
            COMMUNITY
            <br />
            TEMPLE
          </span>
        </Link>
        <nav aria-label="Primary" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="church-button header-visit" href="/visit">
          Plan a visit <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="mobile-menu-button"
              aria-label="Open navigation"
            >
              <Menu aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetTitle className="font-serif text-3xl">
              Welcome to Doxa.
            </SheetTitle>
            <nav aria-label="Mobile" className="mobile-nav">
              {[
                ...navigation,
                { href: "/visit", label: "Plan a visit" },
                { href: "/give", label: "Give & volunteer" },
                { href: "/membership", label: "Membership" },
              ].map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

```

## src/components/Footer.tsx

```tsx
"use client";

import Link from "next/link";
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
            <Link className="footer-wordmark" href="/">
              DOXA<span className="brand-dot">.</span>
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

```
