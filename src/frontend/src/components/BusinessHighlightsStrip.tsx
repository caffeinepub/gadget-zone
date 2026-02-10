import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export function BusinessHighlightsStrip() {
  const MAPS_LINK = 'https://maps.app.goo.gl/gZZFWDAMTsQW4nkD9';
  const PHONE_NUMBER = '+919840077591';
  const WHATSAPP_NUMBER = '919840077591';

  const highlights = [
    {
      icon: MapPin,
      label: 'Location: Thiruvanmiyur, Chennai',
      href: MAPS_LINK,
      external: true,
    },
    {
      icon: Clock,
      label: 'Working Hours: 10 AM – 9 PM',
      href: null,
      external: false,
    },
    {
      icon: Phone,
      label: 'Call for Enquiries',
      href: `tel:${PHONE_NUMBER}`,
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Support',
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
    },
  ];

  return (
    <section className="py-6 md:py-8 px-4 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  {item.label}
                </p>
              </>
            );

            const baseClasses = "flex flex-col items-center justify-center text-center gap-2 transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-2 -m-2";

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={baseClasses}
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={index}
                type="button"
                className={baseClasses}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
