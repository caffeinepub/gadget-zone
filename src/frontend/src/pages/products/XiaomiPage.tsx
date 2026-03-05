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
          src="/assets/generated/xiaomi-phones-lineup.dim_400x500.png"
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

const flagshipModels: PhoneModel[] = [
  {
    name: "Xiaomi 14 Ultra",
    price: "₹99,999",
    highlight: "Snapdragon 8 Gen 3 · Leica · 90W",
    storage: "256GB / 512GB",
  },
  {
    name: "Xiaomi 14",
    price: "₹69,999",
    highlight: "Snapdragon 8 Gen 3 · Leica · 90W",
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "Xiaomi 13 Pro",
    price: "₹59,999",
    highlight: "Snapdragon 8 Gen 2 · Leica · 120W",
    storage: "256GB / 512GB",
  },
  {
    name: "Xiaomi 13",
    price: "₹49,999",
    highlight: "Snapdragon 8 Gen 2 · Leica · 67W",
    storage: "128GB / 256GB",
  },
];

const redmiNoteModels: PhoneModel[] = [
  {
    name: "Redmi Note 13 Pro+",
    price: "₹29,999",
    highlight: "200MP · 120W · Dimensity 7200 Ultra",
    storage: "256GB / 512GB",
  },
  {
    name: "Redmi Note 13 Pro",
    price: "₹24,999",
    highlight: "200MP · 67W · Snapdragon 7s Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi Note 13",
    price: "₹17,999",
    highlight: "108MP · 33W · Snapdragon 685",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi Note 12",
    price: "₹14,999",
    highlight: "50MP · 33W · Snapdragon 685",
    storage: "64GB / 128GB",
  },
];

const redmiModels: PhoneModel[] = [
  {
    name: "Redmi 13C",
    price: "₹9,999",
    highlight: "50MP · 18W · Helio G85",
    storage: "64GB / 128GB",
  },
  {
    name: "Redmi 12",
    price: "₹11,999",
    highlight: "50MP · 18W · Helio G88",
    storage: "64GB / 128GB",
  },
  {
    name: "Redmi A3",
    price: "₹6,999",
    highlight: "8MP · 10W · Helio G36",
    storage: "64GB / 128GB",
  },
  {
    name: "Redmi A2+",
    price: "₹5,999",
    highlight: "8MP · 10W · Helio G36",
    storage: "32GB / 64GB",
  },
];

export default function XiaomiPage() {
  useEffect(() => {
    updateSEO({
      title:
        "Xiaomi & Redmi Phones in Chennai – Xiaomi 14, Redmi Note 13 | Gadget Zone Thiruvanmiyur",
      description:
        "Buy Xiaomi and Redmi phones at Gadget Zone, Thiruvanmiyur Chennai. Xiaomi 14 Ultra, Redmi Note 13 Pro+ with EMI options. Value-for-money smartphones.",
      canonical: "/products/xiaomi",
      ogUrl: "/products/xiaomi",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mi / Xiaomi", url: "/products/xiaomi" },
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
          <span className="text-gray-800">Mi / Xiaomi</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.MI}
            alt="Xiaomi"
            className="h-16 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Xiaomi"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Xiaomi & Redmi Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Value-for-money smartphones with powerful specs — Xiaomi flagship,
          Redmi Note & Redmi series at Gadget Zone.
        </p>
      </section>

      {/* Xiaomi Flagship */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Xiaomi Flagship Series
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Xiaomi flagships with Leica cameras and Snapdragon 8 Gen 3.
            Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flagshipModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Redmi Note Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Redmi Note Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Feature-packed Redmi Note phones with 200MP cameras and fast
            charging. EMI and exchange support available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {redmiNoteModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Redmi Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Redmi Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Affordable Redmi phones with reliable performance and long battery
            life. Best value in the budget segment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {redmiModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Xiaomi or Redmi phone?
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
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Xiaomi%2FRedmi%20phones.%20Please%20share%20availability%20and%20pricing.`}
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
