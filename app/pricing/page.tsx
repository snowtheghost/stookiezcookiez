import Button from "../components/Button";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Single",
      price: "$4",
      description: "One delicious cookie",
      features: ["Choose any flavour", "Quarter pound cookie", "Freshly baked"],
      popular: false
    },
    {
      name: "Half Dozen",
      price: "$20",
      description: "6 cookies, 1 flavour",
      features: ["One flavour", "6 quarter pound cookies", "Great for sharing"],
      popular: false
    },
    {
      name: "One Dozen",
      price: "$36",
      description: "12 cookies, up to 2 flavours",
      features: ["Mix up to 2 flavours", "12 quarter pound cookies", "Perfect for parties"],
      popular: true
    },
    {
      name: "Assorted Dozen",
      price: "$40",
      description: "12 cookies, up to 4 flavours",
      features: ["Mix up to 4 flavours", "12 quarter pound cookies", "Maximum variety"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue via-light-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-dark-teal mb-6">
            Pricing
          </h1>
          <p className="text-xl md:text-2xl text-teal max-w-3xl mx-auto">
            Fresh, gourmet cookies delivered to your door or available for pickup
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 ${
                  tier.popular
                    ? "bg-gradient-to-br from-teal to-dark-teal text-white shadow-2xl scale-105 border-4 border-cookie-tan"
                    : "bg-gradient-to-br from-light-blue to-white border-2 border-sky-blue shadow-lg hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="bg-cookie-tan text-dark-teal text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${tier.popular ? "text-white" : "text-dark-teal"}`}>
                  {tier.name}
                </h3>
                <p className={`text-5xl font-bold mb-3 ${tier.popular ? "text-cookie-tan" : "text-teal"}`}>
                  {tier.price}
                </p>
                <p className={`mb-6 ${tier.popular ? "text-sky-blue" : "text-teal"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center justify-center ${tier.popular ? "text-white" : "text-teal"}`}>
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Delivery Info */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal text-center mb-12">
            Delivery & Pickup Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-5xl mb-4 text-center">📍</div>
              <h3 className="text-2xl font-bold text-dark-teal mb-4 text-center">
                Free Pickup
              </h3>
              <ul className="space-y-3 text-teal">
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span>Bradford</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span>Scarborough/Markham</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span>And surrounding areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-5xl mb-4 text-center">📦</div>
              <h3 className="text-2xl font-bold text-dark-teal mb-4 text-center">
                Shipping
              </h3>
              <ul className="space-y-3 text-teal">
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span><strong>$15</strong> flat rate shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span><strong>FREE shipping</strong> on orders over $100</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2 text-xl">•</span>
                  <span>Careful packaging to ensure freshness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-light-blue to-sky-blue rounded-3xl p-10 shadow-xl text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-dark-teal mb-4">
              Custom Orders for Events
            </h3>
            <p className="text-xl text-teal mb-6">
              Smaller sized cookies can be made for events such as weddings, parties, and corporate gatherings.
            </p>
            <p className="text-lg text-teal mb-8">
              Contact us for details and custom pricing!
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue to-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
            Ready to Place an Order?
          </h2>
          <p className="text-xl text-teal mb-8">
            Contact us today to order your delicious cookies!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/flavours" variant="secondary" size="lg">
              View Flavours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
