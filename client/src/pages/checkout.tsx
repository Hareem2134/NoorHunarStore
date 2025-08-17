// client/src/pages/checkout.tsx

import { useState } from 'react'; // Import useState
import { useCartStore } from '@/lib/cart-store';
import { Link } from 'wouter';
import { useToast } from "@/hooks/use-toast"; // Import useToast for error messages

export function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const { toast } = useToast();

  // NEW: State to manage the selected payment method and loading status
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // NEW: Function to handle the "Place Order" click
  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send the order details to your backend to create a payment session
      const response = await fetch('/api/create-payment-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethod,
          cart: items,
          totalAmount: getTotalPrice(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment session');
      }

      const data = await response.json();
      
      // The backend will send a redirectUrl. We navigate the user to it.
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }

    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "An Error Occurred",
        description: "Could not initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };


  if (items.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">You have no items in your shopping cart.</p>
        <Link href="/shop" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Information Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-2 border rounded" required />
              <input type="text" placeholder="Last Name" className="p-2 border rounded" required />
              <input type="email" placeholder="Email Address" className="p-2 border rounded md:col-span-2" required />
              <input type="text" placeholder="Address" className="p-2 border rounded md:col-span-2" required />
              <input type="text" placeholder="City" className="p-2 border rounded" required />
              <input type="text" placeholder="Postal Code" className="p-2 border rounded" required />
            </form>
          </div>
        </div>
        
        {/* Order Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
              <p>{item.product.name} <span className="text-gray-500">x{item.quantity}</span></p>
              <p>${(parseFloat(item.product.price) * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total</p>
            <p>${getTotalPrice().toFixed(2)}</p>
          </div>
          
          {/* NEW: Payment Method Selection */}
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-3">
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${paymentMethod === 'jazzcash' ? 'border-emerald-500 bg-emerald-50' : ''}`}>
              <input type="radio" name="paymentMethod" value="jazzcash" checked={paymentMethod === 'jazzcash'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />
              Pay with Jazzcash
            </label>
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${paymentMethod === 'easypaisa' ? 'border-emerald-500 bg-emerald-50' : ''}`}>
              <input type="radio" name="paymentMethod" value="easypaisa" checked={paymentMethod === 'easypaisa'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />
              Pay with Easypaisa
            </label>
          </div>

          <button 
            onClick={handlePlaceOrder}
            disabled={isLoading}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
          >
            {isLoading ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
}