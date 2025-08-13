import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hassan",
    text: "The calligraphy piece I ordered exceeded my expectations. The quality is outstanding and it adds such beauty to my prayer room. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Omar Ali",
    text: "Fast shipping and beautiful packaging. The dua cards are perfectly crafted and my family loves them. Will definitely order again!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Fatima Khan",
    text: "Absolutely gorgeous Islamic art! The attention to detail is amazing. I've received so many compliments on the frame I purchased.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-emerald-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why thousands trust Noor-e-Hunar for their Islamic art needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <h4 
                    className="font-semibold text-emerald-primary"
                    data-testid={`text-testimonial-name-${index}`}
                  >
                    {testimonial.name}
                  </h4>
                  <div className="flex text-gold-accent" data-testid={`rating-${index}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p 
                className="text-gray-600"
                data-testid={`text-testimonial-content-${index}`}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
