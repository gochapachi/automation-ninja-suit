import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            About <span className="text-primary">Anagata IT Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We are an emerging technology company based in Lucknow, Uttar Pradesh, India, 
            specializing in AI and automation services. Our mission is to become the #1 AI 
            automation service provider in India, empowering businesses with cutting-edge solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To revolutionize the Indian business landscape by providing scalable, 
                affordable, and intelligent automation solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To enable businesses across India to leverage the power of AI and 
                automation for simplifying their processes and achieving sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;