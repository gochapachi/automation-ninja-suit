import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({ label, children, className }: FormFieldProps) => (
  <div className={cn("group perspective-1000", className)}>
    <Label className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
      {label}
    </Label>
    {children}
  </div>
);