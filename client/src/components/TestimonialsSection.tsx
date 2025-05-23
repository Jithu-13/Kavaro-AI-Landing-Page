import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kavaro AI turned our risk chaos into structure. Now I can answer underwriter questions in minutes.",
    author: "Jordan L.",
    title: "Risk Analyst, SwiftEvents"
  },
  {
    quote: "We use it to collaborate with clients — they finally know what we know.",
    author: "Mark R.",
    title: "Commercial Insurance Broker, Allied Risk"
  },
  {
    quote: "Our vendors upload docs. Kavaro handles the rest. It's not just automation — it's assurance.",
    author: "Carla V.",
    title: "Compliance Lead, RiseWare Logistics"
  }
];

const companies = ["Allied Risk", "Bridge & Bond Brokers", "SwiftEvents", "RiseWare Logistics"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#0F1C3E] text-white border-b border-[#2B8C74]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Trusted by Risk Professionals, Brokers, and Fast-Growing Teams
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-10 w-10 text-[#2B8C74]/40" />
              <div className="mb-8 relative z-10">
                <p className="text-white leading-relaxed text-lg font-light">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#2B8C74]/20 flex items-center justify-center mr-4 border border-[#2B8C74]/30">
                  <span className="text-[#2B8C74] text-xl font-medium">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-white text-lg">{testimonial.author}</p>
                  <p className="text-sm text-[#2B8C74]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center border-t border-white/10 pt-12">
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Trusted by growing teams in events, logistics, retail, and construction who need a simpler way to manage insurance documents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm text-white font-light hover:bg-[#2B8C74]/20 transition-all duration-300 border border-white/5">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}