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
