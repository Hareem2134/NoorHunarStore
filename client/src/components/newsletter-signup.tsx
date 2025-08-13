import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Percent, Palette, Bell, Lock } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeNewsletter = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for joining our Noor-e-Hunar family. You'll receive exclusive updates and offers.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const errorMessage = error.message.includes("409") 
        ? "This email is already subscribed to our newsletter."
        : "Failed to subscribe. Please try again.";
      
      toast({
        title: "Subscription Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isValidEmail(email)) {
      subscribeNewsletter.mutate(email);
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gold-accent via-yellow-400 to-gold-accent relative overflow-hidden">
      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 4L12 40L40 76L68 40L40 4Z' stroke='%23064E3B' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-emerald-primary mb-4">
            Join Our Noor-e-Hunar Family
          </h2>
          <p className="text-xl text-emerald-dark mb-8 max-w-2xl mx-auto">
            Get exclusive discounts, updates, and Islamic art inspiration in your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-emerald-primary focus:outline-none focus:border-emerald-dark transition-colors duration-200"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                disabled={subscribeNewsletter.isPending}
                className="bg-emerald-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-dark hover:animate-glow transition-all duration-300 transform hover:scale-105"
                data-testid="button-subscribe"
              >
                {subscribeNewsletter.isPending ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>
            <p className="text-sm text-emerald-dark mt-4 opacity-80 flex items-center justify-center">
              <Lock className="h-4 w-4 mr-2" />
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          {/* Newsletter Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-emerald-dark">
            <div className="flex items-center justify-center space-x-3" data-testid="benefit-discounts">
              <Percent className="h-6 w-6" />
              <span className="font-medium">Exclusive Discounts</span>
            </div>
            <div className="flex items-center justify-center space-x-3" data-testid="benefit-inspiration">
              <Palette className="h-6 w-6" />
              <span className="font-medium">Art Inspiration</span>
            </div>
            <div className="flex items-center justify-center space-x-3" data-testid="benefit-updates">
              <Bell className="h-6 w-6" />
              <span className="font-medium">New Arrivals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
