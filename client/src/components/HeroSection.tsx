import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <main className="bg-[#FAFAFA] text-[#111827] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 fade-in">
        <div className="max-w-xl mt-6 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111827]">
            Securing AI Solutions
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            We provide advanced security for AI applications, ensuring robust protection and reliability for your systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6 h-auto text-base rounded-md">
              Get Started
            </Button>
          </div>
          
          <div className="mt-12">
            <a href="#about" className="text-gray-700 hover:text-accent flex items-center transition-colors">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/assets/kavaro-logo.svg" 
            alt="Kavaro AI Logo" 
            className="w-52 md:w-72 hero-animation"
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  );
}
