import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", contactForm);
    // Reset form after submission
    setContactForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-6xl mx-auto bg-[#0A0B1D] text-white rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Have questions about our security solutions? Our team is here to help you implement the right protection for your AI systems.</p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email Us</h3>
                <p className="text-gray-300">support@kavaro-ai.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Office</h3>
                <p className="text-gray-300">123 Tech Lane, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1F2937]/50 p-6 rounded-xl border border-white/5">
          <h3 className="text-xl font-bold mb-4">Send us a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <Input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-[#1F2937] rounded-lg border border-white/10 focus:border-accent outline-none transition-colors" 
                placeholder="Your name" 
                value={contactForm.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <Input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-[#1F2937] rounded-lg border border-white/10 focus:border-accent outline-none transition-colors" 
                placeholder="Your email" 
                value={contactForm.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <Textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 bg-[#1F2937] rounded-lg border border-white/10 focus:border-accent outline-none transition-colors" 
                placeholder="How can we help you?" 
                value={contactForm.message}
                onChange={handleInputChange}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
