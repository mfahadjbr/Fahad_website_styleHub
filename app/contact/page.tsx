import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {

  return (
    <div className="flex justify-center items-center mt-28 px-4 py-8">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <Card>
          <CardContent className="p-6">
            <form className="space-y-4 "action="https://formspree.io/f/myzygreg" method="POST">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  name="Name"
                  autoComplete="off"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                  id="email"
                  name="Email"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full"
                  id="message"
                  name="Message"
                  autoComplete="off"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
