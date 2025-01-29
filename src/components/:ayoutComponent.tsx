import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Layout({
  children,
  title = "Our Church",
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Doxa
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-gray-900"
              >
                Gallery
              </Link>
              <Link href="/give" className="text-gray-700 hover:text-gray-900">
                Give/Volunteer
              </Link>
              <Link
                href="/membership"
                className="text-gray-700 hover:text-gray-900"
              >
                Membership
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900">
                FAQ
              </Link>
            </div>
            <button className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Our Church</h3>
              <p className="text-gray-400">
                123 Church Street, City, State 12345
              </p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@ourchurch.com</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-400 hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/give" className="text-gray-400 hover:text-white">
                    Give/Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/membership"
                    className="text-gray-400 hover:text-white"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/ourchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com/ourchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://twitter.com/ourchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Our Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
