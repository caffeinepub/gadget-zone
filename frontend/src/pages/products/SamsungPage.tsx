import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'm interested in Samsung Galaxy smartphones at Gadget Zone Chennai. Please share the latest models and prices.";

interface SamsungPageProps {
  onNavigate?: (path: string) => void;
}

export default function SamsungPage({ onNavigate }: SamsungPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Samsung Galaxy Phones & Tablets in Chennai | Gadget Zone',
      description:
        'Buy Samsung Galaxy S, A, and M series smartphones in Chennai at Gadget Zone. Official channel partner with genuine warranty, EMI options, and best prices. Call +91 98400 77591.',
      canonical: '/products/samsung',
      ogUrl: '/products/samsung',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Samsung', url: '/products/samsung' },
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
            <img src="/assets/generated/logo-samsung-color-padded.dim_256x128.png" alt="Samsung Logo" className="h-20 w-auto object-contain bg-white rounded-2xl p-4 shadow-sm" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Samsung Galaxy Series at Gadget Zone</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Official Samsung channel partner in Chennai. Shop the complete Galaxy lineup — from flagship S series to budget M series — with genuine warranty and service support.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="samsung_page">
                <Phone className="w-4 h-4 mr-2" /> Call for Price
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="samsung_page">
                <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Samsung Flagship Models — Galaxy S Series</h2>
          <p className="text-muted-foreground mb-6">
            The Samsung Galaxy S series represents the pinnacle of Android innovation. With cutting-edge camera systems, powerful Snapdragon/Exynos processors, and premium build quality, these phones deliver an unmatched experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Galaxy S25 Ultra', price: 'From ₹1,29,999', tag: 'Flagship' },
              { model: 'Galaxy S25+', price: 'From ₹99,999', tag: 'Flagship' },
              { model: 'Galaxy S25', price: 'From ₹79,999', tag: 'Flagship' },
              { model: 'Galaxy Z Fold 6', price: 'From ₹1,64,999', tag: 'Foldable' },
              { model: 'Galaxy Z Flip 6', price: 'From ₹99,999', tag: 'Foldable' },
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Budget & Mid-Range — Galaxy A & M Series</h2>
          <p className="text-muted-foreground mb-6">
            Samsung's Galaxy A and M series offer excellent value with premium features at accessible price points. Perfect for everyday users who want reliability and performance without breaking the bank.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Galaxy A55 5G', price: 'From ₹34,999', tag: 'Mid-Range' },
              { model: 'Galaxy A35 5G', price: 'From ₹26,999', tag: 'Mid-Range' },
              { model: 'Galaxy A15 5G', price: 'From ₹16,999', tag: 'Budget' },
              { model: 'Galaxy M55 5G', price: 'From ₹29,999', tag: 'Mid-Range' },
              { model: 'Galaxy M35 5G', price: 'From ₹19,999', tag: 'Budget' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tag === 'Mid-Range' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{item.tag}</span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Buy Samsung from Gadget Zone?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Official Samsung channel partner — 100% genuine',
              'Samsung official warranty on all devices',
              'No-cost EMI on all Galaxy models',
              'Best exchange value for your old phone',
              'Samsung authorized service support',
              'Exclusive launch day availability',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a href={PHONE_HREF} onClick={() => trackCallConversion()} data-ga-event="call_click" data-ga-context="samsung_page_bottom">
                <Phone className="w-4 h-4 mr-2" /> Call: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppConversion()} data-ga-event="whatsapp_click" data-ga-context="samsung_page_bottom">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
