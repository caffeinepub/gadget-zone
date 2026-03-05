import { updateSEO } from "@/lib/seoHelpers";
import { useEffect } from "react";

export default function RefundPolicyPage() {
  useEffect(() => {
    updateSEO({
      title: "Refund Policy | Gadget Zone Chennai",
      description:
        "Refund and return policy for Gadget Zone – conditions, timelines, and process for returns and refunds.",
      canonical: "/refund-policy",
      ogUrl: "/refund-policy",
    });
  }, []);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Refund Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 2025
        </p>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Gadget Zone, we strive to ensure your complete satisfaction
              with every purchase. If you are not satisfied, we offer a fair and
              transparent refund process subject to the conditions outlined
              below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              2. Eligibility for Returns
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A product is eligible for return if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                The product is returned within <strong>7 days</strong> of
                purchase.
              </li>
              <li>
                The product is in its original, unused condition with all
                original packaging, accessories, and documentation.
              </li>
              <li>
                The product has a manufacturing defect verified by our
                technicians.
              </li>
              <li>The product received is different from what was ordered.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Non-Returnable Items</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Products with physical damage caused by the customer.</li>
              <li>Products with broken seals or missing original packaging.</li>
              <li>
                Accessories such as earphones, screen protectors, and cables
                once opened.
              </li>
              <li>
                Software-related issues that can be resolved via update or
                reset.
              </li>
              <li>
                Products purchased during special sale events (unless
                defective).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Refund Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>
                Contact us within 7 days of purchase via phone or WhatsApp with
                your purchase details.
              </li>
              <li>
                Bring the product to our store along with the original invoice
                and all accessories.
              </li>
              <li>
                Our technicians will inspect the product to verify the defect or
                issue.
              </li>
              <li>
                If approved, we will process a replacement, store credit, or
                refund as applicable.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Refund Timelines</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Cash purchases:</strong> Refund processed immediately
                upon approval.
              </li>
              <li>
                <strong>UPI/Card payments:</strong> Refund processed within 5–7
                business days to the original payment method.
              </li>
              <li>
                <strong>EMI purchases:</strong> Subject to the terms of the
                financing institution.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Repair Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              If a repair is unsuccessful or the same issue recurs within 30
              days, we will re-examine and re-repair at no additional charge.
              Refunds for repair services are not provided once the repair has
              been completed and the device has been collected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Exchange Transactions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Exchange transactions are final once completed. The exchange value
              agreed upon at the time of transaction cannot be revised after the
              old device has been accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Contact for Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              To initiate a return or refund, please contact us:
              <br />
              Phone:{" "}
              <a href="tel:+919884861111" className="text-primary">
                +91 98848 61111
              </a>
              <br />
              WhatsApp:{" "}
              <a href="https://wa.me/919884861111" className="text-primary">
                Chat with us
              </a>
              <br />
              Visit: Gadget Zone, Thiruvanmiyur, Chennai – 600 041
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
