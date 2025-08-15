import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Heart, Users, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              About Noor-e-Hunar
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              نور الہنر - Illuminating the beauty of Islamic art and craftsmanship
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-6">
                Our Story
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-6">
                Noor-e-Hunar was born from a deep passion for Islamic art and a desire to bring 
                the spiritual beauty of our heritage into modern homes. Founded with the belief 
                that art can inspire faith and devotion, we specialize in handcrafted Islamic 
                calligraphy, decorative frames, dua cards, and unique artistic pieces.
              </p>
              <p className="mb-6">
                Our name, meaning "Light of Art" in Urdu, reflects our mission to illuminate 
                hearts and homes with the divine beauty found in Islamic artistic traditions. 
                Every piece in our collection is carefully crafted by skilled artisans who 
                understand the sacred nature of their work.
              </p>
              <p className="mb-6">
                We believe that Islamic art is not just decoration—it's a form of worship, 
                a daily reminder of our faith, and a source of peace and contemplation. 
                Each calligraphy piece, each geometric pattern, and each carefully chosen 
                verse serves as a bridge between the material and spiritual worlds.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="value-authenticity">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-primary to-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                  Authenticity
                </h3>
                <p className="text-gray-600">
                  Every piece respects traditional Islamic artistic principles while embracing contemporary aesthetics
                </p>
              </div>

              <div className="text-center" data-testid="value-quality">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-primary to-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                  Quality Craftsmanship
                </h3>
                <p className="text-gray-600">
                  Handcrafted with love and attention to detail by skilled artisans who honor their craft
                </p>
              </div>

              <div className="text-center" data-testid="value-community">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-primary to-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  Supporting local artisans and bringing the global Muslim community together through art
                </p>
              </div>

              <div className="text-center" data-testid="value-accessibility">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-primary to-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Making beautiful Islamic art accessible to Muslims around the world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 lg:py-24 bg-emerald-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              "To inspire and nurture faith through beautiful Islamic art, creating pieces that 
              serve as daily reminders of Allah's presence and the beauty of our Islamic heritage."
            </p>
            <div className="bg-gold-accent text-emerald-primary px-8 py-4 rounded-lg inline-block">
              <p className="font-medium">
                Every piece we create carries the intention of bringing peace, reflection, 
                and spiritual connection to your home.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <CartPreview />
    </div>
  );
}