import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock } from "lucide-react";

export default function HeroSection() {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-28 max-w-6xl mx-auto fade-in">
      <div className="max-w-xl mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Securing <span className="gradient-text">AI Solutions</span> for Tomorrow
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          We provide advanced security for AI applications, ensuring robust protection and reliability for your systems in an increasingly complex digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6 h-auto text-base">
            Get Started
          </Button>
          <Button variant="outline" className="border-gray-700 bg-[#1F2937]/50 hover:bg-[#1F2937] px-6 py-6 h-auto text-base">
            Learn More
          </Button>
        </div>
        
        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text">99.9%</h3>
            <p className="text-sm text-gray-400">Uptime guarantee</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold gradient-text">500+</h3>
            <p className="text-sm text-gray-400">Enterprise clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold gradient-text">24/7</h3>
            <p className="text-sm text-gray-400">Dedicated support</p>
          </div>
        </div>
      </div>

      <div className="relative hero-animation">
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-accent/5 flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent/10 flex items-center justify-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-accent/20 flex items-center justify-center">
              <div className="text-accent text-6xl md:text-7xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 bg-[#1F2937] p-3 rounded-lg shadow-lg hover-scale">
          <CheckCircle2 className="h-6 w-6 text-accent" />
        </div>
        <div className="absolute bottom-4 -left-8 bg-[#1F2937] p-3 rounded-lg shadow-lg hover-scale">
          <Lock className="h-6 w-6 text-accent" />
        </div>
      </div>
    </main>
  );
}
