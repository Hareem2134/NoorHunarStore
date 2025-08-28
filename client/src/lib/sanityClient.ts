import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// This is the public ID of your project
const projectId = 'z40dyn2f';
const dataset = 'production';
const apiVersion = '2024-05-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use false for real-time data, true for faster cached data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}