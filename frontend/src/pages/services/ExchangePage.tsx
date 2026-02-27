import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'd like to know about the mobile exchange and upgrade offers at Gadget Zone Chennai.";

interface ExchangePageProps {
  onNavigate?: (path: string) => void;
}

export default function ExchangePage({ onNavigate }: ExchangePageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Mobile Exchange & Upgrade in Chennai | Gadget Zone',
      description:
        'Get the best exchange value for your old smartphone at Gadget Zone Chennai. Instant valuation, transparent pricing, and upgrade to any new model. Call +91 98400 77591.',
      canonical: '/services/exchange',
      ogUrl: '/services/exchange',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Exchange & Upgrade', url: '/services/exchange' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate('/services');
    else window.location.href = '/services';
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
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <RefreshCw className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Mobile Exchange &amp; Upgrade Program
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Get the best value for your old smartphone and upgrade to the latest model at
                Gadget Zone Chennai. Instant valuation, transparent pricing, and seamless exchange.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="exchange_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Get Exchange Value: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="exchange_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp for Valuation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How the Exchange Process Works</h2>
          <p className="text-muted-foreground mb-6">
            Our exchange process is simple, transparent, and hassle-free. We accept all brands and
            conditions, and offer the best market value for your old device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Bring Your Phone', desc: 'Visit our store with your old smartphone and original accessories.' },
              { step: '2', title: 'Free Evaluation', desc: 'Our experts assess your device condition and provide an instant valuation.' },
              { step: '3', title: 'Get Best Price', desc: 'We offer the best market price for your old device — no hidden deductions.' },
              { step: '4', title: 'Upgrade & Go', desc: 'Apply the exchange value to your new phone purchase and walk out happy.' },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-xl p-5 border border-border shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">What Affects Your Exchange Value?</h2>
          <p className="text-muted-foreground mb-6">
            We evaluate your device based on several factors to give you the most accurate and fair
            valuation. Here's what we consider:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { factor: 'Device Condition', desc: 'Screen condition, body scratches, and overall physical state of the device.' },
              { factor: 'Age of Device', desc: 'Newer devices generally fetch higher exchange values.' },
              { factor: 'Brand & Model', desc: 'Premium brands like Apple and Samsung typically have higher resale values.' },
              { factor: 'Functionality', desc: 'All features working properly increases the exchange value significantly.' },
              { factor: 'Original Accessories', desc: 'Having original box, charger, and earphones can increase the value.' },
              { factor: 'Storage Capacity', desc: 'Higher storage variants command better exchange prices.' },
            ].map((item) => (
              <div key={item.factor} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-1">{item.factor}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Exchange Benefits at Gadget Zone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Best exchange value guaranteed',
              'All brands and conditions accepted',
              'Instant on-the-spot valuation',
              'Transparent pricing — no hidden deductions',
              'Exchange value applied immediately',
              'Upgrade to any brand or model',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="exchange_page_bottom"
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
                data-ga-context="exchange_page_bottom"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
