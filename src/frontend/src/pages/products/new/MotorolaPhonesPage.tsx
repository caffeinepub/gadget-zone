import { useEffect } from "react";
import { SafeImage } from "../../../components/SafeImage";
import { BRAND_LOGOS } from "../../../lib/brandLogos";
import { updateSEO } from "../../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

function waLink(model: string) {
  return `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(model)}.%20Please%20share%20availability%20and%20pricing.`;
}

interface PhoneModel {
  name: string;
  price: string;
  highlight: string;
  storage: string;
}

function PhoneCard({ model }: { model: PhoneModel }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div
        className="bg-gray-50 flex items-center justify-center p-4"
        style={{ height: "180px" }}
      >
        <div className="w-12 h-20 bg-gray-200 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 text-[10px] text-center px-1">
            {model.name.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="self-start bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full border border-green-200">
          EMI Available
        </span>
        <h3 className="font-bold text-base text-gray-900">{model.name}</h3>
        <p className="text-primary font-semibold text-sm">{model.price}</p>
        <p className="text-gray-500 text-xs">{model.highlight}</p>
        <p className="text-gray-400 text-xs">Storage: {model.storage}</p>
        <a
          href={waLink(model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition"
          data-ocid="motorola-phones.whatsapp_button"
        >
          💬 WhatsApp to Enquire
        </a>
      </div>
    </div>
  );
}

const OTHER_BRANDS = [
  { label: "Samsung Phones", path: "/products/samsung-phones" },
  { label: "Apple Phones", path: "/products/apple-phones" },
  { label: "OnePlus Phones", path: "/products/oneplus-phones" },
  { label: "Xiaomi Phones", path: "/products/xiaomi-phones" },
  { label: "Vivo Phones", path: "/products/vivo-phones" },
  { label: "Realme Phones", path: "/products/realme-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const edgeModels: PhoneModel[] = [
  {
    name: "Motorola Edge 50 Pro",
    price: "₹31,999",
    highlight: "50MP OIS · 125W charging · pOLED",
    storage: "256GB",
  },
  {
    name: "Motorola Edge 50 Fusion",
    price: "₹22,999",
    highlight: "50MP · 68W · Snapdragon 7s Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Motorola Edge 50 Neo",
    price: "₹17,999",
    highlight: "50MP · 68W · Dimensity 7300",
    storage: "128GB / 256GB",
  },
  {
    name: "Motorola Edge 30 Ultra",
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
  {
    name: "Moto E40",
    price: "₹7,499",
    highlight: "48MP · 5000mAh · Unisoc T700",
    storage: "64GB / 128GB",
  },
  {
    name: "Moto G04s",
    price: "₹8,499",
    highlight: "50MP · 5000mAh · Helio G85",
    storage: "64GB / 128GB",
  },
];

export default function MotorolaPhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "Motorola Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy Motorola phones at Gadget Zone, Thiruvanmiyur, Chennai. Edge 50 Pro, Moto G85, Moto G64 with near-stock Android, fast charging, EMI options and genuine warranty.",
      canonical: "/products/motorola-phones",
      ogUrl: "/products/motorola-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "Motorola", url: "/products/motorola-phones" },
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
          <span>Mobile Phones</span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Motorola</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.MOTOROLA}
            alt="Motorola phones at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Motorola"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Motorola Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Motorola is trusted for near-stock Android experience, reliable build
          quality, and long battery life. At Gadget Zone, Thiruvanmiyur,
          Chennai, we stock the full Motorola lineup — Edge premium series, Moto
          G mid-range, and Moto E budget series — with genuine warranty, EMI,
          and exchange options.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          * Prices are indicative. Contact us for confirmed pricing.
        </p>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Edge Series – Premium
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Motorola Edge series: near-stock Android, pOLED display, and
            ultra-fast 125W charging. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="motorola-phones.list"
          >
            {edgeModels.map((m, i) => (
              <div key={m.name} data-ocid={`motorola-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Moto E & Budget Series
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

      <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Explore Other Brands
          </h2>
          <div className="flex flex-wrap gap-2">
            {OTHER_BRANDS.map((b) => (
              <a
                key={b.path}
                href={b.path}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary hover:text-primary transition"
                data-ocid="motorola-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Motorola Phone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="motorola-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Motorola%20phones.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="motorola-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
