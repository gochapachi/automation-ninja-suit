import { useInView } from "react-intersection-observer";

export const WhoWeAre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Who We Are</h2>
          <p className="text-xl text-gray-700 mb-8">
            Anagata IT Solutions is a leading technology company dedicated to
            transforming businesses through innovative automation solutions. Our
            team of experts combines deep industry knowledge with cutting-edge
            technology to deliver exceptional results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-700">
                To empower businesses with intelligent automation solutions that
                drive growth and efficiency.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-700">
                To be the global leader in business process automation and digital
                transformation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Values</h3>
              <p className="text-gray-700">
                Innovation, Excellence, Integrity, and Customer Success drive
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};