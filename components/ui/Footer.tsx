import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background shadow-md mt-12 border-t-2 shadow-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h3 className="text-lg font-semibold mb-4">About StyleHub</h3>
            <p className="text-sm">Discover the latest fashion trends and shop your favorite styles at StyleHub.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm hover:text-primary">Products</Link></li>
              <li><Link href="/category" className="text-sm hover:text-primary">Categories</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-primary">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:text-primary">Returns</Link></li>
              <li><Link href="/size-guide" className="text-sm hover:text-primary">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center ">
          <p className="text-sm">&copy; 2024 StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}