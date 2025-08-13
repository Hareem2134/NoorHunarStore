import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/cart-store";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-sm shadow-lg" 
            : "bg-white/90 backdrop-blur-sm"
        }`}
        data-testid="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="font-playfair text-2xl lg:text-3xl font-bold text-emerald-primary">
                نور الہنر
                <span className="block text-sm font-inter font-medium text-gold-accent -mt-1">
                  Noor-e-Hunar
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                data-testid="nav-shop"
              >
                Shop
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-emerald-primary"
                data-testid="button-search"
              >
                <Search className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleCart}
                  className="p-2 text-gray-600 hover:text-emerald-primary"
                  data-testid="button-cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span 
                      className="absolute -top-1 -right-1 bg-gold-accent text-emerald-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                      data-testid="cart-item-count"
                    >
                      {totalItems}
                    </span>
                  )}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden p-2 text-gray-600 hover:text-emerald-primary"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <nav className="flex flex-col space-y-6 mt-8">
                    <button 
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="text-left text-lg text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                      data-testid="mobile-nav-home"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => scrollToSection("products")}
                      className="text-left text-lg text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                      data-testid="mobile-nav-shop"
                    >
                      Shop
                    </button>
                    <button 
                      onClick={() => scrollToSection("about")}
                      className="text-left text-lg text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                      data-testid="mobile-nav-about"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => scrollToSection("contact")}
                      className="text-left text-lg text-gray-700 hover:text-emerald-primary transition-colors duration-200 font-medium"
                      data-testid="mobile-nav-contact"
                    >
                      Contact
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="bg-white border-t border-gray-200 py-4" data-testid="search-bar">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Islamic art, frames, dua cards..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-primary"
                  onBlur={() => setSearchOpen(false)}
                  autoFocus
                  data-testid="input-search"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
