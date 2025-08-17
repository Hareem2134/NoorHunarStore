// client/src/pages/payment-success.tsx

import { Link, useLocation } from 'wouter';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useCartStore } from '@/lib/cart-store';
import { useEffect } from 'react';

export function PaymentSuccessPage() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location);
  const orderId = searchParams.get('orderId');

  // Clear the cart after a successful order
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center p-4 pt-20">
        <div className="bg-white p-10 rounded-lg shadow-xl max-w-md">
          <CheckCircle className="text-green-500 h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-emerald-primary mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Thank you for your order. A confirmation email has been sent.</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
            <strong>Order ID:</strong> {orderId || 'N/A'}
          </div>
          <Link href="/shop">
            <a className="mt-8 inline-block bg-emerald-primary text-white py-2 px-6 rounded-lg hover:bg-emerald-dark transition-colors">
              Continue Shopping
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}