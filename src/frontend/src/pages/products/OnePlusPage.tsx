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
          src="/assets/generated/oneplus-phones-lineup.dim_400x500.png"
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
    name: "OnePlus 13",
    price: "₹69,999",
    highlight: "Snapdragon 8 Elite · 50MP Hasselblad · 100W",
    storage: "256GB / 512GB",
  },
  {
    name: "OnePlus 12R",
    price: "₹39,999",
    highlight: "Snapdragon 8 Gen 2 · 50MP · 100W",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus 12",
    price: "₹64,999",
    highlight: "Snapdragon 8 Gen 3 · 50MP · 100W",
    storage: "256GB / 512GB",
  },
  {
    name: "OnePlus 11R",
    price: "₹34,999",
    highlight: "Snapdragon 8+ Gen 1 · 50MP · 100W",
    storage: "128GB / 256GB",
  },
];

const nordModels: PhoneModel[] = [
  {
    name: "OnePlus Nord 4",
    price: "₹29,999",
    highlight: "Snapdragon 7+ Gen 3 · 50MP · 100W",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus Nord CE4",
    price: "₹24,999",
    highlight: "Snapdragon 7s Gen 3 · 50MP · 100W",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus Nord CE4 Lite",
    price: "₹17,999",
    highlight: "Snapdragon 695 · 50MP · 80W",
    storage: "128GB",
  },
  {
    name: "OnePlus Nord CE3 Lite",
    price: "₹14,999",
    highlight: "Snapdragon 695 · 108MP · 67W",
    storage: "128GB",
  },
];

export default function OnePlusPage() {
  useEffect(() => {
    updateSEO({
      title:
        "OnePlus Phones in Chennai – OnePlus 13, Nord 4 | Gadget Zone Thiruvanmiyur",
      description:
        "Buy OnePlus phones at Gadget Zone, Thiruvanmiyur Chennai. OnePlus 13, Nord 4, CE4 with EMI options. Flagship killer phones with fast charging.",
      canonical: "/products/oneplus",
      ogUrl: "/products/oneplus",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "OnePlus", url: "/products/oneplus" },
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
          <span className="text-gray-800">OnePlus</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.ONEPLUS}
            alt="OnePlus"
            className="h-16 w-auto object-contain"
            fallbackType="logo"
            fallbackText="OnePlus"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          OnePlus Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Flagship killers with OxygenOS, ultra-fast charging & premium build —
          OnePlus lineup at Gadget Zone.
        </p>
      </section>

      {/* Flagship Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Flagship Series
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            OnePlus flagship phones with Hasselblad cameras, OxygenOS, and 100W
            fast charging. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flagshipModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Nord Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nord Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            OnePlus Nord series offering flagship-grade features at mid-range
            prices. EMI and exchange support available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nordModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a OnePlus phone?
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
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20OnePlus%20phones.%20Please%20share%20availability%20and%20pricing.`}
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
