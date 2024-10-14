"use client";

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AddToCartButton from './AddToCardButton';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Summer Dress', price: 59.99, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80' },
  { id: 2, name: 'Casual Shirt', price: 34.99, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80' },
  { id: 3, name: 'Denim Jeans', price: 79.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { id: 4, name: 'Sneakers', price: 89.99, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
];

export default function FeaturedProducts() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={product.image}
                alt={product.name}
                width={688}
                height={688}
                className="w-full h-64 object-cover"
                placeholder="blur"
                blurDataURL="/placeholder-image.jpg" // Optional: for a better loading experience
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
              <AddToCartButton product={product} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
