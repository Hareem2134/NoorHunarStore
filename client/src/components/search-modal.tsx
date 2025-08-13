import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import ProductCard from "./product-card";

interface SearchModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function SearchModal({ open = false, onOpenChange }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { data: searchResults = [], isLoading } = useQuery({
    queryKey: ["/api/search", searchQuery],
    queryFn: async () => {
      if (!searchQuery.trim()) return [];
      
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error("Search failed");
      }
      return response.json() as Promise<Product[]>;
    },
    enabled: searchQuery.length > 2,
    staleTime: 30000, // 30 seconds
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearching(value.length > 2);
  };

  const handleClose = () => {
    setSearchQuery("");
    setIsSearching(false);
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden" data-testid="search-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for Islamic art, frames, dua cards..."
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-primary"
              autoFocus
              data-testid="input-search-modal"
            />
            {isLoading && (
              <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-emerald-primary" />
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {!searchQuery.trim() ? (
              <div className="text-center py-8 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Start typing to search for products...</p>
                <p className="text-sm mt-2">Try searching for "calligraphy", "frames", or "dua cards"</p>
              </div>
            ) : searchQuery.length <= 2 ? (
              <div className="text-center py-8 text-gray-500">
                <p>Please enter at least 3 characters to search</p>
              </div>
            ) : isLoading ? (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-emerald-primary mx-auto mb-4" />
                <p className="text-gray-500">Searching...</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No products found for "{searchQuery}"</p>
                <p className="text-sm mt-2">Try different keywords or browse our collection</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="search-results">
                {searchResults.map((product) => (
                  <div key={product.id} onClick={handleClose}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {searchResults.length > 0 && (
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600">
                Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
