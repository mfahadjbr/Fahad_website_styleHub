"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
interface Product {
  id: number,
  name: string
  // Add other properties as needed
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const addToCart = () => {
    if (isLoggedIn) {
      // Here you would typically update your cart state or send a request to your backend
      console.log(`Adding ${quantity} ${product.name}(s) to cart`);
      toast({
        title: "Added to Cart",
        description: `${quantity} ${product.name}(s) added to your cart.`,
      });
    } else {
      toast({
        title: "Login Required",
        description: "Please log in to add items to your cart.",
        variant: "destructive",
      });
      router.push('/login');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
      <span>{quantity}</span>
      <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      <Button onClick={addToCart} className="ml-4">
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
}