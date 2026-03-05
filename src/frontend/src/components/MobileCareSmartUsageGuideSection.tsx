import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const FACTS = [
  "Heat is the biggest cause of battery degradation in smartphones.",
  "Fast charging is safe, but excessive heat during charging reduces battery life.",
  "Using uncertified chargers can damage both battery and charging port.",
  "Keeping battery level between 20% and 80% helps extend battery lifespan.",
  "Software updates improve security and device stability, not just features.",
  "Public Wi-Fi networks can expose your personal data if unsecured.",
  "Phone cases help absorb impact and reduce internal component damage.",
  "Screen protectors prevent scratches but cannot fully stop impact damage.",
  "Dust in charging ports is a common reason for slow or failed charging.",
  "Restarting your phone occasionally helps clear temporary system issues.",
  "Overloading storage can slow down phone performance.",
  "Background apps can drain battery even when not in use.",
  "Factory resets can solve many performance issues if done correctly.",
  "Regular data backups prevent permanent loss during phone damage or repair.",
  "Phone batteries naturally degrade over time and eventually need replacement.",
  "High screen brightness significantly increases battery consumption.",
  "Extreme cold can temporarily reduce battery efficiency.",
  "Original spare parts ensure better durability during repairs.",
  "Water-resistant phones are not fully waterproof and can still get damaged.",
  "Charging overnight is generally safe, but heat buildup should be avoided.",
  "Clearing cache can improve performance without deleting personal data.",
  "Security locks and biometrics help protect personal data if the phone is lost.",
  "Not all cracks affect usage, but internal damage can worsen over time.",
  "Frequent software crashes may indicate storage or memory issues.",
  "Professional servicing helps extend the overall life of your smartphone.",
];

export function MobileCareSmartUsageGuideSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleFacts = FACTS.slice(0, 8);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-foreground">
          Mobile Care & Smart Usage Guide (2026)
        </h2>

        {/* Service area mention for geo SEO */}
        <p className="text-center text-base text-muted-foreground mb-12 max-w-3xl mx-auto">
          Expert mobile care tips from Gadget Zone, serving customers across
          Thiruvanmiyur, Adyar, Besant Nagar, Thoraipakkam, Velachery,
          Perungudi, OMR, and ECR in Chennai.
        </p>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-foreground leading-relaxed list-decimal list-inside">
          {visibleFacts.map((fact) => (
            <li key={fact} className="text-muted-foreground">
              {fact}
            </li>
          ))}
        </ol>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="min-w-[140px] font-normal"
          >
            Show more
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="text-2xl font-light">
              Mobile Care & Smart Usage Guide (2026)
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          <ScrollArea className="px-6 py-4 max-h-[calc(85vh-120px)]">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-foreground leading-relaxed list-decimal list-inside pb-4">
              {FACTS.map((fact) => (
                <li key={fact} className="text-muted-foreground">
                  {fact}
                </li>
              ))}
            </ol>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
