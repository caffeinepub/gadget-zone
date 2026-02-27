import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'm interested in Xiaomi/Redmi smartphones at Gadget Zone Chennai. Please share the latest models and prices.";

interface XiaomiPageProps {
  onNavigate?: (path: string) => void;
}

export default function XiaomiPage({ onNavigate }: XiaomiPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Xiaomi & Redmi Phones in Chennai | Gadget Zone',
      description:
        'Buy Xiaomi flagship and Redmi budget smartphones in Chennai at Gadget Zone. Best value for money with genuine warranty and EMI options. Call +91 98400 77591.',
      canonical: '/products/xiaomi',
      ogUrl: '/products/xiaomi',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Xiaomi', url: '/products/xiaomi' },
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
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/assets/generated/logo-xiaomi-color.dim_256x128.png"
              alt="Xiaomi Logo"
              className="h-20 w-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Xiaomi &amp; Redmi Smartphones at Gadget Zone
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Best specs-to-price ratio in the market. Xiaomi flagship and Redmi budget series
                available at Gadget Zone Chennai with genuine warranty and easy EMI.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="xiaomi_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Call for Price
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="xiaomi_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* Xiaomi Flagship */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Xiaomi Flagship Series
          </h2>
          <p className="text-muted-foreground mb-6">
            Xiaomi's flagship lineup delivers premium performance with Snapdragon 8 Gen processors,
            Leica-tuned cameras, and fast charging technology. These phones compete directly with
            top-tier brands at a fraction of the price.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Xiaomi 14', price: 'From ₹69,999', tag: 'Flagship' },
              { model: 'Xiaomi 14 Ultra', price: 'From ₹99,999', tag: 'Ultra' },
              { model: 'POCO F6 Pro', price: 'From ₹49,999', tag: 'Performance' },
              { model: 'POCO X6 Pro', price: 'From ₹26,999', tag: 'Mid-Range' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary">
                    {item.tag}
                  </span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Redmi Note Series */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Redmi Note &amp; Budget Series
          </h2>
          <p className="text-muted-foreground mb-6">
            The Redmi Note series is one of India's most popular smartphone lineups, offering
            excellent cameras, large batteries, and smooth performance at budget-friendly prices.
            Perfect for value-conscious buyers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { model: 'Redmi Note 13 Pro+', price: 'From ₹29,999', tag: 'Mid-Range' },
              { model: 'Redmi Note 13 Pro', price: 'From ₹24,999', tag: 'Mid-Range' },
              { model: 'Redmi Note 13', price: 'From ₹17,999', tag: 'Budget' },
              { model: 'Redmi 13C 5G', price: 'From ₹10,999', tag: 'Entry' },
            ].map((item) => (
              <div key={item.model} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.model}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.tag === 'Mid-Range' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Why Buy Xiaomi/Redmi from Gadget Zone?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Genuine Xiaomi/Redmi products with official warranty',
              'Best specs-to-price ratio in the market',
              'Easy EMI options on all models',
              'Best exchange value for your old phone',
              'Expert guidance on model selection',
              'Authorized service center support',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="xiaomi_page_bottom"
              >
                <Phone className="w-4 h-4 mr-2" /> Call: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="xiaomi_page_bottom"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
