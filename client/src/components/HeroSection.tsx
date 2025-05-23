import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="bg-white dark:bg-[#0F1C3E] text-[#0F1C3E] dark:text-white pt-36 pb-20 md:pt-48 md:pb-32 transition-colors duration-300 overflow-hidden">
      {/* Background gradient effect - Apple style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#2B8C74]/5 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#0F1C3E]/5 to-transparent blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="bg-[#2B8C74]/10 text-[#2B8C74] text-sm font-medium px-4 py-1.5 rounded-full">Risk Management Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#0F1C3E] dark:text-white">
            Secure Risk Intelligence,<br />
            <span className="text-[#2B8C74] font-medium">Built for Every Stakeholder</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Kavaro AI unifies risk and insurance data into a secure, AI-powered system — automating workflows, surfacing insights, and protecting compliance from intake to audit.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <Button className="bg-[#2B8C74] hover:bg-[#2B8C74]/90 text-white px-8 py-6 h-auto text-lg rounded-full font-medium min-w-[200px] shadow-lg hover:shadow-xl transition-all">
              Contact Us
            </Button>
            <a href="#comparison" className="text-[#2B8C74] dark:text-[#2B8C74] text-lg flex items-center gap-2 hover:gap-3 transition-all group">
              <span className="font-normal">Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
