import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { useQuery } from "@tanstack/react-query";
import {
  FileText,
  HelpCircle,
  Image,
  LayoutDashboard,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  ShieldAlert,
  ShieldCheck,
  Type,
  X,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../../hooks/useActor";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import BannersManager from "./BannersManager";
import BlogManager from "./BlogManager";
import FAQManager from "./FAQManager";
import MarqueeManager from "./MarqueeManager";
import ProductsManager from "./ProductsManager";
import TestimonialsManager from "./TestimonialsManager";

type Section =
  | "banners"
  | "products"
  | "blog"
  | "testimonials"
  | "faq"
  | "marquee";

const NAV_ITEMS: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "banners", label: "Banners", icon: <Image className="w-4 h-4" /> },
  { id: "products", label: "Products", icon: <Package className="w-4 h-4" /> },
  { id: "blog", label: "Blog", icon: <FileText className="w-4 h-4" /> },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: <MessageSquare className="w-4 h-4" />,
  },
  { id: "faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
  { id: "marquee", label: "Marquee Text", icon: <Type className="w-4 h-4" /> },
];

function LoginScreen() {
  const { login, isLoggingIn, isLoginError } = useInternetIdentity();
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 max-w-sm w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Gadget Zone Admin</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Sign in with your Internet Identity to access the admin panel.
        </p>
        <Button
          onClick={login}
          disabled={isLoggingIn}
          className="w-full h-11"
          data-ocid="admin.primary_button"
        >
          {isLoggingIn ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
        {isLoginError && (
          <p
            className="mt-4 text-sm text-destructive"
            data-ocid="admin.error_state"
          >
            Login failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

function AccessDenied({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 max-w-sm w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-xl font-bold mb-2">Access Denied</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Your account does not have admin privileges for Gadget Zone.
        </p>
        <Button
          variant="outline"
          onClick={onLogout}
          className="w-full"
          data-ocid="admin.secondary_button"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState<Section>("banners");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "banners":
        return <BannersManager />;
      case "products":
        return <ProductsManager />;
      case "blog":
        return <BlogManager />;
      case "testimonials":
        return <TestimonialsManager />;
      case "faq":
        return <FAQManager />;
      case "marquee":
        return <MarqueeManager />;
    }
  };

  const activeItem = NAV_ITEMS.find((n) => n.id === activeSection);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: overlay backdrop dismiss
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        data-ocid="admin.panel"
      >
        {/* Sidebar header */}
        <div className="px-5 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src="/assets/gadget-zone-logo-1.png"
              alt="Gadget Zone"
              className="h-8 w-auto"
            />
            <div>
              <p className="font-bold text-sm leading-tight">Gadget Zone</p>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="flex-1 px-3 py-4 space-y-1"
          aria-label="Admin navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
              data-ocid={`admin.${item.id}.tab`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-3 border-t border-slate-100">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors mb-1"
            data-ocid="admin.link"
          >
            <LayoutDashboard className="w-4 h-4" />
            View Live Site
          </a>
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
            data-ocid="admin.delete_button"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4 flex items-center gap-4">
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            data-ocid="admin.toggle"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          <div className="flex items-center gap-2">
            {activeItem?.icon}
            <h1 className="font-bold text-lg">{activeItem?.label}</h1>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { identity, isInitializing, clear } = useInternetIdentity();
  const { actor, isFetching } = useActor();

  const { data: isAdmin, isLoading: checkingAdmin } = useQuery({
    queryKey: ["admin", "isCallerAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!identity && !!actor && !isFetching,
    staleTime: 60 * 1000,
  });

  // Loading state
  if (isInitializing || (identity && (isFetching || checkingAdmin))) {
    return (
      <div
        className="min-h-screen bg-slate-50 flex items-center justify-center"
        data-ocid="admin.loading_state"
      >
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!identity) {
    return (
      <>
        <Toaster position="top-right" />
        <LoginScreen />
      </>
    );
  }

  // Authenticated but not admin
  if (!isAdmin) {
    return (
      <>
        <Toaster position="top-right" />
        <AccessDenied onLogout={clear} />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <Dashboard onLogout={clear} />
    </>
  );
}
