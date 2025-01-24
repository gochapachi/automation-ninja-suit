import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { EmailAuthForm } from "@/components/auth/EmailAuthForm";
import { SocialAuthButton } from "@/components/auth/SocialAuthButton";
import { AuthLayout } from "@/components/auth/AuthLayout";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      if (session?.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (profile?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log("Current user:", user);
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profile?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  const handleAuthSuccess = async (user: any) => {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    toast({
      title: "Success",
      description: "Logged in successfully",
    });

    if (profile?.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  };

  if (isResetPassword) {
    return (
      <ResetPasswordForm
        email={email}
        setEmail={setEmail}
        onBack={() => setIsResetPassword(false)}
      />
    );
  }

  return (
    <AuthLayout title={isSignUp ? "Create your account" : "Sign in to your account"}>
      <EmailAuthForm
        email={email}
        setEmail={setEmail}
        isSignUp={isSignUp}
        onResetPassword={() => setIsResetPassword(true)}
        onToggleMode={() => setIsSignUp(!isSignUp)}
        onSuccess={handleAuthSuccess}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-50 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>

      <SocialAuthButton />

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-sm"
        >
          {isSignUp
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Auth;