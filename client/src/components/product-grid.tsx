import { useState, useEffect } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ProductGrid() {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const PRODUCTS_PER_PAGE = 8;

  const {
    data: productsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: ["/api/products"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(`/api/products?limit=${PRODUCTS_PER_PAGE}&offset=${pageParam}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json() as Promise<Product[]>;
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === PRODUCTS_PER_PAGE ? pages.length * PRODUCTS_PER_PAGE : undefined;
    },
    initialPageParam: 0,
  });

  useEffect(() => {
    if (productsData) {
      const allProducts = productsData.pages.flat();
      setDisplayedProducts(allProducts);
    }
  }, [productsData]);

  if (isLoading) {
    return (
      <section id="products" className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-emerald-primary mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover handcrafted Islamic art pieces that bring spiritual beauty to your space
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-emerald-primary mb-4">
              Our Collection
            </h2>
            <p className="text-red-600 text-lg">
              Failed to load products. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-emerald-primary mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover handcrafted Islamic art pieces that bring spiritual beauty to your space
          </p>
        </div>

        {/* Product Masonry Grid */}
        <div className="masonry-grid" data-testid="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="masonry-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasNextPage && (
          <div className="text-center mt-12">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="bg-emerald-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-dark transition-colors duration-200"
              data-testid="button-load-more"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Loading More...
                </>
              ) : (
                "Load More Products"
              )}
            </Button>
          </div>
        )}

        {displayedProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
