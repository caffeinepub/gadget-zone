import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useEffect } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

const PHONE = "9840077591";
const WA_NUMBER = "919840077591";

export default function FindUsPage() {
  useEffect(() => {
    updateSEO({
      title: "Find Us | Gadget Zone Thiruvanmiyur, Chennai",
      description:
        "Visit Gadget Zone at 73 KALKI, Lattice Bridge Road, Thiruvanmiyur, Chennai. Open 7 days 10 AM – 9 PM. Near Thiruvanmiyur Bus Stop.",
      canonical: "/contact/find-us",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
        { name: "Find Us", url: "/contact/find-us" },
      ]),
      "breadcrumb-schema",
    );
  }, []);

  return (
    <main className="min-h-screen py-10 px-4" aria-label="Find Us">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Contact</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Find Us</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Find Us</h1>
        <p className="text-muted-foreground mb-8">
          We&apos;re located in Thiruvanmiyur, Chennai — easy to find, right on
          LB Road.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Store Info */}
          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-muted-foreground">
                  73 KALKI, Lattice Bridge Road (LB ROAD),
                  <br />
                  KRISHNAMURTHY SALAI, Thiruvanmiyur,
                  <br />
                  Chennai – 600041
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p className="text-sm text-muted-foreground">
                  Monday – Sunday: 10:00 AM – 9:00 PM
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Open all 7 days including public holidays
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Navigation className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Landmark &amp; Directions</p>
                <p className="text-sm text-muted-foreground">
                  Near Thiruvanmiyur Bus Stop, Opposite to Kalki Building on LB
                  Road. Easy access from ECR and OMR junction.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Call or WhatsApp</p>
                <p className="text-sm text-muted-foreground">+91 {PHONE}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${PHONE}`}
                className="bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition"
                data-ocid="findus.primary_button"
              >
                📞 Call Us
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition"
                data-ocid="findus.secondary_button"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
            style={{ minHeight: 320 }}
          >
            <iframe
              title="Gadget Zone Location Map"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6812337977203!2d80.25369507507685!3d12.992228687325046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c4f99e8763%3A0x6d901ef6e147fb3f!2sGadget%20Zone%2F%20MOBILES-CCTV-IPHONE-SAMSUNG-MI-REALME-REDMI-IPAD-APPLEWATCH-MOBILE%20SERVICE!5e0!3m2!1sen!2sin!4v1773675739210!5m2!1sen!2sin"
            />
          </div>
        </div>

        {/* SEO content */}
        <div className="p-5 bg-muted/30 rounded-xl border border-border text-sm text-muted-foreground">
          <p>
            Gadget Zone is your trusted mobile phone store in Thiruvanmiyur,
            Chennai. Whether you&apos;re looking to buy a new smartphone, get
            your phone repaired, or install a CCTV system, we&apos;re here 7
            days a week at LB Road. Visit us today or reach out on WhatsApp for
            quick assistance.
          </p>
        </div>
      </div>
    </main>
  );
}
