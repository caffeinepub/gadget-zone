import { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'd like to know about EMI and finance options for buying a smartphone at Gadget Zone Chennai.";

interface EMIPageProps {
  onNavigate?: (path: string) => void;
}

export default function EMIPage({ onNavigate }: EMIPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Mobile EMI & Finance Options in Chennai | Gadget Zone',
      description:
        'Easy EMI and finance options for smartphones at Gadget Zone Chennai. Zero-cost EMI, credit card EMI, instant approval, and flexible tenure. Call +91 98400 77591.',
      canonical: '/services/emi',
      ogUrl: '/services/emi',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'EMI & Finance', url: '/services/emi' },
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
              <CreditCard className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Easy EMI &amp; Finance Solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Make your dream smartphone affordable with flexible EMI options at Gadget Zone
                Chennai. Zero-cost EMI, instant approval, and multiple bank partnerships.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="emi_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Check EMI: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="emi_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp for EMI Details
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* EMI Options */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">EMI Options Available</h2>
          <p className="text-muted-foreground mb-6">
            We offer multiple EMI options to suit your financial needs. Whether you prefer
            zero-cost EMI on your credit card or a bank finance option, we have a solution for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Zero-Cost EMI',
                desc: 'Pay the exact product price spread over 3, 6, or 9 months with no additional interest charges.',
                highlight: 'No extra cost',
                features: ['3, 6, 9 month options', 'No processing fee', 'Available on select models', 'All major credit cards'],
              },
              {
                title: 'Credit Card EMI',
                desc: 'Convert your purchase to easy monthly installments using your existing credit card.',
                highlight: 'Instant approval',
                features: ['All major banks', '3 to 24 months', 'Minimal documentation', 'Instant processing'],
              },
              {
                title: 'Bank Finance',
                desc: 'Dedicated finance options through our banking partners for those without credit cards.',
                highlight: 'No credit card needed',
                features: ['Bajaj Finserv', 'HDFC Bank', 'ICICI Bank', 'Kotak Mahindra'],
              },
            ].map((option) => (
              <div key={option.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground">{option.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                    {option.highlight}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{option.desc}</p>
                <ul className="space-y-1">
                  {option.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility &amp; Documentation</h2>
          <p className="text-muted-foreground mb-6">
            Getting EMI approval is quick and easy. Here's what you typically need to get started:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Age Requirement', desc: 'Must be 21 years or older to apply for finance options.' },
              { title: 'Identity Proof', desc: 'Aadhaar card, PAN card, or passport for identity verification.' },
              { title: 'Income Proof', desc: 'Salary slip or bank statement for bank finance options.' },
              { title: 'Credit Card', desc: 'Any major credit card for zero-cost or credit card EMI options.' },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Banks */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Banking Partners</h2>
          <p className="text-muted-foreground mb-6">
            We work with leading banks and financial institutions to offer you the best EMI options
            with competitive interest rates and flexible tenure.
          </p>
          <div className="flex flex-wrap gap-3">
            {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra', 'Bajaj Finserv', 'IndusInd Bank', 'Yes Bank'].map((bank) => (
              <span key={bank} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                {bank}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Dream Phone on EMI Today</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Zero-cost EMI on select models',
              'Instant approval process',
              'Minimal documentation required',
              'Flexible tenure from 3 to 24 months',
              'All major banks supported',
              'No hidden charges',
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
                data-ga-context="emi_page_bottom"
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
                data-ga-context="emi_page_bottom"
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
