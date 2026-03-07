"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Links } from "./sharedLinks";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-white/20" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl font-bold tracking-tighter text-primary">Doxa</span>
          <span className="text-sm font-semibold text-secondary hidden sm:inline-block tracking-widest uppercase">Community Temple</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {Links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button asChild className="rounded-full px-6">
            <Link href="/give">Give Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[300px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full bg-background p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold">Doxa</span>
                {/* Close button is handled by Sheet primitive usually, but custom one can be added if needed */}
              </div>
              <nav className="flex flex-col gap-4">
                {Links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-2 border-b border-border/50 transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full rounded-full" size="lg">
                  <Link href="/give" onClick={() => setIsOpen(false)}>Give Now</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

