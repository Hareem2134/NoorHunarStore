import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye } from "lucide-react";
import { urlFor } from "@/lib/sanityClient";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.gallery?.[0] ? urlFor(product.gallery[0]).width(200).url() : placeholderImage,
      quantity: 1
    });
    
    toast({
      title: "Added to Cart",
      description: `1 x ${product.name} has been added to your cart.`,
    });
  };
  
  const placeholderImage = "https://via.placeholder.com/400x300.png?text=No+Image";

  // Safety check: If for any reason a product is missing critical data, we can skip rendering it.
  if (!product || !product.slug || typeof product.price === 'undefined') {
    return null; // Or return a placeholder card
  }

  return (
    <Link href={`/product/${product.slug.current}`} className="block h-full">
      <Card className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={product.gallery && product.gallery[0] ? urlFor(product.gallery[0]).width(400).url() : placeholderImage}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Button onClick={handleAddToCart} className="bg-emerald-primary text-white shadow-md"><ShoppingCart className="h-4 w-4 mr-2" /> Add</Button>
            <Button variant="outline" className="bg-white text-gray-700 shadow-md"><Eye className="h-4 w-4 mr-2" /> View</Button>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow text-center">
          <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">{product.name}</h3>
          <div className="flex-grow" />
          <div className="mt-4">
            {/* CORRECTED: Ensure price is treated as a number before calling .toFixed() */}
            <span className="text-2xl font-bold text-gold-accent">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}