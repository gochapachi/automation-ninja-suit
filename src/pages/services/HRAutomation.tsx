import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HRAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/services')}
          className="mb-8 hover:bg-primary/10"
        >
          ← Back to Services
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">HR Automation</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Transform your HR operations with intelligent automation solutions designed to streamline processes and enhance employee experience.
          </p>

          <div className="grid gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Automated recruitment process</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Employee onboarding automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Leave management system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Improved efficiency</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Better employee experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Reduced paperwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Enhanced compliance</span>
                </li>
              </ul>
            </div>
          </div>

          <Button 
            className="mt-8 w-full sm:w-auto"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Get Started with HR Automation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HRAutomation;