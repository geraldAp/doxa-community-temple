"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Heart, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const MembershipSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  address: z.string().min(5, "Address is required"),
  status: z.enum(["visitor", "member"]),
});

type MembershipFormData = z.infer<typeof MembershipSchema>;

export default function Membership() {
  const [pending, setPending] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<MembershipFormData>({
    resolver: zodResolver(MembershipSchema),
    defaultValues: { fullName: "", email: "", phone: "", address: "", status: "visitor" },
  })

  const onSubmit = async (data: MembershipFormData) => {
    try {
      setPending(true)
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
        }),
      })
      if (!res.ok) {
        toast({ title: "Submission failed", description: "Please check your details and try again." })
        return
      }
      toast({ title: "Registration Successful", description: "Thank you for registering. We'll be in touch soon!" })
    } catch {
      toast({ title: "Network error", description: "Please try again later." })
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20at%204.43.47%E2%80%AFPM-hiDALHbmzPaIiL1t1WiKnr0R8QNhHj.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Serve with Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            >
              Join our community and be part of something bigger
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">
              We exist to connect everyone, everywhere, to God's word
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our community is built on love, support, and spiritual growth. When you join us, you become part of a
              family dedicated to serving God and each other.
            </p>
            <div className="space-y-4">
              {[
                "Join weekly prayer meetings",
                "Participate in community outreach",
                "Access spiritual resources",
                "Connect with mentors",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Register to Join</h3>
              <p className="text-gray-600">Fill out the form below and become part of our community</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("fullName")}
                  required
                  className="border-gray-200"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  required
                  className="border-gray-200"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  required
                  className="border-gray-200"
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  {...register("address")}
                  required
                  className="border-gray-200"
                  placeholder="Your address"
                />
                {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
              </div>

              <div className="space-y-3">
                <Label>I am a:</Label>
                <RadioGroup
                  onValueChange={(value) => setValue("status", value as "visitor" | "member", { shouldValidate: true })}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="visitor" id="visitor" />
                    <Label htmlFor="visitor">First-time Visitor</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="member" id="member" />
                    <Label htmlFor="member">Interested in Membership</Label>
                  </div>
                </RadioGroup>
                {errors.status && <p className="text-red-600 text-sm">{errors.status.message}</p>}
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={pending}>
                Join Our Community
                <Heart className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
