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
          data-ocid="xiaomi-phones.whatsapp_button"
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
  { label: "Vivo Phones", path: "/products/vivo-phones" },
  { label: "Realme Phones", path: "/products/realme-phones" },
  { label: "Motorola Phones", path: "/products/motorola-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const xiaomiModels: PhoneModel[] = [
  {
    name: "Xiaomi 14 Ultra",
    price: "₹99,999",
    highlight: "Leica cameras · Snapdragon 8 Gen 3 · 5000mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Xiaomi 14",
    price: "₹69,999",
    highlight: "Leica optics · Snapdragon 8 Gen 3 · 4610mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Xiaomi 13 Pro",
    price: "₹54,999",
    highlight: "Leica 50MP · Snapdragon 8 Gen 2 · 4820mAh",
    storage: "256GB",
  },
  {
    name: "Xiaomi 13",
    price: "₹44,999",
    highlight: "50MP Leica · Compact design · Snapdragon 8 Gen 2",
    storage: "128GB / 256GB",
  },
];

const redmiNoteModels: PhoneModel[] = [
  {
    name: "Redmi Note 13 Pro+ 5G",
    price: "₹29,999",
    highlight: "200MP · 120W charging · Dimensity 7200 Ultra",
    storage: "256GB / 512GB",
  },
  {
    name: "Redmi Note 13 Pro 5G",
    price: "₹23,999",
    highlight: "200MP · 67W charging · Snapdragon 7s Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi Note 13 5G",
    price: "₹18,999",
    highlight: "108MP · 5000mAh · Snapdragon 6490",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi Note 13",
    price: "₹15,999",
    highlight: "108MP · 5000mAh · Snapdragon 685",
    storage: "128GB / 256GB",
  },
];

const redmiModels: PhoneModel[] = [
  {
    name: "Redmi 13C 5G",
    price: "₹10,999",
    highlight: "50MP · 5000mAh · MediaTek Dimensity 6100+",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi 13",
    price: "₹9,999",
    highlight: "108MP · 5030mAh · Helio G91 Ultra",
    storage: "128GB / 256GB",
  },
  {
    name: "Redmi 12",
    price: "₹8,999",
    highlight: "50MP · 5000mAh · Snapdragon 4 Gen 2",
    storage: "128GB",
  },
  {
    name: "Redmi A3",
    price: "₹6,999",
    highlight: "8MP · 5000mAh · Budget pick",
    storage: "64GB / 128GB",
  },
];

export default function XiaomiPhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "Xiaomi & Redmi Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy Xiaomi and Redmi phones at Gadget Zone, Thiruvanmiyur, Chennai. Xiaomi 14 Ultra, Redmi Note 13 Pro+, Redmi series with EMI options, exchange support, and warranty.",
      canonical: "/products/xiaomi-phones",
      ogUrl: "/products/xiaomi-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "Xiaomi", url: "/products/xiaomi-phones" },
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
          <span className="text-gray-800 font-medium">Xiaomi / Redmi</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.MI}
            alt="Xiaomi Redmi phones at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Xiaomi"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Xiaomi & Redmi Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Xiaomi and Redmi offer some of the best value-for-money smartphones in
          India. From the premium Xiaomi 14 Ultra with Leica cameras to the
          affordable Redmi A series, Gadget Zone in Thiruvanmiyur, Chennai
          stocks the complete lineup with genuine warranty, EMI, and exchange
          options.
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
            Xiaomi Flagship Series
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Xiaomi's premium lineup with Leica co-engineered cameras and top
            Snapdragon processors. Available at Gadget Zone, Chennai.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="xiaomi-phones.list"
          >
            {xiaomiModels.map((m, i) => (
              <div key={m.name} data-ocid={`xiaomi-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Redmi Note Series – Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Redmi Note series offers high-resolution cameras and fast charging
            at mid-range prices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {redmiNoteModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Redmi Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Affordable Redmi phones with impressive battery life and capable
            cameras.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {redmiModels.map((m) => (
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
                data-ocid="xiaomi-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in Xiaomi or Redmi?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="xiaomi-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Xiaomi%20or%20Redmi%20phones.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="xiaomi-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
