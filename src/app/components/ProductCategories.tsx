import {
  Soup,
  Cookie,
  ChefHat,
  Package,
  Nut,
  Droplet,
  Flame,
  Wheat,
  Apple,
  HeartPulse,
} from 'lucide-react';

const categories = [
  { icon: Soup, title: 'Spices & Masala' },
  { icon: Cookie, title: 'Namkeen & Snacks' },
  { icon: ChefHat, title: 'Ready-to-Cook Foods' },
  { icon: Package, title: 'Packaged Foods' },
  { icon: Nut, title: 'Dry Fruits & Nuts' },
  { icon: Droplet, title: 'Edible Oils' },
  { icon: Flame, title: 'Instant Mix Products' },
  { icon: Wheat, title: 'Bakery Ingredients' },
  { icon: Apple, title: 'Pickles & Traditional Foods' },
  { icon: HeartPulse, title: 'Health & Millet Products' },
];

export function ProductCategories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#333333]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            FMCG Categories We Distribute
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#F4B400] mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-[#D32F2F] hover:to-[#B71C1C] transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-[#F4B400] transition-colors">
                    <Icon className="h-8 w-8 text-[#D32F2F] group-hover:text-white transition-colors" />
                  </div>
                  <h4
                    className="text-[#333333] group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {category.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
