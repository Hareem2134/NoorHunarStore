import Header from "@/components/header";
import ProductGrid from "@/components/product-grid";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import SearchModal from "@/components/search-modal";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";

export default function Shop() {
  return (
    <PageTransition className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        <motion.section 
          className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our Islamic Art
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              >
                Collection
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              Discover handcrafted frames, calligraphy, dua cards, and unique Islamic designs
            </motion.p>
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <ProductGrid />
        </motion.div>
      </div>
      <Footer />
      <CartPreview />
      <SearchModal />
    </PageTransition>
  );
}