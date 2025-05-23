import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B1D] text-white font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
