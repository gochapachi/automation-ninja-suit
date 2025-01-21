import { BarChart3, Users, Target, Zap, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { AppointmentBooking } from "@/components/AppointmentBooking";

const MarketingAutomation = () => {
  const navigate = useNavigate();
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Marketing Automation</h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Transform your marketing efforts with our AI-powered automation solutions designed to enhance engagement and drive results.
            </p>
            <Button 
              size="lg"
              className="animate-fade-up"
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* What is Marketing Automation */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is Marketing Automation?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Marketing automation is the use of software and AI-powered tools to automate repetitive marketing tasks, streamline workflows, and measure the success of your marketing campaigns.
                </p>
                <p className="text-gray-600">
                  Our solution combines cutting-edge technology with proven marketing strategies to help you achieve better results with less effort.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Email Marketing Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Lead Scoring & Nurturing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Campaign Analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Setup & Integration",
                description: "We integrate our automation tools with your existing marketing stack"
              },
              {
                icon: Zap,
                title: "Automation Creation",
                description: "Design and implement custom automation workflows"
              },
              {
                icon: Users,
                title: "Monitor & Optimize",
                description: "Continuously monitor performance and optimize for better results"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div 
            ref={benefitsRef}
            className={`max-w-4xl mx-auto transform transition-all duration-700 ${
              benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Marketing Automation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  description: "Save time and resources by automating repetitive tasks"
                },
                {
                  title: "Better Lead Quality",
                  description: "Improve lead scoring and qualification processes"
                },
                {
                  title: "Enhanced Personalization",
                  description: "Deliver personalized content to your audience"
                },
                {
                  title: "Measurable Results",
                  description: "Track and measure your marketing ROI effectively"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "The marketing automation tools have transformed how we reach our customers. Highly recommended!",
                author: "Sarah Johnson",
                role: "Marketing Director"
              },
              {
                quote: "We've seen a 40% increase in qualified leads since implementing these automation solutions.",
                author: "Mike Chen",
                role: "Sales Manager"
              },
              {
                quote: "The team's expertise in marketing automation has been invaluable to our growth.",
                author: "Lisa Patel",
                role: "CEO"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <div id="appointment">
        <AppointmentBooking />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of businesses that have revolutionized their marketing operations with our automation solutions.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAutomation;