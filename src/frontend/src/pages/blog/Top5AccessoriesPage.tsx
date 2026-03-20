import { useEffect } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const WA =
  "https://wa.me/919840077591?text=Hi+Gadget+Zone%2C+I%27m+looking+for+accessories";

export default function Top5AccessoriesPage() {
  useEffect(() => {
    updateSEO({
      title: "Top 5 Accessories Every Phone User Needs | Gadget Zone Chennai",
      description:
        "Must-have phone accessories in 2026 — from fast chargers to earbuds. All available at Gadget Zone, Thiruvanmiyur, Chennai.",
      canonical: "/blog/top-5-accessories",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Top 5 Accessories", url: "/blog/top-5-accessories" },
      ]),
      "breadcrumb-schema",
    );
  }, []);

  return (
    <main className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Top 5 Accessories</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          Top 5 Accessories Every Phone User Needs
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          3 min read · Gadget Zone, Chennai
        </p>

        <p className="text-muted-foreground mb-6">
          The right accessories can dramatically improve your phone experience —
          from faster charging to better audio. Here are the top 5 accessories
          we recommend at Gadget Zone, all available in store.
        </p>

        <h2 className="text-xl font-bold mb-3">
          1. Fast Charger (65W or above)
        </h2>
        <p className="text-muted-foreground mb-6">
          Most phones now support fast charging, but many users still use slow
          10W adapters. A 65W or 120W fast charger can top up your phone in
          30–40 minutes. We stock branded fast chargers for all popular phone
          models.
        </p>

        <h2 className="text-xl font-bold mb-3">
          2. Tempered Glass Screen Guard
        </h2>
        <p className="text-muted-foreground mb-6">
          One drop without protection can mean a ₹3,000–₹8,000 repair bill. A
          quality tempered glass screen guard costs ₹150–₹400 and could save
          your display. We apply it for free at Gadget Zone.
        </p>

        <h2 className="text-xl font-bold mb-3">3. Wireless Earbuds</h2>
        <p className="text-muted-foreground mb-6">
          True wireless earbuds have become an everyday essential — from
          commuting to calls. We carry earbuds from boAt, JBL, OnePlus, Samsung,
          and Apple at various price points in our store.
        </p>

        <h2 className="text-xl font-bold mb-3">4. Power Bank</h2>
        <p className="text-muted-foreground mb-6">
          Chennai&apos;s long travel commutes make a power bank essential. Look
          for one with at least 10,000mAh and fast-charging support. Available
          from ₹799 at Gadget Zone.
        </p>

        <h2 className="text-xl font-bold mb-3">5. Protective Phone Case</h2>
        <p className="text-muted-foreground mb-6">
          A good case adds grip and protects against drops. We carry slim clear
          cases, leather wallets, and heavy-duty rugged cases for all popular
          phone models. Many under ₹300.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="font-semibold mb-3">
            Find all accessories at Gadget Zone, Thiruvanmiyur
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition text-sm"
            data-ocid="blog.secondary_button"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
