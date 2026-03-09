import { Target, Package, Users, Truck } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Focused Market Coverage',
    description: 'Beed city retail distribution focus',
  },
  {
    icon: Package,
    title: 'FMCG Product Segments',
    description: 'Multiple food product categories',
  },
  {
    icon: Users,
    title: 'Dedicated Sales Team',
    description: 'Retail relationship development',
  },
  {
    icon: Truck,
    title: 'Reliable Distribution',
    description: 'Efficient product supply network',
  },
];

export function BusinessHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-4 rounded-lg w-fit mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {highlight.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
