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
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { href: "/about", label: "Our church" },
  { href: "/events", label: "What’s on" },
  { href: "/blog", label: "Articles" },
  { href: "/church-life", label: "Church life" },
  { href: "/#daily-message", label: "Daily message" },
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
        <nav aria-label="Primary" className="desktop-nav max-lg:!hidden">
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
              className="mobile-menu-button max-lg:!flex"
              aria-label="Open navigation"
            >
              <Menu aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetTitle className="text-3xl font-medium tracking-tight">
              Welcome to Doxa.
            </SheetTitle>
            <SheetDescription className="sr-only">
              Browse the church, plan a visit, or get in touch.
            </SheetDescription>
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
