import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CompanySizeSelect = () => (
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
);