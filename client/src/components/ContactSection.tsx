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
    <section id="contact" className="py-16 md:py-24 px-6 max-w-7xl mx-auto bg-white text-[#0F1C3E]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Rebuild Risk Together</h2>
          <p className="text-gray-600 mb-6">Whether you're a broker, client, or risk leader — we'll show you what connected risk management really looks like.</p>
          
          <div className="bg-[#2B8C74]/10 p-8 rounded-xl mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#2B8C74]/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-[#2B8C74]" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Connect With Our Risk Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form and our team will get back to you within one business day. We'd love to show you how Kavaro AI can transform unstructured risk data into a strategic advantage for every stakeholder in your insurance ecosystem.
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Available for demos and questions</p>
              <p className="text-sm text-gray-500">Monday - Friday, 9AM - 5PM PT</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">Send us a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <Input 
                type="text" 
                id="name" 
                className="w-full p-3 bg-white dark:bg-[#0F1C3E]/60 rounded-lg border border-gray-200 dark:border-[#2B8C74]/20 focus:border-[#2B8C74] outline-none transition-colors text-[#0F1C3E] dark:text-white" 
                placeholder="Your name" 
                value={contactForm.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <Input 
                type="email" 
                id="email" 
                className="w-full p-3 bg-white dark:bg-[#0F1C3E]/60 rounded-lg border border-gray-200 dark:border-[#2B8C74]/20 focus:border-[#2B8C74] outline-none transition-colors text-[#0F1C3E] dark:text-white" 
                placeholder="Your email" 
                value={contactForm.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <Textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 bg-white dark:bg-[#0F1C3E]/60 rounded-lg border border-gray-200 dark:border-[#2B8C74]/20 focus:border-[#2B8C74] outline-none transition-colors text-[#0F1C3E] dark:text-white" 
                placeholder="How can we help you?" 
                value={contactForm.message}
                onChange={handleInputChange}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#2B8C74] hover:bg-[#2B8C74]/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
