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
    <div className="min-h-screen" style={{ paddingTop: '100px' }}>
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
                className="bg-gradient-to-br from-light-blue to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
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
        <div className="max-w-2xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-dark-teal mb-6 text-center">
              What Makes Our Cookies Special?
            </h2>
            <div className="text-teal text-lg text-center space-y-4 max-w-xl mx-auto px-6">
              <div>
                <strong>Brown Butter Base:</strong> Every cookie starts with our signature brown butter for a rich, nutty flavor
              </div>
              <div>
                <strong>Quarter Pound Size:</strong> Big, satisfying cookies that are perfect for sharing (or not!)
              </div>
              <div>
                <strong>No Preservatives:</strong> Freshly baked with natural ingredients only
              </div>
              <div>
                <strong>Premium Ingredients:</strong> We use only the highest quality chocolate, matcha, and other ingredients
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
