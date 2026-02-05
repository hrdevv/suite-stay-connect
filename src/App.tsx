import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ApartmentsHome from "./pages/apartments/ApartmentsHome";
import ApartmentsAbout from "./pages/apartments/ApartmentsAbout";
import ApartmentsServices from "./pages/apartments/ApartmentsServices";
import ApartmentsListings from "./pages/apartments/ApartmentsListings";
import ApartmentDetail from "./pages/apartments/ApartmentDetail";
import ApartmentsContact from "./pages/apartments/ApartmentsContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApartmentsHome />} />
          <Route path="/apartments" element={<ApartmentsHome />} />
          <Route path="/apartments/about" element={<ApartmentsAbout />} />
          <Route path="/apartments/services" element={<ApartmentsServices />} />
          <Route path="/apartments/listings" element={<ApartmentsListings />} />
          <Route path="/apartments/room/:id" element={<ApartmentDetail />} />
          <Route path="/apartments/contact" element={<ApartmentsContact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
