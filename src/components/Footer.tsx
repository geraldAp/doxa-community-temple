import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Links, socialLinks } from "./sharedLinks";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Our Church</h3>
            <p className="text-gray-400">Oyibi, Adamorobe Obama </p>
            <p className="text-gray-400">Phone: (+233) 000 000 000</p>
            <p className="text-gray-400">Email: </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Our Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
