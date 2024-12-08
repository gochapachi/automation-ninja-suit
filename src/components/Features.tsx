import {
  BarChart3,
  Users,
  MessageSquare,
  Briefcase,
  CreditCard,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Marketing Automations",
    description:
      "Automated brand creatives, scheduled posting, and dynamic content generation for consistent engagement.",
    icon: BarChart3,
  },
  {
    name: "Sales Automations",
    description:
      "Streamlined CRM with automated follow-ups and comprehensive analytics for maximum efficiency.",
    icon: Briefcase,
  },
  {
    name: "HR Automations",
    description:
      "Simplified recruitment, seamless onboarding, and integrated attendance & payroll systems.",
    icon: Users,
  },
  {
    name: "Support Automations",
    description:
      "Smart ticket management, AI chatbots, and automated SLA tracking for superior customer service.",
    icon: MessageSquare,
  },
  {
    name: "Accounts Automations",
    description:
      "Automated invoicing, expense tracking, and reconciliation for streamlined financial operations.",
    icon: CreditCard,
  },
];

export const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary relative inline-block group">
            <span className="relative z-10">Comprehensive Solutions</span>
            <div className="absolute -inset-2 bg-primary/10 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl relative group perspective-1000">
            <span className="relative z-10 inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:translate-z-12">
              Everything you need to automate your business
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Our "Startup in a Box" solution covers all critical aspects of your
            business operations, ensuring seamless automation across departments.
          </p>
        </div>
        <div 
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`flex flex-col items-start transform transition-all duration-700 group perspective-1000 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="rounded-lg bg-primary/15 p-2 ring-2 ring-primary/30 shadow-md transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-110 relative">
                    <feature.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg transform transition-all duration-500 group-hover:translate-x-2">
                  {feature.name}
                </dt>
                <dd className="mt-2 leading-7 text-gray-700 transform transition-all duration-500 group-hover:translate-x-2">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};