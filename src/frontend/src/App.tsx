import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HotFab } from "./components/HotFab";
import { initializeClickTracking } from "./lib/clickTracking";
import { initializeTracking } from "./lib/googleTracking";
import { initializeScrollDepthTracking } from "./lib/scrollDepthTracking";
import { initializeSPAPageViews } from "./lib/spaPageViews";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ProductsPage from "./pages/ProductsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
// Pages
import ServicesPage from "./pages/ServicesPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Product sub-pages
import ApplePage from "./pages/products/ApplePage";
import MotorolaPage from "./pages/products/MotorolaPage";
import NothingPage from "./pages/products/NothingPage";
import OnePlusPage from "./pages/products/OnePlusPage";
import RealmePage from "./pages/products/RealmePage";
import SamsungPage from "./pages/products/SamsungPage";
import VivoPage from "./pages/products/VivoPage";
import XiaomiPage from "./pages/products/XiaomiPage";

import AccessoriesPage from "./pages/services/AccessoriesPage";
import CCTVPage from "./pages/services/CCTVPage";
import EMIPage from "./pages/services/EMIPage";
import ExchangePage from "./pages/services/ExchangePage";
// Service sub-pages
import RepairPage from "./pages/services/RepairPage";

// About sub-pages
import StoryPage from "./pages/about/StoryPage";
import WhyChooseUsPage from "./pages/about/WhyChooseUsPage";

type Route = string;

const ALL_ROUTES: Route[] = [
  "/",
  "/services",
  "/services/repair",
  "/services/cctv",
  "/services/accessories",
  "/services/exchange",
  "/services/emi",
  "/products",
  "/products/apple",
  "/products/samsung",
  "/products/motorola",
  "/products/oneplus",
  "/products/realme",
  "/products/vivo",
  "/products/xiaomi",
  "/products/nothing",
  "/about",
  "/about/story",
  "/about/why-choose-us",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
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
      case "/products":
        return <ProductsPage />;
      case "/products/apple":
        return <ApplePage />;
      case "/products/samsung":
        return <SamsungPage />;
      case "/products/motorola":
        return <MotorolaPage />;
      case "/products/oneplus":
        return <OnePlusPage />;
      case "/products/realme":
        return <RealmePage />;
      case "/products/vivo":
        return <VivoPage />;
      case "/products/xiaomi":
        return <XiaomiPage />;
      case "/products/nothing":
        return <NothingPage />;
      case "/about":
        return <AboutPage />;
      case "/about/story":
        return <StoryPage onNavigate={navigate} />;
      case "/about/why-choose-us":
        return <WhyChooseUsPage onNavigate={navigate} />;
      case "/contact":
        return <ContactPage />;
      case "/privacy-policy":
        return <PrivacyPolicyPage />;
      case "/terms-of-service":
        return <TermsOfServicePage />;
      case "/refund-policy":
        return <RefundPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  const isHomePage = currentPath === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
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
    </div>
  );
}
