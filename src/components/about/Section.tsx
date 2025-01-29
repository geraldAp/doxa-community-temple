import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        {children}
      </div>
    </motion.section>
  )
}

