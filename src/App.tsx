
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
import Blogs from "./pages/admin/Blogs";
import CRM from "./pages/admin/CRM";
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Index />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navigation />
                <About />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navigation />
                <Services />
              </>
            }
          />
          <Route
            path="/services/marketing"
            element={
              <>
                <Navigation />
                <MarketingAutomation />
              </>
            }
          />
          <Route
            path="/services/sales"
            element={
              <>
                <Navigation />
                <SalesAutomation />
              </>
            }
          />
          <Route
            path="/services/hr"
            element={
              <>
                <Navigation />
                <HRAutomation />
              </>
            }
          />
          <Route
            path="/services/support"
            element={
              <>
                <Navigation />
                <SupportAutomation />
              </>
            }
          />
          <Route
            path="/services/accounts"
            element={
              <>
                <Navigation />
                <AccountsAutomation />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navigation />
                <Blog />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navigation />
                <Contact />
              </>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<Blogs />} />
          <Route path="/admin/crm" element={<CRM />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
