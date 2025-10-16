import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/logo with words.png"
                alt="Stookiez Cookiez"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-dark-brown hover:text-cookie-brown transition-colors">
                Home
              </a>
              <a href="#flavours" className="text-dark-brown hover:text-cookie-brown transition-colors">
                Flavours
              </a>
              <a href="#pricing" className="text-dark-brown hover:text-cookie-brown transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-dark-brown hover:text-cookie-brown transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-cream to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-dark-brown leading-tight">
                Gourmet Brown Butter Cookies
              </h1>
              <p className="text-xl text-warm-brown">
                Indulge in our freshly baked, quarter pound cookies made with premium brown butter and no preservatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-block bg-cookie-brown hover:bg-warm-brown text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
                >
                  Order Now
                </a>
                <a
                  href="#flavours"
                  className="inline-block border-2 border-cookie-brown text-cookie-brown hover:bg-cookie-brown hover:text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
                >
                  View Flavours
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/cookies.jpeg"
                alt="Stookiez Cookiez"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-dark-brown mb-6">About Stookiez Cookiez</h2>
            <p className="text-lg text-warm-brown leading-relaxed">
              Stookiez specializes in gourmet brown butter cookies with indulging flavours.
              Each big, freshly baked, quarter pound cookie is made with a brown butter cookie base
              and no preservatives. Experience the rich, nutty flavor of brown butter in every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section id="flavours" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown text-center mb-16">
            Our Flavours
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Brown Butter Chocolate Chip",
                description: "Classic chocolate chip elevated with rich brown butter"
              },
              {
                name: "Matcha White Chocolate",
                description: "Premium matcha blended with creamy white chocolate"
              },
              {
                name: "Pure Matcha",
                description: "Pure, authentic matcha flavor for green tea lovers"
              },
              {
                name: "Oat n' Raisin",
                description: "Traditional oat and raisin with a brown butter twist"
              },
              {
                name: "Biscoff Crunch",
                description: "Loaded with crunchy Biscoff cookie pieces"
              }
            ].map((flavour, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-dark-brown mb-3">
                  {flavour.name}
                </h3>
                <p className="text-warm-brown">
                  {flavour.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown text-center mb-16">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Single", price: "$4", description: "One delicious cookie" },
              { name: "Half Dozen", price: "$20", description: "6 cookies, 1 flavour" },
              { name: "One Dozen", price: "$36", description: "12 cookies, up to 2 flavours" },
              { name: "Assorted Dozen", price: "$40", description: "12 cookies, up to 4 flavours" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-8 text-center hover:scale-105 transition-transform border-2 border-transparent hover:border-cookie-brown"
              >
                <h3 className="text-2xl font-bold text-dark-brown mb-2">
                  {item.name}
                </h3>
                <p className="text-4xl font-bold text-cookie-brown mb-3">
                  {item.price}
                </p>
                <p className="text-warm-brown">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Shipping & Additional Info */}
          <div className="bg-amber-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-brown mb-4 text-center">
              Delivery & Pickup
            </h3>
            <ul className="space-y-3 text-warm-brown">
              <li className="flex items-start">
                <span className="text-cookie-brown mr-2 text-xl">•</span>
                <span>Free pickups in Bradford, Scarborough/Markham</span>
              </li>
              <li className="flex items-start">
                <span className="text-cookie-brown mr-2 text-xl">•</span>
                <span>Shipping available for $15</span>
              </li>
              <li className="flex items-start">
                <span className="text-cookie-brown mr-2 text-xl">•</span>
                <span>Free shipping on orders over $100</span>
              </li>
              <li className="flex items-start">
                <span className="text-cookie-brown mr-2 text-xl">•</span>
                <span>Smaller sized cookies can be made for events - contact for details</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-cream to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-brown text-center mb-16">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <p className="text-xl text-center text-warm-brown mb-8">
                Contact Sarah to place your order:
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-6 h-6 text-cookie-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:437-808-3378" className="text-xl text-dark-brown hover:text-cookie-brown transition-colors">
                    437-808-3378
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-6 h-6 text-cookie-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:stookiezcookiez@gmail.com" className="text-xl text-dark-brown hover:text-cookie-brown transition-colors">
                    stookiezcookiez@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-6 h-6 text-cookie-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a
                    href="https://instagram.com/stookiezcookiez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-dark-brown hover:text-cookie-brown transition-colors"
                  >
                    @stookiezcookiez
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo no words.png"
                alt="Stookiez Cookiez Logo"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-cream/80">
                &copy; {new Date().getFullYear()} Stookiez Cookiez. All rights reserved.
              </p>
              <p className="text-cream/60 text-sm mt-1">
                Freshly baked with love in Bradford
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
