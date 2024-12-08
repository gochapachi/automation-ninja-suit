import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    content: "Anagata IT Solutions transformed our business operations with their automation solutions. The efficiency gains were immediate and substantial.",
    author: "Rajesh Kumar",
    role: "CEO, TechStart India",
  },
  {
    content: "The 'Startup in a Box' solution is exactly what we needed. It's comprehensive, easy to implement, and the support team is excellent.",
    author: "Priya Sharma",
    role: "Founder, Digital Solutions",
  },
  {
    content: "Working with Anagata IT has been a game-changer for our marketing operations. Their AI-driven solutions have significantly improved our ROI.",
    author: "Amit Patel",
    role: "Marketing Director, Growth Corp",
  },
];

export const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};