import { Heart, Globe, Star, Shield } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Handmade Quality",
    description: "Each piece is carefully crafted by skilled artisans with attention to detail"
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "We deliver our beautiful Islamic art pieces to your doorstep globally"
  },
  {
    icon: Star,
    title: "Unique Islamic Designs",
    description: "Original designs that blend traditional Islamic art with contemporary aesthetics"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Shop with confidence using our encrypted and secure payment system"
  }
];

export default function WhyShopSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4">
            Why Shop With Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference of authentic Islamic craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group"
                data-testid={`feature-${index}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-primary to-emerald-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-emerald-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
