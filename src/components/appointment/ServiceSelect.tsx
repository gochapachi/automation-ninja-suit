import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ServiceSelect = () => (
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
);