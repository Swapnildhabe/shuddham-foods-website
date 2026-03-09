import { MapPin, Store, TrendingUp } from 'lucide-react';

export function MarketCoverage() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Focused Retail Distribution in Beed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#F4B400] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Shuddham Distribution Network specializes in FMCG food distribution exclusively in Beed city,
              Maharashtra. Our focused approach allows us to build deep relationships with local retailers
              including grocery stores, supermarkets, and traditional markets.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Strategic Location
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Based in Beed, Maharashtra, with comprehensive coverage of the local retail market
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F4B400] p-3 rounded-lg flex-shrink-0">
                  <Store className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Retail Network
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Strong relationships with grocery stores, supermarkets, and local markets across Beed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Market Growth
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Helping FMCG brands expand their presence and grow sales in the Beed market
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1606824722920-4c652a70f348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjByZXRhaWwlMjBzaGVsdmVzfGVufDF8fHx8MTc3Mjg4NjU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Retail grocery shelves"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-[#D32F2F] rounded-xl p-6 text-white">
                <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Beed City
                </div>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Maharashtra, India
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-[#F4B400] rounded-xl p-6 text-white">
                <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Local Focus
                </div>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Deep market knowledge
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1757802261994-3c31584daafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYXJrZXQlMjBncm9jZXJ5fGVufDF8fHx8MTc3Mjg4NjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian market grocery"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
