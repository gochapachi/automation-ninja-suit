import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Essentials",
    price: "₹5,000",
    description: "Best for small startups or businesses starting with basic automation needs.",
    features: [
      "Basic marketing automation",
      "Simple CRM integration",
      "Essential HR tools",
      "Basic support automation",
      "Standard reporting",
    ],
  },
  {
    name: "Growth",
    price: "₹10,000",
    description: "For businesses looking to expand and optimize multiple departments.",
    features: [
      "Advanced marketing tools",
      "Full CRM automation",
      "Complete HR suite",
      "Enhanced support system",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "₹15,000",
    description: "Comprehensive automation for growing enterprises.",
    features: [
      "Enterprise marketing suite",
      "Custom CRM solutions",
      "Advanced HR analytics",
      "24/7 support automation",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your business
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="mt-8 bg-primary hover:bg-primary/90"
                size="lg"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};