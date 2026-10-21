"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type DataConnection = EventTarget & { saveData?: boolean };

/** Progressive enhancement: no content waits for JavaScript to become visible. */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/studio")) return;
    const root = document.getElementById("main-content");
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: DataConnection }
    ).connection;
    const completed = new WeakSet<Element>();
    const active = new Map<HTMLElement, Animation>();
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      active.forEach((animation) => animation.cancel());
      active.clear();
    };

    const start = () => {
      stop();
      if (preference.matches || connection?.saveData || document.hidden) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (!entry.isIntersecting || completed.has(target)) return;
            completed.add(target);
            observer?.unobserve(target);
            if (target.matches(":focus-within")) return;
            const isHeading = /^H[1-6]$/.test(target.tagName);
            const animation = target.animate(
              [
                {
                  transform: `translateY(${isHeading ? 14 : 20}px)`,
                  opacity: isHeading ? 1 : 0.7,
                },
                { transform: "translateY(0)", opacity: 1 },
              ],
              {
                duration: isHeading ? 650 : 500,
                easing: "cubic-bezier(.22,1,.36,1)",
              },
            );
            active.set(target, animation);
            animation.finished
              .then(() => {
                if (active.get(target) === animation) active.delete(target);
              })
              .catch(() => {
                /* Cancellation restores the underlying visible content. */
              });
          });
        },
        { threshold: 0.12 },
      );
      root
        .querySelectorAll<HTMLElement>(
          "[data-motion], .section-heading, .gathering-row, .content-panel, .editorial-grid > *",
        )
        .forEach((target) => {
          if (!completed.has(target)) observer?.observe(target);
        });
    };

    const keepFocusStill = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      const focused = event.target;
      active.forEach((animation, target) => {
        if (target.contains(focused)) {
          animation.cancel();
          active.delete(target);
        }
      });
    };

    // Wait for the initial image/layout load, then enhance only visible content.
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    preference.addEventListener("change", start);
    connection?.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);
    root.addEventListener("focusin", keepFocusStill);
    return () => {
      stop();
      window.removeEventListener("load", start);
      preference.removeEventListener("change", start);
      connection?.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
      root.removeEventListener("focusin", keepFocusStill);
    };
  }, [pathname]);

  return null;
}
