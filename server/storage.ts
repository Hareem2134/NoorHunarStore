import { type Product, type InsertProduct, type CartItem, type InsertCartItem, type Newsletter, type InsertNewsletter, type CartItemWithProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(limit?: number, offset?: number, category?: string, search?: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  getFeaturedProducts(): Promise<Product[]>;
  getBestsellerProducts(): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;
  
  // Cart
  getCartItems(sessionId: string): Promise<CartItemWithProduct[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: string): Promise<boolean>;
  clearCart(sessionId: string): Promise<void>;
  
  // Newsletter
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  isEmailSubscribed(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private cartItems: Map<string, CartItem>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.products = new Map();
    this.cartItems = new Map();
    this.newsletters = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Ayat al-Kursi Calligraphy",
        description: "Handcrafted Arabic calligraphy with gold leaf details",
        price: "89.00",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "calligraphy",
        featured: true,
        bestseller: true,
      },
      {
        name: "Geometric Pattern Frame",
        description: "Handcarved wooden frame with traditional motifs",
        price: "124.00",
        imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "frames",
        featured: false,
        bestseller: false,
      },
      {
        name: "Daily Duas Card Set",
        description: "50 beautiful cards with essential Islamic prayers",
        price: "34.00",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "cards",
        featured: true,
        bestseller: false,
      },
      {
        name: "Gold Calligraphy Bookmark",
        description: "Premium metal bookmark with Quranic verse",
        price: "18.00",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "bookmarks",
        featured: false,
        bestseller: false,
      },
      {
        name: "Gratitude Dua Jar",
        description: "Handmade jar with 100 gratitude duas",
        price: "42.00",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "jars",
        featured: false,
        bestseller: false,
      },
      {
        name: "Modern Islamic Wall Art",
        description: "Contemporary geometric design with Islamic motifs",
        price: "156.00",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "art",
        featured: false,
        bestseller: false,
      },
      {
        name: "99 Names of Allah",
        description: "Complete set with beautiful Arabic calligraphy",
        price: "199.00",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "calligraphy",
        featured: true,
        bestseller: true,
      },
      {
        name: "Mashallah Wall Decor",
        description: "Modern Islamic wall art with gold finish",
        price: "78.00",
        imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "art",
        featured: false,
        bestseller: true,
      },
      {
        name: "Surah Al-Fatiha Frame",
        description: "Handcrafted frame with golden accents",
        price: "145.00",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "frames",
        featured: false,
        bestseller: true,
      },
      {
        name: "Islamic Geometric Patterns Set",
        description: "Collection of 6 traditional geometric pattern prints",
        price: "89.00",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "art",
        featured: true,
        bestseller: false,
      },
    ];

    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  async getProducts(limit = 20, offset = 0, category?: string, search?: string): Promise<Product[]> {
    let products = Array.from(this.products.values());

    if (category) {
      products = products.filter(p => p.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower)
      );
    }

    return products.slice(offset, offset + limit);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id, 
      createdAt: new Date(),
      featured: insertProduct.featured || false,
      bestseller: insertProduct.bestseller || false
    };
    this.products.set(id, product);
    return product;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.featured);
  }

  async getBestsellerProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.bestseller);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const searchLower = query.toLowerCase();
    return Array.from(this.products.values()).filter(p => 
      p.name.toLowerCase().includes(searchLower) || 
      p.description.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower)
    );
  }

  async getCartItems(sessionId: string): Promise<CartItemWithProduct[]> {
    const cartItems = Array.from(this.cartItems.values()).filter(item => item.sessionId === sessionId);
    const cartItemsWithProducts: CartItemWithProduct[] = [];

    for (const item of cartItems) {
      const product = this.products.get(item.productId);
      if (product) {
        cartItemsWithProducts.push({ ...item, product });
      }
    }

    return cartItemsWithProducts;
  }

  async addToCart(insertCartItem: InsertCartItem): Promise<CartItem> {
    // Check if item already exists in cart
    const existingItem = Array.from(this.cartItems.values()).find(
      item => item.productId === insertCartItem.productId && item.sessionId === insertCartItem.sessionId
    );

    if (existingItem) {
      existingItem.quantity += insertCartItem.quantity || 1;
      this.cartItems.set(existingItem.id, existingItem);
      return existingItem;
    }

    const id = randomUUID();
    const cartItem: CartItem = { 
      ...insertCartItem, 
      id,
      quantity: insertCartItem.quantity || 1
    };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem | undefined> {
    const cartItem = this.cartItems.get(id);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.cartItems.set(id, cartItem);
      return cartItem;
    }
    return undefined;
  }

  async removeFromCart(id: string): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<void> {
    const itemsToDelete = Array.from(this.cartItems.entries())
      .filter(([_, item]) => item.sessionId === sessionId)
      .map(([id, _]) => id);

    itemsToDelete.forEach(id => this.cartItems.delete(id));
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      subscribedAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletters.values()).some(n => n.email === email);
  }
}

export const storage = new MemStorage();
