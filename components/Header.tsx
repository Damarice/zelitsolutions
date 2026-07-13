'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/our-clients', label: 'Our Clients' },
  { href: '/portfolio',   label: 'Portfolio' },
  { href: '/career',      label: 'Career' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Zelitsolutions"
            width={120}
            height={120}
            priority
            className="rounded object-contain"
            style={{ width: '100%', height: '40px', maxWidth: '100px' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#00CED1] transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#00CED1] hover:bg-cyan-500 text-white text-sm px-6 py-2 rounded font-semibold transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-[#00CED1] text-xl transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#00CED1] py-2 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#00CED1] hover:bg-cyan-500 text-white text-sm px-5 py-2 rounded font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
