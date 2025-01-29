import Image from "next/image"
import { motion } from "framer-motion"

interface PastorCardProps {
  name: string
  role: string
  bio: string
  imageSrc: string
}

export function PastorCard({ name, role, bio, imageSrc }: PastorCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={name}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-primary mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  )
}

