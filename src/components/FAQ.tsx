import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

export const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes across various industries, from startups to enterprise-level organizations looking to automate their processes.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation time varies based on the complexity of the solution, but typically ranges from 2-8 weeks. We provide a detailed timeline during the consultation phase.",
    },
    {
      question: "Do you provide training and support?",
      answer:
        "Yes, we provide comprehensive training for your team and ongoing support to ensure you get the most out of your automation solution.",
    },
    {
      question: "What makes your solutions different?",
      answer:
        "Our solutions are highly customizable, scalable, and built using cutting-edge technology. We focus on delivering measurable ROI and long-term value.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement industry-leading security measures and comply with international data protection standards to ensure your data remains safe and secure.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 relative group perspective-1000">
            <span className="relative z-10 inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:translate-z-12">
              Frequently Asked Questions
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h2>
          <div
            ref={ref}
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 group perspective-1000"
                >
                  <AccordionTrigger className="text-left relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 transform transition-all duration-500 group-hover:translate-x-2">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 relative">
                    <span className="block transform transition-all duration-500 group-hover:translate-x-2">
                      {faq.answer}
                    </span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};