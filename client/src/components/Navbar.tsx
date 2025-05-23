import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { KavaroLogoLight } from "./KavaroLogoEnhanced";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
  
  // Check for saved theme preference or use system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDark(prevState => {
      const newState = !prevState;
      if (newState) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newState;
    });
  };

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
      <header className={`fixed w-full top-0 z-50 ${isScrolled ? "bg-white/95 dark:bg-[#0F1C3E]/95 backdrop-blur-md border-b border-gray-100 dark:border-[#2B8C74]/10 shadow-sm" : "bg-white dark:bg-[#0F1C3E]"} transition-all duration-300`}>
        <div className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="flex items-center">
              <KavaroLogoLight size={40} />
            </div>
            <div className="hidden md:flex items-center ml-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#2B8C74]/10 text-[#2B8C74] dark:bg-[#2B8C74]/20 dark:text-[#2B8C74]">Beta</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-[#0F1C3E] dark:text-gray-200 hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium">Home</a>
            <a href="#about" className="text-[#0F1C3E] dark:text-gray-200 hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium">About</a>
            <a href="#contact" className="text-[#0F1C3E] dark:text-gray-200 hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">

            <Button className="bg-[var(--light-background)] hover:bg-gray-100 text-[#2B8C74] dark:bg-[#0F1C3E]/20 dark:hover:bg-[#0F1C3E]/30 dark:text-white font-medium border border-gray-200 dark:border-[#2B8C74]/20 px-4 rounded-full">
              Sign Up
            </Button>
            <button 
              className="md:hidden text-gray-800 dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0F1C3E] z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-[#0F1C3E] dark:text-white"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <nav className="flex flex-col gap-8 text-xl">
          <a href="#" className="text-[#0F1C3E] dark:text-white hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium" onClick={closeMenu}>Home</a>
          <a href="#about" className="text-[#0F1C3E] dark:text-white hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium" onClick={closeMenu}>About</a>
          <a href="#contact" className="text-[#0F1C3E] dark:text-white hover:text-[#2B8C74] dark:hover:text-[#2B8C74] transition-colors font-medium" onClick={closeMenu}>Contact</a>
          <div className="mt-6 flex justify-center">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0F1C3E]/10 hover:bg-[#0F1C3E]/20 text-[#0F1C3E] dark:bg-white/10 dark:hover:bg-white/20 dark:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
