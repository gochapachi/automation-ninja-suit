import { useInView } from "react-intersection-observer";
import { Shield, Zap, Users, Trophy } from "lucide-react";

export const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "Over a decade of experience in delivering IT solutions",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption to your business",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 customer support with personalized assistance",
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Award-winning solutions trusted by leading companies",
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 relative group perspective-1000">
          <span className="relative z-10 inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:translate-z-12">
            Why Choose Us?
          </span>
          <div className="absolute -inset-4 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </h2>
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col items-center text-center group perspective-1000">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="rounded-full bg-white/10 p-4 mb-4 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-110 relative">
                    <reason.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 transform transition-all duration-500 group-hover:translate-y-2">
                  {reason.title}
                </h3>
                <p className="text-white/80 transform transition-all duration-500 group-hover:translate-y-2">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};