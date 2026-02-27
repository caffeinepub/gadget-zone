import { useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackCallConversion, trackWhatsAppConversion } from '@/lib/googleAdsTracking';

const PHONE_HREF = 'tel:+919840077591';
const PHONE_DISPLAY = '+91 98400 77591';
const WHATSAPP_NUMBER = '919840077591';
const WA_MSG = "Hi! I'd like to know more about Gadget Zone Chennai.";

interface StoryPageProps {
  onNavigate?: (path: string) => void;
}

export default function StoryPage({ onNavigate }: StoryPageProps) {
  useEffect(() => {
    updateSEO({
      title: 'Our Story - Gadget Zone Chennai',
      description:
        'Learn about the story of Gadget Zone, Chennai\'s trusted mobile phone store in Thiruvanmiyur. Our journey, milestones, and commitment to customer satisfaction.',
      canonical: '/about/story',
      ogUrl: '/about/story',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Our Story', url: '/about/story' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate('/about');
    else window.location.href = '/about';
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
            <ArrowLeft className="w-4 h-4" /> Back to About
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">The Gadget Zone Story</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From a small mobile accessories shop to Chennai's most trusted smartphone destination —
            our journey has been driven by passion, trust, and a commitment to our customers.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* Founding */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How It All Began</h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gadget Zone was founded with a simple vision: to provide the people of Thiruvanmiyur
              and surrounding areas with genuine smartphones, expert repair services, and honest
              advice — all under one roof. What started as a small shop on Lattice Bridge Road has
              grown into one of Chennai's most trusted mobile phone destinations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our founder recognized a gap in the market — customers were being sold counterfeit
              products and overcharged for repairs. Gadget Zone was built on the principles of
              transparency, genuine products, and fair pricing. These values continue to guide
              everything we do today.
            </p>
          </div>
        </section>

        {/* Growth Journey */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Growth Journey</h2>
          <p className="text-muted-foreground mb-6">
            Over the years, Gadget Zone has expanded its offerings and built a loyal customer base
            across Chennai's southern suburbs.
          </p>
          <div className="space-y-4">
            {[
              { year: 'Year 1', title: 'The Beginning', desc: 'Opened our first store at 73 KALKI, Lattice Bridge Road, Thiruvanmiyur. Started with mobile accessories and basic repair services.' },
              { year: 'Year 2', title: 'Expanding Services', desc: 'Became an authorized dealer for major smartphone brands. Added new mobile sales and exchange services.' },
              { year: 'Year 3', title: 'CCTV Solutions', desc: 'Launched CCTV sales and installation services for homes and businesses in Chennai.' },
              { year: 'Today', title: 'Trusted Destination', desc: 'Serving thousands of satisfied customers across Thiruvanmiyur, Adyar, Besant Nagar, OMR, ECR, and beyond.' },
            ].map((milestone) => (
              <div key={milestone.year} className="flex gap-4 bg-card rounded-xl p-5 border border-border">
                <div className="w-16 shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision for the Future</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Gadget Zone, we believe technology should be accessible to everyone. Our vision is
            to continue being the most trusted mobile and electronics destination in Chennai,
            expanding our services while maintaining the personal touch and honest service that
            our customers have come to rely on.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to staying at the forefront of technology trends, bringing the latest
            devices and services to our community, and ensuring every customer leaves our store
            satisfied and well-informed.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Be Part of Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Visit us at Gadget Zone, Thiruvanmiyur, or reach out to us. We'd love to serve you!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="story_page"
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
                data-ga-context="story_page"
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
