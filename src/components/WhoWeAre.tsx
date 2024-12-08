import { useInView } from "react-intersection-observer";

export const WhoWeAre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 relative group perspective-1000">
            <span className="relative z-10 inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:translate-z-12">
              Who We Are
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h2>
          <p className="text-xl text-gray-700 mb-8 group">
            <span className="inline-block transform transition-all duration-500 group-hover:translate-y-2">
              Anagata IT Solutions is a leading technology company dedicated to
              transforming businesses through innovative automation solutions. Our
              team of experts combines deep industry knowledge with cutting-edge
              technology to deliver exceptional results.
            </span>
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Mission",
                description: "To empower businesses with intelligent automation solutions that drive growth and efficiency.",
              },
              {
                title: "Vision",
                description: "To be the global leader in business process automation and digital transformation.",
              },
              {
                title: "Values",
                description: "Innovation, Excellence, Integrity, and Customer Success drive everything we do.",
              },
            ].map((item, index) => (
              <div key={item.title} className="group perspective-1000">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105 relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 transform transition-all duration-500 group-hover:translate-y-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 transform transition-all duration-500 group-hover:translate-y-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};