import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Empower Your Business with{" "}
            <div className="relative inline-block group perspective-1000">
              <span className="relative z-10 text-primary bg-primary/10 px-6 py-3 rounded-lg transform transition-all duration-500 group-hover:scale-110 inline-block group-hover:rotate-y-180 group-hover:translate-z-12">
                Startup in a Box
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-xl"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/30 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            </div>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-2xl mx-auto animate-fade-up delay-100">
            Become the next success story with our comprehensive solution.
            Streamline your operations, boost efficiency, and scale your business
            with cutting-edge AI automation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up delay-200">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 transition-all duration-500 hover:scale-110 shadow-lg relative overflow-hidden group transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-500 hover:scale-110 shadow-md transform hover:-translate-y-1 hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none"></div>
    </div>
  );
};