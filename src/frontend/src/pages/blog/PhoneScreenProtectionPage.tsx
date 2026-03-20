import { useEffect } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const WA =
  "https://wa.me/919840077591?text=Hi+Gadget+Zone%2C+I+need+a+screen+guard";

export default function PhoneScreenProtectionPage() {
  useEffect(() => {
    updateSEO({
      title: "How to Protect Your Phone Screen | Gadget Zone Chennai",
      description:
        "Practical tips to protect your phone screen from cracks and scratches. Get tempered glass and quality cases at Gadget Zone, Thiruvanmiyur, Chennai.",
      canonical: "/blog/phone-screen-protection",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        {
          name: "Phone Screen Protection",
          url: "/blog/phone-screen-protection",
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
            Phone Screen Protection
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          How to Protect Your Phone Screen
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          4 min read · Gadget Zone, Chennai
        </p>

        <p className="text-muted-foreground mb-6">
          A cracked screen is every phone owner&apos;s worst nightmare — and in
          Chennai&apos;s busy commuter lifestyle, drops happen more often than
          we&apos;d like. Here are the most effective ways to keep your display
          safe.
        </p>

        <h2 className="text-xl font-bold mb-3">
          1. Apply a Tempered Glass Screen Guard
        </h2>
        <p className="text-muted-foreground mb-6">
          A quality tempered glass screen protector is your first line of
          defence. Look for 9H hardness rating and anti-fingerprint coating. At
          Gadget Zone, we stock screen guards for all popular models and apply
          them free of cost at the store.
        </p>

        <h2 className="text-xl font-bold mb-3">2. Use a Protective Case</h2>
        <p className="text-muted-foreground mb-6">
          A good case absorbs shock on impact. For everyday use, a clear TPU
          case works well. For heavy-duty protection, opt for a rugged case with
          raised bezels around the screen. We carry cases for iPhone, Samsung,
          OnePlus, Xiaomi, and more.
        </p>

        <h2 className="text-xl font-bold mb-3">3. Avoid Back Pocket Storage</h2>
        <p className="text-muted-foreground mb-6">
          Sitting on your phone — even for a moment — can cause micro-cracks
          that weaken the display over time. Always store your phone in your
          front pocket or bag.
        </p>

        <h2 className="text-xl font-bold mb-3">
          4. Keep It Away from Keys and Coins
        </h2>
        <p className="text-muted-foreground mb-6">
          Metal objects in the same pocket can scratch your display. Even with a
          screen guard, avoid mixing your phone with keys, coins, or other sharp
          objects.
        </p>

        <h2 className="text-xl font-bold mb-3">5. Handle with Dry Hands</h2>
        <p className="text-muted-foreground mb-6">
          Moisture weakens adhesion on screen guards and can damage OLED panels
          over time. Dry your hands before using your phone, especially after
          handling water or food.
        </p>

        <h2 className="text-xl font-bold mb-3">
          Cracked Screen? Get It Fixed Fast
        </h2>
        <p className="text-muted-foreground mb-8">
          If your screen is already cracked, don&apos;t wait — small cracks
          spread quickly and can damage the display panel underneath. At Gadget
          Zone, Thiruvanmiyur, we replace screens with warranty in under 2
          hours.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="font-semibold mb-3">
            Get a screen guard or repair at Gadget Zone Chennai
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
