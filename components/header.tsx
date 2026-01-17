"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "BUSINESS", href: "#business" },
  { name: "CAREERS", href: "#careers" },
  { name: "CONTACT", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-6 py-4 flex items-center">
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo-removebg.png"
              alt="OPINION Logo"
              width={240}
              height={64}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 font-bold text-lg tracking-wide hover:text-opinion-purple transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (Language & Mobile Menu) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="text-opinion-purple font-bold">KOR</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">ENG</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-opinion-purple" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 font-bold text-lg hover:text-opinion-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
