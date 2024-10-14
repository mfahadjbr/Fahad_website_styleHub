import { notFound } from 'next/navigation';
import ProductGrid from '@/components/ui/ProductGrid';
import { products, categories } from '@/lib/data';

export function generateStaticParams() {
  return categories.map((category) => ({ id: category.id }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find(c => c.id === params.id);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === params.id);

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <ProductGrid products={categoryProducts} />
    </div>
  );
}