import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SourceSelect = () => (
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
);