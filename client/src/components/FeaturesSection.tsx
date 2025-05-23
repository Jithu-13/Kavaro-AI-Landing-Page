import { ShieldCheck, Clock, Fingerprint } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Adversarial Defense",
    description: "Protect your AI models from targeted attacks with our advanced adversarial defense system."
  },
  {
    icon: <Clock className="h-6 w-6 text-accent" />,
    title: "Real-time Monitoring",
    description: "Continuous surveillance of your AI systems with instant alerts for suspicious activities."
  },
  {
    icon: <Fingerprint className="h-6 w-6 text-accent" />,
    title: "Data Encryption",
    description: "End-to-end encryption for all AI training data and model parameters to prevent unauthorized access."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Security Features</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Our platform delivers cutting-edge protection mechanisms designed specifically for AI systems and machine learning models.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1F2937]/50 p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover-scale">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
          View all features
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}
