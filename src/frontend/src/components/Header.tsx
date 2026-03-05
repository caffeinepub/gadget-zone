import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackCallConversion } from "../lib/googleAdsTracking";

const PHONE = "tel:+919840077591";
const PHONE_DISPLAY = "+91 98400 77591";

interface SubMenuItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  subItems?: SubMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Products",
    path: "/products",
    subItems: [
      { label: "Apple", path: "/products/apple" },
      { label: "Samsung", path: "/products/samsung" },
      { label: "Motorola", path: "/products/motorola" },
      { label: "OnePlus", path: "/products/oneplus" },
      { label: "Realme", path: "/products/realme" },
      { label: "Vivo", path: "/products/vivo" },
      { label: "Xiaomi / Redmi", path: "/products/xiaomi" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    subItems: [
      { label: "Mobile Repair", path: "/services/repair" },
      { label: "CCTV Installation", path: "/services/cctv" },
      { label: "Accessories", path: "/services/accessories" },
      { label: "Exchange & Upgrade", path: "/services/exchange" },
      { label: "EMI & Finance", path: "/services/emi" },
    ],
  },
  {
    label: "About",
    path: "/about",
    subItems: [
      { label: "Our Story", path: "/about/story" },
      { label: "Why Choose Us", path: "/about/why-choose-us" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ currentPath = "/", onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "navigation_click", {
        event_category: "navigation",
        event_label: path,
      });
    }
  };

  const isActive = (item: NavItem) => {
    if (item.path === currentPath) return true;
    if (item.subItems?.some((s) => s.path === currentPath)) return true;
    if (item.path !== "/" && currentPath.startsWith(item.path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      } border-b border-border`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("/")}
            className="flex items-center focus:outline-none"
            aria-label="Gadget Zone Home"
          >
            <img
              src="/assets/Gadget Zone-Logo.png"
              alt="Gadget Zone Logo"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: "180px" }}
            />
          </button>

          {/* Desktop Nav */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-neutral-100 py-1 z-50">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.path}
                            type="button"
                            onClick={() => handleNavClick(sub.path)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                              currentPath === sub.path
                                ? "text-primary bg-primary/5 font-medium"
                                : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.path)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={PHONE}
              onClick={() => trackCallConversion()}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              data-ga-event="call_click"
              data-ga-context="header"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-md hover:bg-muted transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <>
                <X className="w-5 h-5 text-foreground" />
                <span className="text-[9px] font-bold tracking-widest text-foreground leading-none">
                  CLOSE
                </span>
              </>
            ) : (
              <>
                <Menu className="w-5 h-5 text-foreground" />
                <span className="text-[9px] font-bold tracking-widest text-foreground leading-none">
                  MENU
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white shadow-lg">
          <nav
            className="container mx-auto px-4 py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.path}>
                {item.subItems ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label,
                        )
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive(item)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 mb-1 border-l-2 border-primary/30 pl-3 space-y-1">
                        <button
                          type="button"
                          onClick={() => handleNavClick(item.path)}
                          className="w-full text-left px-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          All {item.label}
                        </button>
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.path}
                            type="button"
                            onClick={() => handleNavClick(sub.path)}
                            className={`w-full text-left px-2 py-2 text-sm transition-colors ${
                              currentPath === sub.path
                                ? "text-primary font-medium"
                                : "text-neutral-600 hover:text-primary"
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <a
              href={PHONE}
              onClick={() => {
                trackCallConversion();
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-md mt-1"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
