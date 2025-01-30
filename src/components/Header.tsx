"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "@/components/ui/sheet"
import { Links } from "./sharedLinks"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Doxa
          </Link>
          <div className="hidden md:flex space-x-4">
            {Links.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </Link>
            ))}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen} >
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only"/>
              <nav className="flex flex-col space-y-4">
                {Links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

