import Image from "next/image";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue via-light-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo no words.png"
              alt="Stookiez Cookie Character"
              width={150}
              height={150}
              className="animate-bounce"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-dark-teal mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-teal max-w-3xl mx-auto">
            Ready to order? Have questions? Sarah is here to help!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-sky-blue text-center">
              <div className="bg-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-teal mb-3">
                Text or Call
              </h3>
              <a
                href="tel:437-808-3378"
                className="text-xl text-teal hover:text-dark-teal transition-colors font-semibold block"
              >
                437-808-3378
              </a>
              <p className="text-teal mt-4 text-sm">
                Preferred method for orders
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-sky-blue text-center">
              <div className="bg-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-teal mb-3">
                Email
              </h3>
              <a
                href="mailto:stookiezcookiez@gmail.com"
                className="text-lg text-teal hover:text-dark-teal transition-colors font-semibold block break-all"
              >
                stookiezcookiez@gmail.com
              </a>
              <p className="text-teal mt-4 text-sm">
                For inquiries and questions
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-sky-blue text-center">
              <div className="bg-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-teal mb-3">
                Instagram
              </h3>
              <a
                href="https://instagram.com/stookiezcookiez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-teal hover:text-dark-teal transition-colors font-semibold block"
              >
                @stookiezcookiez
              </a>
              <p className="text-teal mt-4 text-sm">
                Follow for updates and photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Person Info */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
            <div className="text-6xl mb-6">👋</div>
            <h2 className="text-4xl font-bold text-dark-teal mb-4">
              Meet Sarah
            </h2>
            <p className="text-xl text-teal mb-6 leading-relaxed">
              Hi! I'm Sarah, the baker behind Stookiez Cookiez. Each cookie is made with love and
              the finest ingredients. I'm passionate about creating the perfect brown butter cookie
              experience for you!
            </p>
            <p className="text-lg text-teal mb-8">
              Feel free to reach out with any questions, custom orders, or just to chat about cookies!
            </p>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal text-center mb-16">
            How to Order
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Get in Touch",
                description: "Text, call, or email Sarah with your order",
                icon: "📱"
              },
              {
                step: "2",
                title: "Choose Your Flavours",
                description: "Select from our 5 delicious flavours",
                icon: "🍪"
              },
              {
                step: "3",
                title: "Pick Up or Delivery",
                description: "Choose free pickup or delivery option",
                icon: "📦"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-teal to-dark-teal text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-dark-teal mb-3">
                  {item.title}
                </h3>
                <p className="text-teal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue to-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
            Let's Get Started!
          </h2>
          <p className="text-xl text-teal mb-8">
            Ready to enjoy some delicious cookies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="primary" size="lg">
              View Pricing
            </Button>
            <Button href="/flavours" variant="secondary" size="lg">
              See Flavours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
