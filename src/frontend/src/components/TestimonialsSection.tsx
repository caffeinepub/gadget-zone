import { Star } from "lucide-react";
import { useTestimonialsPublic } from "../hooks/usePublicQueries";

const FALLBACK_TESTIMONIALS = [
  {
    name: "Priya S.",
    product: "iPhone 15 Pro",
    rating: 5,
    text: "Best place to buy iPhone in Chennai! Genuine product, great price, and the staff was super helpful. Got my iPhone 15 Pro with a smooth EMI process.",
  },
  {
    name: "Karthik R.",
    product: "Samsung Galaxy S24",
    rating: 5,
    text: "Great deals and fast service. Gadget Zone gave me the best exchange value for my old phone. The Galaxy S24 at a price I couldn't find anywhere else in Thiruvanmiyur.",
  },
  {
    name: "Anitha M.",
    product: "Screen Repair Service",
    rating: 5,
    text: "Fixed my phone screen in under an hour! I dropped my phone and cracked the display. Brought it to Gadget Zone and they had it fixed with warranty. Very professional.",
  },
  {
    name: "Rajesh K.",
    product: "Motorola Edge 50",
    rating: 5,
    text: "Helpful staff and honest pricing. I came in not knowing which phone to buy. The team patiently explained the differences and helped me pick the right one within budget.",
  },
  {
    name: "Deepa V.",
    product: "CCTV Installation",
    rating: 5,
    text: "Professional CCTV installation team! They set up 4 cameras at my home in just half a day. Clean wiring, clear footage, and follow-up support. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  const { data: backendTestimonials } = useTestimonialsPublic();

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials.map((t) => ({
          name: t.customerName,
          product: t.product,
          rating: Number(t.rating),
          text: t.review,
        }))
      : FALLBACK_TESTIMONIALS;

  return (
    <section
      className="py-14 px-4 bg-muted/30"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Trusted by thousands in Chennai
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static fallback list with stable order
              key={i}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              data-ocid={`testimonial.item.${i + 1}`}
            >
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= t.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
