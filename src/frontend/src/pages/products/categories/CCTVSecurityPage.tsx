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
    name: "Dome CCTV Camera (Indoor)",
    desc: "2MP full HD dome camera for indoor use. Night vision enabled.",
  },
  {
    name: "Bullet CCTV Camera (Outdoor)",
    desc: "Weatherproof outdoor bullet camera with IR night vision up to 30m.",
  },
  {
    name: "WiFi Smart Camera",
    desc: "Smart WiFi camera with motion alerts and mobile app support.",
  },
  {
    name: "4-Channel DVR Kit",
    desc: "Complete 4-channel DVR set with cameras, cables, and installation guide.",
  },
  {
    name: "PTZ Camera",
    desc: "Pan-Tilt-Zoom camera for wide-area monitoring with remote control.",
  },
  {
    name: "NVR System (8-Channel)",
    desc: "Network video recorder supporting up to 8 IP cameras.",
  },
];

export default function CCTVSecurityPage() {
  useEffect(() => {
    updateSEO({
      title: "CCTV & Security Solutions | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "CCTV camera sales and professional installation at Gadget Zone, Thiruvanmiyur, Chennai. Indoor, outdoor, dome, bullet, WiFi cameras, DVR/NVR setup for homes, shops and offices.",
      canonical: "/products/cctv-security",
      ogUrl: "/products/cctv-security",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "CCTV & Security", url: "/products/cctv-security" },
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
          <span className="text-gray-800 font-medium">CCTV & Security</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          CCTV & Security Solutions in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          We provide CCTV camera sales and professional installation services
          for homes, shops, offices, and commercial spaces in Thiruvanmiyur,
          Chennai. Our solutions include indoor and outdoor cameras, DVR/NVR
          setup, proper wiring, and basic configuration to ensure reliable
          monitoring and security.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our CCTV Solutions
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Get assistance in selecting the right surveillance setup based on
            your space and requirement. We handle sales, installation, and basic
            configuration for all types of properties.
          </p>

          {/* Hero Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <img
              src="/assets/generated/cctv-security-hero.dim_800x500.jpg"
              alt="CCTV cameras for home and office security in Chennai Thiruvanmiyur"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>

          {/* Product Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="cctv-security.list"
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                data-ocid={`cctv-security.item.${i + 1}`}
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
                    data-ocid={`cctv-security.whatsapp_button.${i + 1}`}
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
            <strong>Gadget Zone</strong> provides CCTV and security solutions
            across Thiruvanmiyur, Adyar, Besant Nagar, Kottivakkam, Perungudi,
            Velachery, and nearby ECR areas in Chennai.
          </p>
        </div>
      </section>

      <section className="bg-primary py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
          Need CCTV Installation?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Contact us for a consultation and installation quote for your home or
          business.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="cctv-security.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20CCTV%20installation.%20Please%20share%20details%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="cctv-security.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
