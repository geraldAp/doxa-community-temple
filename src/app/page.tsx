import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getChurchHomePageInfo } from "@/lib/api";
import EventsCard from "@/components/events/EventsCard";
import { HeroSection } from "@/components/reusables/HeroSection";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const data = await getChurchHomePageInfo();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Doxa"
        subtitle="Join us in worship and community"
        ctaText="Join Us This Sunday"
        ctaLink="/membership"
        backgroundImage={data?.heroImage ? urlFor(data.heroImage) : ""}
      />

      {/* Daily Devotional Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Daily Devotional
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your day with inspiration from the Word.
            </p>
          </div>
          
          <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl border border-border/50 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="text-center space-y-6">
                {data?.dailyVerse ? (
                  <div className="relative">
                    <span className="absolute top-0 left-0 text-6xl text-primary/10 font-serif">“</span>
                    <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed px-8">
                      {data.dailyVerse}
                    </blockquote>
                    <span className="absolute bottom-0 right-0 text-6xl text-primary/10 font-serif">”</span>
                  </div>
                ) : (
                  <p className="text-muted-foreground italic">No verse available today.</p>
                )}
                
                <div className="pt-6 border-t border-border/50">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Today's Message</h3>
                  {data?.dailyMessage ? (
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      {data.dailyMessage}
                    </p>
                  ) : (
                    <p className="text-muted-foreground">No message available today.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border/20">
              <Image 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Community worship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Mission & Vision
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data?.mission || "To love God, love people, and make disciples of all nations."}
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data?.vision || "A community transformed by grace, living out the gospel in every aspect of life."}
                  </p>
                </div>
              </div>
              
              <Button asChild variant="outline" size="lg" className="rounded-full mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground text-lg">
                Join us for fellowship, worship, and service.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex group">
              <Link href="/events" className="flex items-center">
                View All Events 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Service Card */}
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all group">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Sunday Worship Service
              </h3>
              <p className="text-muted-foreground mb-4 font-medium">Every Sunday, 10:00 AM</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us for our weekly worship service filled with inspiring
                messages, uplifting music, and a warm community.
              </p>
              <Link
                href="/events"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
            
            {/* Dynamic Events */}
            {data?.churchEvents?.map((event) => (
              <EventsCard event={event} key={event._id} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
