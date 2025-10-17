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
    <nav className="fixed top-0 left-0 right-0 w-full z-[100]" style={{ backgroundColor: '#ebd7bc', margin: 0 }}>
      {/* Mobile Navigation Bar - Menu Icon */}
      <div className="min-[900px]:hidden w-full flex items-center justify-center relative" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <button
          className="px-12 py-4 rounded-full bg-[#f5f5f0] border-4 border-dark-teal shadow-[0_4px_0_0_#385F6D] active:shadow-[0_1px_0_0_#385F6D] active:translate-y-1 transition-all font-extrabold text-dark-teal text-xl tracking-wide flex items-center gap-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          <span>MENU</span>
        </button>
      </div>

      {/* Desktop Navigation - Full Buttons */}
      <div className="hidden min-[900px]:flex w-full justify-center relative" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="flex items-center" style={{ gap: '1rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-12 py-3 rounded-full text-lg font-extrabold transition-all border-4 hover:scale-105 active:scale-95 min-w-[160px] text-center no-underline tracking-wide ${
                pathname === link.href
                  ? "bg-cookie-tan border-amber-600 text-dark-teal shadow-[0_4px_0_0_#d97706] active:shadow-[0_1px_0_0_#d97706] active:translate-y-1"
                  : "bg-[#f5f5f0] border-dark-teal text-dark-teal hover:bg-[#eeeee8] shadow-[0_4px_0_0_#385F6D] active:shadow-[0_1px_0_0_#385F6D] active:translate-y-1"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu Items */}
      <div
        className={`min-[900px]:hidden fixed z-[99] ${
          mobileMenuOpen ? '' : 'hidden'
        }`}
        style={{ top: '5rem', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: 'auto' }}
      >
        <div className="h-full flex flex-col items-center justify-center py-8" style={{ gap: '1.25rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-full text-2xl font-extrabold transition-all border-4 active:scale-95 text-center no-underline tracking-wide whitespace-nowrap ${
                pathname === link.href
                  ? "bg-cookie-tan border-amber-600 text-dark-teal shadow-[0_8px_0_0_#d97706] active:shadow-[0_2px_0_0_#d97706] active:translate-y-2"
                  : "bg-[#f5f5f0] border-dark-teal text-dark-teal shadow-[0_8px_0_0_#385F6D] active:shadow-[0_2px_0_0_#385F6D] active:translate-y-2"
              }`}
              style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '2rem', paddingBottom: '2rem' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
