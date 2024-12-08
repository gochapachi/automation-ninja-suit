import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          How It Works
        </h2>
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                <div className="text-4xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <ArrowRight className="text-primary/20 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};