import { Users, Target, Zap, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { AppointmentBooking } from "@/components/AppointmentBooking";

const HRAutomation = () => {
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
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">HR Automation</h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Transform your HR processes with intelligent automation solutions designed to enhance employee experience and operational efficiency.
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

      {/* What is HR Automation */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is HR Automation?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600">
                  HR automation leverages advanced technology to streamline human resource processes, from recruitment to employee management, enabling your HR team to focus on strategic initiatives and employee development.
                </p>
                <p className="text-gray-600">
                  Our solution combines AI-powered tools with proven HR practices to help you achieve better results with less administrative burden.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Recruitment Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Employee Onboarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Performance Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Payroll Processing</span>
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
                title: "Assessment",
                description: "Analyze your current HR processes and needs"
              },
              {
                icon: Zap,
                title: "Implementation",
                description: "Deploy customized HR automation solutions"
              },
              {
                icon: Users,
                title: "Training & Support",
                description: "Comprehensive training and ongoing support"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our HR Automation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enhanced Efficiency",
                  description: "Streamline HR processes and reduce manual work"
                },
                {
                  title: "Better Compliance",
                  description: "Ensure regulatory compliance and documentation"
                },
                {
                  title: "Improved Experience",
                  description: "Enhanced employee and candidate experience"
                },
                {
                  title: "Data-Driven Insights",
                  description: "Make informed HR decisions with analytics"
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
                quote: "The HR automation platform has transformed our recruitment process. Highly recommended!",
                author: "Emily Rodriguez",
                role: "HR Director"
              },
              {
                quote: "We've reduced our HR administrative work by 70% since implementing these solutions.",
                author: "James Wilson",
                role: "Head of HR"
              },
              {
                quote: "The team's expertise in HR automation has significantly improved our efficiency.",
                author: "Priya Sharma",
                role: "CHRO"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of businesses that have revolutionized their HR processes with our automation solutions.
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

export default HRAutomation;