import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Empower Your Business with{" "}
            <span className="text-primary bg-primary/10 px-2 rounded">AI Automation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
            Become the next success story with our "Startup in a Box" solution.
            Streamline your operations, boost efficiency, and scale your business
            with cutting-edge AI automation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};