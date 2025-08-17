// client/src/components/product-card.tsx

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const response = await apiRequest("POST", "/api/cart", {
        productId,
        quantity: 1,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCartMutation.mutate(product.id);
  };

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      {/* The `group` class is key for the hover effects */}
      <Card
        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* ENHANCEMENT: Buttons are now positioned absolutely and only appear on hover on desktop */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Button
              onClick={handleAddToCart}
              disabled={addToCartMutation.isPending}
              className="bg-emerald-primary text-white px-4 py-2 rounded-lg hover:bg-emerald-dark transition-colors duration-200 flex items-center space-x-2 shadow-md"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{addToCartMutation.isPending ? "Adding..." : "Add"}</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-md"
            >
              <Eye className="h-4 w-4" />
              <span>View</span>
            </Button>
          </div>

          {product.bestseller && (
            <div className="absolute top-3 right-3 bg-gold-accent text-emerald-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              Bestseller
            </div>
          )}
          
          {product.featured && (
            <div className="absolute top-3 left-3 bg-emerald-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              Featured
            </div>
          )}
        </div>

        <CardContent className="p-6 flex flex-col flex-grow text-center">
          <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
          
          {/* ENHANCEMENT: Price is more prominent */}
          <div className="mt-auto">
            <span className="text-2xl font-bold text-gold-accent">${parseFloat(product.price).toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}