import { useQuery } from "@tanstack/react-query";
import ProductCard from "./product-card";
import { Loader2 } from "lucide-react";
import { client } from "@/lib/sanityClient";

// This is a GROQ query, Sanity's language for fetching all documents of the type "product"
const productsQuery = `*[_type == "product"]`;

export default function ProductGrid() {
  // Use React Query to fetch the data from Sanity
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["sanity_products"],
    queryFn: async () => client.fetch(productsQuery),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-4">Our Collection</h2>
        <p className="text-red-600 text-lg">Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <section id="products" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-emerald-primary mb-4">Our Collection</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover handcrafted Islamic art pieces that bring spiritual beauty to your space</p>
        </div>
        <div className="masonry-grid" data-testid="products-grid">
          {products.map((product: any) => (
            // Sanity uses `_id` as the unique key
            <div key={product._id} className="masonry-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}