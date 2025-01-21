import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MarketingAutomation = () => {
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
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Marketing Automation</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Transform your marketing efforts with our automated solutions designed to enhance engagement and drive results.
          </p>

          <div className="grid gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Automated brand creative generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Scheduled social media posting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Dynamic content generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Analytics and performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Increased engagement rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Time and resource savings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Consistent brand messaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>Better ROI on marketing efforts</span>
                </li>
              </ul>
            </div>
          </div>

          <Button 
            className="mt-8 w-full sm:w-auto"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Get Started with Marketing Automation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomation;