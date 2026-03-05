import { useCallback, useEffect, useState } from "react";
import { BusinessHighlightsStrip } from "../components/BusinessHighlightsStrip";
import { HotPickSection } from "../components/HotPickSection";
import { MobileCareSmartUsageGuideSection } from "../components/MobileCareSmartUsageGuideSection";
import { SafeImage } from "../components/SafeImage";
import { TickerBanner } from "../components/TickerBanner";
import { WhatsAppQuickMessages } from "../components/WhatsAppQuickMessages";
import { BRAND_LOGOS } from "../lib/brandLogos";
import { updateSEO } from "../lib/seoHelpers";
import {
  getLocalBusinessSchema,
  injectStructuredData,
} from "../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

const brands = [
  { name: "Samsung", key: "SAMSUNG", path: "/products/samsung" },
  { name: "Apple", key: "APPLE", path: "/products/apple" },
  { name: "Motorola", key: "MOTOROLA", path: "/products/motorola" },
  { name: "OnePlus", key: "ONEPLUS", path: "/products/oneplus" },
  { name: "Realme", key: "REALME", path: "/products/realme" },
  { name: "Vivo", key: "VIVO", path: "/products/vivo" },
  { name: "Mi / Xiaomi", key: "MI", path: "/products/xiaomi" },
  { name: "Nothing", key: "NOTHING_MOBILE", path: "/products/nothing" },
  { name: "CCTV", key: "CCTV", path: "/services/cctv" },
];

const BANNER_SLIDES = [
  {
    src: "/assets/generated/banner-gadgets.dim_1600x700.png",
    alt: "Gadget Zone – Premium Mobile Phones & Accessories in Chennai",
  },
  {
    src: "/assets/generated/banner-cctv.dim_1600x700.png",
    alt: "CCTV & Security Solutions – Gadget Zone Chennai",
  },
  {
    src: "/assets/generated/banner-smarthome.dim_1600x700.png",
    alt: "Smart Home & Automation – Gadget Zone Chennai",
  },
  {
    src: "/assets/generated/banner-motorola.dim_1600x700.png",
    alt: "Motorola Latest Phones – Gadget Zone Chennai",
  },
];

