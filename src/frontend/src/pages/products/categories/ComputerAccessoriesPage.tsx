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
    name: "Wireless Keyboard & Mouse Combo",
    desc: "Ergonomic wireless combo with long battery life and silent keys.",
  },
  {
    name: "USB 3.0 Hub (7-Port)",
    desc: "7-port USB 3.0 hub with individual power switches.",
  },
  {
    name: "Laptop Stand (Adjustable)",
    desc: "Aluminium adjustable laptop stand for improved posture and cooling.",
  },
  {
    name: "HDMI Cable (4K)",
    desc: "4K HDMI 2.0 cable for crystal-clear display output.",
  },
  {
    name: "External SSD 1TB",
    desc: "Portable USB-C SSD with up to 1000MB/s transfer speed.",
  },
  {
    name: "Laptop Cooling Pad",
    desc: "Dual-fan cooling pad compatible with 15.6 inch laptops.",
  },
];

export default function ComputerAccessoriesPage() {
  useEffect(() => {
    updateSEO({
      title: "Computer Accessories | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy computer accessories at Gadget Zone, Thiruvanmiyur, Chennai. Keyboards, mice, monitors, storage devices, networking accessories, and laptop accessories available.",
      canonical: "/products/computer-accessories",
      ogUrl: "/products/computer-accessories",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Computer Accessories", url: "/products/computer-accessories" },
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
          <span className="text-gray-800 font-medium">
            Computer Accessories
          </span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Computer Accessories in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Gadget Zone in Thiruvanmiyur, Chennai stocks a wide range of computer
          accessories for home, office, and professional use. From keyboards and
          mice to storage devices and networking gear — all at competitive
          prices with reliable after-sales support.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Available Categories
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Visit our store in Thiruvanmiyur or WhatsApp us to check
            availability for specific products.
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <img
              src="/assets/generated/computer-accessories-hero.dim_800x500.jpg"
              alt="Computer accessories available at Gadget Zone Thiruvanmiyur Chennai"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>

          {/* Product Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="computer-accessories.list"
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                data-ocid={`computer-accessories.item.${i + 1}`}
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
                    data-ocid={`computer-accessories.whatsapp_button.${i + 1}`}
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
            <strong>Gadget Zone</strong> serves customers across Thiruvanmiyur,
            Adyar, Besant Nagar, Kottivakkam, Perungudi, Velachery, and nearby
            ECR areas in Chennai.
          </p>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Need Computer Accessories?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us to check product availability and pricing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="computer-accessories.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20computer%20accessories.%20Please%20share%20what%27s%20available.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="computer-accessories.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
