import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "react-intersection-observer";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

const funnyPlaceholders = {
  company: "Evil Corp™ (just kidding!)",
  name: "Your Superhero Name",
  email: "definitely.not.a.robot@human.com",
};

const funnyLabels = {
  service: "Pick Your Poison",
  company: "Secret Identity (Company Name)",
  name: "Who's The Boss?",
  email: "Where Should We Send The Memes?",
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-bounce">Let's Make Magic Happen! ✨</h2>
          <p className="text-gray-600 animate-pulse">No boring forms here - promise!</p>
        </div>
        <form 
          ref={ref}
          onSubmit={handleSubmit}
          className={`mx-auto max-w-xl transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.service}
              </label>
              <Select>
                <SelectTrigger className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:rotate-1">
                  <SelectValue placeholder="Choose your destiny..." />
                </SelectTrigger>
                <SelectContent className="animate-bounce">
                  <SelectItem value="marketing">Marketing Wizardry</SelectItem>
                  <SelectItem value="sales">Sales Sorcery</SelectItem>
                  <SelectItem value="hr">Human Resources Magic</SelectItem>
                  <SelectItem value="support">Support Spells</SelectItem>
                  <SelectItem value="accounts">Accounting Alchemy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.company}
              </label>
              <Input 
                type="text" 
                placeholder={funnyPlaceholders.company}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
              />
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.name}
              </label>
              <Input 
                type="text" 
                placeholder={funnyPlaceholders.name}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:rotate-1"
              />
            </div>

            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                Phone Number (For Emergency Meme Delivery! 📱)
              </label>
              <Input 
                type="tel" 
                placeholder="Your Bat-Signal Number"
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
              />
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.email}
              </label>
              <Input 
                type="email" 
                placeholder={funnyPlaceholders.email}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1"
              />
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.size}
              </label>
              <Select>
                <SelectTrigger className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:rotate-1">
                  <SelectValue placeholder="How mighty is your army?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">Tiny but Mighty (1-10)</SelectItem>
                  <SelectItem value="11-50">Growing Legion (11-50)</SelectItem>
                  <SelectItem value="51-200">Small Army (51-200)</SelectItem>
                  <SelectItem value="201-500">Major Force (201-500)</SelectItem>
                  <SelectItem value="500+">Empire Status (500+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.source}
              </label>
              <Select>
                <SelectTrigger className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:-rotate-1">
                  <SelectValue placeholder="Reveal your sources..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="search">Google (The All-Seeing Eye)</SelectItem>
                  <SelectItem value="social">Social Media Scrolling Marathon</SelectItem>
                  <SelectItem value="referral">A Little Bird Told Me</SelectItem>
                  <SelectItem value="advertisement">Caught in Our Web of Ads</SelectItem>
                  <SelectItem value="other">It Came to Me in a Dream</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="group perspective-1000">
              <label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                {funnyLabels.date}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:rotate-1",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a legendary date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="animate-bounce"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <Button 
              type="submit" 
              className="w-full transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white"
            >
              🚀 Launch Your Request Into Space!
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};