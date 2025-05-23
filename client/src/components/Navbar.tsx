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
      <header className={`fixed w-full top-0 z-50 ${isScrolled ? "bg-[var(--light-background)]/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-[var(--light-background)]"} transition-all duration-300`}>
        <div className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight text-black">Kavaro <span className="text-[var(--light-ai)]">AI</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="bg-[var(--light-background)] hover:bg-gray-100 text-[var(--light-ai)] font-medium border border-gray-200 px-4 rounded-full">
              Sign Up
            </Button>
            <button 
              className="md:hidden text-gray-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[var(--light-background)] z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-gray-800"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <nav className="flex flex-col gap-8 text-xl">
          <a href="#" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium" onClick={closeMenu}>Home</a>
          <a href="#about" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium" onClick={closeMenu}>About</a>
          <a href="#contact" className="text-gray-800 hover:text-[var(--light-ai)] transition-colors font-medium" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
}
