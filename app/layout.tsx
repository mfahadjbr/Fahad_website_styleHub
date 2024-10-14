import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/ui/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fahad StyleHub',
  description: 'Discover the latest trends in fashion at StyleHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}