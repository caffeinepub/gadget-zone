import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  trackCallConversion,
  trackWhatsAppConversion,
} from "../lib/googleAdsTracking";

export function BusinessHighlightsStrip() {
  const MAPS_LINK = "https://maps.app.goo.gl/gZZFWDAMTsQW4nkD9";

  const highlights = [
    {
      icon: MapPin,
      label: "Location: Thiruvanmiyur, Chennai",
      href: MAPS_LINK,
      external: true,
      gaEvent: null,
    },
    {
      icon: Clock,
      label: "Working Hours: 10 AM – 9 PM",
      href: null,
      external: false,
      gaEvent: null,
    },
    {
      icon: Phone,
      label: "Call for Enquiries",
      href: "tel:+919840077591",
      external: false,
      gaEvent: "cta_click",
      gaContext: "business_strip",
      gaLabel: "call",
      onClickFn: () => trackCallConversion(),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Support",
      href: "https://wa.me/919840077591",
      external: true,
      gaEvent: "cta_click",
      gaContext: "business_strip",
      gaLabel: "whatsapp",
      onClickFn: () => trackWhatsAppConversion(),
    },
  ];

  return (
    <section className="py-6 md:py-8 px-4 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  {item.label}
                </p>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  data-ga-event={item.gaEvent || undefined}
                  data-ga-context={
                    (item as { gaContext?: string }).gaContext || undefined
                  }
                  data-ga-label={
                    (item as { gaLabel?: string }).gaLabel || undefined
                  }
                  onClick={
                    (item as { onClickFn?: () => void }).onClickFn || undefined
                  }
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-lg"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
