import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HotFab } from "./components/HotFab";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { initializeClickTracking } from "./lib/clickTracking";
import { initializeTracking } from "./lib/googleTracking";
import { initializeScrollDepthTracking } from "./lib/scrollDepthTracking";
import { initializeSPAPageViews } from "./lib/spaPageViews";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ProductsPage from "./pages/ProductsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
// Pages
import ServicesPage from "./pages/ServicesPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Product sub-pages (existing /brands/...)
import ApplePage from "./pages/products/ApplePage";
import MotorolaPage from "./pages/products/MotorolaPage";
import NothingPage from "./pages/products/NothingPage";
import OnePlusPage from "./pages/products/OnePlusPage";
import RealmePage from "./pages/products/RealmePage";
import SamsungPage from "./pages/products/SamsungPage";
import VivoPage from "./pages/products/VivoPage";
import XiaomiPage from "./pages/products/XiaomiPage";

// New /products/[brand]-phones pages
import ApplePhonesPage from "./pages/products/new/ApplePhonesPage";
import MotorolaPhonesPage from "./pages/products/new/MotorolaPhonesPage";
import NothingPhonesPage from "./pages/products/new/NothingPhonesPage";
import OnePlusPhonesPage from "./pages/products/new/OnePlusPhonesPage";
import RealmePhonesPage from "./pages/products/new/RealmePhonesPage";
import SamsungPhonesPage from "./pages/products/new/SamsungPhonesPage";
import VivoPhonesPage from "./pages/products/new/VivoPhonesPage";
import XiaomiPhonesPage from "./pages/products/new/XiaomiPhonesPage";

// Product category pages
import AudioDevicesPage from "./pages/products/categories/AudioDevicesPage";
import CCTVSecurityPage from "./pages/products/categories/CCTVSecurityPage";
import ComputerAccessoriesPage from "./pages/products/categories/ComputerAccessoriesPage";
import MobileAccessoriesPage from "./pages/products/categories/MobileAccessoriesPage";
import PowerChargingPage from "./pages/products/categories/PowerChargingPage";
import SmartGadgetsPage from "./pages/products/categories/SmartGadgetsPage";

import BestPhonesUnder20000Page from "./pages/blog/BestPhonesUnder20000Page";
import BlogPage from "./pages/blog/BlogPage";
import MobileCareTipsPage from "./pages/blog/MobileCareTipsPage";
import PhoneScreenProtectionPage from "./pages/blog/PhoneScreenProtectionPage";
import Top5AccessoriesPage from "./pages/blog/Top5AccessoriesPage";
import FindUsPage from "./pages/contact/FindUsPage";
import AccessoriesPage from "./pages/services/AccessoriesPage";
import BookRepairPage from "./pages/services/BookRepairPage";
import CCTVPage from "./pages/services/CCTVPage";
import EMIPage from "./pages/services/EMIPage";
import ExchangePage from "./pages/services/ExchangePage";
// Service sub-pages
import RepairPage from "./pages/services/RepairPage";

// About sub-pages
import StoryPage from "./pages/about/StoryPage";
import WhyChooseUsPage from "./pages/about/WhyChooseUsPage";

// Admin page
import AdminPage from "./pages/admin/AdminPage";

type Route = string;

const ALL_ROUTES: Route[] = [
  "/",
  "/services",
  "/services/repair",
  "/services/cctv",
  "/services/accessories",
  "/services/exchange",
  "/services/emi",
  "/services/book-repair",
  "/contact/find-us",
  "/blog",
  "/blog/best-phones-under-20000",
  "/blog/phone-screen-protection",
  "/blog/top-5-accessories",
  "/blog/mobile-care-tips",
  "/brands",
  "/brands/apple",
  "/brands/samsung",
  "/brands/motorola",
  "/brands/oneplus",
  "/brands/realme",
  "/brands/vivo",
  "/brands/xiaomi",
  "/brands/nothing",
  // New products routes
  "/products",
  "/products/mobile-phones",
  "/products/samsung-phones",
  "/products/apple-phones",
  "/products/oneplus-phones",
  "/products/xiaomi-phones",
  "/products/vivo-phones",
  "/products/realme-phones",
  "/products/motorola-phones",
  "/products/nothing-phones",
  "/products/mobile-accessories",
  "/products/cctv-security",
  "/products/computer-accessories",
  "/products/audio-devices",
  "/products/power-charging",
  "/products/smart-gadgets",
  "/about",
  "/about/story",
  "/about/why-choose-us",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/faq",
  "/refund-policy",
  "/admin",
];

