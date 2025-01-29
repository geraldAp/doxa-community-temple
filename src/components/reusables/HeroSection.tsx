import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export function HeroSection({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Church Hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href={ctaLink}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

