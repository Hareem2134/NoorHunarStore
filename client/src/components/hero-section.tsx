import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Islamic patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-primary via-emerald-dark to-black"></div>
      
      {/* Subtle Islamic geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 2L26 14H38.642L28.821 22L32.179 34H20L11.179 34L14.537 22L1.358 14H14L20 2Z' fill='%23FFD700' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            Discover Islamic <span className="text-gold-accent">Elegance</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Handcrafted Frames, Books, Dua Cards & More
          </p>
          <Button
            onClick={scrollToProducts}
            className="bg-gold-accent text-emerald-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:animate-glow transition-all duration-300 transform hover:scale-105"
            data-testid="button-shop-now"
          >
            Shop Now
          </Button>
        </div>
      </div>

      {/* Decorative Islamic frame elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-accent opacity-20 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-gold-accent opacity-20 rotate-12"></div>
      <div className="absolute top-1/2 left-4 w-12 h-12 border border-gold-accent opacity-15 rounded-full"></div>
    </section>
  );
}
