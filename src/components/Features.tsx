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
    <div className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Comprehensive Solutions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
                className={`flex flex-col items-start transform transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                  <feature.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600">
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