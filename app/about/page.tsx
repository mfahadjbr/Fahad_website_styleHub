import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-28">About StyleHub</h1>
      <Card>
        <CardContent className="prose max-w-none p-6">
          <p>StyleHub is your premier destination for the latest fashion trends and high-quality clothing. Founded in 2023, we've quickly become a go-to source for fashion enthusiasts around the world.</p>
          <p>Our mission is to provide our customers with a curated selection of stylish, comfortable, and affordable clothing options. We believe that everyone deserves to look and feel their best, and we're committed to helping you achieve that goal.</p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Our Values</h2>
          <ul>
            <li>Quality: We source only the best materials and partner with reputable manufacturers to ensure our products meet the highest standards.</li>
            <li>Sustainability: We're committed to reducing our environmental impact and promoting ethical fashion practices.</li>
            <li>Inclusivity: We offer a wide range of sizes and styles to cater to diverse body types and personal preferences.</li>
            <li>Customer Satisfaction: Your happiness is our top priority. We strive to provide excellent customer service and a seamless shopping experience.</li>
          </ul>
          <p>Thank you for choosing StyleHub. We look forward to helping you express your unique style and confidence through fashion.</p>
        </CardContent>
      </Card>
    </div>
  );
}