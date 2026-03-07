"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export function HeroSection({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Church Hero"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/40 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
      <div className="relative z-20 text-center container px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow-md leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
            <Link href={ctaLink}>
              {ctaText}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

