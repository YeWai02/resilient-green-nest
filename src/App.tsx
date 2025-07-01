
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Hyflo from "./pages/Hyflo";
import GreenPoints from "./pages/GreenPoints";
import Insurance from "./pages/Insurance";
import Community from "./pages/Community";
import Donate from "./pages/Donate";
import Partners from "./pages/Partners";
import GetInvolved from "./pages/GetInvolved";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TranslationProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-earth-beige">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/hyflo" element={<Hyflo />} />
                <Route path="/green-points" element={<GreenPoints />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/community" element={<Community />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </TranslationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
