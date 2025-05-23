import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ComparisonSection from "@/components/ComparisonSection";
import DocumentUploadDemo from "@/components/DocumentUploadDemo";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <div className="bg-[var(--light-background)] text-[var(--light-kavaro)]">
        <ComparisonSection />
        <DocumentUploadDemo />
        <FeaturesSection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
