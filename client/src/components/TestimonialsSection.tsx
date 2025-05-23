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
    <section id="testimonials" className="py-20 md:py-32 bg-[#0F1C3E] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Trusted by Teams Who Just Needed a Better Way
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#0F1C3E]/80 p-8 rounded-xl border border-[#2B8C74]/20 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 h-10 w-10 text-[#2B8C74]/30" />
              <div className="mb-8 relative z-10">
                <p className="text-white italic leading-relaxed text-lg">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#2B8C74]/20 flex items-center justify-center mr-4">
                  <span className="text-[#2B8C74] text-xl font-medium">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-white text-lg">{testimonial.author}</p>
                  <p className="text-sm text-[#2B8C74]/80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center border-t border-[#2B8C74]/20 pt-12">
          <p className="text-gray-300 mb-8">
            Trusted by growing teams in events, logistics, retail, and construction.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="text-[#2B8C74] font-medium opacity-80 hover:opacity-100 transition-opacity">
                [ {company} ]
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}