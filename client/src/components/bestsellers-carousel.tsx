import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";

export default function BestsellersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const { data: bestsellers, isLoading } = useQuery({
    queryKey: ["/api/products/bestsellers"],
    queryFn: async () => {
      const response = await fetch("/api/products/bestsellers");
      if (!response.ok) {
        throw new Error("Failed to fetch bestsellers");
      }
      return response.json() as Promise<Product[]>;
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
            <div className="animate-pulse bg-gray-300 h-64 w-full rounded-xl"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!bestsellers || bestsellers.length === 0) {
    return null;
  }

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

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(bestsellers.length / itemsPerView) * 100}%`
            }}
            data-testid="bestsellers-carousel"
          >
            {bestsellers.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex-shrink-0 px-3`}
                style={{ width: `${100 / bestsellers.length}%` }}
                data-testid={`bestseller-item-${index}`}
              >
                <div className="relative">
                  <ProductCard product={product} />
                  <div className="absolute top-4 right-4 bg-gold-accent text-emerald-primary px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1} Best Seller
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-primary p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={nextSlide}
            disabled={!bestsellers || currentIndex >= bestsellers.length - itemsPerView}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-primary p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
