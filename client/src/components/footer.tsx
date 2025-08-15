import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-emerald-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="font-playfair text-2xl font-bold text-gold-accent mb-4">
              نور الہنر
              <span className="block text-lg font-inter font-medium text-white -mt-1">
                Noor-e-Hunar
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bringing the beauty of Islamic art to your home. We specialize in handcrafted frames, calligraphy, 
              dua cards, and unique Islamic designs that inspire faith and devotion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                data-testid="link-whatsapp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gold-accent mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-shipping"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link 
                  href="/returns"
                  className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                  data-testid="footer-link-returns"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gold-accent mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3" data-testid="contact-email">
                <div className="w-5 h-5 text-gold-accent">📧</div>
                <span className="text-gray-300">info@noor-e-hunar.com</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-phone">
                <div className="w-5 h-5 text-gold-accent">📞</div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3" data-testid="contact-address">
                <div className="w-5 h-5 text-gold-accent mt-1">📍</div>
                <span className="text-gray-300">
                  123 Islamic Art Street<br />
                  Creative District, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-hours">
                <div className="w-5 h-5 text-gold-accent">⏰</div>
                <span className="text-gray-300">Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              Copyright © 2025 Noor-e-Hunar. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy"
                className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies"
                className="text-gray-300 hover:text-gold-accent transition-colors duration-200"
                data-testid="footer-link-cookies"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
