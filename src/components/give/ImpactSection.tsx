import { motion } from "framer-motion"
import { Heart, Users, ChevronRight } from "lucide-react"

const impactStats = [
  { number: "1,000+", label: "Lives Touched", icon: Heart },
  { number: "50+", label: "Active Volunteers", icon: Users },
  { number: "100%", label: "Impact", icon: ChevronRight },
]

export function ImpactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-24 text-center space-y-6"
    >
      <h2 className="text-3xl font-bold">Your Impact</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Through your generous donations and volunteer work, we've been able to reach more people, support more families,
        and make a bigger difference in our community than ever before.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {impactStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="p-6 rounded-lg bg-white shadow-lg"
          >
            <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

