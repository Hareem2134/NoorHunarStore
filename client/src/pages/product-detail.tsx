import { useState } from "react";
import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { client, urlFor } from "@/lib/sanityClient";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import ProductCard from "@/components/product-card";
import { Loader2, Minus, Plus, ChevronDown, Star, Twitter, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { PortableText } from '@portabletext/react';

// This single, efficient query fetches everything we need for the page
const productQuery = `
{
  "product": *[_type == "product" && slug.current == $slug][0],
  "reviews": *[_type == "review" && product._ref == *[_type=="product" && slug.current == $slug][0]._id] | order(_createdAt desc),
  "related": *[_type == "product" && slug.current != $slug && count(*[_type == 'review' && product._ref == ^._id]) > 0] | order(popularity desc) [0..3]
}`;

export function ProductDetailPage() {
  const { toast } = useToast();
  const [match, params] = useRoute("/product/:slug");
  const slug = params?.slug;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product_enhanced', slug],
    queryFn: async () => client.fetch(productQuery, { slug }),
    enabled: !!slug,
  });

  const product = data?.product;
  const reviews = data?.reviews || [];
  const relatedProducts = data?.related;
  
  const averageRating = reviews.length > 0 ? reviews.reduce((acc: number, r: any) => acc + r.rating, 0) / reviews.length : 0;

  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.gallery?.[0] ? urlFor(product.gallery[0]).width(200).url() : '',
      quantity: quantity
    });
    
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  if (isError || !product) return <div className="min-h-screen flex items-center justify-center"><p>Product not found.</p></div>;

  return (
    <div className="bg-white">
      <Header />
      <CartPreview />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="text-sm text-gray-500 mb-8">
            <Link href="/"><a className="hover:underline">Home</a></Link>
            <span className="mx-2">/</span>
            <Link href="/shop"><a className="hover:underline">Shop</a></Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery Column */}
            <div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
                <Zoom><img src={urlFor(product.gallery[selectedImage]).width(800).url()} alt={product.name} className="w-full h-auto object-cover rounded-md cursor-zoom-in" /></Zoom>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.gallery.map((image: any, index: number) => (
                  <button key={index} onClick={() => setSelectedImage(index)} className={`border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'border-emerald-500 shadow-md' : 'border-transparent hover:border-gray-300'}`}><img src={urlFor(image).width(200).url()} alt={`Thumbnail ${index + 1}`} /></button>
                ))}
              </div>
            </div>

            {/* Details Column */}
            <div className="flex flex-col h-full">
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-emerald-primary mb-2">{product.name}</h1>
              {reviews.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                          {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                      </div>
                      <a href="#reviews" className="text-gray-600 hover:underline">({reviews.length} reviews)</a>
                  </div>
              )}
              <p className="text-3xl font-semibold text-gold-accent mb-6">${product.price.toFixed(2)}</p>
              
              <div className="mb-6">
                {product.stock > 0 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">In Stock</span>
                ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">Out of Stock</span>
                )}
              </div>
              
              <div className="prose prose-lg text-gray-700 mb-8"><PortableText value={product.description} /></div>
              
              <div className="flex items-center gap-4 mb-8">
                  <label className="font-semibold text-lg">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                      <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:bg-gray-100 transition-colors"><Minus size={16}/></button>
                      <span className="px-4 py-2 w-16 text-center font-semibold text-lg">{quantity}</span>
                      <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:bg-gray-100 transition-colors"><Plus size={16}/></button>
                  </div>
              </div>
              
              <div className="mt-auto space-y-4">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-emerald-primary text-white py-4 rounded-lg text-lg font-semibold hover:bg-emerald-dark transition-colors duration-300 flex items-center justify-center"
                >
                  Add to Cart
                </button>
                <div className="border rounded-lg bg-gray-50/50">
                    {product.materials && <InfoAccordion title="Materials & Care" content={product.materials} />}
                    {product.shippingInfo && <InfoAccordion title="Shipping Information" content={product.shippingInfo} />}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 text-gray-600">
                <span className="font-semibold text-sm">Share:</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-primary"><Facebook size={20}/></a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-primary"><Twitter size={20}/></a>
              </div>
            </div>
          </div>
        </div>

        <div id="reviews" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t">
          <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-8 text-center">Customer Reviews</h2>
          {reviews.length > 0 ? (
            <div className="space-y-8 max-w-3xl mx-auto">
              {reviews.map((review: any) => (
                <div key={review._id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />)}
                    </div>
                    <p className="ml-4 font-bold text-gray-800">{review.reviewerName}</p>
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No reviews yet. Be the first to share your thoughts!</p>
          )}
        </div>

        {relatedProducts && relatedProducts.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t">
            <h2 className="font-playfair text-3xl font-bold text-emerald-primary mb-12 text-center">You May Also Like</h2>
            <div className="masonry-grid" data-testid="related-products-grid">
                {relatedProducts.map((relatedProduct: any) => (
                    <div key={relatedProduct._id} className="masonry-item">
                        <ProductCard product={relatedProduct} />
                    </div>
                ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// Helper component for the information accordion
const InfoAccordion = ({ title, content }: { title: string, content: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-t first:border-t-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-100 transition-colors">
                <span>{title}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-5 pt-0 text-gray-600 prose">{content}</div>}
        </div>
    );
};