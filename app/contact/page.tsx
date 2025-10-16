import Image from "next/image";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '100px' }}>
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
            {/* Email */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
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
                Preferred method for orders
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
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
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <h3 className="text-2xl font-bold text-dark-teal mb-3">
                Text or Call
              </h3>
              <a
                href="tel:437-808-3378"
                className="text-xl text-teal hover:text-dark-teal transition-colors font-semibold block"
              >
                437-808-3378
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Person Info */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-2xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-dark-teal mb-4">
              Meet Sarah
            </h2>
            <p className="text-xl text-teal mb-6 leading-relaxed max-w-xl mx-auto px-6">
              Hi! I'm Sarah, the baker behind Stookiez Cookiez. Each cookie is made with love and
              the finest ingredients. I'm passionate about creating the perfect brown butter cookie
              experience for you!
            </p>
            <p className="text-lg text-teal mb-8 max-w-xl mx-auto px-6">
              Feel free to reach out with any questions, custom orders, or just to chat about cookies!
            </p>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
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
              <div key={index} className="text-center px-6">
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
        <div className="max-w-2xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
            Let's Get Started!
          </h2>
          <p className="text-xl text-teal mb-8 max-w-xl mx-auto px-6">
            Ready to enjoy some delicious cookies?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '1rem' }}>
            <Button href="/pricing" variant="primary" size="sm">
              View Pricing
            </Button>
            <Button href="/flavours" variant="secondary" size="sm">
              See Flavours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
