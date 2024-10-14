import ProductGrid from '@/components/ui/ProductGrid';
import { products } from '@/lib/data';

export default function NewArrivalsPage() {
  // For this example, we'll just show the first 8 products as "new arrivals"
  const newArrivals = products.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
      <ProductGrid products={newArrivals} />
    </div>
  );
}