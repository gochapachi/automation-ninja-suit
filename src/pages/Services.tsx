import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center transform perspective-1000 hover:scale-[1.01] transition-all duration-500 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 group">
              Our{" "}
              <span className="relative inline-block text-primary">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500 blur-2xl bg-primary/30 -z-10"></div>
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 transform hover:translate-y-[-2px] transition-all">
              Comprehensive automation solutions tailored for your business success
            </p>
            <Button 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform translate-y-12 group-hover:translate-y-[-180%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section with 3D effects */}
      <div className="relative bg-white dark:bg-gray-900 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Features />
      </div>

      {/* Pricing Section with enhanced animations */}
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Pricing />
      </div>

      {/* CTA Section */}
      <div className="relative py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center transform perspective-1000 hover:scale-[1.01] transition-all duration-500">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Join hundreds of businesses that have already revolutionized their operations with our services
            </p>
            <Button 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform translate-y-12 group-hover:translate-y-[-180%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;