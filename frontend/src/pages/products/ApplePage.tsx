import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'm interested in Apple iPhones/iPads at Gadget Zone Chennai. Please share the latest models and prices.";

interface ApplePageProps {
  onNavigate?: (path: string) => void;
}

export default function ApplePage({ onNavigate }: ApplePageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Apple iPhones & iPads in Chennai | Gadget Zone',
      description:
        'Buy genuine Apple iPhones and iPads at Gadget Zone Chennai. Authorized reseller with official warranty, EMI options, and best prices. Call +91 98400 77591.',
      canonical: '/products/apple',
      ogUrl: '/products/apple',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Apple', url: '/products/apple' },
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/assets/generated/logo-apple-color-padded.dim_256x128.png"
              alt="Apple Logo"
              className="h-20 w-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Apple Products at Gadget Zone</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Authorized Apple reseller in Chennai. Shop the latest iPhones, iPads, and Apple accessories with genuine warranty and flexible EMI options.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="apple_page">
                <Phone className="w-4 h-4 mr-2" /> Call for Price
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="apple_page">
                <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* iPhone Models */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">iPhone Models Available</h2>
          <p className="text-muted-foreground mb-6">
            From the budget-friendly iPhone 14 to the cutting-edge iPhone 16 Pro Max, we stock the complete Apple iPhone lineup. All models come with Apple's official 1-year warranty and are eligible for AppleCare+ coverage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'iPhone 16 Pro Max', price: 'From ₹1,34,900', tag: 'Latest' },
              { model: 'iPhone 16 Pro', price: 'From ₹1,19,900', tag: 'Latest' },
              { model: 'iPhone 16', price: 'From ₹79,900', tag: 'Latest' },
              { model: 'iPhone 16 Plus', price: 'From ₹89,900', tag: 'Latest' },
              { model: 'iPhone 15', price: 'From ₹69,900', tag: 'Popular' },
              { model: 'iPhone 14', price: 'From ₹56,900', tag: 'Value' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.tag === 'Latest' ? 'bg-primary/10 text-primary' :
                    item.tag === 'Popular' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>{item.tag}</span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* iPad Offerings */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">iPad Offerings</h2>
          <p className="text-muted-foreground mb-6">
            Explore the full range of Apple iPads — from the entry-level iPad to the powerful iPad Pro with M4 chip. Perfect for students, professionals, and creative users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'iPad Pro M4', price: 'From ₹99,900' },
              { model: 'iPad Air M2', price: 'From ₹59,900' },
              { model: 'iPad (10th Gen)', price: 'From ₹34,900' },
              { model: 'iPad mini (6th Gen)', price: 'From ₹46,900' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-1">{item.model}</h3>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Buy Apple from Gadget Zone?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Authorized Apple reseller — 100% genuine products',
              'Official Apple warranty on all devices',
              'Zero-cost EMI available on all models',
              'Exchange your old device for best value',
              'Expert after-sales support and service',
              'Competitive pricing — price match guarantee',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="apple_page_bottom">
                <Phone className="w-4 h-4 mr-2" /> Book Now: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="apple_page_bottom">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
