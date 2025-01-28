"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ChevronRight, Calendar, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This data would typically come from Sanity.io
const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    excerpt:
      "In a world full of uncertainty, discover how faith can be your anchor and guide you through life's storms. Learn practical steps to maintain inner peace.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=60",
    date: "May 15, 2023",
    category: "Faith",
  },
  {
    id: 2,
    title: "The Power of Community",
    excerpt:
      "Explore the importance of fellowship and how it strengthens our faith. Discover ways to build meaningful connections in today's digital age.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60",
    date: "May 8, 2023",
    category: "Community",
  },
  {
    id: 3,
    title: "Living a Life of Service",
    excerpt:
      "Learn how serving others can bring joy and purpose to your life. Real stories of impact and transformation through community service.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60",
    date: "May 1, 2023",
    category: "Service",
  },
]

const categories = [
  { name: "Faith", count: 12 },
  { name: "Community", count: 8 },
  { name: "Service", count: 10 },
  { name: "Inspiration", count: 15 },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1600&auto=format&fit=crop&q=60')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            >
              Stories of faith, community, and inspiration
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">{post.category}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Search</h2>
                <div className="flex gap-2">
                  <Input placeholder="Search blog..." className="flex-grow" />
                  <Button size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-primary" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="flex items-start space-x-4 group">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

