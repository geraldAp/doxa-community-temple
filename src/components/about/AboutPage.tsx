"use client";
import { AboutDocument } from "@/types/About";
import { HeroSection } from "../reusables/HeroSection";
import { PastorCard } from "./PastorCard";
import { Section } from "./Section";

export default function About({ aboutInfo }: { aboutInfo: AboutDocument }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="About Our Church"
        subtitle="A community of faith, love, and service"
        ctaText="Join Us This Sunday"
        ctaLink="/membership"
        backgroundImage="https://images.unsplash.com/photo-1438032506450-9a0e60d8a638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />

      <Section title="Our Story">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">{aboutInfo.ourStory}</p>
        </div>
      </Section>

      <Section title="Our Beliefs" className="bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            At Grace Community Church, we believe in the inerrancy of Scripture,
            the Trinity, and salvation through faith in Jesus Christ. We are
            committed to:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-gray-700 mb-6">
            {aboutInfo?.beliefs?.map((belief, i) => <li key={i}>{belief}</li>)}
          </ul>
          <p className="text-lg text-gray-700">
            We welcome all who seek to know God better and strive to create an
            inclusive environment where everyone can experience God's love and
            grace.
          </p>
        </div>
      </Section>

      <Section title="Our Pastors">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <Section title="Join Us">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Whether you're a lifelong believer or just starting to explore
            faith, we welcome you to join our community at Grace Community
            Church. We offer various ways to get involved:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-gray-700 mb-6">
            {aboutInfo?.serviceActivities?.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to meet you and help you find your place in our church
            family.
          </p>
          <a
            href="/membership"
            className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/80 transition duration-300"
          >
            Learn More About Membership
          </a>
        </div>
      </Section>
    </div>
  );
}
