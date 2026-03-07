import { fetchPostBySlug } from "@/lib/api";
import { PortableTextRenderer } from "@/components/shared/PortableTextRenderer";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug);
  if (!post?._id) return { title: "Blog" };
  const description = Array.isArray(post.body) ? "Read more from our blog" : undefined;
  return {
    title: post.title,
    description,
  };
}

export default async function Page({ params }: Params) {
  const post = await fetchPostBySlug(params.slug);
  if (!post?._id) {
    return <div className="max-w-3xl mx-auto px-4 py-24">Post not found.</div>;
  }
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "";
  const coverUrl = post.mainImage ? urlFor(post.mainImage) : "/placeholder.svg";
  const alt = (post.mainImage && (post.mainImage.alt as string)) ?? post.title;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{date}</p>
        <div className="relative w-full h-72 mb-8">
          <Image src={coverUrl} alt={alt} fill className="object-cover rounded-md" />
        </div>
        <PortableTextRenderer value={post.body as unknown[]} />
      </div>
    </div>
  );
}
