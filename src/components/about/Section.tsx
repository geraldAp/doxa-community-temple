import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ title, children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-24 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight text-foreground">{title}</h2>
        {children}
      </div>
    </motion.section>
  )
}

