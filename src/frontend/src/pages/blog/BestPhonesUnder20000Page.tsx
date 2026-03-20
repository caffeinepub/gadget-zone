import { useEffect } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const WA =
  "https://wa.me/919840077591?text=Hi+Gadget+Zone%2C+I%27m+interested+in+budget+phones+under+20000";

export default function BestPhonesUnder20000Page() {
  useEffect(() => {
    updateSEO({
      title: "Best Phones Under ₹20,000 in Chennai (2026) | Gadget Zone",
      description:
        "Top smartphones under ₹20,000 available at Gadget Zone, Thiruvanmiyur, Chennai. Xiaomi, Realme, Motorola & more with EMI options.",
      canonical: "/blog/best-phones-under-20000",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        {
          name: "Best Phones Under ₹20,000",
          url: "/blog/best-phones-under-20000",
        },
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
          <span className="text-foreground font-medium">
            Best Phones Under ₹20,000
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          Best Phones Under ₹20,000 in Chennai (2026)
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          5 min read · Published by Gadget Zone, Thiruvanmiyur, Chennai
        </p>

        <p className="text-muted-foreground mb-6">
          Looking for a powerful smartphone on a tight budget? Chennai has one
          of the most competitive mobile markets in India, and Gadget Zone in
          Thiruvanmiyur brings you the best value-for-money phones under
          ₹20,000. Here are our top picks for 2026.
        </p>

        <h2 className="text-xl font-bold mb-3">1. Xiaomi Redmi Note 13 Pro</h2>
        <p className="text-muted-foreground mb-6">
          Starting at ₹17,999, the Redmi Note 13 Pro features a 200MP camera,
          67W fast charging, and a stunning AMOLED display. Ideal for
          photography enthusiasts on a budget. Available at Gadget Zone with 0%
          EMI options.
        </p>

        <h2 className="text-xl font-bold mb-3">2. Realme 12 Pro</h2>
        <p className="text-muted-foreground mb-6">
          Priced at ₹19,499, the Realme 12 Pro offers a Sony IMX890 sensor, 67W
          SuperVOOC charging, and a slim leather-textured design. A premium feel
          without the premium price tag.
        </p>

        <h2 className="text-xl font-bold mb-3">3. Motorola Moto G85 5G</h2>
        <p className="text-muted-foreground mb-6">
          At ₹17,999, the Moto G85 5G runs near-stock Android with 3 years of OS
          updates, a 50MP OIS camera, and a beautiful curved pOLED display.
          Great for those who want a clean software experience.
        </p>

        <h2 className="text-xl font-bold mb-3">4. Samsung Galaxy M35 5G</h2>
        <p className="text-muted-foreground mb-6">
          Samsung brings its trusted build quality to the budget segment with
          the Galaxy M35 5G at ₹18,999. Features a 6nm Exynos chip, 6,000mAh
          battery, and 4 years of security updates. Excellent for daily
          productivity use.
        </p>

        <h2 className="text-xl font-bold mb-3">5. OnePlus Nord CE 4 Lite 5G</h2>
        <p className="text-muted-foreground mb-6">
          The Nord CE 4 Lite 5G at ₹19,499 brings Snapdragon 695, 80W SuperVOOC
          charging, and OxygenOS to the mid-range. A solid all-rounder for
          multitaskers.
        </p>

        <h2 className="text-xl font-bold mb-3">Where to Buy in Chennai?</h2>
        <p className="text-muted-foreground mb-8">
          All these phones are available at Gadget Zone, 73 KALKI, LB Road,
          Thiruvanmiyur, Chennai. We offer genuine products, EMI options, and
          exchange deals. Visit us or send a WhatsApp to check availability.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="font-semibold mb-3">
            Visit Gadget Zone, Thiruvanmiyur for the best deals
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition text-sm"
            data-ocid="blog.secondary_button"
          >
            💬 Enquire on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
