import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ResetPasswordFormProps {
  email: string;
  setEmail: (email: string) => void;
  onBack: () => void;
}

export const ResetPasswordForm = ({ email, setEmail, onBack }: ResetPasswordFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Password reset email sent",
        description: "Check your email for the password reset link",
      });
      onBack();
    } catch (error: any) {
      console.error("Reset password error:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
        <div>
          <Input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send reset instructions"}
          </Button>
          <Button
            type="button"
            variant="link"
            onClick={onBack}
          >
            Back to login
          </Button>
        </div>
      </form>
    </div>
  );
};