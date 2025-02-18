
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { Heart, Trophy, Users } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "100px",
  });

  // Use useEffect to prevent ResizeObserver from being overwhelmed
  useEffect(() => {
    // Add a small delay before applying animations
    const timer = setTimeout(() => {
      document.documentElement.style.setProperty('--animation-trigger', inView ? '1' : '0');
    }, 100);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div ref={ref} className="space-y-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              About <span className="text-primary">Anagata IT Solutions</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Pioneering the future of automation in India, one innovation at a time.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Passion", description: "Driven by innovation and excellence" },
                { icon: Trophy, title: "Excellence", description: "Committed to delivering the best" },
                { icon: Users, title: "Collaboration", description: "Growing together with our clients" }
              ].map((value, index) => (
                <div 
                  key={value.title} 
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Rajesh Kumar", role: "CEO", image: "https://i.pravatar.cc/150?img=1" },
                { name: "Priya Sharma", role: "CTO", image: "https://i.pravatar.cc/150?img=2" },
                { name: "Amit Patel", role: "Head of Innovation", image: "https://i.pravatar.cc/150?img=3" },
                { name: "Neha Gupta", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=4" }
              ].map((member, index) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "1000+", label: "Projects Completed" },
                { number: "50+", label: "Team Members" },
                { number: "24/7", label: "Support" }
              ].map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 9) * 100}ms` }}
                >
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Appointment Booking Section */}
        <AppointmentBooking />

        {/* CTA Section */}
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white rounded-lg shadow-lg p-12 opacity-0 animate-fade-in" style={{ animationDelay: "1300ms" }}>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of businesses that have already revolutionized their operations with our AI solutions.
              </p>
              <Button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
