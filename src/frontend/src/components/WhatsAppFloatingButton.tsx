import { MessageCircle } from "lucide-react";
import { trackWhatsAppConversion } from "../lib/googleAdsTracking";

export default function WhatsAppFloatingButton() {
  const message = encodeURIComponent(
    "Hi, I'm interested in a product from Gadget Zone",
  );
  const whatsappUrl = `https://wa.me/919840077591?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp_float.button"
      onClick={() => trackWhatsAppConversion()}
      data-ga-event="whatsapp_click"
      data-ga-context="floating_button"
      className="fixed right-4 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      style={{ bottom: "7rem" }}
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
