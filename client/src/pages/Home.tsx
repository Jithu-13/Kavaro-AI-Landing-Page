import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ComparisonSection from "@/components/ComparisonSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0F1C3E] transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <div className="bg-white dark:bg-[#0F1C3E] text-[#0F1C3E] dark:text-white">
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
