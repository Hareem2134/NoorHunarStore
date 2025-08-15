import Header from "@/components/header";
import ProductGrid from "@/components/product-grid";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import SearchModal from "@/components/search-modal";

export default function Shop() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Islamic Art Collection
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover handcrafted frames, calligraphy, dua cards, and unique Islamic designs
            </p>
          </div>
        </section>
        <ProductGrid />
      </div>
      <Footer />
      <CartPreview />
      <SearchModal />
    </div>
  );
}