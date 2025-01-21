import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export const HowItWorks = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  useEffect(() => {
    // Cleanup function
    return () => {
      if (entry?.target) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
      }
    };
  }, [entry]);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We analyze your business needs and challenges",
    },
    {
      number: "02",
      title: "Strategy",
      description: "We design a customized automation solution",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We deploy and integrate the solution seamlessly",
    },
    {
      number: "04",
      title: "Support",
      description: "We provide ongoing maintenance and optimization",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 relative group perspective-1000">
          <span className="relative z-10 inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:translate-z-12">
            How It Works
          </span>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </h2>
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transform transition-all duration-700 group perspective-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                  <div className="text-4xl font-bold text-primary/20 mb-4 transform transition-all duration-500 group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 transform transition-all duration-500 group-hover:translate-y-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 transform transition-all duration-500 group-hover:translate-y-2">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <ArrowRight className="text-primary/20 w-8 h-8 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};