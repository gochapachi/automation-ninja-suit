import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Features />
      <Testimonials />
      <Pricing />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default Index;