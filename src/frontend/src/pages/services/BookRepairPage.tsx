import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { updateSEO } from "../../lib/seoHelpers";
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  injectStructuredData,
} from "../../lib/structuredData";

export default function BookRepairPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");

  useEffect(() => {
    updateSEO({
      title: "Book a Repair | Gadget Zone Chennai",
      description:
        "Book a mobile repair at Gadget Zone, Thiruvanmiyur, Chennai. Expert screen, battery & charging port repairs with warranty. Fast turnaround.",
      canonical: "/services/book-repair",
    });
    injectStructuredData(getLocalBusinessSchema(), "local-business-schema");
    injectStructuredData(
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Book a Repair", url: "/services/book-repair" },
      ]),
      "breadcrumb-schema",
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Gadget Zone, I want to book a repair.\nName: ${name}\nPhone: ${phone}\nPhone Model: ${model}\nIssue: ${issue}`,
    );
    window.open(
      `https://wa.me/919840077591?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="min-h-screen py-10 px-4" aria-label="Book a Repair">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Services</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Book a Repair</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Book a Repair</h1>
        <p className="text-muted-foreground mb-8">
          Expert mobile repair service in Thiruvanmiyur, Chennai. Screen
          replacement, battery change, charging port fix, and more — with
          warranty on all repairs. Fill in the form below and we&apos;ll get
          back to you on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="repair-name">Your Name</Label>
            <Input
              id="repair-name"
              type="text"
              placeholder="e.g. Karthik"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              data-ocid="book_repair.name.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="repair-phone">Phone Number</Label>
            <Input
              id="repair-phone"
              type="tel"
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              data-ocid="book_repair.phone.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="repair-model">Phone Model</Label>
            <Input
              id="repair-model"
              type="text"
              placeholder="e.g. Samsung Galaxy S24, iPhone 15"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              data-ocid="book_repair.model.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="repair-issue">Describe the Issue</Label>
            <Textarea
              id="repair-issue"
              placeholder="e.g. Cracked screen, battery draining fast, not charging..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              rows={4}
              required
              data-ocid="book_repair.issue.textarea"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl text-base"
            data-ocid="book_repair.submit_button"
          >
            📲 Send via WhatsApp
          </Button>
        </form>

        <div className="mt-10 p-5 bg-muted/40 rounded-xl border border-border">
          <h2 className="font-semibold mb-2">
            Why Choose Gadget Zone for Repairs?
          </h2>
          <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
            <li>Screen, battery, charging port &amp; speaker repairs</li>
            <li>Genuine spare parts with 30-day warranty</li>
            <li>Most repairs completed in 1–2 hours</li>
            <li>Transparent pricing — no hidden charges</li>
            <li>Trusted by thousands of customers in Chennai</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
