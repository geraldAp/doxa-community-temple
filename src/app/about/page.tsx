import About from "@/components/about/AboutPage";
import { getAboutPage } from "@/lib/api";
import { AboutDocument } from "@/types/About";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const data: AboutDocument = await getAboutPage();
  return <About aboutInfo={data} />;
};

export default page;
