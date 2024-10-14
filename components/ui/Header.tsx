"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, Menu, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from '@/lib/data';
import { useToast } from '@/components/ui/use-toast';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <header className="bg-background shadow-md fixed left-0 top-0 w-full z-50 shadow-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          StyleHub
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-black hover:bg-white py-2 px-3 rounded-lg">Products</DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-white text-black hover:text-black py-2 px-4 rounded-lg'>
                    <DropdownMenuItem>
                      <Link href="/products">All Products</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/products/new-arrivals">New Arrivals</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/products/best-sellers">Best Sellers</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-black hover:bg-white py-2 px-3 rounded-lg">Categories</DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-white text-black hover:text-black py-2 px-4 rounded-lg'>
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.id}>
                        <Link href={`/category/${category.id}`}>{category.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className='hover:text-black hover:bg-white py-2 px-3 rounded-lg'><Link href="/about">About</Link></li>
              <li className='hover:text-black hover:bg-white py-2 px-3 rounded-lg'><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex">
            <Input
              type="search"
              placeholder="Search..."
              className="w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </form>
          {isLoggedIn ? (
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <LogIn className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/products" className="hover:text-black hover:bg-white py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link href="/categories" className="hover:text-black hover:bg-white py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Categories</Link>
                <Link href="/about" className="hover:text-black hover:bg-white py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/contact" className="hover:text-black hover:bg-white py-2 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}