import { Battery, Cable, Plug, Smartphone, Zap, ZapOff } from "lucide-react";
import { useEffect } from "react";
import { updateSEO } from "../../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

const categories = [
  {
    icon: Zap,
    title: "Fast Chargers",
    desc: "25W, 45W, 65W, and 120W+ fast chargers for all major smartphone brands.",
  },
  {
    icon: Cable,
    title: "Charging Cables",
    desc: "USB-C, Lightning, and Micro USB cables in various lengths and quality tiers.",
  },
  {
    icon: Battery,
    title: "Power Banks",
    desc: "10000mAh to 20000mAh portable power banks with fast charging support.",
  },
  {
    icon: Plug,
    title: "Wireless Chargers",
    desc: "Qi-compatible wireless charging pads and stands for compatible devices.",
  },
  {
    icon: Smartphone,
    title: "Car Chargers",
    desc: "Dual and triple-port car chargers with fast charging for travel.",
  },
  {
    icon: ZapOff,
    title: "Surge Protectors",
    desc: "Multi-plug surge protectors and extension boards with USB ports.",
  },
];

export default function PowerChargingPage() {
  useEffect(() => {
    updateSEO({
      title: "Power & Charging Accessories | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy charging accessories at Gadget Zone, Thiruvanmiyur, Chennai. Fast chargers, cables, power banks, wireless chargers, car chargers and surge protectors at competitive prices.",
      canonical: "/products/power-charging",
      ogUrl: "/products/power-charging",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Power & Charging", url: "/products/power-charging" },
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
          <span className="text-gray-800 font-medium">Power & Charging</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Power & Charging Accessories in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Gadget Zone in Thiruvanmiyur, Chennai stocks a comprehensive range of
          power and charging accessories including fast chargers, USB-C cables,
          power banks, and wireless chargers. Both original brand chargers and
          certified compatible options available.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Charging Range
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We stock original and compatible charging accessories for all major
            brands at competitive prices. Visit us in Thiruvanmiyur or WhatsApp
            us for specific product enquiries.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="power-charging.list"
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  data-ocid={`power-charging.item.${i + 1}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
              );
            })}
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
          Need Charging Accessories?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us to check availability and pricing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="power-charging.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20charging%20accessories.%20Please%20share%20what%27s%20available.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="power-charging.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
