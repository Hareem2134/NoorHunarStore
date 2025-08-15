import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Scale, FileText, AlertTriangle, Shield } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services
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
                <Scale className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-3">
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using the Noor-e-Hunar website ("Service"), you accept and agree to be 
                    bound by the terms and provision of this agreement. These Terms of Service ("Terms") 
                    govern your use of our website located at noor-e-hunar.com and any related services 
                    provided by Noor-e-Hunar.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <FileText className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  Use of Our Service
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Permitted Use</h3>
                  <p className="text-gray-600 mb-2">You may use our Service to:</p>
                  <ul className="text-gray-600 ml-4 space-y-1">
                    <li>• Browse and purchase Islamic art products</li>
                    <li>• Access information about our products and services</li>
                    <li>• Create an account for easier shopping</li>
                    <li>• Subscribe to our newsletter and communications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Prohibited Activities</h3>
                  <p className="text-gray-600 mb-2">You agree NOT to:</p>
                  <ul className="text-gray-600 ml-4 space-y-1">
                    <li>• Use the Service for any unlawful purpose or activity</li>
                    <li>• Interfere with or disrupt the Service or servers</li>
                    <li>• Copy, reproduce, or distribute our content without permission</li>
                    <li>• Use automated systems to access the Service</li>
                    <li>• Impersonate others or provide false information</li>
                    <li>• Transmit viruses, malware, or harmful code</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Account Responsibility</h3>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account. Notify us immediately of any 
                    unauthorized use.
                  </p>
                </div>
              </div>
            </div>

            {/* Products and Orders */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Products and Orders
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Product Information</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• We strive for accurate product descriptions</li>
                    <li>• Colors may vary due to monitor settings</li>
                    <li>• Actual products may differ slightly from photos</li>
                    <li>• Handmade items have natural variations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Order Acceptance</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• All orders are subject to acceptance</li>
                    <li>• We may refuse or cancel orders at any time</li>
                    <li>• Pricing errors may result in cancellation</li>
                    <li>• Order confirmation doesn't guarantee acceptance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Payment Terms</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Full payment required before shipping</li>
                    <li>• All prices in USD unless stated otherwise</li>
                    <li>• Taxes and shipping calculated at checkout</li>
                    <li>• Credit card charges appear as "Noor-e-Hunar"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Custom Orders</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Custom orders require 50% deposit</li>
                    <li>• No cancellations after work begins</li>
                    <li>• Custom items are non-refundable</li>
                    <li>• Delivery times are estimates only</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Shield className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <h2 className="font-playfair text-2xl font-bold text-emerald-primary">
                  Intellectual Property Rights
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">Our Content</h3>
                  <p className="text-gray-600 text-sm">
                    All content on this website, including text, graphics, logos, images, audio clips, 
                    digital downloads, data compilations, and software, is our property or the property 
                    of our content suppliers and is protected by copyright laws.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">Trademarks</h3>
                  <p className="text-gray-600 text-sm">
                    "Noor-e-Hunar" and our logo are trademarks. You may not use our trademarks without 
                    our prior written consent.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-primary mb-2">User Content</h3>
                  <p className="text-gray-600 text-sm">
                    By submitting content (reviews, photos, etc.), you grant us a non-exclusive, 
                    royalty-free license to use, reproduce, modify, and display such content.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimers and Limitations */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Disclaimers and Limitations
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Service "As Is"</h3>
                  <p className="text-yellow-700 text-sm">
                    Our Service is provided "as is" without warranties of any kind, either express or implied. 
                    We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Limitation of Liability</h3>
                  <p className="text-yellow-700 text-sm">
                    In no event shall Noor-e-Hunar be liable for any indirect, incidental, special, 
                    consequential, or punitive damages, including without limitation, loss of profits, 
                    data, use, goodwill, or other intangible losses.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Maximum Liability</h3>
                  <p className="text-yellow-700 text-sm">
                    Our total liability to you for any claim shall not exceed the amount you paid 
                    for the product or service giving rise to the claim.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Privacy and Data Protection
              </h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <a 
                href="/privacy" 
                className="text-emerald-primary hover:underline font-medium"
              >
                Read our Privacy Policy →
              </a>
            </div>

            {/* Modifications and Termination */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Modifications and Termination
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Changes to Terms</h3>
                  <p className="text-gray-600 text-sm">
                    We reserve the right to modify these Terms at any time. Changes will be posted on 
                    this page with an updated effective date. Continued use of the Service constitutes 
                    acceptance of the modified Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Service Changes</h3>
                  <p className="text-gray-600 text-sm">
                    We may modify, suspend, or discontinue any part of our Service at any time without 
                    prior notice. We are not liable for any modification, suspension, or discontinuation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Account Termination</h3>
                  <p className="text-gray-600 text-sm">
                    We may terminate or suspend your account and access to the Service immediately, 
                    without prior notice, for conduct that we believe violates these Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-2">Effect of Termination</h3>
                  <p className="text-gray-600 text-sm">
                    Upon termination, your right to use the Service will cease immediately. 
                    Provisions that by their nature should survive termination shall remain in effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Governing Law and Disputes
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of 
                  the State of New York, without regard to its conflict of law provisions.
                </p>
                
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Dispute Resolution</h3>
                  <p className="text-gray-600 text-sm">
                    Any disputes arising from these Terms or your use of the Service shall be resolved 
                    through binding arbitration in accordance with the Commercial Arbitration Rules 
                    of the American Arbitration Association.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-emerald-primary bg-emerald-50">
                  <h3 className="font-semibold text-emerald-primary mb-2">Class Action Waiver</h3>
                  <p className="text-gray-600 text-sm">
                    You agree that any arbitration or proceeding shall be limited to the dispute 
                    between us and you individually. You waive any right to participate in a 
                    class action lawsuit or class-wide arbitration.
                  </p>
                </div>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Miscellaneous Provisions
              </h2>
              
              <div className="space-y-3">
                <div>
                  <strong className="text-emerald-primary">Severability:</strong>
                  <span className="text-gray-600 ml-2">
                    If any provision of these Terms is found to be unenforceable, the remaining 
                    provisions will remain in full force and effect.
                  </span>
                </div>
                
                <div>
                  <strong className="text-emerald-primary">Entire Agreement:</strong>
                  <span className="text-gray-600 ml-2">
                    These Terms constitute the entire agreement between you and us regarding 
                    the use of our Service.
                  </span>
                </div>
                
                <div>
                  <strong className="text-emerald-primary">Assignment:</strong>
                  <span className="text-gray-600 ml-2">
                    We may assign our rights and obligations under these Terms without your consent. 
                    You may not assign your rights without our written consent.
                  </span>
                </div>
                
                <div>
                  <strong className="text-emerald-primary">Waiver:</strong>
                  <span className="text-gray-600 ml-2">
                    No waiver of any term of these Terms shall be deemed a further or continuing 
                    waiver of such term or any other term.
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-emerald-primary to-emerald-dark text-white p-8 rounded-xl shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Questions About These Terms?
              </h2>
              <p className="mb-4 opacity-90">
                If you have any questions about these Terms of Service, please contact us. 
                We're here to help clarify any concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-gold-accent text-emerald-primary px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 font-medium text-center"
                  data-testid="button-contact-terms"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:legal@noor-e-hunar.com" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-primary transition-colors duration-200 font-medium text-center"
                  data-testid="button-email-legal"
                >
                  legal@noor-e-hunar.com
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