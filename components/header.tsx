"use client"

import Link from "next/link"
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-opinion-purple font-black text-2xl tracking-tight hover:opacity-80 transition-opacity"
        >
          OPINION
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 font-bold text-sm tracking-wide hover:text-opinion-purple transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

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
