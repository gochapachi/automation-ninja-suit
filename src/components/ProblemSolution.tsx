import { useInView } from "react-intersection-observer";

export const ProblemSolution = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <div
            className={`transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } relative group perspective-1000`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-110"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
              <h2 className="text-3xl font-bold mb-6 text-red-600 transform transition-transform duration-500 group-hover:scale-110">The Problem</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">Businesses struggle with:</p>
                <ul className="list-none space-y-4">
                  {[
                    "Manual, time-consuming processes",
                    "Inefficient resource allocation",
                    "Lack of real-time business insights",
                    "Difficulty scaling operations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 group/item">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center transform transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-12">
                        <span className="w-2 h-2 rounded-full bg-red-600 transform transition-transform duration-500 group-hover/item:scale-150"></span>
                      </span>
                      <span className="transform transition-all duration-500 group-hover/item:translate-x-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div
            className={`transform transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } relative group perspective-1000`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-110"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
              <h2 className="text-3xl font-bold mb-6 text-green-600 transform transition-transform duration-500 group-hover:scale-110">Our Solution</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">We provide:</p>
                <ul className="list-none space-y-4">
                  {[
                    "Automated workflow systems",
                    "Smart resource management tools",
                    "Real-time analytics dashboard",
                    "Scalable cloud infrastructure"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 group/item">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center transform transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-12">
                        <span className="w-2 h-2 rounded-full bg-green-600 transform transition-transform duration-500 group-hover/item:scale-150"></span>
                      </span>
                      <span className="transform transition-all duration-500 group-hover/item:translate-x-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};