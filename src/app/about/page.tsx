import About from "@/components/about/AboutPage";
import { getAboutPage } from "@/lib/api";
import { AboutDocument } from "@/types/About";
import React from "react";

const page = async () => {
  const data: AboutDocument = await getAboutPage();
  return <About aboutInfo={data} />;
};

export default page;
