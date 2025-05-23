import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="bg-[var(--light-background)] text-[var(--light-kavaro)] py-16 md:py-24 rounded-b-3xl">
      <div className="max-w-6xl mx-auto px-6 fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--light-kavaro)]">
            AI-Powered Insurance Management, Made Simple.
          </h1>
          <p className="text-[var(--light-kavaro)] opacity-80 text-lg mb-8">
            Kavaro AI helps non-risk professionals manage COIs, contracts, and other insurance documents with confidence — through secure workflows, intelligent automation, and an interface anyone can use.
          </p>
          <div className="flex justify-center mt-8">
            <Button className="bg-[var(--light-ai)] hover:bg-[var(--light-ai)]/90 text-white px-6 py-6 h-auto text-base rounded-md font-medium">
              Contact Us to Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
