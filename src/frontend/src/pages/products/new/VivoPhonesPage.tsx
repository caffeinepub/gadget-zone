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
          src="/assets/generated/vivo-phones-hero.dim_800x600.jpg"
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
          data-ocid="vivo-phones.whatsapp_button"
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
  { label: "Realme Phones", path: "/products/realme-phones" },
  { label: "Motorola Phones", path: "/products/motorola-phones" },
  { label: "Nothing Phones", path: "/products/nothing-phones" },
];

const xSeriesModels: PhoneModel[] = [
  {
    name: "Vivo X200 Pro",
    price: "₹94,999",
    highlight: "Zeiss cameras · 200MP · Dimensity 9400",
    storage: "256GB / 512GB",
  },
  {
    name: "Vivo X200",
    price: "₹64,999",
    highlight: "50MP Zeiss · Dimensity 9300+ · 5800mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Vivo X100 Pro",
    price: "₹84,999",
    highlight: "Zeiss 50MP · Dimensity 9300 · 4700mAh",
    storage: "256GB / 512GB",
  },
  {
    name: "Vivo X100",
    price: "₹59,999",
    highlight: "50MP Zeiss · Dimensity 9300 · 5000mAh",
    storage: "256GB",
  },
];

const vSeriesModels: PhoneModel[] = [
  {
    name: "Vivo V40 Pro",
    price: "₹49,999",
    highlight: "50MP Zeiss · Dimensity 9200+ · 5500mAh",
    storage: "256GB",
  },
  {
    name: "Vivo V40",
    price: "₹36,999",
    highlight: "50MP Zeiss · Snapdragon 7 Gen 3 · 5500mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "Vivo V40e",
    price: "₹26,999",
    highlight: "50MP · Dimensity 7300 · 5500mAh",
    storage: "128GB / 256GB",
  },
  {
    name: "Vivo V30e",
    price: "₹22,999",
    highlight: "64MP · Snapdragon 6 Gen 1 · 6000mAh",
    storage: "128GB / 256GB",
  },
];

const ySeriesModels: PhoneModel[] = [
  {
    name: "Vivo Y300 5G",
    price: "₹22,999",
    highlight: "50MP · 5000mAh · Snapdragon 4 Gen 2",
    storage: "128GB / 256GB",
  },
  {
    name: "Vivo Y200e 5G",
    price: "₹15,999",
    highlight: "50MP · 5000mAh · Snapdragon 4 Gen 1",
    storage: "128GB",
  },
  {
    name: "Vivo Y100",
    price: "₹18,999",
    highlight: "64MP · 44W fast charging · MediaTek Dimensity 6020",
    storage: "128GB / 256GB",
  },
  {
    name: "Vivo Y28 5G",
    price: "₹12,999",
    highlight: "50MP · 6000mAh · Dimensity 6020",
    storage: "128GB",
  },
];

export default function VivoPhonesPage() {
  useEffect(() => {
    updateSEO({
      title: "Vivo Phones | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy Vivo phones at Gadget Zone, Thiruvanmiyur, Chennai. Vivo X200 Pro, V40, Y series with Zeiss cameras, EMI options, exchange support and genuine warranty.",
      canonical: "/products/vivo-phones",
      ogUrl: "/products/vivo-phones",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Phones", url: "/products/mobile-phones" },
        { name: "Vivo", url: "/products/vivo-phones" },
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
          <span className="text-gray-800 font-medium">Vivo</span>
        </nav>
        <div className="flex justify-center mb-5">
          <SafeImage
            src={BRAND_LOGOS.VIVO}
            alt="Vivo phones at Gadget Zone Thiruvanmiyur Chennai"
            className="h-14 w-auto object-contain"
            fallbackType="logo"
            fallbackText="Vivo"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Vivo Phones in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Vivo is renowned for its Zeiss co-engineered cameras and stylish
          design. At Gadget Zone, Thiruvanmiyur, Chennai, we stock the complete
          Vivo lineup — X200 Pro flagship, V40 series, and Y series — with
          genuine warranty, EMI options, and exchange support.
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
            X Series – Flagship
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Vivo's premium X series with Zeiss cameras and flagship Dimensity
            processors. Available at Gadget Zone, Chennai.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="vivo-phones.list"
          >
            {xSeriesModels.map((m, i) => (
              <div key={m.name} data-ocid={`vivo-phones.item.${i + 1}`}>
                <PhoneCard model={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            V Series – Premium Mid-Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            V series combines slim design with Zeiss portrait cameras and fast
            charging.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vSeriesModels.map((m) => (
              <PhoneCard key={m.name} model={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Y Series – Budget
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Affordable Vivo Y series with large batteries and reliable cameras.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ySeriesModels.map((m) => (
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
                data-ocid="vivo-phones.link"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Interested in a Vivo Phone?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Visit us at Thiruvanmiyur or call/WhatsApp for latest prices, EMI &
          exchange options.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="vivo-phones.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Vivo%20phones.%20Please%20share%20availability%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="vivo-phones.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
