import { Features } from "@/components/Features";

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-gray-700">
              Comprehensive automation solutions tailored for your business success
            </p>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Services;