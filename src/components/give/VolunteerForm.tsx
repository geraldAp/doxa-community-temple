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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="overflow-hidden border-none bg-card h-full flex flex-col">
        <div className="relative h-64 w-full">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Volunteers working together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-foreground" />
              Volunteer
            </h2>
          </div>
        </div>

        <CardContent className="p-8 flex-1 flex flex-col">
          {introText ? (
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{introText}</p>
          ) : (
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Join our team of dedicated volunteers and make a difference in our community through various ministries.
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 mb-10">
            {volunteerAreas.map((area, index) => (
              <motion.div
                key={area.value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-border/60 rounded-xl text-center space-y-3 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-default group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6" />
                </div>
                <p className="font-medium text-sm text-foreground">{area.label}</p>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-auto">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                className="h-12 bg-muted/30 border-border/60"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-destructive text-sm font-medium">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="h-12 bg-muted/30 border-border/60"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-destructive text-sm font-medium">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="h-12 bg-muted/30 border-border/60"
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-destructive text-sm font-medium">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="font-semibold">Area of Interest</Label>
              <Select
                onValueChange={(value) => setValue("interest", value, { shouldValidate: true })}
              >
                <SelectTrigger className="h-12 bg-muted/30 border-border/60">
                  <SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
                  {volunteerAreas.map((area) => (
                    <SelectItem key={area.value} value={area.value}>
                      <div className="flex items-center gap-2">
                        <area.icon className="w-4 h-4 text-primary" />
                        {area.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interest && <p className="text-destructive text-sm font-medium">{errors.interest.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold hover:-translate-y-0.5 transition-all" disabled={pending}>
              {pending ? "Submitting..." : "Get Involved"}
              {!pending && <ChevronRight className="w-5 h-5 ml-2" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  )
}
