import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft, Camera, Shield, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'm interested in CCTV installation services from Gadget Zone Chennai. Please share details and pricing.";

interface CCTVPageProps {
  onNavigate?: (path: string) => void;
}

export default function CCTVPage({ onNavigate }: CCTVPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'CCTV Camera Installation in Chennai | Gadget Zone',
      description:
        'Professional CCTV sales and installation in Chennai by Gadget Zone. HD cameras, DVR/NVR systems, remote monitoring for homes and businesses. Call +91 98400 77591.',
      canonical: '/services/cctv',
      ogUrl: '/services/cctv',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'CCTV Installation', url: '/services/cctv' },
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
              <Camera className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                CCTV Sales &amp; Installation Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Complete CCTV security solutions for homes and businesses in Chennai. Supply,
                professional installation, and ongoing maintenance by Gadget Zone experts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="cctv_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Get Free Quote: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="cctv_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* Solutions */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">CCTV Solutions We Offer</h2>
          <p className="text-muted-foreground mb-6">
            We provide end-to-end CCTV solutions tailored to your security needs. From single-camera
            home setups to multi-camera commercial installations, we have the right solution for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: 'Residential CCTV',
                desc: 'Protect your home with HD cameras covering entry points, parking, and common areas. Remote viewing on your smartphone.',
                features: ['2MP to 8MP HD cameras', 'Night vision capability', 'Mobile app monitoring', 'Motion alerts'],
              },
              {
                icon: Monitor,
                title: 'Commercial Surveillance',
                desc: 'Comprehensive security for shops, offices, and warehouses. Multi-camera systems with centralized monitoring.',
                features: ['Multi-camera setups', 'DVR/NVR recording', 'Remote access', 'Annual maintenance'],
              },
              {
                icon: Camera,
                title: 'IP Camera Systems',
                desc: 'Advanced IP cameras with high resolution, PoE support, and cloud storage options for modern security needs.',
                features: ['4K resolution available', 'Cloud storage option', 'AI motion detection', 'Two-way audio'],
              },
              {
                icon: Shield,
                title: 'Maintenance & Support',
                desc: 'Annual maintenance contracts to keep your CCTV system running optimally with regular checks and repairs.',
                features: ['Annual service contracts', 'Emergency support', 'System upgrades', 'HDD replacement'],
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <ul className="space-y-1">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brands */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">CCTV Brands We Install</h2>
          <p className="text-muted-foreground mb-6">
            We work with leading CCTV brands to provide reliable, high-quality security solutions.
            All equipment comes with manufacturer warranty and professional installation.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Hikvision', 'Dahua', 'CP Plus', 'Honeywell', 'Bosch', 'Axis', 'Samsung Wisenet', 'Godrej'].map((brand) => (
              <span key={brand} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get a Free CCTV Quote</h2>
          <p className="text-muted-foreground mb-6">
            Contact us for a free site survey and customized CCTV solution quote. Our experts will
            assess your security needs and recommend the best system within your budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Free site survey and consultation',
              'Customized solution for your needs',
              'Professional installation team',
              'Post-installation support',
              'Competitive pricing guaranteed',
              'Annual maintenance available',
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
                data-ga-context="cctv_page_bottom"
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
                data-ga-context="cctv_page_bottom"
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
