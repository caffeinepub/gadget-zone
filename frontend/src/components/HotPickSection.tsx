import { Phone } from 'lucide-react';
import { WhatsAppQuickMessages } from './WhatsAppQuickMessages';
import { SafeImage } from './SafeImage';
import { trackCallConversion } from '../lib/googleAdsTracking';

const WHATSAPP_NUMBER = '919840077591';

export function HotPickSection() {
  return (
    <section
      id="hot-pick-section"
      className="py-16 md:py-24 px-4 bg-neutral-950"
      aria-label="HOT PICK of the month"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          🔥 HOT PICK – Trending Right Now
        </h2>

        <p className="text-center text-base md:text-lg text-neutral-400 mb-12 max-w-3xl mx-auto">
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
          <div className="order-2 lg:order-2 space-y-6 text-white">
            <p className="text-sm font-medium text-orange-400 uppercase tracking-widest">
              Featured Device
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Motorola Signature
            </h3>

            <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
              <p>
                Experience premium design, powerful performance, and a clean Android experience with the latest Motorola Signature smartphone.
              </p>
              <p>
                Available now at Gadget Zone – your trusted local mobile store serving Thiruvanmiyur, Adyar, Besant Nagar, Thoraipakkam, Velachery, Perungudi, and nearby areas along OMR and ECR in Chennai.
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <p className="font-semibold text-base mb-3 text-white">Key highlights:</p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Premium Motorola Signature design</li>
                <li>• Clean Android experience (no bloatware)</li>
                <li>• Powerful performance for multitasking and gaming</li>
                <li>• Advanced camera for photos and videos</li>
                <li>• Long-lasting battery with fast charging</li>
                <li>• Secure and reliable Motorola software support</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+919840077591"
                onClick={() => trackCallConversion()}
                data-ga-event="cta_click"
                data-ga-context="hot_pick_section"
                data-ga-label="call"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] px-6 py-3 rounded-md text-base font-semibold bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <Phone className="h-5 w-5 text-neutral-900" />
                <span className="text-neutral-900">Call Now</span>
              </a>

              <WhatsAppQuickMessages
                whatsappNumber={WHATSAPP_NUMBER}
                variant="default"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] bg-green-600 hover:bg-green-700 text-white border-0 font-semibold"
                label="WhatsApp"
                gaContext="hot_pick_section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
