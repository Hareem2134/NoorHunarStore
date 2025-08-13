import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();
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

  const handleAddToCart = () => {
    addToCartMutation.mutate(product.id);
  };

  const handleViewDetails = () => {
    toast({
      title: "Coming Soon",
      description: "Product detail view will be available soon.",
    });
  };

  return (
    <Card
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          data-testid={`img-product-${product.id}`}
        />
        <div className="absolute inset-0 bg-emerald-primary/0 group-hover:bg-emerald-primary/20 transition-all duration-300"></div>
        
        {product.bestseller && (
          <div className="absolute top-4 right-4 bg-gold-accent text-emerald-primary px-3 py-1 rounded-full text-sm font-bold">
            Bestseller
          </div>
        )}
        
        {product.featured && (
          <div className="absolute top-4 left-4 bg-emerald-primary text-white px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 
          className="font-playfair text-xl font-semibold text-emerald-primary mb-2"
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <p 
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          data-testid={`text-product-description-${product.id}`}
        >
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span 
            className="text-2xl font-bold text-gold-accent"
            data-testid={`text-product-price-${product.id}`}
          >
            ${product.price}
          </span>
          
          <div className="flex space-x-2">
            <Button
              onClick={handleAddToCart}
              disabled={addToCartMutation.isPending}
              className="bg-emerald-primary text-white px-4 py-2 rounded-lg hover:bg-emerald-dark transition-colors duration-200 flex items-center space-x-2"
              data-testid={`button-add-to-cart-${product.id}`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{addToCartMutation.isPending ? "Adding..." : "Add"}</span>
            </Button>
            
            <Button
              onClick={handleViewDetails}
              variant="outline"
              className="border-emerald-primary text-emerald-primary px-4 py-2 rounded-lg hover:bg-emerald-primary hover:text-white transition-colors duration-200 flex items-center space-x-2"
              data-testid={`button-view-details-${product.id}`}
            >
              <Eye className="h-4 w-4" />
              <span>View</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
