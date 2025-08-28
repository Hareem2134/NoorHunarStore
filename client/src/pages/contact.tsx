import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import StaggeredContainer, { StaggeredItem } from "@/components/staggered-container";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <PageTransition className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-8">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you have questions about our products, need custom artwork, 
                  or want to learn more about Islamic art, we're here to help. 
                  Reach out to us through any of the channels below.
                </p>

                <StaggeredContainer className="space-y-6">
                  <StaggeredItem className="flex items-start space-x-4 hover-lift" data-testid="contact-email">
                    <div className="w-12 h-12 bg-emerald-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-primary mb-1">Email Us</h3>
                      <p className="text-gray-600">info@noor-e-hunar.com</p>
                      <p className="text-gray-600">support@noor-e-hunar.com</p>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem className="flex items-start space-x-4 hover-lift" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-emerald-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-float" style={{animationDelay: '0.5s'}}>
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-primary mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem className="flex items-start space-x-4 hover-lift" data-testid="contact-address">
                    <div className="w-12 h-12 bg-emerald-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-float" style={{animationDelay: '1s'}}>
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-primary mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Islamic Art Street<br />Creative District, NY 10001</p>
                    </div>
                  </StaggeredItem>

                  <StaggeredItem className="flex items-start space-x-4 hover-lift" data-testid="contact-hours">
                    <div className="w-12 h-12 bg-emerald-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-float" style={{animationDelay: '1.5s'}}>
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-primary mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </StaggeredItem>
                </StaggeredContainer>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-emerald-primary mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                      data-testid="social-instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                      data-testid="social-facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gold-accent text-emerald-primary rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
                      data-testid="social-whatsapp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      data-testid="input-contact-subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell us how we can help you..."
                      data-testid="input-contact-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-primary text-white hover:bg-emerald-dark py-3 text-lg font-semibold"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
      <Footer />
      <CartPreview />
    </PageTransition>
  );
}