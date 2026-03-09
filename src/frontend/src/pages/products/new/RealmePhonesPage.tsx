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
          data-ocid="realme-phones.whatsapp_button"
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
  { label: "Motorola Phones", path: "/products/motorola-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const gtSeriesModels: PhoneModel[] = [
  {
    name: "Realme GT 7 Pro",
    price: "₹54,999",
    highlight: "Snapdragon 8 Elite · 50MP · 6500mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Realme GT 6T",
    price: "₹34,999",
    highlight: "Snapdragon 7+ Gen 3 · 50MP · 5500mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme GT 6",
    price: "₹43,999",
    highlight: "Snapdragon 8s Gen 3 · 50MP · 5500mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Realme GT 5 Pro",
    price: "₹29,999",
    highlight: "Snapdragon 8 Gen 3 · 50MP · 5400mAh",
    storage: "128GB / 256GB",
  },
];

const proSeriesModels: PhoneModel[] = [
  {
    name: "Realme 13 Pro+ 5G",
    price: "₹29,999",
    highlight: "Sony LYT-600 · Snapdragon 7s Gen 3 · 5200mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Realme 13 Pro 5G",
    price: "₹24,999",
    highlight: "Sony LYT-600 · Snapdragon 7s Gen 3 · 5200mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme 12 Pro+ 5G",
    price: "₹27,999",
    highlight: "Sony IMX890 · Snapdragon 7s Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme 12 Pro 5G",
    price: "₹22,999",
    highlight: "Sony IMX766 · Snapdragon 6 Gen 1",
    storage: "128GB / 256GB",
  },
];

const budgetModels: PhoneModel[] = [
  {
    name: "Realme C75",
    price: "₹11,999",
    highlight: "64MP · 6000mAh · MediaTek Helio G100",
    storage: "128GB / 256GB",
  },
  {
    name: "Realme C65 5G",
    price: "₹9,999",
    highlight: "50MP · 5000mAh · Dimensity 6300",
    storage: "128GB",
  },
  {
    name: "Realme C55",
    price: "₹8,999",
    highlight: "64MP · 5000mAh · Helio G88",
    storage: "64GB / 128GB",
  },
  {
    name: "Realme C53",
    price: "₹8,499",
    highlight: "50MP · 5000mAh · Unisoc T612",
    storage: "64GB / 128GB",
  },
];

export default function RealmePhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "Realme Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy Realme phones at Gadget Zone, Thiruvanmiyur, Chennai. Realme GT 7 Pro, 13 Pro+, C series with Snapdragon/Dimensity processors, EMI options, and genuine warranty.",
      canonical: "/products/realme-phones",
      ogUrl: "/products/realme-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "Realme", url: "/products/realme-phones" },
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
          <span className="text-gray-800 font-medium">Realme</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.REALME}
            alt="Realme phones at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Realme"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Realme Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Realme delivers powerful smartphones with the latest processors at
          aggressive pricing. At Gadget Zone, Thiruvanmiyur, Chennai, we stock
          the full Realme lineup — GT flagship series, Pro series, and budget C
          series — with genuine warranty, EMI options, and exchange support.
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
            GT Series – Flagship
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Realme's flagship GT series with Snapdragon 8 Elite and
            high-refresh-rate displays. Available at Gadget Zone, Chennai.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="realme-phones.list"
          >
            {gtSeriesModels.map((m, i) => (
              <div key={m.name} data-ocid={`realme-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Pro Series – Premium Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Realme Pro series with Sony camera sensors and Snapdragon
            processors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proSeriesModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            C Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Affordable Realme C series with large batteries and reliable cameras
            for everyday use.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {budgetModels.map((m) => (
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
                data-ocid="realme-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Realme Phone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="realme-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Realme%20phones.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="realme-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
