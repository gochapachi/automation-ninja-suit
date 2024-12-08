import { useInView } from "react-intersection-observer";

export const ProblemSolution = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <div
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Problem</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Businesses struggle with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Manual, time-consuming processes</li>
                <li>Inefficient resource allocation</li>
                <li>Lack of real-time business insights</li>
                <li>Difficulty scaling operations</li>
              </ul>
            </div>
          </div>
          <div
            className={`transform transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Solution</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We provide:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Automated workflow systems</li>
                <li>Smart resource management tools</li>
                <li>Real-time analytics dashboard</li>
                <li>Scalable cloud infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};