"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Heart, ChevronRight, CheckCircle, Users, Star, ArrowRight, ShieldCheck, HandHeart } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { HeroSection } from "../reusables/HeroSection"

const MembershipSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  address: z.string().min(5, "Address is required"),
  status: z.enum(["visitor", "member"]),
});

type MembershipFormData = z.infer<typeof MembershipSchema>;

const benefits = [
  {
    icon: ShieldCheck,
    title: "Spiritual Covering",
    description: "Receive pastoral care, counseling, and spiritual mentorship to help you grow in your faith journey."
  },
  {
    icon: Users,
    title: "Community & Fellowship",
    description: "Connect with a supportive family of believers through small groups, events, and shared life experiences."
  },
  {
    icon: HandHeart,
    title: "Service Opportunities",
    description: "Discover and use your spiritual gifts to serve others and make a tangible impact in our community."
  }
]

const steps = [
  { number: "01", title: "Attend a Service", desc: "Join us for Sunday worship to experience our community." },
  { number: "02", title: "Membership Class", desc: "Learn about our vision, beliefs, and values." },
  { number: "03", title: "Commitment", desc: "Sign the covenant and be welcomed into the family." }
]

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
          status: data.status,
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
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection
        title="Become a Member"
        subtitle="Find your place, discover your purpose, and grow with us."
        ctaText="Join Now"
        ctaLink="#join-form"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-27%20at%204.43.47%E2%80%AFPM-hiDALHbmzPaIiL1t1WiKnr0R8QNhHj.png"
      />

      {/* Value Proposition Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Join Doxa?</h2>
            <p className="text-lg text-muted-foreground">
              Membership is more than just a title; it's a commitment to a spiritual family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                      <benefit.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Your Journey to Membership</h2>
            <p className="text-lg text-muted-foreground">Simple steps to becoming part of our family.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-background p-6 rounded-lg text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-background">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="join-form" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to make it official?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're excited to welcome you. Fill out the form to start your membership process or to let us know you're visiting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="text-green-500 shrink-0" />
                  <span className="font-medium">Instant connection to pastoral team</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="text-green-500 shrink-0" />
                  <span className="font-medium">Access to community groups</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="text-green-500 shrink-0" />
                  <span className="font-medium">Opportunities to serve</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-card">
                <CardHeader className="bg-primary text-primary-foreground p-8">
                  <CardTitle className="text-2xl">Registration Form</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Tell us a bit about yourself
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        className="h-12 bg-muted/30"
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-destructive text-sm">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="h-12 bg-muted/30"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="h-12 bg-muted/30"
                        placeholder="+233 20 000 0000"
                      />
                      {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        {...register("address")}
                        className="min-h-[100px] bg-muted/30 resize-none"
                        placeholder="Your residential address"
                      />
                      {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
                    </div>

                    <div className="space-y-3 pt-2">
                      <Label>I am a:</Label>
                      <RadioGroup
                        onValueChange={(value) => setValue("status", value as "visitor" | "member", { shouldValidate: true })}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="visitor" id="visitor" className="peer sr-only" />
                          <Label
                            htmlFor="visitor"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                          >
                            <span className="mb-2 text-lg">👋</span>
                            Visitor
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="member" id="member" className="peer sr-only" />
                          <Label
                            htmlFor="member"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                          >
                            <span className="mb-2 text-lg">🤝</span>
                            Member
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.status && <p className="text-destructive text-sm">{errors.status.message}</p>}
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg font-semibold hover:-translate-y-0.5 transition-all" disabled={pending}>
                      {pending ? "Submitting..." : "Submit Registration"}
                      {!pending && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial Placeholder */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-muted/30 border-none">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic mb-6">"Joining this church family was the best decision I've made. The community is welcoming and the spiritual growth is real."</p>
                  <div className="font-bold">- Member Testimonial</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
