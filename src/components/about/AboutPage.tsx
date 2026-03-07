"use client";
import { AboutDocument } from "@/types/About";
import { HomeDocument } from "@/types/Home";
import { HeroSection } from "../reusables/HeroSection";
import { PastorCard } from "./PastorCard";
import { Section } from "./Section";
import { PortableTextRenderer } from "../shared/PortableTextRenderer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About({
  aboutInfo,
  homeInfo,
}: Readonly<{ aboutInfo: AboutDocument; homeInfo?: HomeDocument }>) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection
        title="About Our Church"
        subtitle="A community of faith, love, and service"
        ctaText="Join Us This Sunday"
        ctaLink="/membership"
        backgroundImage="https://images.unsplash.com/photo-1438032506450-9a0e60d8a638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />

      {/* Vision & Mission Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm">
              <span className="h-px w-8 bg-primary"></span>
              Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Seeing God's Kingdom Established</h2>
            {homeInfo?.vision ? (
              <p className="text-lg text-muted-foreground leading-relaxed">{homeInfo.vision}</p>
            ) : (
              <p className="text-muted-foreground italic">Vision will appear here when available.</p>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-muted/50 p-8 md:p-12 rounded-3xl border border-border/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={120} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm">
                <span className="h-px w-8 bg-primary"></span>
                Our Mission
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">What Drives Us</h3>
              {homeInfo?.mission ? (
                <p className="text-lg text-muted-foreground leading-relaxed">{homeInfo.mission}</p>
              ) : (
                <p className="text-muted-foreground italic">Mission will appear here when available.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section with refined typography */}
      <Section title="Our Story" className="bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="prose prose-lg md:prose-xl mx-auto text-muted-foreground">
            {aboutInfo?.ourStory ? (
              <p>{aboutInfo.ourStory}</p>
            ) : (
              <p className="italic">Our story will be shared here soon.</p>
            )}
          </div>
          {aboutInfo?.aboutBlocks && (
            <div className="mt-12 text-left">
              <PortableTextRenderer value={aboutInfo.aboutBlocks as unknown[]} />
            </div>
          )}
        </div>
      </Section>

      {/* Beliefs Cards */}
      <Section title="Our Beliefs">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Doxa Community Temple, we are anchored in the Word of God. Our beliefs shape our community, guide our worship, and inspire our service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aboutInfo?.beliefs?.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:border-primary/20 transition-all border-border/60 shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{belief}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pastors Grid */}
      <Section title="Our Pastors" className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutInfo?.pastors?.map((pastor, i) => (
            <PastorCard
              key={i}
              name={pastor.name}
              role={pastor.role!}
              bio={pastor.description!}
              imageSrc={pastor?.image}
            />
          ))}
        </div>
      </Section>

      {/* Join Us CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Become Part of the Family</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Whether you're a lifelong believer or just starting to explore faith, there's a place for you here.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {aboutInfo?.serviceActivities?.slice(0, 3).map((activity, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  {activity}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-xl hover:scale-105 transition-transform">
                <Link href="/membership" className="flex items-center gap-2">
                  Join Our Community <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
