import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="bg-[#FAFAFA] text-[#111827] py-16 md:py-24 rounded-b-3xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 fade-in">
        <div className="max-w-xl mt-6 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111827]">
            AI-Powered Insurance Management, Made Simple.
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Kavaro AI helps non-risk professionals manage COIs, contracts, and other insurance documents with confidence — through secure workflows, intelligent automation, and an interface anyone can use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6 h-auto text-base rounded-md">
              Contact Us to Learn More
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src="/assets/kavaro-logo.png" 
            alt="Kavaro AI Logo" 
            className="w-64 md:w-80 hero-animation"
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  );
}
