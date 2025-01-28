import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

