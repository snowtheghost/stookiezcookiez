import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Image
              src="/logo no words.png"
              alt="Stookiez Cookiez Logo"
              width={80}
              height={80}
              className="mx-auto md:mx-0 mb-4 opacity-90"
            />
            <p className="text-sky-blue">
              Gourmet brown butter cookies made with love and no preservatives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-cookie-tan">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-blue hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/flavours" className="text-sky-blue hover:text-white transition-colors">
                  Flavours
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sky-blue hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-blue hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-cookie-tan">Contact</h3>
            <ul className="space-y-2 text-sky-blue">
              <li>
                <a href="tel:437-808-3378" className="hover:text-white transition-colors">
                  437-808-3378
                </a>
              </li>
              <li>
                <a href="mailto:stookiezcookiez@gmail.com" className="hover:text-white transition-colors">
                  stookiezcookiez@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/stookiezcookiez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @stookiezcookiez
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal pt-8 text-center">
          <p className="text-sky-blue">
            &copy; {new Date().getFullYear()} Stookiez Cookiez. All rights reserved.
          </p>
          <p className="text-sky-blue/60 text-sm mt-2">
            Freshly baked with love in Bradford
          </p>
        </div>
      </div>
    </footer>
  );
}
