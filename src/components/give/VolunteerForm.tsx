import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Music, Baby, HandHelpingIcon as Helping, ChevronRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const volunteerAreas = [
  { value: "children", label: "Children's Ministry", icon: Baby },
  { value: "youth", label: "Youth Ministry", icon: Users },
  { value: "worship", label: "Worship Team", icon: Music },
  { value: "outreach", label: "Community Outreach", icon: Helping },
]

const VolunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  interest: z.string().min(2, "Select an area"),
});

type VolunteerFormData = z.infer<typeof VolunteerSchema>;

export function VolunteerForm({ introText }: { introText?: string }) {
  const [pending, setPending] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<VolunteerFormData>({
    resolver: zodResolver(VolunteerSchema),
    defaultValues: { name: "", email: "", phone: "", interest: "" },
  })

  const onSubmit = async (data: VolunteerFormData) => {
    try {
      setPending(true)
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        toast({ title: "Submission failed", description: "Please check your details and try again." })
        return
      }
      toast({ title: "Thank you for volunteering!", description: "We'll be in touch soon with more information." })
    } catch {
      toast({ title: "Network error", description: "Please try again later." })
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Volunteers working together"
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2 mb-4">
            <Users className="w-8 h-8 text-primary" />
            Volunteer
          </h2>
          {introText ? (
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{introText}</p>
          ) : (
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Join our team of dedicated volunteers and make a difference in our community through various ministries.
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {volunteerAreas.map((area, index) => (
              <motion.div
                key={area.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border rounded-lg text-center space-y-2 hover:border-primary transition-colors"
              >
                <area.icon className="w-8 h-8 mx-auto text-primary" />
                <p className="font-medium">{area.label}</p>
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                className="h-12"
                placeholder="Enter your full name"
                required
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="h-12"
                placeholder="your@email.com"
                required
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="h-12"
                placeholder="Your phone number"
                required
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest">Area of Interest</Label>
              <Select
                onValueChange={(value) => setValue("interest", value, { shouldValidate: true })}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
                  {volunteerAreas.map((area) => (
                    <SelectItem key={area.value} value={area.value}>
                      <div className="flex items-center gap-2">
                        <area.icon className="w-4 h-4" />
                        {area.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interest && <p className="text-red-600 text-sm">{errors.interest.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={pending}>
              Get Involved
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  )
}
