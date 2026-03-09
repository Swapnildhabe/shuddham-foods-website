import { Handshake, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function BrandPartnership() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F4B400] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-8">
          <Handshake className="h-16 w-16 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Looking for FMCG Brand Partnerships
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          We welcome FMCG manufacturers and product suppliers who want to expand their presence in the Beed
          market through a focused distribution partner.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-[#F4B400] hover:bg-[#E0A800] text-[#333333] px-8 py-6 text-lg"
          >
            Become a Brand Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => window.open('https://wa.me/917276536111', '_blank')}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg backdrop-blur-sm"
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🎯
            </div>
            <h4 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Market Entry
            </h4>
            <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seamless entry into Beed retail market
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              📈
            </div>
            <h4 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Sales Growth
            </h4>
            <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Strategic distribution for maximum reach
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🤝
            </div>
            <h4 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Long-term Partnership
            </h4>
            <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Committed relationship for mutual growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
