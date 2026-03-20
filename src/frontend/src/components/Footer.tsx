import {
  Clock,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import {
  trackCallConversion,
  trackWhatsAppConversion,
} from "../lib/googleAdsTracking";
import { SafeImage } from "./SafeImage";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Find Us", href: "/contact/find-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Book Repair", href: "/services/book-repair" },
];

const SERVICE_LINKS = [
  { label: "Mobile Repair", href: "/services/repair" },
  { label: "CCTV Installation", href: "/services/cctv" },
  { label: "Accessories", href: "/services/accessories" },
  { label: "Exchange & Upgrade", href: "/services/exchange" },
  { label: "EMI & Finance", href: "/services/emi" },
  { label: "Book a Repair", href: "/services/book-repair" },
  { label: "FAQ", href: "/faq" },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer({ onNavigate }: FooterProps) {
  const appId =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "unknown-app";
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <SafeImage
              src="/assets/gadget-zone-logo.png"
              alt="Gadget Zone Logo"
              className="h-14 w-auto object-contain"
              fallbackType="logo"
              fallbackText="Gadget Zone"
            />
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            Your trusted mobile phone store in Chennai. Premium smartphones,
            accessories, CCTV solutions, and expert repair services.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/919840077591"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => trackWhatsAppConversion()}
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              data-ga-event="whatsapp_click"
              data-ga-context="footer"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://www.instagram.com/gadget_zone_ind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Google Review Button */}
          <div className="mt-4">
            <a
              href="https://g.page/r/CT_7R-H2HpBtEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.review_button"
              data-ga-event="google_review_click"
              data-ga-context="footer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-neutral-300 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500"
            >
              <span className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={13}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </span>
              Leave us a Review
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 text-neutral-400">
              <MapPin size={16} className="shrink-0 mt-0.5 text-neutral-500" />
              <span>
                73 KALKI, Lattice Bridge Road (LB ROAD), KRISHNAMURTHY SALAI,
                Thiruvanmiyur, Chennai – 600 041
              </span>
            </li>
            <li className="flex gap-2 text-neutral-400">
              <Clock size={16} className="shrink-0 mt-0.5 text-neutral-500" />
              <span>Mon–Sun: 10:00 AM – 9:00 PM</span>
            </li>
            <li>
              <a
                href="tel:+919840077591"
                onClick={() => trackCallConversion()}
                className="flex gap-2 text-neutral-400 hover:text-white transition-colors"
                data-ga-event="call_click"
                data-ga-context="footer"
              >
                <Phone size={16} className="shrink-0 mt-0.5 text-neutral-500" />
                <span>+91 98400 77591</span>
              </a>
            </li>
          </ul>

          {/* Policy links */}
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs">
            {POLICY_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service area */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-neutral-600 text-center">
            Serving: Thiruvanmiyur · Adyar · Besant Nagar · Thoraipakkam ·
            Velachery · Perungudi · OMR · ECR
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
          <span>© {year} Gadget Zone. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-red-500 fill-red-500 mx-0.5" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors ml-0.5"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
