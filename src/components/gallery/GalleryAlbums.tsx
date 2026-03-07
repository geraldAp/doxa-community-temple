"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

type AlbumItem = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  cover?: any;
};

export default function GalleryAlbums({ albums }: { albums: AlbumItem[] }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510380290192-de27b37c2f89?w=1600&auto=format&fit=crop&q=60')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white">
              Photo Albums
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Explore moments grouped by events and themes
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {albums.length === 0 ? (
          <p className="text-center text-gray-500">No albums available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, i) => {
              const coverUrl = album.cover ? urlFor(album.cover) : "/placeholder.svg";
              return (
                <Link key={album._id} href={`/gallery/${album.slug.current}`} className="block">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-56">
                      <Image src={coverUrl} alt={album.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{album.title}</h3>
                      {album.description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{album.description}</p>}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
