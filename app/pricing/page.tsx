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
    <div className="min-h-screen" style={{ paddingTop: '100px' }}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 ${
                  tier.popular
                    ? "bg-gradient-to-br from-teal to-dark-teal text-white shadow-2xl"
                    : "bg-gradient-to-br from-light-blue to-white shadow-lg hover:shadow-xl"
                }`}
              >
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${tier.popular ? "text-white" : "text-dark-teal"}`}>
                  {tier.name}
                </h3>
                <p className={`text-5xl font-bold mb-3 ${tier.popular ? "text-cookie-tan" : "text-teal"}`}>
                  {tier.price}
                </p>
                <p className={`mb-6 ${tier.popular ? "text-sky-blue" : "text-teal"}`}>
                  {tier.description}
                </p>
                <div className="mb-8 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center justify-center ${tier.popular ? "text-white" : "text-teal"}`}>
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Delivery Info */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal text-center mb-12">
            Delivery & Pickup Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-teal mb-4 text-center">
                Free Pickup
              </h3>
              <div className="text-teal text-center space-y-3 px-6">
                <div>Bradford</div>
                <div>Scarborough/Markham</div>
                <div>And surrounding areas</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-teal mb-4 text-center">
                Shipping
              </h3>
              <div className="text-teal text-center space-y-3 px-6">
                <div><strong>$15</strong> flat rate shipping</div>
                <div><strong>FREE shipping</strong> on orders over $100</div>
                <div>Careful packaging to ensure freshness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-gradient-to-br from-light-blue to-sky-blue rounded-3xl p-10 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-dark-teal mb-4">
              Custom Orders for Events
            </h3>
            <p className="text-xl text-teal mb-6 max-w-xl mx-auto px-6">
              Smaller sized cookies can be made for events such as weddings, parties, and corporate gatherings.
            </p>
            <p className="text-lg text-teal mb-8 max-w-xl mx-auto px-6">
              Contact us for details and custom pricing!
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
