import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1C3E] border-t border-[#2B8C74]/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#2B8C74]/20 flex items-center justify-center">
                <span className="text-[#2B8C74] text-lg font-bold">K</span>
              </div>
              <span className="text-xl font-semibold text-white">Kavaro <span className="text-[#2B8C74]">AI</span></span>
            </div>
            <p className="text-gray-300 text-sm">Simplifying insurance document management with intelligent automation and secure workflows.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Document Management</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Policy Tracking</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">COI Verification</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Compliance Suite</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#2B8C74] transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2B8C74]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">© 2025 Kavaro AI. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-[#2B8C74] transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#2B8C74] transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#2B8C74] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#2B8C74] transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
