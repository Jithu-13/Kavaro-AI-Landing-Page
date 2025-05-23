import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="bg-[var(--light-background)] text-[var(--light-kavaro)] pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-black">
            AI-Powered Insurance <span className="text-[var(--light-ai)]">Management</span>, Made Simple.
          </h1>
          <p className="text-gray-800 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Kavaro AI helps non-risk professionals manage COIs, contracts, and other insurance documents with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button className="bg-[var(--light-ai)] hover:bg-[var(--light-ai)]/90 text-white px-8 py-7 h-auto text-lg rounded-full font-medium min-w-[200px]">
              Contact Us
            </Button>
            <a href="#about" className="text-[var(--light-ai)] text-lg font-medium underline underline-offset-4 hover:text-[var(--light-ai)]/80 transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
