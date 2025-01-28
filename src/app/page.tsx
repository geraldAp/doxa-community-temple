import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/church-hero.jpg"
          alt="Church"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Church</h1>
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
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Today's Message</h3>
              <p className="text-gray-700 mb-4">
                "For God so loved the world that he gave his one and only Son,
                that whoever believes in him shall not perish but have eternal
                life." - John 3:16
              </p>
              <p className="text-gray-600">
                Reflect on God's immense love for us and how we can share that
                love with others in our daily lives.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/devotional-image.jpg"
                alt="Daily Devotional"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-lg"
              />
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
              Our mission is to spread the love of Christ, serve our community,
              and help each individual grow in their faith journey.
            </p>
            <p className="text-xl text-center text-gray-700">
              Our vision is to create a welcoming environment where all can
              experience God's grace, find their purpose, and make a positive
              impact in the world.
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Youth Group Meeting
              </h3>
              <p className="text-gray-600 mb-4">
                Date: Every Wednesday, 7:00 PM
              </p>
              <p className="text-gray-700">
                Our youth group meets weekly for fun activities, Bible study,
                and fellowship. All teenagers are welcome!
              </p>
              <Link
                href="/events"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
              <p className="text-gray-600 mb-4">
                Date: First Saturday of every month, 9:00 AM
              </p>
              <p className="text-gray-700">
                Join us in serving our local community through various outreach
                programs and volunteer opportunities.
              </p>
              <Link
                href="/events"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
