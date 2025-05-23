import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className={`sticky top-0 z-50 ${isScrolled ? "bg-[var(--dark-background)]/90 backdrop-blur-sm border-b border-white/10" : "bg-[var(--dark-background)]"} transition-all duration-300`}>
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Kavaro <span className="text-[var(--dark-ai)]">AI</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="bg-[var(--dark-ai)] hover:bg-[var(--dark-ai)]/90 text-white font-medium">
              Sign Up
            </Button>
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[#0A0B1D] z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-gray-300 hover:text-white"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <nav className="flex flex-col gap-8 text-xl text-gray-300">
          <a href="#" className="hover:text-white transition-colors" onClick={closeMenu}>Home</a>
          <a href="#about" className="hover:text-white transition-colors" onClick={closeMenu}>About</a>
          <a href="#contact" className="hover:text-white transition-colors" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
}