function getInitialRoute(): Route {
  const path = window.location.pathname;
  return ALL_ROUTES.includes(path) ? path : "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<Route>(getInitialRoute);
  const analyticsInitialized = useRef(false);

  useEffect(() => {
    if (!analyticsInitialized.current) {
      initializeTracking();
      analyticsInitialized.current = true;
    }
    const cleanupScroll = initializeScrollDepthTracking();
    const cleanupClick = initializeClickTracking();
    const cleanupSPA = initializeSPAPageViews();
    return () => {
      cleanupScroll();
      cleanupClick();
      cleanupSPA();
    };
  }, []);

  const navigate = (path: string) => {
    const route = ALL_ROUTES.includes(path) ? path : "/";
    setCurrentPath(route);
    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: path,
        page_title: document.title,
      });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialRoute());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Admin page renders standalone (no Header/Footer)
  if (currentPath === "/admin") {
    return (
      <>
        <AdminPage />
      </>
    );
  }

  const renderPage = () => {
    switch (currentPath) {
      case "/services":
        return <ServicesPage onNavigate={navigate} />;
      case "/services/repair":
        return <RepairPage onNavigate={navigate} />;
      case "/services/cctv":
        return <CCTVPage />;
      case "/services/accessories":
        return <AccessoriesPage onNavigate={navigate} />;
      case "/services/exchange":
        return <ExchangePage onNavigate={navigate} />;
      case "/services/emi":
        return <EMIPage onNavigate={navigate} />;
      case "/services/book-repair":
        return <BookRepairPage />;
      case "/brands":
        return <ProductsPage />;
      case "/brands/apple":
        return <ApplePage />;
      case "/brands/samsung":
        return <SamsungPage />;
      case "/brands/motorola":
        return <MotorolaPage />;
      case "/brands/oneplus":
        return <OnePlusPage />;
      case "/brands/realme":
        return <RealmePage />;
      case "/brands/vivo":
        return <VivoPage />;
      case "/brands/xiaomi":
        return <XiaomiPage />;
      case "/brands/nothing":
        return <NothingPage />;
      // New products pages
      case "/products":
      case "/products/mobile-phones":
        return <ProductsPage />;
      case "/products/samsung-phones":
        return <SamsungPhonesPage />;
      case "/products/apple-phones":
        return <ApplePhonesPage />;
      case "/products/oneplus-phones":
        return <OnePlusPhonesPage />;
      case "/products/xiaomi-phones":
        return <XiaomiPhonesPage />;
      case "/products/vivo-phones":
        return <VivoPhonesPage />;
      case "/products/realme-phones":
        return <RealmePhonesPage />;
      case "/products/motorola-phones":
        return <MotorolaPhonesPage />;
      case "/products/nothing-phones":
        return <NothingPhonesPage />;
      case "/products/mobile-accessories":
        return <MobileAccessoriesPage />;
      case "/products/cctv-security":
        return <CCTVSecurityPage />;
      case "/products/computer-accessories":
        return <ComputerAccessoriesPage />;
      case "/products/audio-devices":
        return <AudioDevicesPage />;
      case "/products/power-charging":
        return <PowerChargingPage />;
      case "/products/smart-gadgets":
        return <SmartGadgetsPage />;
      case "/about":
        return <AboutPage />;
      case "/about/story":
        return <StoryPage onNavigate={navigate} />;
      case "/about/why-choose-us":
        return <WhyChooseUsPage onNavigate={navigate} />;
      case "/contact":
        return <ContactPage />;
      case "/contact/find-us":
        return <FindUsPage />;
      case "/blog":
        return <BlogPage onNavigate={navigate} />;
      case "/blog/best-phones-under-20000":
        return <BestPhonesUnder20000Page />;
      case "/blog/phone-screen-protection":
        return <PhoneScreenProtectionPage />;
      case "/blog/top-5-accessories":
        return <Top5AccessoriesPage />;
      case "/blog/mobile-care-tips":
        return <MobileCareTipsPage />;
      case "/privacy-policy":
        return <PrivacyPolicyPage />;
      case "/terms-of-service":
        return <TermsOfServicePage />;
      case "/faq":
        return <FAQPage />;
      case "/refund-policy":
        return <RefundPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  const isHomePage = currentPath === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Toaster position="top-right" />
      <Header currentPath={currentPath} onNavigate={navigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={navigate} />
      {isHomePage && (
        <HotFab
          onClick={() => {
            const el = document.getElementById("hot-pick-section");
            if (el) {
              const offset = window.innerWidth < 768 ? 80 : 20;
              const top =
                el.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
        />
      )}
      <WhatsAppFloatingButton />
    </div>
  );
}
