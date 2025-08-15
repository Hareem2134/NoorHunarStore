import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Truck, Package, Globe, Clock, Shield, AlertCircle } from "lucide-react";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Shipping Information
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Learn about our shipping options, delivery times, and packaging for your Islamic art orders
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Shipping Options */}
            <div className="mb-16">
              <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-8 text-center">
                Shipping Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center" data-testid="shipping-standard">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                    Standard Shipping
                  </h3>
                  <p className="text-gray-600 mb-4">5-7 business days within US</p>
                  <p className="text-2xl font-bold text-gold-accent mb-2">Free</p>
                  <p className="text-sm text-gray-500">On orders over $50</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center" data-testid="shipping-express">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                    Express Shipping
                  </h3>
                  <p className="text-gray-600 mb-4">2-3 business days within US</p>
                  <p className="text-2xl font-bold text-gold-accent">$15.99</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center" data-testid="shipping-international">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                    International
                  </h3>
                  <p className="text-gray-600 mb-4">10-14 business days</p>
                  <p className="text-2xl font-bold text-gold-accent">$24.99</p>
                  <p className="text-sm text-gray-500">Plus local customs fees</p>
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-emerald-primary mr-3" />
                  <h3 className="font-playfair text-2xl font-bold text-emerald-primary">
                    Processing & Delivery Times
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Order Processing</span>
                    <span className="text-emerald-primary font-semibold">1-2 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">US Standard</span>
                    <span className="text-emerald-primary font-semibold">5-7 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">US Express</span>
                    <span className="text-emerald-primary font-semibold">2-3 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Canada</span>
                    <span className="text-emerald-primary font-semibold">7-10 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Europe</span>
                    <span className="text-emerald-primary font-semibold">10-14 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Rest of World</span>
                    <span className="text-emerald-primary font-semibold">14-21 business days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-emerald-primary mr-3" />
                  <h3 className="font-playfair text-2xl font-bold text-emerald-primary">
                    Packaging & Protection
                  </h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-emerald-primary">Art Protection:</strong> All artwork is carefully wrapped in acid-free tissue paper and protective sleeves.
                  </p>
                  <p>
                    <strong className="text-emerald-primary">Secure Packaging:</strong> Items are packed in reinforced boxes with cushioning materials to prevent damage.
                  </p>
                  <p>
                    <strong className="text-emerald-primary">Fragile Items:</strong> Frames and delicate pieces receive extra padding and "Fragile" labeling.
                  </p>
                  <p>
                    <strong className="text-emerald-primary">Weather Protection:</strong> All packages are sealed against moisture and temperature changes.
                  </p>
                  <p>
                    <strong className="text-emerald-primary">Eco-Friendly:</strong> We use recyclable and biodegradable packaging materials whenever possible.
                  </p>
                </div>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
              <h3 className="font-playfair text-2xl font-bold text-emerald-primary mb-6">
                International Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-emerald-primary mb-3">Available Countries</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <p>🇨🇦 Canada</p>
                    <p>🇬🇧 United Kingdom</p>
                    <p>🇦🇺 Australia</p>
                    <p>🇩🇪 Germany</p>
                    <p>🇫🇷 France</p>
                    <p>🇮🇹 Italy</p>
                    <p>🇪🇸 Spain</p>
                    <p>🇳🇱 Netherlands</p>
                    <p>🇦🇪 UAE</p>
                    <p>🇸🇦 Saudi Arabia</p>
                    <p>🇲🇾 Malaysia</p>
                    <p>🇸🇬 Singapore</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Don't see your country? <a href="/contact" className="text-emerald-primary hover:underline">Contact us</a> for availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-primary mb-3">Important Notes</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Customs fees and taxes are the buyer's responsibility</li>
                    <li>• Delivery times may vary due to customs processing</li>
                    <li>• All international packages include tracking</li>
                    <li>• Items are declared at full value for customs</li>
                    <li>• Some countries may have import restrictions on certain items</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="bg-gradient-to-r from-emerald-primary to-emerald-dark text-white p-8 rounded-xl shadow-lg mb-16">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Order Tracking
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Order Confirmation</h4>
                  <p className="text-sm opacity-90">You'll receive an email confirming your order details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Shipping Notification</h4>
                  <p className="text-sm opacity-90">Get tracking details when your order ships</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Live Tracking</h4>
                  <p className="text-sm opacity-90">Monitor your package's journey to your door</p>
                </div>
              </div>
            </div>

            {/* Special Circumstances */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Special Circumstances</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Custom orders may require additional processing time (2-4 weeks)</li>
                    <li>• Holiday seasons may extend delivery times by 2-3 business days</li>
                    <li>• Weather conditions or carrier delays may affect delivery schedules</li>
                    <li>• PO Box addresses may have different delivery requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <CartPreview />
    </div>
  );
}