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
          data-ocid="apple-phones.whatsapp_button"
        >
          💬 WhatsApp to Enquire
        </a>
      </div>
    </div>
  );
}

const OTHER_BRANDS = [
  { label: "Samsung Phones", path: "/products/samsung-phones" },
  { label: "OnePlus Phones", path: "/products/oneplus-phones" },
  { label: "Xiaomi Phones", path: "/products/xiaomi-phones" },
  { label: "Vivo Phones", path: "/products/vivo-phones" },
  { label: "Realme Phones", path: "/products/realme-phones" },
  { label: "Motorola Phones", path: "/products/motorola-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const iphone16Series: PhoneModel[] = [
  {
    name: "iPhone 16 Pro Max",
    price: "₹1,59,900",
    highlight: "A18 Pro · 48MP · Titanium · 4K 120fps",
    storage: "256GB / 512GB / 1TB",
  },
  {
    name: "iPhone 16 Pro",
    price: "₹1,19,900",
    highlight: "A18 Pro · 48MP · Camera Control",
    storage: "128GB / 256GB / 512GB / 1TB",
  },
  {
    name: "iPhone 16 Plus",
    price: "₹89,900",
    highlight: 'A18 · 48MP · 6.7" · 4K video',
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "iPhone 16",
    price: "₹79,900",
    highlight: "A18 · 48MP · Dynamic Island",
    storage: "128GB / 256GB / 512GB",
  },
];

const iphone15Series: PhoneModel[] = [
  {
    name: "iPhone 15 Pro Max",
    price: "₹1,34,900",
    highlight: "A17 Pro · Titanium · 5x zoom",
    storage: "256GB / 512GB / 1TB",
  },
  {
    name: "iPhone 15 Pro",
    price: "₹1,09,900",
    highlight: "A17 Pro · USB-C · Action Button",
    storage: "128GB / 256GB / 512GB / 1TB",
  },
  {
    name: "iPhone 15 Plus",
    price: "₹79,900",
    highlight: 'A16 · 48MP · 6.7" Super Retina',
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "iPhone 15",
    price: "₹69,900",
    highlight: "A16 · 48MP · Dynamic Island",
    storage: "128GB / 256GB / 512GB",
  },
];

const olderSeries: PhoneModel[] = [
  {
    name: "iPhone 16e",
    price: "₹59,900",
    highlight: "A16 · 5G · Compact · Face ID",
    storage: "128GB / 256GB",
  },
  {
    name: "iPhone 14",
    price: "₹56,900",
    highlight: "A15 · 12MP · Crash Detection",
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "iPhone 13",
    price: "₹49,900",
    highlight: "A15 · 12MP · Cinematic mode",
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "iPhone 12",
    price: "₹39,900",
    highlight: "A14 · 5G · MagSafe",
    storage: "64GB / 128GB / 256GB",
  },
];

export default function ApplePhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "Apple iPhone Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy Apple iPhone at Gadget Zone, Thiruvanmiyur, Chennai. iPhone 16 Pro Max, 16e, 15 series and older models with EMI options, exchange support, and genuine Apple warranty.",
      canonical: "/products/apple-phones",
      ogUrl: "/products/apple-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "Apple", url: "/products/apple-phones" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Brand Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 text-center">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Products</span>
          <span className="mx-2">›</span>
          <span>Mobile Phones</span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Apple</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.APPLE}
            alt="Apple iPhone at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Apple"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Apple iPhone in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Explore the complete Apple iPhone lineup at Gadget Zone,
          Thiruvanmiyur, Chennai. From the latest iPhone 16 Pro Max to the new
          iPhone 16e, we stock genuine sealed Apple products with warranty, EMI
          options, and exchange support. Visit us or enquire via WhatsApp for
          latest availability and pricing.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          * Prices are indicative. Contact us for confirmed pricing.
        </p>
      </section>

      {/* iPhone 16 Series */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            iPhone 16 Series – Latest
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            The most powerful iPhone lineup featuring A18 Pro chip, Camera
            Control, and titanium design. Available now at Gadget Zone,
            Thiruvanmiyur.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="apple-phones.list"
          >
            {iphone16Series.map((m, i) => (
              <div key={m.name} data-ocid={`apple-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iPhone 15 Series */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            iPhone 15 Series
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Featuring A17 Pro chip, titanium build, and USB-C. A powerful range
            for performance-first users. Available with EMI at Gadget Zone,
            Chennai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {iphone15Series.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Older + 16e */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            iPhone 16e & Older Models
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Reliable performance at accessible price points. Includes the new
            iPhone 16e — Apple's compact flagship for 2026. Great value with
            full Apple ecosystem support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {olderSeries.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands */}
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
                data-ocid="apple-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Looking for an iPhone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="apple-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Apple%20iPhone.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="apple-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
