import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { fetchPostsPaginated } from "@/lib/api";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page ?? "1");
  const limit = 6;
  const data = await fetchPostsPaginated(page, limit);
  const totalPages = Math.max(1, Math.ceil(data.total / limit));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {data.items.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((post) => {
              const coverUrl = post.mainImage ? urlFor(post.mainImage) : "/placeholder.svg";
              const coverAlt = (post.mainImage && (post.mainImage.alt as string)) ?? post.title;
              const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "";
              return (
                <Link key={post._id} href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="relative h-48">
                      <Image src={coverUrl} alt={coverAlt} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {date}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-3">Read more…</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex justify-center items-center gap-4 mt-12">
          <Link href={`/blog?page=${Math.max(1, page - 1)}`} className="px-4 py-2 border rounded disabled:opacity-50" aria-disabled={page <= 1}>
            Previous
          </Link>
          <span className="text-gray-700">
            Page {page} of {totalPages}
          </span>
          <Link href={`/blog?page=${Math.min(totalPages, page + 1)}`} className="px-4 py-2 border rounded disabled:opacity-50" aria-disabled={page >= totalPages}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
