import ProductGrid from '@/components/ui/ProductGrid';
import { products } from '@/lib/data';

export default function BestSellersPage() {
  // For this example, we'll just show products 5-12 as "best sellers"
  const bestSellers = products.slice(4, 12);

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">Best Sellers</h1>
      <ProductGrid products={bestSellers} />
    </div>
  );
}