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
  CheckCircle,
  MessageCircle,
  Package,
  Phone,
} from "lucide-react";
import { useEffect } from "react";

const PHONE_HREF = "tel:+919840077591";
const PHONE_DISPLAY = "+91 98400 77591";
const WHATSAPP_NUMBER = "919840077591";
const WA_MSG =
  "Hi! I'm looking for mobile accessories at Gadget Zone Chennai. Please share what's available.";

interface AccessoriesPageProps {
  onNavigate?: (path: string) => void;
}

export default function AccessoriesPage({ onNavigate }: AccessoriesPageProps) {
  useEffect(() => {
    updateSEO({
      title: "Mobile Accessories in Chennai | Gadget Zone",
      description:
        "Buy premium mobile accessories in Chennai at Gadget Zone. Cases, screen protectors, chargers, power banks, earphones, and Bluetooth speakers. Genuine products at best prices. Call +91 98400 77591.",
      canonical: "/services/accessories",
      ogUrl: "/services/accessories",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Accessories", url: "/services/accessories" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  const handleBack = () => {
    if (onNavigate) onNavigate("/services");
    else window.location.href = "/services";
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  const categories = [
    {
      title: "Cases & Covers",
      desc: "Protect your smartphone with our wide range of cases — from slim transparent covers to rugged armor cases.",
      items: [
        "Transparent cases",
        "Leather flip covers",
        "Rugged armor cases",
        "Designer back covers",
        "Wallet cases",
      ],
    },
    {
      title: "Screen Protectors",
      desc: "Keep your display scratch-free with tempered glass and film screen protectors for all models.",
      items: [
        "Tempered glass",
        "Full-cover glass",
        "Privacy glass",
        "Anti-glare film",
        "Curved glass",
      ],
    },
    {
      title: "Chargers & Cables",
      desc: "Fast chargers, wireless chargers, and high-quality cables for all devices.",
      items: [
        "Fast chargers (65W, 120W)",
        "Wireless chargers",
        "USB-C cables",
        "Lightning cables",
        "Multi-port chargers",
      ],
    },
    {
      title: "Power Banks",
      desc: "Never run out of battery with our range of power banks from 10,000mAh to 30,000mAh.",
      items: [
        "10,000mAh power banks",
        "20,000mAh power banks",
        "Fast-charge power banks",
        "Slim power banks",
        "Solar power banks",
      ],
    },
    {
      title: "Earphones & Headphones",
      desc: "Wired and wireless audio accessories for music lovers and professionals.",
      items: [
        "TWS earbuds",
        "Wired earphones",
        "Over-ear headphones",
        "Neckband earphones",
        "Gaming headsets",
      ],
    },
    {
      title: "Bluetooth Speakers",
      desc: "Portable and home Bluetooth speakers for every occasion and budget.",
      items: [
        "Portable speakers",
        "Waterproof speakers",
        "Party speakers",
        "Smart speakers",
        "Mini speakers",
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
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <Package className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Premium Mobile Accessories
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Wide range of genuine mobile accessories at Gadget Zone Chennai.
                Cases, chargers, earphones, power banks, and more — all at
                competitive prices.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <a
                href={PHONE_HREF}
                onClick={() => trackCallConversion()}
                data-ga-event="call_click"
                data-ga-context="accessories_page"
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
                data-ga-context="accessories_page"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Accessories Range
          </h2>
          <p className="text-muted-foreground mb-6">
            We stock accessories for all major smartphone brands. All products
            are genuine and sourced from authorized distributors, ensuring
            quality and compatibility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <h3 className="font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Buy Accessories from Gadget Zone?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "Genuine products from authorized distributors",
              "Compatible with all major smartphone brands",
              "Competitive pricing — best deals in Chennai",
              "Expert advice on compatibility",
              "Easy exchange if product is defective",
              "Wide range always in stock",
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
                data-ga-context="accessories_page_bottom"
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
                data-ga-context="accessories_page_bottom"
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
