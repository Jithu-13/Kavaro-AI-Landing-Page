import { Button } from "@/components/ui/button";
import { Zap, Layers, Award, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Rapid Implementation",
    description: "Get your security system up and running in minutes, not days or weeks."
  },
  {
    icon: <Layers className="h-6 w-6 text-accent" />,
    title: "Seamless Integration",
    description: "Works with all major AI frameworks and platforms with minimal configuration."
  },
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Compliance Ready",
    description: "Meet regulatory requirements with comprehensive security controls and detailed audit logs."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-accent" />,
    title: "Cost Effective",
    description: "Pay only for what you need with flexible pricing plans that scale with your business."
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#0A0B1D] to-[#1F2937]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Advantages</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Making insurance document management accessible, reliable, and effective for businesses of all sizes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-accent/10 p-2 rounded-lg">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#1F2937]/80 rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to secure your AI?</h3>
              <p className="text-gray-300">Start protecting your AI systems today with our risk-free trial.</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-6 h-auto">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
