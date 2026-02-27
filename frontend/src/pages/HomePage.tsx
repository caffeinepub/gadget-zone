import { useEffect, useRef } from 'react';
import { TickerBanner } from '../components/TickerBanner';
import { BusinessHighlightsStrip } from '../components/BusinessHighlightsStrip';
import { HotPickSection } from '../components/HotPickSection';
import { MobileCareSmartUsageGuideSection } from '../components/MobileCareSmartUsageGuideSection';
import { WhatsAppQuickMessages } from '../components/WhatsAppQuickMessages';
import { SafeImage } from '../components/SafeImage';
import { versionAsset } from '../lib/assetVersion';
import { updateSEO } from '../lib/seoHelpers';
import { getLocalBusinessSchema, injectStructuredData } from '../lib/structuredData';
import { Phone, MessageCircle, ArrowRight, Star, Shield, RefreshCw, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '919840077591';

const SERVICE_CARDS = [
  {
    id: 'new-mobiles',
    title: 'New Mobiles',
    image: '/assets/generated/card-new-mobiles-premium.dim_1200x800.jpg',
    desc: 'Latest smartphones from Apple, Samsung, Motorola, OnePlus & more.',
    whatsapp: 'Hi, I am interested in buying a new mobile phone.',
  },
  {
    id: 'service-repair',
    title: 'Service & Repair',
    image: '/assets/generated/card-service-repair.dim_1200x800.jpg',
    desc: 'Expert repair for all brands. Screen, battery, charging port & more.',
    whatsapp: 'Hi, I need mobile repair service.',
  },
  {
    id: 'exchange-upgrade',
    title: 'Exchange & Upgrade',
    image: '/assets/generated/card-exchange-upgrade.dim_1200x800.jpg',
    desc: 'Get the best value for your old phone and upgrade to the latest.',
    whatsapp: 'Hi, I want to exchange my old phone.',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: '/assets/generated/card-accessories.dim_1200x800.jpg',
    desc: 'Cases, chargers, earphones, power banks, smartwatches & more.',
    whatsapp: 'Hi, I am looking for mobile accessories.',
  },
  {
    id: 'cctv',
    title: 'CCTV Solutions',
    image: '/assets/CCTV-IMAGE.png',
    desc: 'HD CCTV cameras for homes and shops. Supply & installation.',
    whatsapp: 'Hi, I am interested in CCTV installation.',
  },
  {
    id: 'emi-finance',
    title: 'EMI & Finance',
    image: '/assets/generated/card-emi-finance.dim_1200x800.jpg',
    desc: 'Flexible EMI options to make your dream phone affordable.',
    whatsapp: 'Hi, I want to know about EMI options.',
  },
];

const BRAND_LOGOS = [
  { name: 'Apple', src: '/assets/generated/logo-apple-color-padded.dim_256x128.png' },
  { name: 'Samsung', src: '/assets/generated/logo-samsung-color-padded.dim_256x128.png' },
  { name: 'Motorola', src: '/assets/generated/logo-motorola-color-padded.dim_256x128.png' },
  { name: 'OnePlus', src: '/assets/generated/logo-oneplus-color-padded.dim_256x128.png' },
  { name: 'Realme', src: '/assets/generated/logo-realme-color-padded.dim_256x128.png' },
  { name: 'Vivo', src: '/assets/generated/logo-vivo-color.dim_256x128.png' },
  { name: 'Xiaomi', src: '/assets/generated/logo-xiaomi-color.dim_256x128.png' },
  { name: 'CCTV', src: '/assets/generated/cctv-brand-logo.dim_200x80.png' },
  { name: 'Nothing Mobile', src: '/assets/generated/nothing-mobile-logo.dim_200x80.png' },
];

const TRUST_ITEMS = [
  { icon: Shield, label: 'Genuine Products', desc: 'Authorized dealer for all major brands' },
  { icon: Star, label: 'Expert Technicians', desc: 'Certified repair professionals' },
  { icon: RefreshCw, label: 'Best Exchange Value', desc: 'Fair price for your old device' },
  { icon: CreditCard, label: 'Easy EMI', desc: 'Flexible payment options available' },
];

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    updateSEO({
      title: 'Gadget Zone – Mobile Phones, Repair & CCTV | Thiruvanmiyur, Chennai',
      description:
        'Gadget Zone in Thiruvanmiyur, Chennai – Buy new mobiles (Apple, Samsung, Motorola, OnePlus), get expert repair, exchange & upgrade, accessories, CCTV installation, and EMI options.',
      canonical: '/',
      ogUrl: '/',
    });
    injectStructuredData(getLocalBusinessSchema(), 'local-business-ld');
  }, []);

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Ticker */}
      <TickerBanner />

      {/* Hero */}
      <section
        ref={heroRef}
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800"
        aria-label="Hero section"
      >
        {/* Hero Image */}
        <div className="w-full">
          <SafeImage
            src={versionAsset('/assets/generated/hero-mobiles-accessories.dim_1600x900.jpg')}
            alt="Gadget Zone – Mobile Phones, Accessories, Repairs & CCTV Solutions"
            className="w-full h-auto object-cover max-h-[520px] block"
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/30 flex items-end">
          <div className="w-full container mx-auto px-4 max-w-5xl py-10 flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-4 inline-block">
              <img
                src="/assets/Gadget Zone-Logo.png"
                alt="Gadget Zone Logo"
                className="h-20 md:h-28 w-auto object-contain mx-auto"
                style={{ maxWidth: '360px' }}
              />
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              Gadget Zone
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl drop-shadow">
              Your Trusted Mobile Store for Phones, Accessories, Repairs &amp; CCTV Solutions
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                onClick={() => handleWhatsApp('Hi, I want to know more about Gadget Zone services.')}
                data-ga-event="cta_click"
                data-ga-context="hero"
                data-ga-label="whatsapp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                className="bg-white text-neutral-900 hover:bg-white/90 border-0 font-semibold"
                asChild
              >
                <a href="tel:9840077591" data-ga-event="cta_click" data-ga-context="hero" data-ga-label="call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <BusinessHighlightsStrip />

      {/* Brand Logos */}
      <section className="py-10 px-4 bg-muted/50" aria-label="Brands we carry">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Brands We Carry
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {BRAND_LOGOS.map((brand) => (
              <div key={brand.name} className="bg-card rounded-xl px-5 py-3 shadow-sm border border-border flex items-center justify-center" style={{ minWidth: '120px', minHeight: '72px' }}>
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOT PICK */}
      <section id="hot-pick-section" aria-label="Hot Pick">
        <HotPickSection />
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4" aria-label="Our services">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Our Services</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Everything you need for your mobile phone and home security – in one place.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card) => (
              <article
                key={card.id}
                id={card.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <SafeImage
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{card.desc}</p>
                  <button
                    onClick={() => handleWhatsApp(card.whatsapp)}
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    data-ga-event="service_enquiry"
                    data-ga-label={card.id}
                  >
                    Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          {onNavigate && (
            <div className="text-center mt-8">
              <Button variant="outline" onClick={() => onNavigate('/services')}>
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/50 py-14 px-4" aria-label="Why choose us">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Why Choose Gadget Zone?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Care Guide */}
      <section id="tips" aria-label="Mobile care tips">
        <MobileCareSmartUsageGuideSection />
      </section>

      {/* Contact CTA — Visit Us Today */}
      <section id="contact" className="bg-primary py-14 px-4" aria-label="Contact us">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Visit Us Today
          </h2>

          {/* Full address block — white, bold */}
          <div className="mb-6 space-y-1">
            <p className="text-white font-bold text-lg">GADGET ZONE</p>
            <p className="text-white font-bold">73 KALKI, Lattice Bridge Road (LB ROAD),</p>
            <p className="text-white font-bold">KRISHNAMURTHY SALAI, Thiruvanmiyur,</p>
            <p className="text-white font-bold">Chennai – 600 041</p>
            <p className="text-white font-bold">Phone: 9840077591</p>
            <p className="text-white/90 font-semibold mt-2">Open 7 days a week · 10:00 AM – 9:00 PM</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppQuickMessages
              whatsappNumber={WHATSAPP_NUMBER}
              gaContext="contact_section"
            />
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-white/90 border-0 font-semibold"
              asChild
            >
              <a href="tel:9840077591" data-ga-event="cta_click" data-ga-context="contact_section" data-ga-label="call">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
