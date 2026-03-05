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
          src="/assets/generated/motorola-phones-lineup.dim_400x500.png"
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

const edgeModels: PhoneModel[] = [
  {
    name: "Edge 50 Pro",
    price: "₹31,999",
    highlight: "50MP OIS · 125W charging · pOLED",
    storage: "256GB",
  },
  {
    name: "Edge 50 Fusion",
    price: "₹22,999",
    highlight: "50MP · 68W · Snapdragon 7s Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Edge 50 Neo",
    price: "₹17,999",
    highlight: "50MP · 68W · Dimensity 7300",
    storage: "128GB / 256GB",
  },
  {
    name: "Edge 30 Ultra",
    price: "₹39,999",
    highlight: '200MP · 125W · 6.67" pOLED',
    storage: "256GB",
  },
];

const motoGModels: PhoneModel[] = [
  {
    name: "Moto G85 5G",
    price: "₹17,999",
    highlight: "50MP OIS · 5000mAh · pOLED",
    storage: "128GB / 256GB",
  },
  {
    name: "Moto G64 5G",
    price: "₹13,999",
    highlight: "50MP · 6000mAh · Dimensity 7025",
    storage: "128GB / 256GB",
  },
  {
    name: "Moto G54 5G",
    price: "₹11,999",
    highlight: "50MP · 6000mAh · Dimensity 7020",
    storage: "128GB / 256GB",
  },
  {
    name: "Moto G34 5G",
    price: "₹9,999",
    highlight: "50MP · 5000mAh · Snapdragon 695",
    storage: "128GB",
  },
];

const motoEModels: PhoneModel[] = [
  {
    name: "Moto E14",
    price: "₹6,999",
    highlight: '13MP · 4000mAh · 6.56" HD+',
    storage: "64GB / 128GB",
  },
  {
    name: "Moto E13",
    price: "₹5,999",
    highlight: "13MP · 5000mAh · Unisoc T606",
    storage: "64GB",
  },
];

export default function MotorolaPage() {
  useEffect(() => {
    updateSEO({
      title:
        "Motorola Phones in Chennai – Edge 50, Moto G85 | Gadget Zone Thiruvanmiyur",
      description:
        "Buy Motorola phones at Gadget Zone, Thiruvanmiyur Chennai. Edge 50 Pro, Moto G85, G64 with EMI options. Near-stock Android with great battery life.",
      canonical: "/products/motorola",
      ogUrl: "/products/motorola",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Motorola", url: "/products/motorola" },
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
          <span className="text-gray-800">Motorola</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.MOTOROLA}
            alt="Motorola"
            className="h-16 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Motorola"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Motorola Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Reliable smartphones with near-stock Android experience — Edge, Moto G
          & Moto E series at Gadget Zone.
        </p>
      </section>

      {/* Edge Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Edge Series – Premium
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Motorola Edge series: near-stock Android, pOLED display, and
            ultra-fast 125W charging. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {edgeModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Moto G Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Moto G Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Reliable mid-range Motorola phones with big batteries and great
            cameras. EMI and exchange options available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {motoGModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Moto E Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Moto E Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Budget Motorola phones with clean Android experience. Best entry
            point to the Motorola ecosystem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {motoEModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Moto G Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Moto G Series – Mid-Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {motoGModels.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-base mb-1 text-gray-900">
                  {m.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-1">
                  {m.price}
                </p>
                <p className="text-gray-500 text-xs">{m.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moto E Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Moto E Series – Budget
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {motoEModels.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-base mb-1 text-gray-900">
                  {m.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-1">
                  {m.price}
                </p>
                <p className="text-gray-500 text-xs">{m.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Motorola phone?
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
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Motorola%20phones.%20Please%20share%20availability%20and%20pricing.`}
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
