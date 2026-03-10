import { useEffect } from "react";
import { updateSEO } from "../../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

function waLink(product: string) {
  return `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product)}.%20Please%20share%20availability%20and%20pricing.`;
}

const products = [
  {
    name: "Type C Fast Charger (65W)",
    desc: "65W USB-C fast charger compatible with most Android phones.",
  },
  {
    name: "Original USB-C Cable (1.5m)",
    desc: "Durable braided USB-C cable for fast data transfer and charging.",
  },
  {
    name: "TWS Wireless Earbuds",
    desc: "True wireless earbuds with active noise cancellation and long battery life.",
  },
  {
    name: "Tempered Glass Screen Guard",
    desc: "9H hardness tempered glass protector for all popular models.",
  },
  {
    name: "Silicone Phone Case",
    desc: "Flexible silicone back cover with shockproof protection.",
  },
  {
    name: "Portable Power Bank 20000mAh",
    desc: "High-capacity power bank with dual USB-A and USB-C output.",
  },
];

export default function MobileAccessoriesPage() {
  useEffect(() => {
    updateSEO({
      title: "Mobile Accessories | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy mobile accessories at Gadget Zone, Thiruvanmiyur, Chennai. Chargers, cables, earphones, screen guards, cases, power banks and more. Original and compatible accessories.",
      canonical: "/products/mobile-accessories",
      ogUrl: "/products/mobile-accessories",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Mobile Accessories", url: "/products/mobile-accessories" },
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
          <span className="text-gray-800 font-medium">Mobile Accessories</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Mobile Accessories in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Find quality mobile accessories including chargers, cables, earphones,
          screen guards, cases, and power banks at Gadget Zone, Thiruvanmiyur,
          Chennai. Both original and high-quality compatible accessories
          available for all major smartphone brands.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Accessories Range
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We stock a wide range of mobile accessories for all budgets and
            requirements. Visit our store in Thiruvanmiyur or WhatsApp us for
            specific product enquiries.
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <img
              src="/assets/generated/mobile-accessories-hero.dim_800x500.jpg"
              alt="Mobile accessories available at Gadget Zone Thiruvanmiyur Chennai"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>

          {/* Product Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="mobile-accessories.list"
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                data-ocid={`mobile-accessories.item.${i + 1}`}
              >
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-base text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1">{product.desc}</p>
                  <a
                    href={waLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition"
                    data-ocid={`mobile-accessories.whatsapp_button.${i + 1}`}
                  >
                    💬 WhatsApp to Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-600 text-sm">
            <strong>Gadget Zone</strong> is your trusted mobile accessories
            store in Thiruvanmiyur, Chennai. We serve customers across Adyar,
            Besant Nagar, Kottivakkam, Perungudi, Velachery, and nearby ECR
            areas.
          </p>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Looking for Accessories?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us to check availability and pricing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="mobile-accessories.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20mobile%20accessories.%20Please%20share%20what%27s%20available.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="mobile-accessories.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
