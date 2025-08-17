// client/src/pages/product-detail.tsx

import { useRoute } from "wouter";
import { useQuery } from '@tanstack/react-query';
import Header from "@/components/header"; // Import Header
import Footer from "@/components/footer";   // Import Footer
import CartPreview from "@/components/cart-preview"; // Import Cart for full experience
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from "@/lib/queryClient";

// A placeholder for a Related Products component we'll use below
import ProductGrid from "@/components/product-grid"; 


interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const fetchProduct = async (productId: string): Promise<Product> => {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export function ProductDetailPage() {
  const [match, params] = useRoute("/product/:productId");
  const productId = params?.productId;

  const { toast } = useToast();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProduct(productId!),
    enabled: !!productId,
  });

  const handleAddItem = () => {
    if (product) {
        apiRequest("POST", "/api/cart", { productId: product.id, quantity: 1 })
            .then(res => res.json())
            .then(() => {
                toast({
                    title: "Added to Cart",
                    description: `${product.name} has been added to your cart.`,
                });
            });
    }
  };
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (isError || !product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="bg-off-white">
      {/* FIX: Add the Header, CartPreview, etc. for a consistent layout */}
      <Header />
      <CartPreview />

      <main className="pt-20">
        <div className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg" />
            </div>
            <div>
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-emerald-primary mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-gold-accent mb-6">${parseFloat(product.price).toFixed(2)}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
              <button
                onClick={handleAddItem}
                className="w-full bg-emerald-primary text-white py-3 rounded-lg text-lg hover:bg-emerald-dark transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Detailed Information */}
        <section className="bg-white py-16 lg:py-24 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-8 text-center">Product Details</h2>
                <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
                    <p><strong>Material:</strong> High-quality wood frame with a gold-leaf finish.</p>
                    <p><strong>Dimensions:</strong> 24" x 36" (60cm x 90cm)</p>
                    <p><strong>Craftsmanship:</strong> Each piece is meticulously handcrafted by skilled artisans, ensuring a unique and high-quality finish that honors Islamic tradition.</p>
                    <p><strong>Shipping:</strong> Ships worldwide. Securely packaged to ensure it arrives in perfect condition. Please allow 3-5 business days for processing.</p>
                </div>
            </div>
        </section>

        {/* NEW SECTION: Related Products */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-12 text-center">You May Also Like</h2>
                {/* We can reuse your existing ProductGrid. A real app might fetch specific related items. */}
                <ProductGrid />
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}