const SLIDE_INTERVAL_MS = 4500;

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    updateSEO({
      title:
        "Gadget Zone Chennai – Mobile Phones, Accessories & Repair | Thiruvanmiyur",
      description:
        "Gadget Zone in Thiruvanmiyur, Chennai – your trusted destination for Samsung, Apple, Motorola, OnePlus & more. Mobile repair, CCTV, accessories, EMI & exchange.",
      canonical: "/",
      ogUrl: "/",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-ld");
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Ticker Banner */}
      <TickerBanner />

      {/* Hero Section – Auto-sliding Carousel */}
      <section
        className="relative bg-gray-100 overflow-hidden"
        aria-label="Hero"
      >
        <div className="relative h-[480px] md:h-[560px] lg:h-[640px]">
          {/* Slides */}
          {BANNER_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                zIndex: index === currentSlide ? 1 : 0,
              }}
              aria-hidden={index !== currentSlide}
            >
              <SafeImage
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Overlay content – always on top */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ zIndex: 10 }}
          >
            <img
              src="/assets/Gadget Zone-Logo-1.png"
              alt="Gadget Zone Logo"
              className="h-20 md:h-28 mb-6 drop-shadow-xl"
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg leading-tight">
              Chennai's Trusted Mobile Store
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl drop-shadow">
              Samsung · Apple · Motorola · OnePlus · Realme · Vivo · Mi ·
              Nothing
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-bold text-base shadow-lg hover:opacity-90 transition"
                data-ga-event="call_click"
                data-ga-context="hero"
                data-ga-label="Call Us"
              >
                📞 Call Us
              </a>
              <WhatsAppQuickMessages
                whatsappNumber={WA_NUMBER}
                gaContext="hero"
              />
            </div>
          </div>

          {/* Slide indicator dots */}
          <div
            className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
            style={{ zIndex: 10 }}
          >
            {BANNER_SLIDES.map((slide, index) => (
              <button
                key={slide.alt ?? index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <BusinessHighlightsStrip />

      {/* Brand Logo Strip */}
      <section
        className="section-alt-bg py-8 px-4 border-b border-border"
        aria-label="Brands we carry"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-6">
            Brands We Carry
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {brands.map((brand) => (
              <a
                key={brand.key}
                href={brand.path}
                className="flex items-center justify-center p-3 rounded-xl hover:bg-background transition group border border-transparent hover:border-border hover:shadow-sm"
                aria-label={brand.name}
              >
                <SafeImage
                  src={BRAND_LOGOS[brand.key]}
                  alt={brand.name}
                  className="h-10 w-28 object-contain"
                  fallbackType="logo"
                  fallbackText={brand.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOT PICK Section */}
      <section id="hot-pick-section" aria-label="Hot Pick">
        <HotPickSection />
      </section>

      {/* Services Overview */}
      <section className="py-14 px-4" aria-label="Our Services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            What We Offer
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Everything you need for your mobile lifestyle — under one roof
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "New Mobiles",
                desc: "Latest smartphones from top brands at best prices with EMI options.",
                img: "/assets/generated/card-new-mobiles.dim_1200x800.jpg",
                path: "/products",
              },
              {
                title: "Mobile Repair",
                desc: "Screen, battery, charging port & more — fast turnaround with warranty.",
                img: "/assets/generated/card-service-repair.dim_1200x800.jpg",
                path: "/services/repair",
              },
              {
                title: "CCTV & Security",
                desc: "HD cameras, DVR/NVR systems, professional installation for home & shop.",
                img: "/assets/generated/card-cctv-sales-installation.dim_1200x800.jpg",
                path: "/services/cctv",
              },
              {
                title: "Accessories",
                desc: "Cases, chargers, earphones, screen guards & more for every device.",
                img: "/assets/generated/card-accessories.dim_1200x800.jpg",
                path: "/services/accessories",
              },
              {
                title: "Exchange & Upgrade",
                desc: "Get the best value for your old phone and upgrade to a new one.",
                img: "/assets/generated/card-exchange-upgrade.dim_1200x800.jpg",
                path: "/services/exchange",
              },
              {
                title: "EMI & Finance",
                desc: "Easy EMI plans with 0% interest options. No-cost EMI available.",
                img: "/assets/generated/card-emi-finance.dim_1200x800.jpg",
                path: "/services/emi",
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.path}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-card border border-border"
              >
                <div className="relative h-44 overflow-hidden">
                  <SafeImage
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Care Guide */}
      <section id="tips" aria-label="Mobile care tips">
        <MobileCareSmartUsageGuideSection />
      </section>

      {/* Visit Us Today */}
      <section
        id="contact"
        className="bg-primary py-14 px-4 text-center"
        aria-label="Visit Us"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
            Visit Us Today
          </h2>
          <div className="mb-6 space-y-1">
            <p className="text-primary-foreground font-bold text-lg">
              GADGET ZONE
            </p>
            <p className="text-primary-foreground font-bold">
              73 KALKI, Lattice Bridge Road (LB ROAD),
            </p>
            <p className="text-primary-foreground font-bold">
              KRISHNAMURTHY SALAI, Thiruvanmiyur,
            </p>
            <p className="text-primary-foreground font-bold">
              Chennai – 600 041
            </p>
            <p className="text-primary-foreground font-bold">Phone: {PHONE}</p>
            <p className="text-primary-foreground/90 font-semibold mt-2">
              Open 7 days a week · 10:00 AM – 9:00 PM
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="bg-white text-neutral-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
              data-ga-event="call_click"
              data-ga-context="visit_us"
              data-ga-label="Call Us"
            >
              📞 Call Us
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
              data-ga-event="whatsapp_click"
              data-ga-context="visit_us"
              data-ga-label="WhatsApp Us"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
