import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-[var(--light-background)] relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[var(--light-ai)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-[var(--light-ai)]/5 rounded-full blur-3xl"></div>
        <Shield className="absolute bottom-20 left-[15%] text-[var(--light-ai)]/3 h-32 w-32 transform -rotate-12" />
        <Shield className="absolute top-20 right-[15%] text-[var(--light-ai)]/3 h-20 w-20 transform rotate-12" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-black">
            Ready to Take Control of Your Insurance Documents?
          </h2>
          
          <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Kavaro AI gives your team the security, clarity, and simplicity you've been missing. Let's show you how.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button className="bg-[var(--light-ai)] hover:bg-[var(--light-ai)]/90 text-white px-8 py-7 h-auto text-lg rounded-full font-medium min-w-[200px] flex items-center justify-center gap-2 group">
              Book a Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-800 px-8 py-7 h-auto text-lg rounded-full font-medium min-w-[200px]">
              Contact Us
            </Button>
          </div>
          
          <p className="text-gray-600 text-lg">
            No risk expertise needed.
          </p>
        </div>
      </div>
    </section>
  );
}