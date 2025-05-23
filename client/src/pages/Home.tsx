import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="bg-[var(--light-background)] text-[var(--light-kavaro)]">
        <Navbar />
      </div>
      <HeroSection />
      <div className="bg-[var(--light-background)] text-[var(--light-kavaro)]">
        <FeaturesSection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
