"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/flavours", label: "Flavours" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50" style={{ backgroundColor: '#ebd7bc', margin: 0 }}>
      <div className="w-full px-4 py-4 md:px-6 md:py-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 right-4 z-[60] p-2 rounded-lg bg-[#f5f5f0] border-4 border-dark-teal shadow-[0_4px_0_0_#385F6D] active:shadow-[0_1px_0_0_#385F6D] active:translate-y-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-1 bg-dark-teal rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 bg-dark-teal rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 bg-dark-teal rounded transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-8 lg:px-12 py-3 rounded-full text-base lg:text-lg font-extrabold transition-all border-4 hover:scale-105 active:scale-95 min-w-[140px] lg:min-w-[160px] text-center no-underline tracking-wide ${
                  pathname === link.href && link.href !== "/"
                    ? "bg-cookie-tan border-amber-600 text-dark-teal shadow-[0_4px_0_0_#d97706] active:shadow-[0_1px_0_0_#d97706] active:translate-y-1"
                    : "bg-[#f5f5f0] border-dark-teal text-dark-teal hover:bg-[#eeeee8] shadow-[0_4px_0_0_#385F6D] active:shadow-[0_1px_0_0_#385F6D] active:translate-y-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#ebd7bc] transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{ top: '0', paddingTop: '5rem' }}
        >
          <div className="flex flex-col items-center gap-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full max-w-xs px-8 py-4 rounded-full text-lg font-extrabold transition-all border-4 active:scale-95 text-center no-underline tracking-wide ${
                  pathname === link.href && link.href !== "/"
                    ? "bg-cookie-tan border-amber-600 text-dark-teal shadow-[0_4px_0_0_#d97706] active:shadow-[0_1px_0_0_#d97706] active:translate-y-1"
                    : "bg-[#f5f5f0] border-dark-teal text-dark-teal shadow-[0_4px_0_0_#385F6D] active:shadow-[0_1px_0_0_#385F6D] active:translate-y-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
