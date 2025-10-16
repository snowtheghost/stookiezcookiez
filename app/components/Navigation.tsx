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
    <nav className="fixed top-0 left-0 right-0 w-full z-50" style={{ backgroundColor: '#ebd7bc', paddingTop: '1rem', paddingBottom: '1rem', margin: 0 }}>
      <div className="w-full flex justify-center">
        <div className="flex items-center" style={{ gap: '1rem' }}>
          {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-12 py-3 rounded-full text-lg font-extrabold transition-all border-4 hover:scale-105 active:scale-95 min-w-[160px] text-center no-underline tracking-wide ${
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
    </nav>
  );
}
