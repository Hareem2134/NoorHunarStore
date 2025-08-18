// server/seed.ts
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres';
import { products, type InsertProduct } from '../shared/schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// This data structure matches your schema's InsertProduct type
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
    },
    {
        name: "Daily Duas Card Set",
        description: "50 beautiful cards with essential Islamic prayers",
        price: "34.00",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "cards",
        featured: true,
    },
];

async function seed() {
  const pool = createPool(); // Uses environment variables automatically
  const db = drizzle(pool);

  console.log('Seeding database...');
  // Clear any old data first
  await db.delete(products);
  // Insert the new data
  await db.insert(products).values(sampleProducts);

  console.log('Database seeded successfully!');
  await pool.end();
}

seed().catch((error) => {
  console.error('Failed to seed database:', error);
  process.exit(1);
});