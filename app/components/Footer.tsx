import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Image
            src="/logo no words.png"
            alt="Stookiez Cookiez Logo"
            width={80}
            height={80}
            className="mx-auto opacity-90"
          />
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
