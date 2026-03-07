"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

type AlbumImage = { image: any; alt?: string };

export default function AlbumDetail({ title, images }: { title: string; images: AlbumImage[] }) {
  const [lightbox, setLightbox] = useState<AlbumImage | null>(null);
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510380290192-de27b37c2f89?w=1600&auto=format&fit=crop&q=60')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white">
              {title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {images?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="relative h-64 cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => setLightbox(img)}>
                <Image src={urlFor(img.image) || "/placeholder.svg"} alt={img.alt ?? ""} fill className="object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No images in this album yet.</p>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image src={urlFor(lightbox.image) || "/placeholder.svg"} alt={lightbox.alt ?? ""} fill className="object-contain" />
              <button className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors" onClick={() => setLightbox(null)}>
                <X className="w-6 h-6" />
              </button>
              {lightbox.alt && <p className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/50 p-2 rounded">{lightbox.alt}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
