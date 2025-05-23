import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I had no background in risk management, but Kavaro AI made it effortless to stay compliant. Total game-changer.",
    author: "Jordan L.",
    title: "HR Manager, SwiftEvents"
  },
  {
    quote: "We used to track COIs in spreadsheets. Now everything is auto-tagged, secure, and just...works.",
    author: "Nina P.",
    title: "Ops Coordinator, Apex Builders"
  },
  {
    quote: "I don't have to chase vendors anymore. The alerts and dashboard keep everything on track.",
    author: "Chris M.",
    title: "Safety Lead, RiseWare"
  }
];

const companies = ["Apex Builders", "SwiftEvents", "RiseWare", "Metro Health"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-[#0F1C3E] to-[#0A0B1D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Trusted by Teams Who Just Needed a Better Way
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1A2B4A] p-6 rounded-xl border border-[#B6E1C4]/10 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#B6E1C4]/20" />
              <div className="mb-6 relative z-10">
                <p className="text-gray-200 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#B6E1C4]/20 flex items-center justify-center mr-3">
                  <span className="text-[#B6E1C4] text-lg font-medium">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center border-t border-white/10 pt-12">
          <p className="text-gray-400 mb-8">
            Trusted by growing teams in events, logistics, retail, and construction.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="text-[#B6E1C4] font-medium opacity-80 hover:opacity-100 transition-opacity">
                [ {company} ]
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}