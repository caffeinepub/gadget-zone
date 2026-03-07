import { SafeImage } from "@/components/SafeImage";
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
  ArrowRight,
  Camera,
  CreditCard,
  MessageCircle,
  Package,
  Phone,
  RefreshCw,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const PHONE = "tel:+919840077591";
const WHATSAPP_NUMBER = "919840077591";

const SERVICES = [
  {
    id: "new-mobiles",
    title: "New Mobile Phones",
    icon: Smartphone,
    image: "/assets/generated/card-new-mobiles-premium.dim_1200x800.jpg",
    description:
      "Explore the latest smartphones from Apple, Samsung, Motorola, OnePlus, Realme, Vivo, and Xiaomi. We carry genuine, warranty-backed devices at competitive prices.",
    features: [
      "Genuine products with manufacturer warranty",
      "All major brands in stock",
      "EMI options available",
      "Expert guidance to choose the right phone",
    ],
    cta: "Enquire Now",
    whatsapp:
      "Hi, I am interested in buying a new mobile phone. Please share available models and prices.",
    path: "/brands",
  },
  {
    id: "service-repair",
    title: "Service & Repair",
    icon: Wrench,
    image: "/assets/generated/card-service-repair.dim_1200x800.jpg",
    description:
      "Professional mobile phone repair services by certified technicians. Screen replacement, battery replacement, charging port repair, water damage recovery, and more.",
    features: [
      "Screen & display replacement",
      "Battery replacement",
      "Charging port & speaker repair",
      "Water damage recovery",
      "Software issues & unlocking",
    ],
    cta: "Book Repair",
    whatsapp: "Hi, I need mobile repair service. My issue is: ",
    path: "/services/repair",
  },
  {
    id: "exchange-upgrade",
    title: "Exchange & Upgrade",
    icon: RefreshCw,
    image: "/assets/generated/card-exchange-upgrade.dim_1200x800.jpg",
    description:
      "Get the best exchange value for your old smartphone and upgrade to the latest model. We offer fair valuations and instant exchange deals.",
    features: [
      "Best exchange value guaranteed",
      "Instant valuation",
      "All brands accepted",
      "Upgrade to any new model",
    ],
    cta: "Get Exchange Value",
    whatsapp:
      "Hi, I want to exchange my old phone. Please help me with the exchange value.",
    path: "/services/exchange",
  },
  {
    id: "accessories",
    title: "Accessories",
    icon: Package,
    image: "/assets/generated/card-accessories.dim_1200x800.jpg",
    description:
      "Wide range of genuine mobile accessories – cases, screen protectors, chargers, earphones, power banks, Bluetooth speakers, smartwatches, and more.",
    features: [
      "Genuine branded accessories",
      "Cases & screen protectors",
      "Chargers & cables",
      "Earphones & Bluetooth devices",
      "Smartwatches & fitness bands",
    ],
    cta: "Shop Accessories",
    whatsapp:
      "Hi, I am looking for mobile accessories. Please share what is available.",
    path: "/services/accessories",
  },
  {
    id: "cctv",
    title: "CCTV Sales & Installation",
    icon: Camera,
    image: "/assets/CCTV-IMAGE.png",
    description:
      "Complete CCTV security solutions for homes and shops. We supply and install HD cameras, DVR/NVR systems, and provide ongoing support and maintenance.",
    features: [
      "HD & 4K camera systems",
      "Home & shop security",
      "Professional installation",
      "Remote monitoring setup",
      "Annual maintenance contracts",
    ],
    cta: "Get CCTV Quote",
    whatsapp:
      "Hi, I am interested in CCTV installation. Please share details and pricing.",
    path: "/services/cctv",
  },
  {
    id: "emi-finance",
    title: "EMI & Finance Options",
    icon: CreditCard,
    image: "/assets/generated/card-emi-finance.dim_1200x800.jpg",
    description:
      "Buy your dream smartphone without worrying about the full upfront cost. We offer flexible EMI plans and finance options to make premium devices affordable.",
    features: [
      "0% EMI on select models",
      "Flexible tenure options",
      "Minimal documentation",
      "Quick approval process",
      "All major banks supported",
    ],
    cta: "Check EMI Options",
    whatsapp: "Hi, I want to know about EMI options for buying a mobile phone.",
    path: "/services/emi",
  },
];

interface ServicesPageProps {
  onNavigate?: (path: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  useEffect(() => {
    updateSEO({
      title:
        "Services – Mobile Repair, Exchange, CCTV & More | Gadget Zone Chennai",
      description:
        "Gadget Zone offers mobile repair, new phone sales, exchange & upgrade, accessories, CCTV installation, and EMI options in Thiruvanmiyur, Chennai.",
      canonical: "/services",
      ogUrl: "/services",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  const handleWhatsApp = (message: string) => {
    trackWhatsAppConversion();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  const handleLearnMore = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From buying a new phone to repairing your existing one – Gadget Zone
            is your one-stop destination in Thiruvanmiyur, Chennai.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 bg-neutral-900 text-white hover:bg-neutral-700"
                        onClick={() => handleLearnMore(service.path)}
                        data-ga-event="service_learn_more"
                        data-ga-label={service.id}
                      >
                        {service.cta}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-700 hover:bg-green-50"
                        onClick={() => handleWhatsApp(service.whatsapp)}
                        data-ga-event="service_whatsapp"
                        data-ga-label={service.id}
                      >
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        WhatsApp
                      </Button>
                      <a
                        href={PHONE}
                        onClick={() => trackCallConversion()}
                        data-ga-event="call_click"
                        data-ga-context="services_page"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Need Help Choosing a Service?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Our experts are ready to assist you. Walk in or contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                handleWhatsApp(
                  "Hi, I need help choosing a service at Gadget Zone.",
                )
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={PHONE} onClick={() => trackCallConversion()}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
