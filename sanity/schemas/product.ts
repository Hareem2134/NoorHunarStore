import {defineField, defineType} from 'sanity'

export default defineType({
  // This is the internal name of the schema. Must be unique.
  name: 'product',
  // This is the user-friendly name that appears in the Sanity Studio.
  title: 'Product',
  // This defines the schema as a top-level document, not just a reusable object.
  type: 'document',
  
  // These are the fields that will make up a product document.
  fields: [
    // --- Basic Information ---
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'The main name of the product (e.g., "Ayat al-Kursi Calligraphy").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL-friendly version of the name. Click "Generate" to create it automatically.',
      options: {
        source: 'name', // Automatically generate the slug from the 'name' field.
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // --- Media ---
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      description: 'Upload one or more images for the product. The first image will be the main one.',
      of: [{ type: 'image', options: { hotspot: true } }], // Defines an array of images with hotspot capabilities.
      validation: (Rule) => Rule.required().min(1).error('At least one image is required.'),
    }),

    // --- Pricing & Inventory ---
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the product in your store\'s currency.',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      description: 'The number of items available. Use 0 for "Out of Stock".',
      validation: (Rule) => Rule.required().integer().min(0),
      initialValue: 10,
    }),

    // --- Detailed Information ---
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', // Defines a rich text editor.
      description: 'Provide a detailed description of the product. You can use bold, italics, and bullet points.',
      of: [{
        type: 'block',
        styles: [{title: 'Normal', value: 'normal'}],
        lists: [{title: 'Bullet', value: 'bullet'}],
        marks: {
          decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        },
      }],
    }),
    defineField({
        name: 'materials',
        title: 'Materials & Care',
        type: 'text',
        description: 'Provide details about the materials used and instructions for care.',
    }),
    defineField({
        name: 'shippingInfo',
        title: 'Shipping Information',
        type: 'text',
        description: 'Provide specific shipping details for this product (e.g., "Ships in a protective tube").',
    }),

    // --- Categorization & Marketing ---
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'A category to help organize products (e.g., "Calligraphy", "Frames").',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Toggle on to feature this product on special sections of the website.',
      initialValue: false,
    }),
    defineField({
      name: 'bestseller',
      title: 'Bestseller',
      type: 'boolean',
      description: 'Toggle on to mark this product as a bestseller.',
      initialValue: false,
    }),
  ],

  // This defines how products will be displayed in lists within the Sanity Studio.
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'gallery.0.asset', // Show the first image of the gallery as a thumbnail.
    },
  },
})