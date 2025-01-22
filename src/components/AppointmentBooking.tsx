import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { FormField } from "./appointment/FormField";
import { ServiceSelect } from "./appointment/ServiceSelect";
import { CompanySizeSelect } from "./appointment/CompanySizeSelect";
import { SourceSelect } from "./appointment/SourceSelect";
import { DatePicker } from "./appointment/DatePicker";

const funnyPlaceholders = {
  company: "Evil Corp™ (just kidding!)",
  name: "Your Superhero Name",
  email: "definitely.not.a.robot@human.com",
  phone: "Your Bat-Signal Number",
};

const funnyLabels = {
  service: "Pick Your Poison",
  company: "Secret Identity (Company Name)",
  name: "Who's The Boss?",
  email: "Where Should We Send The Memes?",
  phone: "Phone Number (For Emergency Meme Delivery! 📱)",
  size: "How Big Is Your Empire?",
  source: "How Did You Find Our Secret Lair?",
  date: "When Shall We Plot World Domination?",
};

export const AppointmentBooking = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 Mission Accomplished!",
      description: "Our carrier pigeons are on their way with your confirmation. (Just kidding, we'll email you)",
    });
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-bounce">Let's Make Magic Happen! ✨</h2>
          <p className="text-gray-600 animate-pulse">No boring forms here - promise!</p>
        </div>
        <form 
          ref={ref}
          onSubmit={handleSubmit}
          className={`mx-auto max-w-4xl bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-xl transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <FormField label={funnyLabels.service}>
                <ServiceSelect />
              </FormField>
              
              <FormField label={funnyLabels.company}>
                <Input 
                  type="text" 
                  placeholder={funnyPlaceholders.company}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
                />
              </FormField>
              
              <FormField label={funnyLabels.name}>
                <Input 
                  type="text" 
                  placeholder={funnyPlaceholders.name}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:rotate-1"
                />
              </FormField>

              <FormField label={funnyLabels.phone}>
                <Input 
                  type="tel" 
                  placeholder={funnyPlaceholders.phone}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
                />
              </FormField>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <FormField label={funnyLabels.email}>
                <Input 
                  type="email" 
                  placeholder={funnyPlaceholders.email}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
                />
              </FormField>
              
              <FormField label={funnyLabels.size}>
                <CompanySizeSelect />
              </FormField>
              
              <FormField label={funnyLabels.source}>
                <SourceSelect />
              </FormField>
              
              <FormField label={funnyLabels.date}>
                <DatePicker date={date} setDate={setDate} />
              </FormField>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-8 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white"
          >
            🚀 Launch Your Request Into Space!
          </Button>
        </form>
      </div>
    </section>
  );
};