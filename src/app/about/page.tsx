import About from "@/components/about/AboutPage";
import { getAboutPage, getChurchHomePageInfo } from "@/lib/api";
import { AboutDocument } from "@/types/About";
import { HomeDocument } from "@/types/Home";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const [about, home]: [AboutDocument, HomeDocument] = await Promise.all([
    getAboutPage(),
    getChurchHomePageInfo(),
  ]);
  return <About aboutInfo={about} homeInfo={home} />;
};

export default page;
