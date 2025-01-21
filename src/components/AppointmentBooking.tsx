import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "react-intersection-observer";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const AppointmentBooking = () => {
  const [date, setDate] = useState<Date>();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
          <p className="text-gray-600">Schedule a meeting with our experts to discuss your needs</p>
        </div>
        <form 
          ref={ref}
          className={`mx-auto max-w-xl transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" className="w-full">Book Appointment</Button>
          </div>
        </form>
      </div>
    </section>
  );
};