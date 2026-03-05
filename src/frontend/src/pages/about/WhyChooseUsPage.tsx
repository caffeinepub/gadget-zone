import { Button } from "@/components/ui/button";
import {
  trackCallConversion,
  trackWhatsAppConversion,
} from "@/lib/googleAdsTracking";
import { updateSEO } from "@/lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "@/lib/structuredData";
import {
  ArrowLeft,
  Award,
  CheckCircle,
  CreditCard,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const PHONE_HREF = "tel:+919840077591";
const PHONE_DISPLAY = "+91 98400 77591";
const WHATSAPP_NUMBER = "919840077591";
const WA_MSG =
  "Hi! I'd like to know more about Gadget Zone Chennai and your services.";

interface WhyChooseUsPageProps {
  onNavigate?: (path: string) => void;
}

export default function WhyChooseUsPage({ onNavigate }: WhyChooseUsPageProps) {
  useEffect(() => {
    updateSEO({
      title: "Why Choose Gadget Zone Chennai | Our Advantages",
      description:
        "Discover why thousands of customers trust Gadget Zone Chennai for smartphones, repairs, and CCTV. Authorized dealer, genuine products, expert service, and best prices.",
      canonical: "/about/why-choose-us",
      ogUrl: "/about/why-choose-us",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Why Choose Us", url: "/about/why-choose-us" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate("/about");
    else window.location.href = "/about";
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  const advantages = [
    {
      icon: Award,
      title: "Authorized Dealer",
      desc: "We are an authorized dealer for all major smartphone brands including Apple, Samsung, OnePlus, Motorola, Realme, Vivo, and Xiaomi. Every product comes with official manufacturer warranty.",
      points: [
        "Official brand authorization",
        "Manufacturer warranty on all devices",
        "Genuine products guaranteed",
        "Brand-certified service",
      ],
    },
    {
      icon: Shield,
      title: "Genuine Products Guarantee",
      desc: "We have a strict zero-tolerance policy for counterfeit products. Every device and accessory we sell is sourced directly from authorized distributors.",
      points: [
        "100% genuine products",
        "Sourced from authorized distributors",
        "Authenticity verification",
        "No grey market products",
      ],
    },
    {
      icon: Wrench,
      title: "Expert Service Team",
      desc: "Our technicians are certified and trained to repair all major smartphone brands. We use genuine parts and follow manufacturer-recommended repair procedures.",
      points: [
        "Certified technicians",
        "Genuine spare parts",
        "90-day repair warranty",
        "Same-day service available",
      ],
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      desc: "We offer the best prices in Chennai for smartphones, accessories, and repair services. Our transparent pricing means no hidden charges or surprises.",
      points: [
        "Best price guarantee",
        "Transparent pricing",
        "No hidden charges",
        "Price match available",
      ],
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      desc: "We make premium smartphones accessible with zero-cost EMI, credit card EMI, and bank finance options. Buy your dream phone without financial stress.",
      points: [
        "Zero-cost EMI available",
        "All major banks supported",
        "Instant approval",
        "Flexible tenure options",
      ],
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      desc: "Our commitment to customer satisfaction goes beyond the sale. We provide after-sales support, warranty assistance, and ongoing service to ensure you're always happy.",
      points: [
        "After-sales support",
        "Warranty assistance",
        "Customer-first approach",
        "Thousands of happy customers",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to About
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Gadget Zone?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thousands of customers across Chennai trust Gadget Zone for their
            smartphone needs. Here's what sets us apart from the rest.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="why_choose_us_page"
              >
                <Phone className="w-4 h-4 mr-2" /> Call: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-0"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="why_choose_us_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* Advantages */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Key Advantages
          </h2>
          <p className="text-muted-foreground mb-8">
            We've built our reputation on trust, quality, and exceptional
            service. Here are the reasons why Gadget Zone is Chennai's preferred
            mobile phone destination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{adv.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {adv.desc}
                  </p>
                  <ul className="space-y-1">
                    {adv.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs text-foreground"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Service Area */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Serving All of South Chennai
          </h2>
          <p className="text-muted-foreground mb-6">
            Conveniently located at Thiruvanmiyur, we serve customers from
            across South Chennai. Our central location makes us easily
            accessible from all nearby areas.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Thiruvanmiyur",
              "Adyar",
              "Besant Nagar",
              "Thoraipakkam",
              "Velachery",
              "Perungudi",
              "OMR",
              "ECR",
              "Sholinganallur",
              "Pallikaranai",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-2xl p-8 border border-border text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Experience the Gadget Zone Difference
          </h2>
          <p className="text-muted-foreground mb-6">
            Visit us today at 73 KALKI, Lattice Bridge Road, Thiruvanmiyur,
            Chennai — or reach out to us via call or WhatsApp. We're open 7 days
            a week, 10 AM to 9 PM.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="why_choose_us_bottom"
              >
                <Phone className="w-4 h-4 mr-2" /> Call: {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-0"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion()}
                data-ga-event="whatsapp_click"
                data-ga-context="why_choose_us_bottom"
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
