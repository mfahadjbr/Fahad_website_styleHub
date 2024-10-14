"use client"; // Ensure this is a client component

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ui/ProductGrid';
import { products } from '@/lib/data';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // A spinner component during loading

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <ProductGrid products={searchResults} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SearchResults />
    </Suspense>
  );
}
