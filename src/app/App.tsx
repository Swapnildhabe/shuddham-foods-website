import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BusinessHighlights } from './components/BusinessHighlights';
import { ProductCategories } from './components/ProductCategories';
import { MarketCoverage } from './components/MarketCoverage';
import { WhyPartner } from './components/WhyPartner';
import { BrandPartnership } from './components/BrandPartnership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <HeroSection />
      <BusinessHighlights />
      <ProductCategories />
      <MarketCoverage />
      <WhyPartner />
      <BrandPartnership />
      <ContactSection />
      <Footer />
      <FloatingElements />
    </div>
  );
}
