import { useEffect, useState } from "react";
import { SafeImage } from "../components/SafeImage";
import { BRAND_LOGOS } from "../lib/brandLogos";
import { updateSEO } from "../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../lib/structuredData";

const WA_NUMBER = "919840077591";
const PHONE = "9840077591";

type Category = "All" | "Premium" | "Mid-Range" | "Budget";

interface Brand {
  name: string;
  logoKey: string;
  description: string;
  priceRange: string;
  category: Category;
  path: string;
  models: string[];
}

const brands: Brand[] = [
  {
    name: "Samsung",
    logoKey: "SAMSUNG",
    description:
      "World's leading smartphone brand with Galaxy S, A, and M series.",
    priceRange: "₹8,000 – ₹1,60,000",
    category: "Premium",
    path: "/brands/samsung",
    models: [
      "Galaxy S25 Ultra",
      "Galaxy S25+",
      "Galaxy A55",
      "Galaxy A35",
      "Galaxy M35",
      "Galaxy M15",
    ],
  },
  {
    name: "Apple",
    logoKey: "APPLE",
    description: "Premium iPhones with unmatched performance and ecosystem.",
    priceRange: "₹49,900 – ₹1,89,900",
    category: "Premium",
    path: "/brands/apple",
    models: [
      "iPhone 16 Pro Max",
      "iPhone 16 Pro",
      "iPhone 16",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
    ],
  },
  {
    name: "Motorola",
    logoKey: "MOTOROLA",
    description:
      "Reliable smartphones with near-stock Android and great battery life.",
    priceRange: "₹7,000 – ₹60,000",
    category: "Mid-Range",
    path: "/brands/motorola",
    models: [
      "Edge 50 Pro",
      "Edge 50 Fusion",
      "Moto G85",
      "Moto G64",
      "Moto G34",
      "Moto E14",
    ],
  },
  {
    name: "OnePlus",
    logoKey: "ONEPLUS",
    description: "Flagship killer phones with fast charging and OxygenOS.",
    priceRange: "₹15,000 – ₹1,00,000",
    category: "Premium",
    path: "/brands/oneplus",
    models: [
      "OnePlus 13",
      "OnePlus 12R",
      "OnePlus Nord 4",
      "OnePlus Nord CE4",
      "OnePlus Nord CE3 Lite",
    ],
  },
  {
    name: "Realme",
    logoKey: "REALME",
    description:
      "Feature-packed phones at competitive prices for every segment.",
    priceRange: "₹6,000 – ₹45,000",
    category: "Budget",
    path: "/brands/realme",
    models: [
      "Realme GT 6",
      "Realme 13 Pro+",
      "Realme 13 Pro",
      "Realme Narzo 70 Pro",
      "Realme C65",
      "Realme C55",
    ],
  },
  {
    name: "Vivo",
    logoKey: "VIVO",
    description: "Stylish phones with excellent cameras and fast charging.",
    priceRange: "₹8,000 – ₹90,000",
    category: "Mid-Range",
    path: "/brands/vivo",
    models: [
      "Vivo X100 Pro",
      "Vivo V40 Pro",
      "Vivo V40",
      "Vivo Y300 Pro",
      "Vivo Y200",
      "Vivo Y18",
    ],
  },
  {
    name: "Mi / Xiaomi",
    logoKey: "MI",
    description: "Value-for-money smartphones with powerful specs and MIUI.",
    priceRange: "₹7,000 – ₹1,00,000",
    category: "Mid-Range",
    path: "/brands/xiaomi",
    models: [
      "Xiaomi 14 Ultra",
      "Xiaomi 14",
      "Redmi Note 13 Pro+",
      "Redmi Note 13 Pro",
      "Redmi 13C",
      "Redmi A3",
    ],
  },
  {
    name: "Nothing",
    logoKey: "NOTHING_MOBILE",
    description:
      "Unique transparent design phones with clean Android experience.",
    priceRange: "₹20,000 – ₹60,000",
    category: "Mid-Range",
    path: "/brands/nothing",
    models: [
      "Nothing Phone (2a) Plus",
      "Nothing Phone (2a)",
      "Nothing Phone (2)",
      "Nothing Phone (1)",
    ],
  },
  {
    name: "CCTV & Security",
    logoKey: "CCTV",
    description:
      "Professional CCTV cameras and security systems for home & business.",
    priceRange: "₹2,500 – ₹50,000",
    category: "All",
    path: "/services/cctv",
    models: [
      "HD Dome Camera",
      "Bullet Camera",
      "4K IP Camera",
      "DVR/NVR Systems",
      "PTZ Cameras",
    ],
  },
];

const categories: Category[] = ["All", "Premium", "Mid-Range", "Budget"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    updateSEO({
      title:
        "Mobile Phones & Brands – Gadget Zone Chennai | Samsung, Apple, Motorola & More",
      description:
        "Browse all mobile phone brands at Gadget Zone Chennai. Samsung, Apple, Motorola, OnePlus, Realme, Vivo, Xiaomi, Nothing & CCTV. Best prices with EMI options.",
      canonical: "/brands",
      ogUrl: "/brands",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Brands", url: "/brands" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  const filtered =
    activeCategory === "All"
      ? brands
      : brands.filter(
          (b) => b.category === activeCategory || b.category === "All",
        );

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 text-center">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <a href="/" className="hover:text-gray-800 transition">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Brands</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Mobile Phones & Brands
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our wide range of smartphones from top brands. All models
          available with EMI options.
        </p>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Logo Area */}
              <div className="bg-gray-50 flex items-center justify-center h-28 px-6 border-b border-gray-100">
                <SafeImage
                  src={BRAND_LOGOS[brand.logoKey]}
                  alt={brand.name}
                  className="h-14 w-auto object-contain"
                  fallbackType="logo"
                  fallbackText={brand.name}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-900">
                    {brand.name}
                  </h2>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {brand.priceRange}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {brand.description}
                </p>

                {/* Popular Models */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {brand.models.slice(0, 3).map((model) => (
                    <span
                      key={model}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {model}
                    </span>
                  ))}
                  {brand.models.length > 3 && (
                    <span className="text-xs text-primary font-medium">
                      +{brand.models.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-2">
                  <a
                    href={brand.path}
                    className="flex-1 text-center bg-primary text-primary-foreground text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition"
                  >
                    View Models
                  </a>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(brand.name)}%20phones.%20Please%20share%20availability%20and%20pricing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Can't find what you're looking for?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us — we'll help you find the perfect phone.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            📞 {PHONE}
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20a%20phone.%20Can%20you%20help%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
