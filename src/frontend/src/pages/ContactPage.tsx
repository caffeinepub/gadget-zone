import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  trackCallConversion,
  trackContactFormConversion,
  trackWhatsAppConversion,
} from "@/lib/googleAdsTracking";
import { updateSEO } from "@/lib/seoHelpers";
import {
  getBreadcrumbSchema,
  injectStructuredData,
} from "@/lib/structuredData";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "+91 98400 77591";
const PHONE_HREF = "tel:+919840077591";
const WHATSAPP_NUMBER = "919840077591";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updateSEO({
      title: "Contact Gadget Zone – Mobile Store in Thiruvanmiyur, Chennai",
      description:
        "Contact Gadget Zone in Thiruvanmiyur, Chennai. Call, WhatsApp, or visit us for mobile phones, repair, CCTV, and accessories. Open 7 days a week.",
      canonical: "/contact",
      ogUrl: "/contact",
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ]),
      "breadcrumb-ld",
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackContactFormConversion();
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "contact_form_submit", {
        event_category: "contact",
        event_label: "contact_page_form",
      });
    }
    const msg = `Hi, my name is ${formData.name}. My phone: ${formData.phone}. Message: ${formData.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  const handleCallClick = () => {
    trackCallConversion();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out via call, WhatsApp, or visit us in
            Thiruvanmiyur, Chennai.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <a
                      href={PHONE_HREF}
                      className="text-primary hover:underline text-lg font-bold"
                      onClick={handleCallClick}
                      data-ga-event="call_click"
                      data-ga-context="contact_page"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-bold"
                      onClick={handleWhatsAppClick}
                      data-ga-event="whatsapp_click"
                      data-ga-context="contact_page"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      73 KALKI, Lattice Bridge Road (LB ROAD),
                      <br />
                      KRISHNAMURTHY SALAI, Thiruvanmiyur,
                      <br />
                      Chennai – 600 041, Tamil Nadu
                    </p>
                    <a
                      href="https://maps.google.com/?q=Gadget+Zone+Thiruvanmiyur+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Business Hours
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Monday – Sunday
                    </p>
                    <p className="text-foreground font-semibold">
                      10:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden border border-border h-48">
                <iframe
                  title="Gadget Zone Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.2707!3d12.9827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzU3LjciTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We've opened WhatsApp with your message. We'll get back to
                    you shortly.
                  </p>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}

              {/* Direct contact buttons */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Or contact us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1" variant="outline">
                    <a
                      href={PHONE_HREF}
                      onClick={handleCallClick}
                      data-ga-event="call_click"
                      data-ga-context="contact_page_bottom"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white border-0"
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      data-ga-event="whatsapp_click"
                      data-ga-context="contact_page_bottom"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
