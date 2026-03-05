import { updateSEO } from "@/lib/seoHelpers";
import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    updateSEO({
      title: "Privacy Policy | Gadget Zone Chennai",
      description:
        "Privacy Policy for Gadget Zone – how we collect, use, and protect your personal data in compliance with applicable laws.",
      canonical: "/privacy-policy",
      ogUrl: "/privacy-policy",
    });
  }, []);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 2025
        </p>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gadget Zone ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or interact with our services. Please read this policy
              carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Information:</strong> Name, phone number, and
                message content when you contact us via our contact form or
                WhatsApp.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, clicks,
                and navigation patterns collected via Google Analytics (GA4).
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating
                system, IP address, and device identifiers.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking
                technologies to enhance your experience and for analytics
                purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                To respond to your enquiries and provide customer support.
              </li>
              <li>
                To improve our website and services based on usage analytics.
              </li>
              <li>
                To measure the effectiveness of our advertising campaigns
                (Google Ads).
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              4. Google Analytics & Google Ads
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics 4 (GA4) and Google Ads conversion tracking
              on our website. These services use cookies to collect anonymized
              data about how visitors use our site. This data helps us
              understand user behaviour and improve our services. Google's use
              of this data is governed by Google's Privacy Policy. You can opt
              out of Google Analytics by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies for analytics and advertising purposes.
              You can control cookies through your browser settings. Disabling
              cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share data with trusted service providers (such as
              Google) who assist us in operating our website, subject to
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications.</li>
              <li>
                Lodge a complaint with the relevant data protection authority.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any privacy-related queries, please contact us at:
              <br />
              <strong>Gadget Zone</strong>, Thiruvanmiyur, Chennai – 600 041
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
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
