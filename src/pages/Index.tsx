import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhyUs } from "@/components/WhyUs";
import { WhoWeAre } from "@/components/WhoWeAre";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Statistics />
      <WhyUs />
      <WhoWeAre />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <AppointmentBooking />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Index;