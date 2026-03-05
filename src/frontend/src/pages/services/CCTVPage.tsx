import { useEffect } from "react";
import { SafeImage } from "../../components/SafeImage";
import { BRAND_LOGOS } from "../../lib/brandLogos";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

const solutions = [
  {
    name: "Home Security",
    desc: "Indoor/outdoor cameras, night vision, mobile alerts for your home.",
    icon: "🏠",
  },
  {
    name: "Shop Security",
    desc: "Multi-camera setups with DVR/NVR for retail stores and offices.",
    icon: "🏪",
  },
  {
    name: "HD & 4K Cameras",
    desc: "Crystal-clear footage with 2MP, 4MP, and 4K resolution options.",
    icon: "📷",
  },
  {
    name: "Night Vision",
    desc: "IR night vision up to 30m for 24/7 surveillance coverage.",
    icon: "🌙",
  },
  {
    name: "Remote Monitoring",
    desc: "View live footage from anywhere via smartphone app.",
    icon: "📱",
  },
  {
    name: "Professional Install",
    desc: "Expert installation with cable management and configuration.",
    icon: "🔧",
  },
];

const cameraTypes = [
  {
    name: "HD Dome Camera",
    price: "From ₹2,500",
    highlight: "2MP · Indoor/Outdoor · IR 20m",
  },
  {
    name: "Bullet Camera",
    price: "From ₹3,000",
    highlight: "2MP · Weatherproof · IR 30m",
  },
  {
    name: "4K IP Camera",
    price: "From ₹8,000",
    highlight: "8MP · PoE · Smart Detection",
  },
  {
    name: "PTZ Camera",
    price: "From ₹12,000",
    highlight: "360° Pan/Tilt · 20x Zoom · Auto-track",
  },
  {
    name: "4-Channel DVR Kit",
    price: "From ₹8,500",
    highlight: "4 Cameras + DVR + HDD · Plug & Play",
  },
  {
    name: "8-Channel NVR Kit",
    price: "From ₹18,000",
    highlight: "8 IP Cameras + NVR · 4K · Remote View",
  },
];

const supportedBrands = [
  "Hikvision",
  "Dahua",
  "CP Plus",
  "Honeywell",
  "Bosch",
  "Axis",
];

export default function CCTVPage() {
  useEffect(() => {
    updateSEO({
      title:
        "CCTV Installation Chennai – Home & Shop Security | Gadget Zone Thiruvanmiyur",
      description:
        "Professional CCTV installation in Chennai by Gadget Zone. HD cameras, DVR/NVR systems for home and shop security. Hikvision, Dahua, CP Plus. Call 9840077591.",
      canonical: "/services/cctv",
      ogUrl: "/services/cctv",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "CCTV", url: "/services/cctv" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-neutral-900 py-12 px-4 text-center">
        <nav className="text-sm text-neutral-400 mb-4" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <span className="mx-2">›</span>
          <a href="/services" className="hover:text-white transition">
            Services
          </a>
          <span className="mx-2">›</span>
          <span className="text-white">CCTV & Security</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.CCTV}
            alt="CCTV Security Solutions"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="CCTV Security"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          CCTV & Security Solutions in Chennai
        </h1>
        <p className="text-neutral-300 max-w-xl mx-auto">
          Professional CCTV installation for homes, shops & offices. HD cameras,
          DVR/NVR systems with remote monitoring.
        </p>
      </section>

      {/* Hero Image */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <SafeImage
          src="/assets/CCTV-IMAGE.png"
          alt="CCTV Security Camera Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-bold text-center px-4">
            Protect What Matters Most
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Our CCTV Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <div
                key={s.name}
                className="bg-card border border-border rounded-xl p-5 shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-base mb-1">{s.name}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Types & Pricing */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Camera Types & Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameraTypes.map((c) => (
              <div
                key={c.name}
                className="bg-card border border-border rounded-xl p-4 shadow hover:shadow-md transition"
              >
                <h3 className="font-bold text-base mb-1">{c.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">
                  {c.price}
                </p>
                <p className="text-muted-foreground text-xs">{c.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-5">Brands We Install</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {supportedBrands.map((brand) => (
              <span
                key={brand}
                className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Need CCTV Installation?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us for a free site survey and quote.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-neutral-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            📞 {PHONE}
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20CCTV%20installation.%20Please%20share%20details%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
