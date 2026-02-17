import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SafeImage } from '@/components/SafeImage';

interface HotPickSectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}

export function HotPickSection({ sectionRef }: HotPickSectionProps) {
  const phoneNumber = '+919840077591';
  const whatsappNumber = '919840077591';

  return (
    <section
      ref={sectionRef}
      id="hot-pick-section"
      className="py-16 md:py-24 px-4 section-alt-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title - Exact as specified */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-foreground">
          🔥 HOT PICK – Trending Right Now
        </h2>

        {/* Short intro explaining why highlighted */}
        <p className="text-center text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          This premium Motorola Signature smartphone is our top pick this month for its exceptional value, powerful performance, and clean Android experience. Customers love it for reliability and style.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-lg">
              <SafeImage
                src="/assets/generated/hot-pick-motorola-signature.dim_1200x900.png"
                alt="Latest Motorola Signature Smartphone at Gadget Zone Thiruvanmiyur - Premium design with clean Android experience"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Main Description - Motorola Signature focused */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-base md:text-lg leading-relaxed">
                Experience premium design, powerful performance, and a clean Android experience with the latest Motorola Signature smartphone.
              </p>

              <p className="text-base leading-relaxed">
                This Motorola Signature phone is designed for users who want a smooth, fast, and reliable smartphone with a premium look and long-lasting performance. With near-stock Android, a powerful processor, advanced camera system, and strong battery life, it is ideal for everyday use, work, entertainment, and photography.
              </p>

              <p className="text-base leading-relaxed">
                Available now at Gadget Zone – your trusted local mobile store serving Thiruvanmiyur, Adyar, Besant Nagar, Thoraipakkam, Velachery, Perungudi, and nearby areas along OMR and ECR in Chennai.
              </p>

              {/* Key Highlights */}
              <div className="mt-6">
                <p className="font-semibold text-base mb-3">Key highlights:</p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Premium Motorola Signature design</li>
                  <li>• Clean Android experience (no bloatware)</li>
                  <li>• Powerful performance for multitasking and gaming</li>
                  <li>• Advanced camera for photos and videos</li>
                  <li>• Long-lasting battery with fast charging</li>
                  <li>• Secure and reliable Motorola software support</li>
                </ul>
              </div>

              {/* Why Buy from Gadget Zone */}
              <div className="mt-6">
                <p className="font-semibold text-base mb-3">Why buy from Gadget Zone:</p>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• Genuine sealed Motorola mobiles</li>
                  <li>• Latest models and variants available</li>
                  <li>• Exchange and upgrade support</li>
                  <li>• EMI / finance options</li>
                  <li>• Local after-sales guidance and support</li>
                </ul>
              </div>

              {/* SEO Keyword Paragraph with service areas */}
              <p className="text-sm md:text-base leading-relaxed mt-6 text-muted-foreground">
                Looking for the latest Motorola phone or Motorola mobile phone in Chennai? Visit Gadget Zone, your trusted Motorola mobile store in Thiruvanmiyur, to explore the Motorola Signature phone and other premium models. We serve customers across Thiruvanmiyur, Adyar, Besant Nagar, Thoraipakkam, Velachery, Perungudi, OMR, and ECR. Check Motorola phone price in Chennai and buy Motorola phone near me with expert guidance, genuine warranty, and flexible payment options.
              </p>
            </div>

            {/* CTA Buttons with tracking */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href={`tel:${phoneNumber}`}
                  data-ga-event="cta_click"
                  data-ga-context="hot_pick_section"
                  data-ga-label="call"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[160px]"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I am interested in the Motorola Signature smartphone. Please share more details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ga-event="cta_click"
                  data-ga-context="hot_pick_section"
                  data-ga-label="whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
