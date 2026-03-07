import Image from "next/image"
import { motion } from "framer-motion"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PastorCardProps {
  name: string
  role: string
  bio: string
  imageSrc: SanityImageSource
}

export function PastorCard({ name, role, bio, imageSrc }: PastorCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }} 
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-none transition-shadow duration-300">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={urlFor(imageSrc) || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
             <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground hover:bg-primary">
              {role}
            </Badge>
            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

