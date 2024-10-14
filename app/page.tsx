import FeaturedProducts from '@/components/ui/FeaturedProducts';
import Categories from '@/components/ui/Categories';
import Newsletter from '@/components/ui/Newsletter';
import Carousel1 from '@/components/ui/Carousel1';
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Carousel1 />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </div>
  );
}