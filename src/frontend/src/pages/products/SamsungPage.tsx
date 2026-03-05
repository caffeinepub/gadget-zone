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

function waLink(model: string) {
  return `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(model)}.%20Please%20share%20availability%20and%20pricing.`;
}

interface PhoneModel {
  name: string;
  price: string;
  highlight: string;
  storage?: string;
}

function PhoneCard({ model }: { model: PhoneModel }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div
        className="bg-gray-50 flex items-center justify-center p-4"
        style={{ height: "200px" }}
      >
        <img
          src="/assets/generated/samsung-phones-lineup.dim_400x500.png"
          alt={`${model.name} at Gadget Zone Thiruvanmiyur Chennai`}
          className="h-full w-auto object-contain max-w-full"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="self-start bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full border border-green-200">
          EMI Available
        </span>
        <h3 className="font-bold text-base text-gray-900">{model.name}</h3>
        <p className="text-primary font-semibold text-sm">{model.price}</p>
        <p className="text-gray-500 text-xs">{model.highlight}</p>
        {model.storage && (
          <p className="text-gray-400 text-xs">Storage: {model.storage}</p>
        )}
        <a
          href={waLink(model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition"
        >
          💬 WhatsApp to Enquire
        </a>
      </div>
    </div>
  );
}

const sModels: PhoneModel[] = [
  {
    name: "Galaxy S25 Ultra",
    price: "₹1,29,999",
    highlight: "S Pen · 200MP · AI Features",
    storage: "256GB / 512GB / 1TB",
  },
  {
    name: "Galaxy S25+",
    price: "₹99,999",
    highlight: "12GB RAM · 50MP · Snapdragon 8 Elite",
    storage: "256GB / 512GB",
  },
  {
    name: "Galaxy S25",
    price: "₹79,999",
    highlight: "Compact flagship · 50MP · 4000mAh",
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "Galaxy S24 FE",
    price: "₹54,999",
    highlight: "Fan Edition · 50MP · 4700mAh",
    storage: "128GB / 256GB",
  },
];

const aModels: PhoneModel[] = [
  {
    name: "Galaxy A55 5G",
    price: "₹34,999",
    highlight: "50MP OIS · 5000mAh · IP67",
    storage: "128GB / 256GB",
  },
  {
    name: "Galaxy A35 5G",
    price: "₹26,999",
    highlight: "50MP · 5000mAh · Exynos 1380",
    storage: "128GB / 256GB",
  },
  {
    name: "Galaxy A25 5G",
    price: "₹18,999",
    highlight: '50MP · 5000mAh · 6.5" FHD+',
    storage: "128GB / 256GB",
  },
  {
    name: "Galaxy A15 5G",
    price: "₹14,999",
    highlight: '50MP · 5000mAh · 6.5" FHD+',
    storage: "128GB",
  },
];

const mModels: PhoneModel[] = [
  {
    name: "Galaxy M55 5G",
    price: "₹29,999",
    highlight: "50MP · 6000mAh · 45W charging",
    storage: "128GB / 256GB",
  },
  {
    name: "Galaxy M35 5G",
    price: "₹19,999",
    highlight: "50MP · 6000mAh · Exynos 1380",
    storage: "128GB / 256GB",
  },
  {
    name: "Galaxy M15 5G",
    price: "₹12,999",
    highlight: '50MP · 6000mAh · 6.5" FHD+',
    storage: "128GB",
  },
  {
    name: "Galaxy M05",
    price: "₹7,999",
    highlight: "50MP · 5000mAh · Budget pick",
    storage: "64GB / 128GB",
  },
];

export default function SamsungPage() {
  useEffect(() => {
    updateSEO({
      title:
        "Samsung Phones in Chennai – Galaxy S25, A55, M35 | Gadget Zone Thiruvanmiyur",
      description:
        "Buy Samsung Galaxy phones at Gadget Zone, Thiruvanmiyur Chennai. Galaxy S25 Ultra, A55, M35 with EMI options. Genuine Samsung products with warranty.",
      canonical: "/products/samsung",
      ogUrl: "/products/samsung",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Samsung", url: "/products/samsung" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Brand Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 text-center">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <a href="/" className="hover:text-gray-800 transition">
            Home
          </a>
          <span className="mx-2">›</span>
          <a href="/products" className="hover:text-gray-800 transition">
            Products
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Samsung</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.SAMSUNG}
            alt="Samsung"
            className="h-16 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Samsung"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Samsung Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          The complete Samsung Galaxy lineup — S, A & M series — available at
          Gadget Zone, Thiruvanmiyur.
        </p>
      </section>

      {/* Galaxy S Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Galaxy S Series – Flagship
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Samsung's premium flagship lineup with AI features, S Pen support,
            and advanced cameras. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Galaxy A Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Galaxy A Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Feature-rich mid-range Samsung phones with great cameras and long
            battery life. EMI options available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Galaxy M Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Galaxy M Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Budget-friendly Samsung Galaxy phones with massive batteries and
            reliable performance. Great value for money.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Samsung phone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us or call/WhatsApp for latest prices, offers & EMI options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            📞 {PHONE}
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Samsung%20phones.%20Please%20share%20availability%20and%20pricing.`}
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
