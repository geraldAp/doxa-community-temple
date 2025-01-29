'use client'
import { HeroSection } from "../reusables/HeroSection";
import { PastorCard } from "./PastorCard";
import { Section } from "./Section";

export default function About() {
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
          <p className="text-lg text-gray-700 mb-6">
            Founded in 1985, Grace Community Church has been a beacon of hope
            and love in our community for over three decades. What started as a
            small gathering in a living room has grown into a vibrant
            congregation of over 1,000 members.
          </p>
          <p className="text-lg text-gray-700">
            Our journey has been one of faith, perseverance, and unwavering
            commitment to spreading God's love. Through the years, we've
            weathered storms, celebrated victories, and continuously strived to
            make a positive impact in our community and beyond.
          </p>
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
            <li>Worshiping God in spirit and truth</li>
            <li>Sharing the Gospel with our community and the world</li>
            <li>Nurturing spiritual growth through discipleship</li>
            <li>Serving others with compassion and love</li>
            <li>Promoting unity and fellowship among believers</li>
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
          <PastorCard
            name="Rev. John Doe"
            role="Senior Pastor"
            bio="Rev. John Doe has been leading our congregation for over 15 years. His passion for teaching God's Word and his heart for people have been instrumental in our church's growth."
            imageSrc="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          />
          <PastorCard
            name="Rev. Jane Smith"
            role="Associate Pastor"
            bio="Rev. Jane Smith oversees our youth and family ministries. Her innovative programs and relatable teaching style have helped many young people grow in their faith."
            imageSrc="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          />
          <PastorCard
            name="Pastor Mike Johnson"
            role="Worship Pastor"
            bio="Pastor Mike Johnson leads our worship ministry. His musical talent and deep spirituality create powerful worship experiences that bring our congregation closer to God."
            imageSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
        </div>
      </Section>

      <Section title="Community Involvement" className="bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            At Grace Community Church, we believe in being the hands and feet of
            Jesus in our community. Our commitment to service is reflected in
            our various outreach programs:
          </p>
          <ul className="text-left list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Weekly food bank for families in need</li>
            <li>After-school tutoring program for local students</li>
            <li>Annual mission trips to support global communities</li>
            <li>Partnerships with local shelters and rehabilitation centers</li>
            <li>Environmental stewardship initiatives</li>
          </ul>
          <p className="text-lg text-gray-700">
            We invite you to join us in making a difference in our community and
            beyond. Together, we can spread God's love through action and
            service.
          </p>
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
            <li>Sunday worship services at 9:00 AM and 11:00 AM</li>
            <li>Small group Bible studies throughout the week</li>
            <li>Youth and children's programs</li>
            <li>Volunteer opportunities in our various ministries</li>
            <li>Community events and social gatherings</li>
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
