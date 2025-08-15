import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect and use your information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Shield className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-3">
                    Our Commitment to Your Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Noor-e-Hunar, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This privacy policy explains how we collect, use, and 
                    safeguard your information when you visit our website or make a purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Eye className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  Information We Collect
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-2">When you make a purchase or create an account, we collect:</p>
                  <ul className="text-gray-600 ml-4 space-y-1">
                    <li>• Full name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Billing and shipping addresses</li>
                    <li>• Payment information (processed securely)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-2">When you visit our website, we automatically collect:</p>
                  <ul className="text-gray-600 ml-4 space-y-1">
                    <li>• IP address and browser type</li>
                    <li>• Device information and screen size</li>
                    <li>• Pages visited and time spent on site</li>
                    <li>• Referring website and search terms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Cookies and Tracking</h3>
                  <p className="text-gray-600">
                    We use cookies to enhance your experience, remember your preferences, 
                    and analyze website traffic. You can control cookie settings in your browser.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <FileText className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  How We Use Your Information
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Order Processing</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Process and fulfill your orders</li>
                    <li>• Send order confirmations and updates</li>
                    <li>• Handle returns and customer service</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Communication</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Send newsletters and promotional emails</li>
                    <li>• Respond to inquiries and support requests</li>
                    <li>• Share product updates and new arrivals</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Website Improvement</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Analyze website usage and performance</li>
                    <li>• Personalize your shopping experience</li>
                    <li>• Improve our products and services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Legal Requirements</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Comply with legal obligations</li>
                    <li>• Protect against fraud and abuse</li>
                    <li>• Enforce our terms and conditions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  Information Sharing
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in these limited circumstances:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">Service Providers</h3>
                  <p className="text-gray-600 text-sm">
                    Trusted partners who help us process payments, ship orders, and provide customer support. 
                    They are bound by confidentiality agreements.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">Legal Requirements</h3>
                  <p className="text-gray-600 text-sm">
                    When required by law, court order, or to protect our rights and the safety of others.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">Business Transfers</h3>
                  <p className="text-gray-600 text-sm">
                    In the event of a merger, acquisition, or sale of our business, 
                    customer information may be transferred to the new owner.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Lock className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  Data Security
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔒 SSL Encryption</h4>
                  <p className="text-green-700 text-sm">
                    All data transmission is encrypted using SSL technology
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">💳 Secure Payments</h4>
                  <p className="text-green-700 text-sm">
                    Payment information is processed by certified payment processors
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔐 Access Controls</h4>
                  <p className="text-green-700 text-sm">
                    Limited access to personal data on a need-to-know basis
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔄 Regular Updates</h4>
                  <p className="text-green-700 text-sm">
                    Security systems are regularly updated and monitored
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Your Rights and Choices
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Access and Update</h3>
                  <p className="text-gray-600 text-sm">
                    You can access, update, or correct your personal information through your account 
                    or by contacting us directly.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Email Preferences</h3>
                  <p className="text-gray-600 text-sm">
                    You can unsubscribe from marketing emails at any time using the unsubscribe 
                    link in our emails or by updating your preferences.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Data Deletion</h3>
                  <p className="text-gray-600 text-sm">
                    You can request deletion of your account and personal data, subject to 
                    legal and business requirements.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Cookie Control</h3>
                  <p className="text-gray-600 text-sm">
                    You can control cookies through your browser settings, though this may 
                    affect website functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* International Users */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">International Users</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    If you are accessing our website from outside the United States, please note that 
                    your information may be transferred to and stored in the US, where our servers are located.
                  </p>
                  <p className="text-blue-700 text-sm">
                    By using our website, you consent to this transfer. We comply with applicable 
                    international data protection laws.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-emerald-primary to-emerald-dark text-white p-8 rounded-xl shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Questions About This Policy?
              </h2>
              <p className="mb-4 opacity-90">
                If you have any questions about this Privacy Policy or how we handle your information, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-gold-accent text-emerald-primary px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 font-medium text-center"
                  data-testid="button-contact-privacy"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:privacy@noor-e-hunar.com" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-primary transition-colors duration-200 font-medium text-center"
                  data-testid="button-email-privacy"
                >
                  privacy@noor-e-hunar.com
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