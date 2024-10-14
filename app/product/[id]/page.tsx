import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import AddToCartButton from '@/components/ui/AddToCardButton';



export function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-28 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">A summer dress is a lightweight, breathable, and typically flowy garment designed to keep the wearer cool in warm weather. Made from fabrics like cotton, linen, or chiffon, it often features sleeveless designs, spaghetti straps, or short sleeves. Popular styles include sundresses, maxi dresses, wrap dresses, and slip dresses.</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}