import { Lightbulb, Target, TrendingUp, MessageSquare } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Strong Local Market Knowledge',
    description: 'Deep understanding of Beed city retail landscape and consumer preferences',
  },
  {
    icon: Target,
    title: 'Focused Retail Distribution Strategy',
    description: 'Specialized approach targeting the right retail channels for maximum reach',
  },
  {
    icon: TrendingUp,
    title: 'Dedicated Brand Growth Support',
    description: 'Committed to helping your brand establish and grow presence in Beed market',
  },
  {
    icon: MessageSquare,
    title: 'Reliable Communication with Partners',
    description: 'Transparent updates, regular reporting, and responsive partnership management',
  },
];

export function WhyPartner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Brands Choose Shuddham Distribution Network
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#F4B400] mx-auto"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#D32F2F] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-4 rounded-xl flex-shrink-0">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-4xl mb-2 text-[#D32F2F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ✓
            </div>
            <div className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Reliable Partner
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Trusted by brands across categories
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-[#F4B400]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ✓
            </div>
            <div className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Market Focused
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              100% dedicated to Beed market
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-[#D32F2F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ✓
            </div>
            <div className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Growth Oriented
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Committed to brand success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
