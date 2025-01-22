import { AppointmentBooking } from "@/components/AppointmentBooking";
import { FAQ } from "@/components/FAQ";
import { HowItWorks } from "@/components/HowItWorks";
import { Map } from "@/components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-gray-700">
            Have questions about our services? We'd love to hear from you. Our team is ready to help transform your business with AI automation.
          </p>
        </div>
        
        <Map />
        <HowItWorks />
        <AppointmentBooking />
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;