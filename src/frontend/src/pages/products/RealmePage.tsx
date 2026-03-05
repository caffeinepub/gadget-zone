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
          src="/assets/generated/realme-phones-lineup.dim_400x500.png"
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

const gtModels: PhoneModel[] = [
  {
    name: "Realme GT 6",
    price: "₹39,999",
    highlight: "Snapdragon 8s Gen 3 · 50MP · 120W",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme GT 6T",
    price: "₹29,999",
    highlight: "Snapdragon 7+ Gen 3 · 50MP · 120W",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme GT 5 Pro",
    price: "₹34,999",
    highlight: "Snapdragon 8 Gen 3 · 50MP · 100W",
    storage: "256GB / 512GB",
  },
  {
    name: "Realme GT Neo 6",
    price: "₹24,999",
    highlight: "Snapdragon 7+ Gen 3 · 50MP · 100W",
    storage: "128GB / 256GB",
  },
];

const numberModels: PhoneModel[] = [
  {
    name: "Realme 13 Pro+",
    price: "₹29,999",
    highlight: "50MP Sony LYT-600 · 80W · Dimensity 7300",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme 13 Pro",
    price: "₹24,999",
    highlight: "50MP · 80W · Dimensity 7300 Energy",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme 13+",
    price: "₹19,999",
    highlight: "50MP · 80W · Dimensity 7300 Energy",
    storage: "128GB",
  },
  {
    name: "Realme 13",
    price: "₹15,999",
    highlight: "50MP · 45W · Dimensity 6300",
    storage: "128GB",
  },
];

const cNarzoModels: PhoneModel[] = [
  {
    name: "Realme Narzo 70 Pro",
    price: "₹17,999",
    highlight: "50MP · 67W · Dimensity 7050",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme Narzo 70",
    price: "₹12,999",
    highlight: "50MP · 45W · Dimensity 6080",
    storage: "128GB",
  },
  {
    name: "Realme C65",
    price: "₹10,999",
    highlight: "50MP · 45W · Helio G85",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme C55",
    price: "₹8,999",
    highlight: "64MP · 33W · Helio G88",
    storage: "64GB / 128GB",
  },
];

export default function RealmePage() {
  useEffect(() => {
    updateSEO({
      title:
        "Realme Phones in Chennai – GT 6, Narzo 70, C65 | Gadget Zone Thiruvanmiyur",
      description:
        "Buy Realme phones at Gadget Zone, Thiruvanmiyur Chennai. Realme GT 6, 13 Pro+, Narzo 70 with EMI options. Feature-packed phones at competitive prices.",
      canonical: "/products/realme",
      ogUrl: "/products/realme",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Realme", url: "/products/realme" },
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
          <span className="text-gray-800">Realme</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.REALME}
            alt="Realme"
            className="h-16 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Realme"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Realme Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Feature-packed smartphones at competitive prices — GT, Number &
          C/Narzo series at Gadget Zone.
        </p>
      </section>

      {/* GT Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            GT Series – Flagship
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Realme GT flagship phones with flagship chipsets and 120W fast
            charging. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gtModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Number Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Number Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Realme's mid-range lineup with Sony sensors and reliable
            performance. EMI and exchange options available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {numberModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* C/Narzo Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            C & Narzo Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Budget Realme phones packed with features at affordable prices.
            Great for first-time smartphone buyers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cNarzoModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Realme phone?
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
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Realme%20phones.%20Please%20share%20availability%20and%20pricing.`}
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
