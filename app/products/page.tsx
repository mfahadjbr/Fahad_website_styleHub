import ProductGrid from '@/components/ui/ProductGrid';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}