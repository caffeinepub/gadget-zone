import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft, Wrench, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I need to book a mobile repair service at Gadget Zone Chennai. Can you help?";

interface RepairPageProps {
  onNavigate?: (path: string) => void;
}

export default function RepairPage({ onNavigate }: RepairPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Mobile Repair Services in Chennai | Gadget Zone',
      description:
        'Professional mobile phone repair services in Chennai at Gadget Zone. Screen replacement, battery, charging port, water damage repair with genuine parts and 90-day warranty. Call +91 98400 77591.',
      canonical: '/services/repair',
      ogUrl: '/services/repair',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Mobile Repair', url: '/services/repair' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate('/services');
    else window.location.href = '/services';
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  const repairServices = [
    { name: 'Screen Replacement', desc: 'Cracked or broken display? We replace screens for all brands with genuine parts.', time: '1–2 hours' },
    { name: 'Battery Replacement', desc: 'Poor battery life or swollen battery? Get a genuine replacement battery installed.', time: '30–60 mins' },
    { name: 'Charging Port Repair', desc: 'Phone not charging? We fix or replace charging ports for all models.', time: '1–2 hours' },
    { name: 'Water Damage Recovery', desc: 'Dropped your phone in water? Our technicians can recover water-damaged devices.', time: '24–48 hours' },
    { name: 'Software Issues', desc: 'Phone stuck, slow, or not booting? We fix software problems and restore your data.', time: '1–3 hours' },
    { name: 'Speaker & Mic Repair', desc: 'Can\'t hear calls or people can\'t hear you? We repair speakers and microphones.', time: '1–2 hours' },
    { name: 'Camera Repair', desc: 'Blurry photos or camera not working? We fix front and rear camera issues.', time: '1–2 hours' },
    { name: 'Back Glass Replacement', desc: 'Cracked back glass? We replace back panels for premium smartphones.', time: '2–3 hours' },
  ];

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
              <Wrench className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Professional Mobile Repair Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Expert repair for all smartphone brands in Chennai. Genuine parts, certified
                technicians, and 90-day warranty on all repairs at Gadget Zone Thiruvanmiyur.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="repair_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Book Repair: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="repair_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp to Book
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: 'Same-Day Service', desc: 'Most repairs completed within 2–4 hours' },
            { icon: Shield, title: '90-Day Warranty', desc: 'All repairs backed by our service warranty' },
            { icon: CheckCircle, title: 'Genuine Parts', desc: 'Only original or OEM-quality parts used' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Repair Services */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Repair Services</h2>
          <p className="text-muted-foreground mb-6">
            We repair all major smartphone brands including Apple, Samsung, OnePlus, Motorola,
            Realme, Vivo, Xiaomi, and more. Our certified technicians use genuine parts to ensure
            your device works like new.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repairServices.map((service) => (
              <div key={service.name} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0 ml-2">
                    {service.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brands We Repair */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Brands We Repair</h2>
          <p className="text-muted-foreground mb-6">
            Our technicians are trained to repair all major smartphone brands. Whether you have an
            iPhone, Samsung Galaxy, OnePlus, or any other brand, we have the expertise and parts to
            fix it.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Apple iPhone', 'Samsung Galaxy', 'OnePlus', 'Motorola', 'Realme', 'Vivo', 'Xiaomi / Redmi', 'OPPO', 'Nokia', 'All Other Brands'].map((brand) => (
              <span key={brand} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Book Your Repair Today</h2>
          <p className="text-muted-foreground mb-6">
            Don't let a broken phone slow you down. Visit us at Gadget Zone, Thiruvanmiyur, or
            contact us to book your repair appointment. We offer free diagnosis for all devices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Free diagnosis for all devices',
              'Transparent pricing — no hidden charges',
              'Genuine parts with warranty',
              'Data safety guaranteed',
              'Walk-in or appointment available',
              'Express repair for urgent cases',
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
                data-ga-context="repair_page_bottom"
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
                data-ga-context="repair_page_bottom"
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
