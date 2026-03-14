import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ModulesSection from "@/components/landing/ModulesSection";
import PricingSection from "@/components/landing/PricingSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemsSection />
    <SolutionSection />
    <ModulesSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
