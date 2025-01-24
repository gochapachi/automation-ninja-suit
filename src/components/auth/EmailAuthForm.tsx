import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface EmailAuthFormProps {
  email: string;
  setEmail: (email: string) => void;
  isSignUp: boolean;
  onResetPassword: () => void;
  onToggleMode: () => void;
  onSuccess: (user: any) => void;
}

export const EmailAuthForm = ({
  email,
  setEmail,
  isSignUp,
  onResetPassword,
  onToggleMode,
  onSuccess,
}: EmailAuthFormProps) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: {
              email,
            },
          },
        });

        if (error) {
          if (error.message.includes("User already registered")) {
            toast({
              title: "Account exists",
              description: "This email is already registered. Please sign in instead.",
              variant: "destructive",
            });
            onToggleMode();
          } else {
            throw error;
          }
        } else if (data.user) {
          toast({
            title: "Success",
            description: "Account created successfully. Please check your email for verification.",
          });
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              title: "Login failed",
              description: "Invalid email or password. Please try again or reset your password.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        } else if (data.user) {
          onSuccess(data.user);
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
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
    <form className="mt-8 space-y-6" onSubmit={handleEmailAuth}>
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <Input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign in"}
        </Button>

        {!isSignUp && (
          <Button type="button" variant="link" onClick={onResetPassword}>
            Forgot your password?
          </Button>
        )}
      </div>
    </form>
  );
};