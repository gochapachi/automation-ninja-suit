import { useInView } from "react-intersection-observer";
import { Users, Building2, Award, Briefcase } from "lucide-react";

const stats = [
  { name: "Happy Clients", value: "100+", icon: Users },
  { name: "Projects Completed", value: "500+", icon: Briefcase },
  { name: "Years Experience", value: "5+", icon: Building2 },
  { name: "Awards Won", value: "15+", icon: Award },
];

export const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl lg:max-w-none transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.name}
                className="mx-auto flex max-w-xs flex-col gap-y-4 group perspective-1000"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mx-auto transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-110 relative">
                    <stat.icon className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <dt className="text-base leading-7 text-gray-600 transform transition-all duration-500 group-hover:translate-y-2">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 transform transition-all duration-500 group-hover:scale-110">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};