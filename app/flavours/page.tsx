import Button from "../components/Button";

export default function Flavours() {
  const flavours = [
    {
      name: "Brown Butter Chocolate Chip",
      description: "Classic chocolate chip elevated with rich brown butter. Our signature cookie featuring premium chocolate chips that melt perfectly in every bite.",
      icon: "🍫"
    },
    {
      name: "Matcha White Chocolate",
      description: "Premium Japanese matcha blended with creamy white chocolate chips. A perfect balance of earthy green tea and sweet white chocolate.",
      icon: "🍵"
    },
    {
      name: "Pure Matcha",
      description: "Pure, authentic matcha flavor for green tea lovers. No chocolate, just the rich, earthy taste of premium matcha throughout.",
      icon: "🌿"
    },
    {
      name: "Oat n' Raisin",
      description: "Traditional oat and raisin with a brown butter twist. Hearty oats and sweet raisins create a wholesome, comforting cookie.",
      icon: "🌾"
    },
    {
      name: "Biscoff Crunch",
      description: "Loaded with crunchy Biscoff cookie pieces. Every bite delivers that iconic caramelized speculoos flavor you love.",
      icon: "🍪"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue via-light-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-dark-teal mb-6">
            Our Flavours
          </h1>
          <p className="text-xl md:text-2xl text-teal max-w-3xl mx-auto">
            Each cookie is a quarter pound of pure indulgence, made with our signature brown butter base
          </p>
        </div>
      </section>

      {/* Flavours Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavours.map((flavour, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-sky-blue"
              >
                <div className="text-7xl mb-6 text-center">{flavour.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark-teal mb-4 text-center">
                  {flavour.name}
                </h3>
                <p className="text-teal text-center leading-relaxed">
                  {flavour.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-light-blue to-sky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-dark-teal mb-6 text-center">
              What Makes Our Cookies Special?
            </h2>
            <ul className="space-y-4 text-teal text-lg">
              <li className="flex items-start">
                <span className="text-teal mr-3 text-2xl flex-shrink-0">•</span>
                <span><strong>Brown Butter Base:</strong> Every cookie starts with our signature brown butter for a rich, nutty flavor</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 text-2xl flex-shrink-0">•</span>
                <span><strong>Quarter Pound Size:</strong> Big, satisfying cookies that are perfect for sharing (or not!)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 text-2xl flex-shrink-0">•</span>
                <span><strong>No Preservatives:</strong> Freshly baked with natural ingredients only</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-3 text-2xl flex-shrink-0">•</span>
                <span><strong>Premium Ingredients:</strong> We use only the highest quality chocolate, matcha, and other ingredients</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-teal mb-8">
            Mix and match your favorite flavours!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="primary" size="lg">
              View Pricing
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact to Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
