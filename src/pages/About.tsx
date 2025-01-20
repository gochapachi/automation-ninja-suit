import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: "2020",
      title: "Foundation",
      description: "Anagata IT Solutions was established with a vision to revolutionize automation."
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-scale automation solution."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our team and opened new office in Lucknow."
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our AI Innovation Hub for research and development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Main Content Section */}
      <div 
        ref={contentRef}
        className={`container mx-auto px-4 py-24 transition-all duration-1000 transform perspective-1000
          ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-3xl mx-auto text-center group perspective-1000">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6 transform transition-all duration-500 group-hover:scale-110">
            About <span className="text-primary relative">
              Anagata IT Solutions
              <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 transform transition-all duration-500 hover:translate-y-1">
            We are an emerging technology company based in Lucknow, Uttar Pradesh, India, 
            specializing in AI and automation services. Our mission is to become the #1 AI 
            automation service provider in India, empowering businesses with cutting-edge solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To revolutionize the Indian business landscape by providing scalable, 
                affordable, and intelligent automation solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To enable businesses across India to leverage the power of AI and 
                automation for simplifying their processes and achieving sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div 
        ref={timelineRef}
        className={`bg-white py-24 transition-all duration-1000 transform
          ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className={`relative flex items-center mb-12 group perspective-1000
                  ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                
                {/* Content Card */}
                <div 
                  className={`w-5/12 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500
                    hover:scale-105 hover:shadow-xl hover:-translate-y-1
                    ${index % 2 === 0 ? 'mr-auto hover:rotate-1' : 'ml-auto hover:-rotate-1'}`}
                >
                  <div className="text-primary font-bold text-xl mb-2">{event.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className={`py-24 transition-all duration-1000 transform
          ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center perspective-1000">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-12 bg-white rounded-lg shadow-xl transform transition-all duration-500 group-hover:scale-[1.01] group-hover:-translate-y-1">
                <h2 className="text-3xl font-bold mb-6 transform transition-all duration-500 group-hover:scale-105">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join hundreds of businesses that have already revolutionized their operations with our AI solutions.
                </p>
                <Button 
                  className="transform transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl
                    bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;