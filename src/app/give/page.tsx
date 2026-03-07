import Give from "@/components/give/Give";
import React from "react";
import { fetchGiveSettings } from "@/lib/api";

export const dynamic = "force-dynamic";
const page = async () => {
  const settings = await fetchGiveSettings();
  return <Give settings={settings} />;
};

export default page;
