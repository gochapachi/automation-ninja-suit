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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
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
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
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