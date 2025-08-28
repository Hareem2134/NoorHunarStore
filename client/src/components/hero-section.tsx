import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import StaggeredContainer, { StaggeredItem } from "@/components/staggered-container";

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
        <StaggeredContainer>
          <StaggeredItem>
            <motion.h1 
              className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, rotateX: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Discover Islamic
              </motion.span>{" "}
              <motion.span 
                className="text-gold-accent"
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                Elegance
              </motion.span>
            </motion.h1>
          </StaggeredItem>
          <StaggeredItem>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              Handcrafted Frames, Books, Dua Cards & More
            </motion.p>
          </StaggeredItem>
          <StaggeredItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <Button
                onClick={scrollToProducts}
                className="bg-gold-accent text-emerald-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:animate-glow transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse-slow"
                data-testid="button-shop-now"
              >
                Shop Now
              </Button>
            </motion.div>
          </StaggeredItem>
        </StaggeredContainer>
      </div>

      {/* Decorative Islamic frame elements with animations */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-accent opacity-20"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-gold-accent opacity-20"
        animate={{ rotate: [12, -12, 12], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-4 w-12 h-12 border border-gold-accent opacity-15 rounded-full"
        animate={{ y: [-10, 10, -10], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
