import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Cookie, Settings, BarChart3, Target, Shield, Info } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Learn how we use cookies to enhance your shopping experience
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* What Are Cookies */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-start mb-4">
                <Cookie className="h-6 w-6 text-emerald-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-3">
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your computer or mobile device when 
                    you visit a website. They help the website remember information about your visit, 
                    which can make your next visit easier and the site more useful to you.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    At Noor-e-Hunar, we use cookies to enhance your browsing experience, analyze site 
                    traffic, and provide personalized content and advertisements.
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-6 text-center">
                Types of Cookies We Use
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-emerald-200 rounded-xl" data-testid="essential-cookies">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-emerald-primary mr-3" />
                    <h3 className="font-semibold text-emerald-primary text-lg">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, shopping cart functionality, and secure login.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Examples:</strong> Session ID, Shopping cart contents, Security tokens
                  </div>
                  <div className="mt-3 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full inline-block">
                    Always Active
                  </div>
                </div>

                <div className="p-6 border border-blue-200 rounded-xl" data-testid="functional-cookies">
                  <div className="flex items-center mb-4">
                    <Settings className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-blue-600 text-lg">Functional Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies remember your preferences and choices to provide a more personalized 
                    experience during your visits.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Examples:</strong> Language preferences, Display settings, Location data
                  </div>
                  <div className="mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full inline-block">
                    Optional
                  </div>
                </div>

                <div className="p-6 border border-purple-200 rounded-xl" data-testid="analytics-cookies">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-purple-600 text-lg">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies collect information about how visitors use our website, helping us 
                    improve the site and understand what content is most valuable.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Examples:</strong> Google Analytics, Page views, Time spent on site
                  </div>
                  <div className="mt-3 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full inline-block">
                    Optional
                  </div>
                </div>

                <div className="p-6 border border-orange-200 rounded-xl" data-testid="marketing-cookies">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="font-semibold text-orange-600 text-lg">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies track your online activity to help advertisers deliver more relevant 
                    advertisements and measure the effectiveness of advertising campaigns.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Examples:</strong> Facebook Pixel, Google Ads, Retargeting pixels
                  </div>
                  <div className="mt-3 px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full inline-block">
                    Optional
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Cookie List */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-6">
                Detailed Cookie Information
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-700">Cookie Name</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Purpose</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Duration</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-medium text-gray-900">session_id</td>
                      <td className="p-3 text-gray-600">Maintains user session and shopping cart</td>
                      <td className="p-3 text-gray-600">Session</td>
                      <td className="p-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">Essential</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900">csrf_token</td>
                      <td className="p-3 text-gray-600">Security protection against cross-site attacks</td>
                      <td className="p-3 text-gray-600">Session</td>
                      <td className="p-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">Essential</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900">user_preferences</td>
                      <td className="p-3 text-gray-600">Remembers language and display preferences</td>
                      <td className="p-3 text-gray-600">1 year</td>
                      <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Functional</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900">_ga</td>
                      <td className="p-3 text-gray-600">Google Analytics - distinguishes users</td>
                      <td className="p-3 text-gray-600">2 years</td>
                      <td className="p-3"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900">_fbp</td>
                      <td className="p-3 text-gray-600">Facebook Pixel - tracks conversions</td>
                      <td className="p-3 text-gray-600">3 months</td>
                      <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Marketing</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900">cart_items</td>
                      <td className="p-3 text-gray-600">Remembers items added to shopping cart</td>
                      <td className="p-3 text-gray-600">30 days</td>
                      <td className="p-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">Essential</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-6">
                Managing Your Cookie Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-4 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Browser Settings
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    You can control and manage cookies through your web browser settings. 
                    Each browser is different, so check your browser's help menu to learn how to change your preferences.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-gray-700">Chrome:</strong> Settings → Privacy and security → Cookies</p>
                    <p><strong className="text-gray-700">Firefox:</strong> Options → Privacy & Security → Cookies</p>
                    <p><strong className="text-gray-700">Safari:</strong> Preferences → Privacy → Cookies</p>
                    <p><strong className="text-gray-700">Edge:</strong> Settings → Privacy → Cookies</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-emerald-primary mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Opt-Out Options
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    You can opt out of specific tracking and advertising cookies using these tools:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-gray-700">Google Analytics:</strong> <a href="#" className="text-emerald-primary hover:underline">Google Analytics Opt-out</a></p>
                    <p><strong className="text-gray-700">Facebook:</strong> <a href="#" className="text-emerald-primary hover:underline">Facebook Ad Settings</a></p>
                    <p><strong className="text-gray-700">Industry Tools:</strong> <a href="#" className="text-emerald-primary hover:underline">Network Advertising Initiative</a></p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                    <p className="text-yellow-700 text-sm">
                      Disabling certain cookies may affect your ability to use some features of our website. 
                      For example, you may not be able to add items to your cart or complete purchases 
                      if essential cookies are disabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-6">
                Third-Party Services
              </h2>
              
              <p className="text-gray-600 mb-6">
                We use several third-party services that may set their own cookies when you visit our site:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Helps us understand how visitors interact with our website.
                  </p>
                  <a href="#" className="text-emerald-primary text-xs hover:underline">
                    Google Privacy Policy
                  </a>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Facebook Pixel</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Measures the effectiveness of our advertising campaigns.
                  </p>
                  <a href="#" className="text-emerald-primary text-xs hover:underline">
                    Facebook Data Policy
                  </a>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Payment Processors</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Secure processing of payments and transactions.
                  </p>
                  <a href="#" className="text-emerald-primary text-xs hover:underline">
                    Stripe Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-600">
                When we make changes, we will update the "Last updated" date at the top of this policy 
                and notify you through a notice on our website or by email if the changes are significant.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-emerald-primary to-emerald-dark text-white p-8 rounded-xl shadow-lg">
              <h2 className="font-playfair text-2xl font-bold mb-4">
                Questions About Cookies?
              </h2>
              <p className="mb-4 opacity-90">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-gold-accent text-emerald-primary px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 font-medium text-center"
                  data-testid="button-contact-cookies"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:privacy@noor-e-hunar.com" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-primary transition-colors duration-200 font-medium text-center"
                  data-testid="button-email-cookies"
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