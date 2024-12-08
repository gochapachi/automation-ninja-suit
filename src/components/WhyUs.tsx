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
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
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
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white/10 p-4 mb-4">
                  <reason.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-white/80">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};