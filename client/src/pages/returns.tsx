import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { RotateCcw, Package, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function Returns() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your satisfaction is our priority. Learn about our return policy and process
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Return Policy Overview */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-6 text-center">
                30-Day Return Policy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center" data-testid="policy-timeframe">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-emerald-primary mb-2">30 Days</h3>
                  <p className="text-gray-600 text-sm">
                    Return items within 30 days of delivery for a full refund
                  </p>
                </div>
                <div className="text-center" data-testid="policy-condition">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Original Condition</h3>
                  <p className="text-gray-600 text-sm">
                    Items must be unused and in original packaging
                  </p>
                </div>
                <div className="text-center" data-testid="policy-refund">
                  <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Easy Process</h3>
                  <p className="text-gray-600 text-sm">
                    Simple return process with prepaid return labels
                  </p>
                </div>
              </div>
            </div>

            {/* What Can/Cannot Be Returned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-playfair text-xl font-bold text-green-800">
                    What Can Be Returned
                  </h3>
                </div>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Standard Islamic art prints and calligraphy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Pre-made frames in original condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Dua card sets (unopened packages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Bookmarks and accessories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Items damaged during shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Defective or incorrect items</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <XCircle className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="font-playfair text-xl font-bold text-red-800">
                    What Cannot Be Returned
                  </h3>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Custom or personalized artwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Items with personal names or custom text</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Digital downloads or e-products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Gift cards and vouchers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Items returned after 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Used or damaged items (unless defective)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Return Process */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-8 text-center">
                How to Return Your Item
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    1
                  </div>
                  <h4 className="font-semibold text-emerald-primary mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-600">
                    Email us or call to initiate your return request
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    2
                  </div>
                  <h4 className="font-semibold text-emerald-primary mb-2">Get Return Label</h4>
                  <p className="text-sm text-gray-600">
                    We'll send you a prepaid return shipping label
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    3
                  </div>
                  <h4 className="font-semibold text-emerald-primary mb-2">Package Item</h4>
                  <p className="text-sm text-gray-600">
                    Carefully package the item in original packaging
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    4
                  </div>
                  <h4 className="font-semibold text-emerald-primary mb-2">Ship & Track</h4>
                  <p className="text-sm text-gray-600">
                    Drop off at carrier location and track your return
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                  Refund Processing
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Processing Time</span>
                    <span className="text-emerald-primary font-semibold">3-5 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Credit Card</span>
                    <span className="text-emerald-primary font-semibold">5-10 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">PayPal</span>
                    <span className="text-emerald-primary font-semibold">3-5 business days</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Bank Transfer</span>
                    <span className="text-emerald-primary font-semibold">7-10 business days</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Processing begins once we receive and inspect your returned item
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                  Return Shipping Costs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Defective Items</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Wrong Item Sent</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-800">Change of Mind</span>
                    <span className="text-yellow-600 font-semibold">Customer Pays</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-800">Size/Color Issues</span>
                    <span className="text-yellow-600 font-semibold">Customer Pays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="bg-gradient-to-r from-emerald-primary to-emerald-dark text-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Exchanges
              </h2>
              <p className="mb-4 opacity-90">
                We currently don't offer direct exchanges. If you need a different size, color, or style, 
                please return the original item for a refund and place a new order.
              </p>
              <p className="text-gold-accent font-medium">
                💡 Tip: To ensure faster processing, contact us first to confirm the availability 
                of the item you want before returning the original.
              </p>
            </div>

            {/* Damaged Items */}
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl mb-12">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Received a Damaged Item?</h4>
                  <p className="text-orange-700 mb-3">
                    We take great care in packaging, but sometimes damage can occur during transit. 
                    If you receive a damaged item:
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1 ml-4">
                    <li>1. Take photos of the damaged item and packaging</li>
                    <li>2. Contact us within 48 hours of delivery</li>
                    <li>3. We'll arrange immediate replacement or full refund</li>
                    <li>4. Keep the damaged item until we contact you</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Need Help with Your Return?
              </h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help make your return process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-emerald-primary text-white px-6 py-3 rounded-lg hover:bg-emerald-dark transition-colors duration-200 font-medium"
                  data-testid="button-contact-returns"
                >
                  Contact Customer Service
                </a>
                <a 
                  href="mailto:returns@noor-e-hunar.com" 
                  className="border border-emerald-primary text-emerald-primary px-6 py-3 rounded-lg hover:bg-emerald-primary hover:text-white transition-colors duration-200 font-medium"
                  data-testid="button-email-returns"
                >
                  Email Returns Team
                </a>
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