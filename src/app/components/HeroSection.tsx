import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] pt-28 md:pt-32 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F4B400] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-white">
            <h1
              className="text-5xl md:text-6xl mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Reliable FMCG Distribution in Beed City
            </h1>
            <p
              className="text-xl mb-8 text-white/90 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Shuddham Distribution Network connects FMCG brands with retailers across Beed city through
              organized distribution and strong local market relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('partnership')}
                className="bg-[#F4B400] hover:bg-[#E0A800] text-[#333333] px-8 py-6 text-lg"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg backdrop-blur-sm"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  10+
                </div>
                <div className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Product Categories
                </div>
              </div>
              <div>
                <div className="text-3xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  100%
                </div>
                <div className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Beed Market Focus
                </div>
              </div>
              <div>
                <div className="text-3xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  24/7
                </div>
                <div className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Support Available
                </div>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzcyODE1NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="FMCG distribution logistics"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#F4B400] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Trusted Partner
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif' }}>Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
