import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="bg-white dark:bg-[#0F1C3E] text-[#0F1C3E] dark:text-white pt-36 pb-20 md:pt-48 md:pb-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-[#0F1C3E] dark:text-white">
            AI-Powered Insurance <span className="text-[#2B8C74]">Management</span>, Made Simple.
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Kavaro AI helps non-risk professionals manage COIs, contracts, and other insurance documents with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button className="bg-[#2B8C74] hover:bg-[#2B8C74]/90 text-white px-8 py-7 h-auto text-lg rounded-full font-medium min-w-[200px]">
              Contact Us
            </Button>
            <a href="#about" className="text-[#2B8C74] text-lg font-medium underline underline-offset-4 hover:text-[#2B8C74]/80 transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
