import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Links, socialLinks } from "./sharedLinks";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground tracking-tighter">Doxa</h3>
            <div className="space-y-2 text-sm">
              <p>Oyibi, Adamorobe Obama</p>
              <p>Phone: (+233) 000 000 000</p>
              <p>Email: contact@doxa.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries (Placeholder for now) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Ministries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Kids</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Youth</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Worship</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Outreach</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-xs max-w-xs">
              Join our newsletter to stay updated with upcoming events and daily devotions.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Doxa Community Temple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
