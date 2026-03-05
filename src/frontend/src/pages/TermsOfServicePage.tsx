import { updateSEO } from "@/lib/seoHelpers";
import { useEffect } from "react";

export default function TermsOfServicePage() {
  useEffect(() => {
    updateSEO({
      title: "Terms of Service | Gadget Zone Chennai",
      description:
        "Terms of Service for Gadget Zone – purchase terms, warranty policies, and conditions for using our services.",
      canonical: "/terms-of-service",
      ogUrl: "/terms-of-service",
    });
  }, []);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 2025
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By visiting our store, using our website, or purchasing our
              products and services, you agree to be bound by these Terms of
              Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Products & Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gadget Zone sells new mobile phones, accessories, and CCTV
              equipment, and provides repair, exchange, and EMI services. All
              products sold are genuine and sourced from authorised
              distributors. Product availability and pricing are subject to
              change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Pricing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                All prices are in Indian Rupees (INR) and inclusive of
                applicable taxes unless stated otherwise.
              </li>
              <li>We accept cash, UPI, debit/credit cards, and EMI options.</li>
              <li>
                Prices displayed online or via WhatsApp are indicative and may
                vary at the time of purchase.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              New mobile phones come with the manufacturer's standard warranty.
              Accessories and CCTV equipment carry the respective manufacturer's
              warranty. Warranty claims must be processed through Gadget Zone or
              the manufacturer's authorised service centre. Warranty does not
              cover physical damage, water damage, or unauthorised
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Repair Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Repair estimates are provided before work commences. You must
                approve the estimate before we proceed.
              </li>
              <li>
                We are not responsible for data loss during repair. Please back
                up your data before submitting your device.
              </li>
              <li>
                Repaired devices carry a 30-day warranty on the specific repair
                performed.
              </li>
              <li>
                Uncollected devices after 60 days of completion notice may be
                disposed of at our discretion.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Exchange & Upgrade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Exchange values are determined at the time of transaction based on
              device condition, market value, and demand. Exchange values quoted
              online or via WhatsApp are estimates and may differ at the time of
              in-store assessment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Gadget Zone's liability is limited to the purchase price of the
              product or service in question. We are not liable for indirect,
              incidental, or consequential damages arising from the use of our
              products or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in Chennai,
              Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any queries regarding these Terms, contact us at:
              <br />
              <strong>Gadget Zone</strong>, Thiruvanmiyur, Chennai – 600 041
              <br />
              Phone:{" "}
              <a href="tel:+919884861111" className="text-primary">
                +91 98848 61111
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
