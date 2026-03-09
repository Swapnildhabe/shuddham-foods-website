import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#F4B400] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to expand your brand in Beed market? Contact us to discuss partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-4 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Phone Number
                  </h4>
                  <a
                    href="tel:+917276536111"
                    className="text-lg text-[#D32F2F] hover:text-[#B71C1C]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +91 7276536111
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-[#F4B400] p-4 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Email Address
                  </h4>
                  <a
                    href="mailto:shuddhamfoodsfmcg@gmail.com"
                    className="text-lg text-[#D32F2F] hover:text-[#B71C1C] break-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    shuddhamfoodsfmcg@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-4 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Location
                  </h4>
                  <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Beed, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA & Image */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl p-8 text-white shadow-lg">
             <img src="/whatsapp.svg" className="h-7 w-7" alt="WhatsApp" />
              <h3 className="text-2xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Response on WhatsApp
              </h3>
              <p className="mb-6 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get instant answers to your partnership queries. Chat with us directly on WhatsApp.
              </p>
              <Button
                onClick={() => window.open('https://wa.me/917276536111', '_blank')}
                className="bg-white hover:bg-gray-100 text-[#128C7E]"
              >
                <img src="/whatsapp.svg" className="h-6 w-6" alt="WhatsApp" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwbG9naXN0aWNzfGVufDF8fHx8MTc3Mjg1NjczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Delivery logistics"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
