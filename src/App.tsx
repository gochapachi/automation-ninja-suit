import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/admin/Dashboard";
import MarketingAutomation from "./pages/services/MarketingAutomation";
import SalesAutomation from "./pages/services/SalesAutomation";
import HRAutomation from "./pages/services/HRAutomation";
import SupportAutomation from "./pages/services/SupportAutomation";
import AccountsAutomation from "./pages/services/AccountsAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/marketing" element={<MarketingAutomation />} />
          <Route path="/services/sales" element={<SalesAutomation />} />
          <Route path="/services/hr" element={<HRAutomation />} />
          <Route path="/services/support" element={<SupportAutomation />} />
          <Route path="/services/accounts" element={<AccountsAutomation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;