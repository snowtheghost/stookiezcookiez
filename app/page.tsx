import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero/Landing Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-sky-blue px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center flex-1">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo no words.png"
              alt="Stookiez Cookie Character"
              width={250}
              height={250}
              className="animate-bounce"
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-dark-teal mb-12">
            Stookiez Cookiez
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center mb-12 mx-8" style={{ gap: '1rem' }}>
            <Button href="/flavours" variant="primary" size="lg">
              Flavours
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Pricing
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
