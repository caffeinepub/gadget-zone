import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useFaqItemsPublic } from "../hooks/usePublicQueries";
import { updateSEO } from "../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

const FALLBACK_FAQS = [
  {
    q: "Do you offer EMI?",
    a: "Yes! We offer 0% EMI on select smartphones via major banks including HDFC, ICICI, SBI, Axis, and Kotak. EMI options are available for purchases above ₹5,000. Ask our staff for eligible schemes when you visit.",
  },
  {
    q: "Can I exchange my old phone?",
    a: "Yes, we accept old phones for exchange across all major brands — Apple, Samsung, Motorola, OnePlus, Xiaomi, Vivo, Realme, and more. Bring your device to the store for a free evaluation and get the best exchange value.",
  },
  {
    q: "How long does a repair take?",
    a: "Most common repairs (screen replacement, battery replacement, charging port fixes) are completed the same day within 1–3 hours. Complex repairs such as motherboard-level issues may take 24–48 hours. We'll give you an accurate timeline when you bring in your device.",
  },
  {
    q: "What warranty do you offer on repairs?",
    a: "All repairs at Gadget Zone come with a 30-day service warranty. If the same issue recurs within 30 days of the repair, we'll fix it at no extra charge. Warranty does not cover physical damage after the repair.",
  },
  {
    q: "Which phone brands do you sell?",
    a: "We stock the latest models from Apple, Samsung, Motorola, OnePlus, Xiaomi (Mi), Vivo, Realme, and Nothing Mobile. We carry a wide range from budget-friendly to flagship devices so you can find the right phone for your needs.",
  },
  {
    q: "Do you sell CCTV cameras?",
    a: "Yes! We offer CCTV cameras, DVR/NVR systems, and complete home/office security solutions. Our team handles both supply and professional installation across Chennai. WhatsApp us for a free site assessment and quote.",
  },
  {
    q: "Where are you located?",
    a: "We are located at 73 KALKI, Lattice Bridge Road (LB ROAD), KRISHNAMURTHY SALAI, Thiruvanmiyur, Chennai – 600041. We're easy to find — just off the main LB Road near the Thiruvanmiyur Bus Stop.",
  },
  {
    q: "What are your store hours?",
    a: "Gadget Zone is open 7 days a week — Monday through Sunday, from 10:00 AM to 9:00 PM. We're open on all public holidays so you can visit at your convenience.",
  },
  {
    q: "How can I contact you?",
    a: "You can call or WhatsApp us at +91 98400 77591. We're available during store hours (10 AM – 9 PM, all days). For quick responses, WhatsApp is preferred. You can also visit us directly at our store in Thiruvanmiyur.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Currently we operate as an in-store pickup only store. However, for special arrangements or bulk orders, please WhatsApp us at +91 98400 77591 and we'll do our best to accommodate your request.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data: backendFaqs } = useFaqItemsPublic();

  const faqs =
    backendFaqs && backendFaqs.length > 0
      ? [...backendFaqs]
          .sort((a, b) => Number(a.position) - Number(b.position))
          .map((f) => ({ q: f.question, a: f.answer }))
      : FALLBACK_FAQS;

  useEffect(() => {
    updateSEO({
      title: "FAQ | Gadget Zone Chennai",
      description:
        "Frequently asked questions about mobile phones, repair services, EMI options, and phone exchange at Gadget Zone, Thiruvanmiyur, Chennai.",
      canonical: "/faq",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" },
      ]),
      "breadcrumb-schema",
    );
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="min-h-screen py-10 px-4" aria-label="FAQ">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">FAQ</span>
        </nav>

        <h1 className="text-3xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8">
          Got questions? We've got answers. Find everything you need to know
          about Gadget Zone — your trusted mobile store in Thiruvanmiyur,
          Chennai.
        </p>

        {/* FAQ Accordion */}
        <div className="divide-y divide-border border border-border rounded-xl overflow-hidden mb-10">
          {faqs.map((faq, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: stable ordered list
            <div key={i} data-ocid={`faq.item.${i + 1}`}>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/40 transition-colors"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-base">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-muted/50 rounded-2xl p-6 text-center">
          <p className="text-base font-medium mb-4">
            Still have questions? We're happy to help!
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20have%20a%20question%20about%20Gadget%20Zone`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="faq.whatsapp_button"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp us at +91 98400 77591
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Or call us:{" "}
            <a
              href={`tel:${PHONE}`}
              className="font-medium text-foreground hover:underline"
            >
              +91 98400 77591
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
