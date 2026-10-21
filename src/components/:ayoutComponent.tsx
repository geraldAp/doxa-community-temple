import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SiteMotion } from "./reusables/SiteMotion";

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
      <SiteMotion />
      <Footer />
    </div>
  );
}
