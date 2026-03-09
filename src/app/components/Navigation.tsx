import { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false); // close menu after click
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
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-[#D32F2F] p-2 rounded-lg">
              <Package className="h-7 w-7 text-white" />
            </div>
            <h1
              className="text-lg md:text-xl font-bold text-[#333333] leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Shuddham Food's Distribution Network
            </h1>
          </div>

         {/* Desktop Navigation + CTA */}
<div
  className="hidden md:flex items-center gap-10"
  style={{ fontFamily: 'Inter, sans-serif' }}
>
  <button
    onClick={() => scrollToSection('home')}
    className="text-[#333] hover:text-[#D32F2F] transition-colors"
  >
    Home
  </button>

  <button
    onClick={() => scrollToSection('about')}
    className="text-[#333] hover:text-[#D32F2F] transition-colors"
  >
    About
  </button>

  <button
    onClick={() => scrollToSection('categories')}
    className="text-[#333] hover:text-[#D32F2F] transition-colors"
  >
    Categories
  </button>

  <button
    onClick={() => scrollToSection('partnership')}
    className="text-[#333] hover:text-[#D32F2F] transition-colors"
  >
    Partnership
  </button>

  <button
    onClick={() => scrollToSection('contact')}
    className="text-[#333] hover:text-[#D32F2F] transition-colors"
  >
    Contact
  </button>

  {/* CTA Button */}
  <Button
  onClick={() => scrollToSection('partnership')}
  className="ml-4 mr-5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6"
>
  Partner With Us
</Button>
</div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#333]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div
            className="flex flex-col items-center gap-6 py-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <button onClick={() => scrollToSection('home')} className="text-[#333] hover:text-[#D32F2F]">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#333] hover:text-[#D32F2F]">
              About
            </button>
            <button onClick={() => scrollToSection('categories')} className="text-[#333] hover:text-[#D32F2F]">
              Categories
            </button>
            <button onClick={() => scrollToSection('partnership')} className="text-[#333] hover:text-[#D32F2F]">
              Partnership
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#333] hover:text-[#D32F2F]">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}