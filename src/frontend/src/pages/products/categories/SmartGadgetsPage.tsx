import { useEffect } from "react";
import { updateSEO } from "../../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

function waLink(product: string) {
  return `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product)}.%20Please%20share%20availability%20and%20pricing.`;
}

const products = [
  {
    name: "Smartwatch (Bluetooth Calling)",
    desc: "Feature-packed smartwatch with calling, health tracking, and IP68 rating.",
  },
  {
    name: "Fitness Band",
    desc: "Slim fitness band with heart rate, SpO2 monitoring, and sleep tracking.",
  },
  {
    name: "Smart Ring",
    desc: "Lightweight smart ring for health and sleep monitoring.",
  },
  {
    name: "Mini Portable Projector",
    desc: "Compact pocket projector with HDMI and wireless screen mirroring.",
  },
  {
    name: "Smart LED Bulb (WiFi)",
    desc: "App-controlled RGB smart bulb compatible with voice assistants.",
  },
  {
    name: "Wireless Earbuds with Translation",
    desc: "Real-time language translation earbuds with 40 language support.",
  },
];

export default function SmartGadgetsPage() {
  useEffect(() => {
    updateSEO({
      title:
        "Smart Gadgets & Tech Accessories | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy smart gadgets at Gadget Zone, Thiruvanmiyur, Chennai. Smartwatches, fitness bands, smart home devices, WiFi gadgets, and health monitors at competitive prices.",
      canonical: "/products/smart-gadgets",
      ogUrl: "/products/smart-gadgets",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Smart Gadgets", url: "/products/smart-gadgets" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 text-center">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Products</span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Smart Gadgets</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Smart Gadgets & Tech Accessories in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Gadget Zone in Thiruvanmiyur, Chennai offers the latest smart gadgets
          including smartwatches, fitness bands, smart home devices, and
          innovative tech accessories. Explore our range of connected devices to
          upgrade your digital lifestyle.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Smart Gadgets Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            From smartwatches to home automation accessories, we stock a curated
            selection of smart gadgets at competitive prices. Visit us in
            Thiruvanmiyur or enquire via WhatsApp.
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <img
              src="/assets/generated/smart-gadgets-hero.dim_800x500.jpg"
              alt="Smart gadgets and tech accessories at Gadget Zone Thiruvanmiyur Chennai"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>

          {/* Product Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="smart-gadgets.list"
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                data-ocid={`smart-gadgets.item.${i + 1}`}
              >
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-base text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1">{product.desc}</p>
                  <a
                    href={waLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition"
                    data-ocid={`smart-gadgets.whatsapp_button.${i + 1}`}
                  >
                    💬 WhatsApp to Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-600 text-sm">
            <strong>Gadget Zone</strong> serves customers across Thiruvanmiyur,
            Adyar, Besant Nagar, Kottivakkam, Perungudi, Velachery, and nearby
            ECR areas in Chennai.
          </p>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Looking for Smart Gadgets?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us to check availability and get the best deal.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="smart-gadgets.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20smart%20gadgets.%20Please%20share%20what%27s%20available.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="smart-gadgets.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
