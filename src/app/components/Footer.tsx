import { Package, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#8B1414] to-[#5C0F0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F4B400] p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Shuddham
                </h3>
              </div>
            </div>
            <p className="text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Delivering Trust to Every Retail Shelf
            </p>
            <p className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              FMCG food distribution company serving the Beed market, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('categories')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partnership')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Partnership
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Product Categories
            </h4>
            <ul className="space-y-3 text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Spices & Masala</li>
              <li>Namkeen & Snacks</li>
              <li>Ready-to-Cook Foods</li>
              <li>Packaged Foods</li>
              <li>Dry Fruits & Nuts</li>
              <li>Edible Oils</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Information
            </h4>
            <ul className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                <a href="tel:+917276536111" className="text-white/80 hover:text-white text-sm">
                  +91 7276536111
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:shuddhamfoodsfmcg@gmail.com"
                  className="text-white/80 hover:text-white text-sm break-all"
                >
                  shuddhamfoodsfmcg@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Beed, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Shuddham Distribution Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
