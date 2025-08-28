import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";
import { motion } from "framer-motion";

export default function BestsellersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const { data: bestsellers, isLoading } = useQuery({
    queryKey: ["/api/products"],
    queryFn: async () => {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json() as Product[];
      return products.slice(0, 4); // Show first 4 products as bestsellers
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (bestsellers && currentIndex < bestsellers.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4">
              Bestsellers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our most loved Islamic art pieces chosen by our community
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!bestsellers || bestsellers.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4">
              Bestsellers
            </h2>
            <p className="text-gray-600">No bestsellers available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className="py-16 lg:py-24 bg-white overflow-hidden"
      initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -80, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <motion.h2 
            className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4"
            initial={{ opacity: 0, scale: 0.2, rotateX: -180, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -100, rotateZ: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              Best
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: 360, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              sellers
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Our most loved Islamic art pieces chosen by our community
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotateX: 90, z: -200 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <motion.div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(bestsellers.length / itemsPerView) * 100}%`
            }}
            data-testid="bestsellers-carousel"
            initial={{ x: 200, opacity: 0, rotateY: 45 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {bestsellers.map((product, index) => (
              <motion.div 
                key={product.id} 
                className={`flex-shrink-0 px-3`}
                style={{ width: `${100 / bestsellers.length}%` }}
                data-testid={`bestseller-item-${index}`}
                initial={{ 
                  opacity: 0, 
                  y: 120, 
                  rotateX: 90,
                  scale: 0.3,
                  z: -100
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  scale: 1,
                  z: 0
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.2 + (index * 0.2),
                  ease: [0.68, -0.55, 0.265, 1.55]
                }}
                whileHover={{ 
                  y: -15,
                  rotateY: 8,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
              >
                <div className="relative">
                  <ProductCard product={product} />
                  <motion.div 
                    className="absolute top-4 right-4 bg-gold-accent text-emerald-primary px-3 py-1 rounded-full text-sm font-bold"
                    initial={{ opacity: 0, scale: 0, rotate: -360, y: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.8 + (index * 0.15),
                      ease: [0.68, -0.55, 0.265, 1.55]
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      y: -5,
                      transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                    }}
                  >
                    #{index + 1} Best Seller
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-primary p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Button
              onClick={nextSlide}
              disabled={!bestsellers || currentIndex >= bestsellers.length - itemsPerView}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-primary p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
