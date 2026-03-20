import { useEffect } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const WA =
  "https://wa.me/919840077591?text=Hi+Gadget+Zone%2C+I+need+help+with+my+phone";

export default function MobileCareTipsPage() {
  useEffect(() => {
    updateSEO({
      title:
        "Essential Mobile Care Tips to Make Your Phone Last Longer | Gadget Zone",
      description:
        "Easy habits to extend your smartphone lifespan. Expert mobile care advice from Gadget Zone, Thiruvanmiyur, Chennai.",
      canonical: "/blog/mobile-care-tips",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Mobile Care Tips", url: "/blog/mobile-care-tips" },
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
          <span className="text-foreground font-medium">Mobile Care Tips</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          Essential Mobile Care Tips to Make Your Phone Last Longer
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          6 min read · Gadget Zone, Thiruvanmiyur, Chennai
        </p>

        <p className="text-muted-foreground mb-6">
          A smartphone is one of your most-used tools every day. With the right
          habits, you can easily get 3–5 years of reliable use from a single
          phone. Here&apos;s how our team at Gadget Zone recommends you care for
          your device.
        </p>

        <h2 className="text-xl font-bold mb-3">
          1. Don&apos;t Charge to 100% Every Night
        </h2>
        <p className="text-muted-foreground mb-6">
          Lithium-ion batteries degrade faster when kept at 100% for long
          periods. Try to keep your charge between 20–80% for daily use. Most
          phones now have a &quot;Battery Protect&quot; or &quot;Optimised
          Charging&quot; mode in settings — enable it.
        </p>

        <h2 className="text-xl font-bold mb-3">2. Avoid Extreme Heat</h2>
        <p className="text-muted-foreground mb-6">
          Chennai&apos;s heat is tough on electronics. Never leave your phone in
          direct sunlight or inside a parked car. Heat is the number one cause
          of premature battery wear. If your phone gets hot during charging,
          remove the case.
        </p>

        <h2 className="text-xl font-bold mb-3">
          3. Clean Your Charging Port Regularly
        </h2>
        <p className="text-muted-foreground mb-6">
          Dust and lint can accumulate in the charging port over time, causing
          slow or intermittent charging. Use a soft, dry toothbrush or a wooden
          toothpick to gently clean it. Don&apos;t use metal objects or blow
          compressed air directly inside.
        </p>

        <h2 className="text-xl font-bold mb-3">4. Keep Software Updated</h2>
        <p className="text-muted-foreground mb-6">
          Software updates often contain battery optimisations, security
          patches, and performance fixes. Enable automatic updates in your phone
          settings to stay current.
        </p>

        <h2 className="text-xl font-bold mb-3">5. Restart Your Phone Weekly</h2>
        <p className="text-muted-foreground mb-6">
          A weekly restart clears cache, closes background apps, and keeps your
          phone running smoothly. It takes 60 seconds and can noticeably improve
          performance over time.
        </p>

        <h2 className="text-xl font-bold mb-3">
          6. Use Original or Certified Chargers
        </h2>
        <p className="text-muted-foreground mb-6">
          Cheap chargers from unknown brands can damage your battery and even
          cause short circuits. Always use the original charger or a certified
          alternative. At Gadget Zone, we stock genuine branded chargers for all
          popular models.
        </p>

        <h2 className="text-xl font-bold mb-3">Need a Repair or Upgrade?</h2>
        <p className="text-muted-foreground mb-8">
          If your phone battery is draining fast, overheating, or having other
          issues, bring it in to Gadget Zone at LB Road, Thiruvanmiyur. Our
          technicians will diagnose and fix it quickly.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="font-semibold mb-3">
            Visit Gadget Zone for expert phone care &amp; repair in Chennai
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
