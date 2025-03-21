
import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features-5";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";

import WallofLoveSection from "@/components/testimonials";
import CallToActionSection from "@/components/call-to-action";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      
        <HeroSection />
        <FeaturesSection />
        <StatsSection />    
        <TestimonialsSection />
        <WallofLoveSection />
        <Pricing />
        <CallToActionSection /> 
        <Footer />
    </div>
  );
}
