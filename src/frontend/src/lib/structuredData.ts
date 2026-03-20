/**
 * JSON-LD structured data helpers for schema.org markup.
 */

const SITE_URL = "https://gadgetzone-nz9.caffeine.xyz";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gadget Zone",
    image: `${SITE_URL}/assets/generated/gadget-zone-logo.dim_512x512.png`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+919840077591",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "73 KALKI, Lattice Bridge Road (LB ROAD), KRISHNAMURTHY SALAI, Thiruvanmiyur",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600041",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9827,
      longitude: 80.2707,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/gadget_zone_ind",
      "https://wa.me/919840077591",
    ],
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    description:
      "Gadget Zone – Your trusted mobile phone store in Thiruvanmiyur, Chennai. New mobiles, expert repair, exchange & upgrade, accessories, CCTV, and EMI options.",
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function injectStructuredData(schema: object, id: string) {
  if (typeof document === "undefined") return;
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
