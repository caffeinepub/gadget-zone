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
        className="bg-gray-50 flex items-center justify-center overflow-hidden"
        style={{ height: "180px" }}
      >
        <img
          src="/assets/generated/oneplus-phones-hero.dim_800x600.jpg"
          alt={`${model.name} at Gadget Zone Chennai`}
          className="w-full h-full object-cover"
        />
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
          data-ocid="oneplus-phones.whatsapp_button"
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
  { label: "Xiaomi Phones", path: "/products/xiaomi-phones" },
  { label: "Vivo Phones", path: "/products/vivo-phones" },
  { label: "Realme Phones", path: "/products/realme-phones" },
  { label: "Motorola Phones", path: "/products/motorola-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const flagshipModels: PhoneModel[] = [
  {
    name: "OnePlus 13",
    price: "₹69,999",
    highlight: "Snapdragon 8 Elite · 50MP Hasselblad · 6000mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "OnePlus 13R",
    price: "₹42,999",
    highlight: "Snapdragon 8 Gen 2 · 50MP · 5500mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus 12",
    price: "₹59,999",
    highlight: "Snapdragon 8 Gen 3 · 50MP Hasselblad",
    storage: "256GB / 512GB",
  },
  {
    name: "OnePlus 12R",
    price: "₹35,999",
    highlight: "Snapdragon 8 Gen 1 · 50MP · 5500mAh",
    storage: "128GB / 256GB",
  },
];

const nordModels: PhoneModel[] = [
  {
    name: "OnePlus Nord 4",
    price: "₹29,999",
    highlight: "Snapdragon 7+ Gen 3 · 50MP · 5500mAh",
    storage: "128GB / 256GB / 512GB",
  },
  {
    name: "OnePlus Nord CE4",
    price: "₹24,999",
    highlight: "Snapdragon 7s Gen 2 · 50MP · 5500mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus Nord CE4 Lite",
    price: "₹18,999",
    highlight: "Snapdragon 695 · 50MP · 5110mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "OnePlus Nord CE3 Lite",
    price: "₹16,999",
    highlight: "Snapdragon 695 · 108MP · 5000mAh",
    storage: "128GB / 256GB",
  },
];

export default function OnePlusPhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "OnePlus Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy OnePlus phones at Gadget Zone, Thiruvanmiyur, Chennai. OnePlus 13, 13R, Nord 4 with Snapdragon processors, Hasselblad cameras, EMI options and exchange support.",
      canonical: "/products/oneplus-phones",
      ogUrl: "/products/oneplus-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "OnePlus", url: "/products/oneplus-phones" },
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
          <span className="text-gray-800 font-medium">OnePlus</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.ONEPLUS}
            alt="OnePlus phones at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="OnePlus"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          OnePlus Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          OnePlus is known for delivering flagship-grade performance at
          competitive prices. At Gadget Zone, Thiruvanmiyur, Chennai, we offer
          the latest OnePlus 13 series, Nord series, and more with genuine
          warranty, EMI options, and exchange support.
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
            Flagship Series
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Top-tier OnePlus smartphones with Snapdragon 8 Elite and Hasselblad
            co-engineered cameras. Available at Gadget Zone, Thiruvanmiyur.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="oneplus-phones.list"
          >
            {flagshipModels.map((m, i) => (
              <div key={m.name} data-ocid={`oneplus-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nord Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Reliable mid-range OnePlus Nord phones with premium features at
            accessible prices. EMI options available.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nordModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-t border-gray-100">
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
                data-ocid="oneplus-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a OnePlus Phone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="oneplus-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20OnePlus%20phones.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="oneplus-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
