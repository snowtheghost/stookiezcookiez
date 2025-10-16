import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-sky-blue via-light-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-dark-teal leading-tight">
                Gourmet Brown Butter Cookies
              </h1>
              <p className="text-xl md:text-2xl text-teal">
                Indulge in our freshly baked, quarter pound cookies made with premium brown butter and no preservatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/pricing" variant="primary" size="lg">
                  Order Now
                </Button>
                <Button href="/flavours" variant="outline" size="lg">
                  View Flavours
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <Image
                  src="/logo no words.png"
                  alt="Stookiez Cookie Character"
                  width={120}
                  height={120}
                  className="animate-bounce"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
                About Stookiez Cookiez
              </h2>
              <p className="text-lg md:text-xl text-teal leading-relaxed">
                Stookiez specializes in gourmet brown butter cookies with indulging flavours.
                Each big, freshly baked, quarter pound cookie is made with a brown butter cookie base
                and no preservatives. Experience the rich, nutty flavor of brown butter in every bite.
              </p>
              <div className="pt-8">
                <Button href="/flavours" variant="secondary" size="lg">
                  Explore Our Flavours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal text-center mb-16">
            Why Choose Stookiez?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Ingredients",
                description: "Made with high-quality brown butter and the finest ingredients",
                icon: "✨"
              },
              {
                title: "Freshly Baked",
                description: "Each cookie is baked fresh to order for maximum flavor",
                icon: "🍪"
              },
              {
                title: "No Preservatives",
                description: "100% natural with no artificial preservatives or additives",
                icon: "🌿"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-dark-teal mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-teal text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
            Ready to Treat Yourself?
          </h2>
          <p className="text-xl text-teal mb-8">
            Order your freshly baked cookies today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="primary" size="lg">
              View Pricing
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
