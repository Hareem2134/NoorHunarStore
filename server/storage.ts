// server/storage.ts

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres';
import { products, cartItems, newsletters, type InsertProduct, type InsertCartItem, type InsertNewsletter, type Product, type CartItem, type Newsletter, type CartItemWithProduct } from "../shared/schema";
import { eq, and, ilike, desc } from 'drizzle-orm';

export type { Product, InsertProduct, CartItem, InsertCartItem, Newsletter, InsertNewsletter, CartItemWithProduct };

export interface IStorage {
    getProducts(limit?: number, offset?: number, category?: string, search?: string): Promise<Product[]>;
    getProduct(id: string): Promise<Product | undefined>;
    createProduct(product: InsertProduct): Promise<Product>;
    getFeaturedProducts(): Promise<Product[]>;
    getBestsellerProducts(): Promise<Product[]>;
    searchProducts(query: string): Promise<Product[]>;
    getCartItems(sessionId: string): Promise<CartItemWithProduct[]>;
    addToCart(item: InsertCartItem): Promise<CartItemWithProduct>;
    updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
    removeFromCart(id: string): Promise<boolean>;
    clearCart(sessionId: string): Promise<void>;
    subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
    isEmailSubscribed(email: string): Promise<boolean>;
}

class DBStorage implements IStorage {
  private db;

  constructor() {
    this.db = drizzle(createPool(), { schema: { products, cartItems, newsletters } });
  }

  async getProducts(limit = 20, offset = 0, category?: string, search?: string) {
    const conditions = [];
    if (category) conditions.push(eq(products.category, category));
    if (search) conditions.push(ilike(products.name, `%${search}%`));
    return this.db.query.products.findMany({ where: and(...conditions), limit, offset, orderBy: [desc(products.createdAt)] });
  }

  async getProduct(id: string) {
    return this.db.query.products.findFirst({ where: eq(products.id, id) });
  }

  async createProduct(product: InsertProduct) {
    const [newProduct] = await this.db.insert(products).values(product).returning();
    return newProduct;
  }

  async getFeaturedProducts() {
    return this.db.query.products.findMany({ where: eq(products.featured, true), limit: 4 });
  }

  async getBestsellerProducts() {
    return this.db.query.products.findMany({ where: eq(products.bestseller, true), limit: 4 });
  }

  async searchProducts(query: string) {
    return this.db.query.products.findMany({ where: ilike(products.name, `%${query}%`) });
  }

  async getCartItems(sessionId: string) {
    const result = await this.db.select().from(cartItems).innerJoin(products, eq(cartItems.productId, products.id)).where(eq(cartItems.sessionId, sessionId));
    return result.map(row => ({ ...row.cart_items, product: row.products }));
  }

  async addToCart(insertCartItem: InsertCartItem) {
    const existingItem = await this.db.query.cartItems.findFirst({
      where: and(eq(cartItems.sessionId, insertCartItem.sessionId), eq(cartItems.productId, insertCartItem.productId!)),
    });

    if (existingItem) {
      const newQuantity = existingItem.quantity + (insertCartItem.quantity || 1);
      await this.db.update(cartItems).set({ quantity: newQuantity }).where(eq(cartItems.id, existingItem.id));
    } else {
      await this.db.insert(cartItems).values(insertCartItem);
    }
    const updatedCart = await this.getCartItems(insertCartItem.sessionId);
    return updatedCart.find(item => item.productId === insertCartItem.productId)!;
  }

  async updateCartItem(id: string, quantity: number) {
    const [updatedItem] = await this.db.update(cartItems).set({ quantity }).where(eq(cartItems.id, id)).returning();
    return updatedItem;
  }

  async removeFromCart(id: string): Promise<boolean> {
    const result = await this.db.delete(cartItems).where(eq(cartItems.id, id));
    return !!result.rowCount;
  }

  async clearCart(sessionId: string) {
    await this.db.delete(cartItems).where(eq(cartItems.sessionId, sessionId));
  }

  async subscribeNewsletter(newsletter: InsertNewsletter) {
    const [newSubscription] = await this.db.insert(newsletters).values(newsletter).returning();
    return newSubscription;
  }

  async isEmailSubscribed(email: string) {
    const existing = await this.db.query.newsletters.findFirst({ where: eq(newsletters.email, email) });
    return !!existing;
  }
}

export const storage = new DBStorage();