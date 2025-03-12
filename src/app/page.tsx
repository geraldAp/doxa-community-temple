import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getChurchHomePageInfo } from "@/lib/api";
import EventsCard from "@/components/events/EventsCard";
export default async function Home() {
  const data = await getChurchHomePageInfo();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src={urlFor(data?.heroImage!)}
          alt="Church"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Doxa</h1>
          <p className="text-xl mb-8">Join us in worship and community</p>
          <Link
            href="/membership"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            Join Us This Sunday
          </Link>
        </div>
      </section>

      {/* Daily Devotional Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Daily Devotional
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className=" mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Today's Message</h3>
              <p className="text-gray-700 mb-4">{data?.dailyMessage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Church Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Mission & Vision
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-center text-gray-700 mb-6">
              <span className="font-semibold">Our mission</span> :{" "}
              {data?.mission}
            </p>
            <p className="text-xl text-center text-gray-700">
            <span className="font-semibold">Our vision</span> :{" "}
             {data?.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Sunday Worship Service
              </h3>
              <p className="text-gray-600 mb-4">Date: Every Sunday, 10:00 AM</p>
              <p className="text-gray-700">
                Join us for our weekly worship service filled with inspiring
                messages, uplifting music, and a warm community.
              </p>
              <Link
                href="/events"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            {data?.churchEvents?.map((event) => (
              <EventsCard event={event} key={event._id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
