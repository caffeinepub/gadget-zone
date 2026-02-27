import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'm interested in Motorola smartphones at Gadget Zone Chennai. Please share the latest models and prices.";

interface MotorolaPageProps {
  onNavigate?: (path: string) => void;
}

export default function MotorolaPage({ onNavigate }: MotorolaPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Motorola Smartphones in Chennai | Gadget Zone',
      description:
        'Buy Motorola Edge, G-series, and Razr smartphones in Chennai at Gadget Zone. Best prices, exchange offers, and EMI options available. Call +91 98400 77591.',
      canonical: '/products/motorola',
      ogUrl: '/products/motorola',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Motorola', url: '/products/motorola' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate('/products');
    else window.location.href = '/products';
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <button onClick={handleBack} className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/assets/generated/logo-motorola-color-padded.dim_256x128.png" alt="Motorola Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-4 shadow-sm" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Motorola Smartphones at Gadget Zone</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Pure Android experience with long software support. Motorola Edge, G-series, and Razr foldables available in Chennai with exchange offers and easy EMI.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="motorola_page">
                <Phone className="w-4 h-4 mr-2" /> Call for Price
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="motorola_page">
                <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Motorola Edge Series</h2>
          <p className="text-muted-foreground mb-6">
            The Motorola Edge series delivers flagship-level performance at mid-range prices. Featuring stunning pOLED displays, powerful Snapdragon processors, and impressive camera systems, the Edge series is perfect for power users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Motorola Edge 50 Pro', price: 'From ₹31,999', tag: 'Premium' },
              { model: 'Motorola Edge 50 Fusion', price: 'From ₹22,999', tag: 'Mid-Range' },
              { model: 'Motorola Edge 50 Neo', price: 'From ₹19,999', tag: 'Mid-Range' },
              { model: 'Motorola Razr 50 Ultra', price: 'From ₹99,999', tag: 'Foldable' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary">{item.tag}</span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Motorola G-Series — Best Value</h2>
          <p className="text-muted-foreground mb-6">
            The Motorola G-series offers reliable performance, clean Android software, and long battery life at budget-friendly prices. Ideal for first-time smartphone buyers and everyday users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Moto G85 5G', price: 'From ₹17,999', tag: 'Budget' },
              { model: 'Moto G64 5G', price: 'From ₹13,999', tag: 'Budget' },
              { model: 'Moto G54 5G', price: 'From ₹11,999', tag: 'Budget' },
              { model: 'Moto G34 5G', price: 'From ₹9,999', tag: 'Entry' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">{item.tag}</span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Motorola from Gadget Zone?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Genuine Motorola products with official warranty',
              'Best exchange value for your old smartphone',
              'Easy EMI options available',
              'Stock availability guaranteed',
              'Expert advice on model selection',
              'After-sales service support',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="motorola_page_bottom">
                <Phone className="w-4 h-4 mr-2" /> Call: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="motorola_page_bottom">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
