import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCartItemSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique IDs

export async function registerRoutes(app: Express): Promise<Server> {
  // Products routes
  app.get("/api/products", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const category = req.query.category as string;
      const search = req.query.search as string;
      
      const products = await storage.getProducts(limit, offset, category, search);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  app.get("/api/products/featured", async (req, res) => {
    try {
      const products = await storage.getFeaturedProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });

  app.get("/api/products/bestsellers", async (req, res) => {
    try {
      const products = await storage.getBestsellerProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bestseller products" });
    }
  });

  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
      
      const products = await storage.searchProducts(query);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to search products" });
    }
  });

  // Cart routes
  app.get("/api/cart", async (req, res) => {
    try {
      const sessionId = (req as any).sessionID || "anonymous";
      const cartItems = await storage.getCartItems(sessionId);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cart items" });
    }
  });

  app.post("/api/cart", async (req, res) => {
    try {
      const sessionId = (req as any).sessionID || "anonymous";
      const cartItemData = insertCartItemSchema.parse({
        ...req.body,
        sessionId,
      });
      
      const cartItem = await storage.addToCart(cartItemData);
      res.status(201).json(cartItem);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid cart item data" });
      }
      res.status(500).json({ message: "Failed to add item to cart" });
    }
  });

  app.put("/api/cart/:id", async (req, res) => {
    try {
      const quantity = parseInt(req.body.quantity);
      if (quantity <= 0) {
        return res.status(400).json({ message: "Quantity must be greater than 0" });
      }
      
      const cartItem = await storage.updateCartItem(req.params.id, quantity);
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }
      
      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to update cart item" });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      const success = await storage.removeFromCart(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Cart item not found" });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to remove cart item" });
    }
  });

  app.delete("/api/cart", async (req, res) => {
    try {
      const sessionId = (req as any).sessionID || "anonymous";
      await storage.clearCart(sessionId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to clear cart" });
    }
  });

  // Newsletter route
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      const isAlreadySubscribed = await storage.isEmailSubscribed(newsletterData.email);
      if (isAlreadySubscribed) {
        return res.status(409).json({ message: "Email is already subscribed" });
      }
      
      const newsletter = await storage.subscribeNewsletter(newsletterData);
      res.status(201).json(newsletter);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // --- NEW: Payment Gateway Route ---
  app.post("/api/create-payment-session", async (req, res) => {
    const { paymentMethod, cart, totalAmount } = req.body;

    // Basic validation
    if (!paymentMethod || !cart || !totalAmount) {
      return res.status(400).json({ message: "Missing required payment information." });
    }

    console.log("Creating payment session with:", { paymentMethod, totalAmount });
    
    // You would save the order to your database here with a 'pending' status.
    const orderId = uuidv4();

    // --- THIS IS A PLACEHOLDER FOR REAL PAYMENT GATEWAY LOGIC ---
    try {
      let redirectUrl = '';
      
      // We will create a fake success page for now to test the flow
      const clientUrl = process.env.CLIENT_URL || 'http://localhost:5000';
      const successUrl = `${clientUrl}/payment-success?orderId=${orderId}`;

      if (paymentMethod === 'jazzcash') {
        console.log(`Simulating Jazzcash payment for order ${orderId}`);
        console.log(`Redirect URL: ${successUrl}`);
        redirectUrl = successUrl;
      } else if (paymentMethod === 'easypaisa') {
        console.log(`Simulating Easypaisa payment for order ${orderId}`);
        console.log(`Redirect URL: ${successUrl}`);
        redirectUrl = successUrl;
      } else {
        return res.status(400).json({ message: "Invalid payment method" });
      }

      // Send the redirect URL back to the frontend
      res.status(200).json({ redirectUrl });

    } catch (error) {
      console.error("Payment session creation failed:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


  const httpServer = createServer(app);
  return httpServer;
}