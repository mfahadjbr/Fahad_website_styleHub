"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const cartItems = [
  { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
  { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  { id: 3, name: 'Product 3', price: 39.99, quantity: 3 },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <Checkbox id={`item-${item.id}`} />
                <label htmlFor={`item-${item.id}`} className="ml-2">{item.name}</label>
              </div>
              <div className="flex items-center">
                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <span className="ml-4">${(item.price * item.quantity).toFixed(2)}</span>
                <Button variant="destructive" className="ml-4" onClick={() => removeItem(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-4">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
}