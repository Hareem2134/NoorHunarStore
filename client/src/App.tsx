import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Shipping from "@/pages/shipping";
import Returns from "@/pages/returns";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";

// Import the new pages
import { ProductDetailPage } from "@/pages/product-detail";
import { CheckoutPage } from "@/pages/checkout";
import { PaymentSuccessPage } from "@/pages/payment-success";

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location}>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />

        {/* Add the route for a single product. The :productId is a dynamic parameter. */}
        <Route path="/product/:slug" component={ProductDetailPage} />

        {/* Add the route for the checkout page */}
        <Route path="/checkout" component={CheckoutPage} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/returns" component={Returns} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/payment-success" component={PaymentSuccessPage} /> 
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;