import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { Rocket, Heart, Trophy, Users, Target, Zap } from "lucide-react";

const About = () => {
  // Single observer with higher threshold and more generous rootMargin
  const commonObserverProps = {
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "100px",
  };

  const { ref: contentRef, inView: contentInView } = useInView(commonObserverProps);
  const { ref: valuesRef, inView: valuesInView } = useInView(commonObserverProps);
  const { ref: teamRef, inView: teamInView } = useInView(commonObserverProps);
  const { ref: achievementsRef, inView: achievementsInView } = useInView(commonObserverProps);
  const { ref: ctaRef, inView: ctaInView } = useInView(commonObserverProps);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        ref={contentRef}
        className={`container mx-auto px-4 py-24 transition-all duration-300 ease-out
          ${contentInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            About <span className="text-primary">
              Anagata IT Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Pioneering the future of automation in India, one innovation at a time.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div 
        ref={valuesRef}
        className={`bg-white py-24 transition-all duration-300 ease-out
          ${valuesInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Passion", description: "Driven by innovation and excellence" },
              { icon: Trophy, title: "Excellence", description: "Committed to delivering the best" },
              { icon: Users, title: "Collaboration", description: "Growing together with our clients" }
            ].map((value, index) => (
              <div key={value.title} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div 
        ref={teamRef}
        className={`py-24 transition-all duration-300 ease-out
          ${teamInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO", image: "https://i.pravatar.cc/150?img=1" },
              { name: "Priya Sharma", role: "CTO", image: "https://i.pravatar.cc/150?img=2" },
              { name: "Amit Patel", role: "Head of Innovation", image: "https://i.pravatar.cc/150?img=3" },
              { name: "Neha Gupta", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=4" }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div 
        ref={achievementsRef}
        className={`bg-white py-24 transition-all duration-300 ease-out
          ${achievementsInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "24/7", label: "Support" }
            ].map((achievement) => (
              <div key={achievement.label} className="group perspective-1000">
                <div className="relative p-6 bg-gray-50 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl text-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <AppointmentBooking />

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className={`py-24 transition-all duration-300 ease-out
          ${ctaInView ? 'opacity-100' : 'opacity-0'}`}
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
