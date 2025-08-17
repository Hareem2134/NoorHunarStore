// client/src/components/cart-preview.tsx

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter"; // Import the Link component
import { useCartStore } from "@/lib/cart-store";
import { CartItemWithProduct } from "@shared/schema";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function CartPreview() {
  const { isOpen, toggleCart, setItems } = useCartStore();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: cartItems = [], isLoading } = useQuery({
    queryKey: ["/api/cart"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Failed to fetch cart");
      const items = await response.json() as CartItemWithProduct[];
      setItems(items);
      return items;
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      return apiRequest("PUT", `/api/cart/${id}`, { quantity }).then(res => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
    onError: () => toast({ title: "Error", description: "Failed to update cart item.", variant: "destructive" }),
  });

  const removeItemMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/cart/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({ title: "Item Removed", description: "Item has been removed from your cart." });
    },
    onError: () => toast({ title: "Error", description: "Failed to remove item from cart.", variant: "destructive" }),
  });

  const clearCartMutation = useMutation({
    mutationFn: () => apiRequest("DELETE", "/api/cart"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({ title: "Cart Cleared", description: "All items have been removed from your cart." });
    },
  });

  const totalPrice = cartItems.reduce((total, item) => 
    total + (parseFloat(item.product.price) * item.quantity), 0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:w-96" data-testid="cart-preview">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2"><ShoppingBag className="h-5 w-5" />Your Cart ({totalItems} items)</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center"><div className="animate-pulse text-gray-500">Loading cart...</div></div>
          ) : cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400">Add some beautiful Islamic art to get started</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4"><div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg" data-testid={`cart-item-${item.id}`}>
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
                      <p className="text-gold-accent font-semibold">${item.product.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm" onClick={() => updateQuantityMutation.mutate({ id: item.id, quantity: Math.max(1, item.quantity - 1) })} disabled={updateQuantityMutation.isPending}><Minus className="h-3 w-3" /></Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantityMutation.mutate({ id: item.id, quantity: item.quantity + 1 })} disabled={updateQuantityMutation.isPending}><Plus className="h-3 w-3" /></Button>
                        <Button variant="ghost" size="sm" onClick={() => removeItemMutation.mutate(item.id)} disabled={removeItemMutation.isPending} className="ml-auto text-red-500 hover:text-red-600"><Trash2 className="h-3 w-3" /></Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div></div>
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-gold-accent" data-testid="cart-total">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  {/* CORRECTED: Wrap the Button in a Link component */}
                  <Link href="/checkout" onClick={toggleCart}>
                    <Button 
                      className="w-full bg-emerald-primary text-white hover:bg-emerald-dark"
                      data-testid="button-checkout"
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full" onClick={() => clearCartMutation.mutate()} disabled={clearCartMutation.isPending}>Clear Cart</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}