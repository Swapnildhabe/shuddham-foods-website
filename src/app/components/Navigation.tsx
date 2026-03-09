import { useState, useEffect } from 'react';
import { Package } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-[#D32F2F] p-2 rounded-lg">
              <Package className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Shuddham Food's Distribution Network
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#333333] hover:text-[#D32F2F] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#333333] hover:text-[#D32F2F] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="text-[#333333] hover:text-[#D32F2F] transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('partnership')}
              className="text-[#333333] hover:text-[#D32F2F] transition-colors"
            >
              Partnership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#333333] hover:text-[#D32F2F] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('partnership')}
            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
