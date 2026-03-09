import { Headphones, Mic, Music, Radio, Speaker, Volume2 } from "lucide-react";
import { useEffect } from "react";
import { updateSEO } from "../../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "../../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

const categories = [
  {
    icon: Headphones,
    title: "TWS Earbuds",
    desc: "True wireless earbuds with active noise cancellation from top brands.",
  },
  {
    icon: Volume2,
    title: "Wired Earphones",
    desc: "High-quality wired earphones with Type-C, 3.5mm, and Lightning connectors.",
  },
  {
    icon: Headphones,
    title: "Over-Ear Headphones",
    desc: "Premium over-ear headphones for audiophiles and daily commuters.",
  },
  {
    icon: Speaker,
    title: "Bluetooth Speakers",
    desc: "Portable and home Bluetooth speakers for music, outdoor, and party use.",
  },
  {
    icon: Mic,
    title: "Microphones",
    desc: "Clip-on, desktop, and gaming microphones for content creators.",
  },
  {
    icon: Music,
    title: "Smart Audio Devices",
    desc: "Smart speakers, soundbars, and voice-enabled audio accessories.",
  },
];

export default function AudioDevicesPage() {
  useEffect(() => {
    updateSEO({
      title: "Audio Devices & Speakers | Gadget Zone Thiruvanmiyur Chennai",
      description:
        "Buy audio devices at Gadget Zone, Thiruvanmiyur, Chennai. TWS earbuds, wired earphones, headphones, Bluetooth speakers, and smart audio devices from top brands.",
      canonical: "/products/audio-devices",
      ogUrl: "/products/audio-devices",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Audio Devices", url: "/products/audio-devices" },
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
          <span className="text-gray-800 font-medium">Audio Devices</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Audio Devices & Speakers in Chennai
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          Gadget Zone in Thiruvanmiyur, Chennai offers a wide range of audio
          devices including TWS earbuds, wired earphones, over-ear headphones,
          and Bluetooth speakers. We stock products from leading audio brands at
          competitive prices with genuine warranty.
        </p>
        <p className="text-sm text-primary font-medium">
          Available at Gadget Zone, Thiruvanmiyur, Chennai.
        </p>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Audio Range
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Whether you're looking for premium noise-cancelling earbuds or an
            affordable Bluetooth speaker, we have options for every budget.
            Visit us in Thiruvanmiyur or enquire via WhatsApp.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="audio-devices.list"
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  data-ocid={`audio-devices.item.${i + 1}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
              );
            })}
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
          Looking for Audio Devices?
        </h2>
        <p className="text-primary-foreground/80 mb-5">
          Call or WhatsApp us to check availability and get the best price.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-gray-900 font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="audio-devices.primary_button"
          >
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20audio%20devices%20or%20speakers.%20Please%20share%20what%27s%20available.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-7 py-3 rounded-full shadow hover:opacity-90 transition"
            data-ocid="audio-devices.secondary_button"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
