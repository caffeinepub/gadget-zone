import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FACTS = [
  'Heat is the biggest cause of battery degradation in smartphones.',
  'Fast charging is safe, but excessive heat during charging reduces battery life.',
  'Using uncertified chargers can damage both battery and charging port.',
  'Keeping battery level between 20% and 80% helps extend battery lifespan.',
  'Software updates improve security and device stability, not just features.',
  'Public Wi-Fi networks can expose your personal data if unsecured.',
  'Phone cases help absorb impact and reduce internal component damage.',
  'Screen protectors prevent scratches but cannot fully stop impact damage.',
  'Dust in charging ports is a common reason for slow or failed charging.',
  'Restarting your phone occasionally helps clear temporary system issues.',
  'Overloading storage can slow down phone performance.',
  'Background apps can drain battery even when not in use.',
  'Factory resets can solve many performance issues if done correctly.',
  'Regular data backups prevent permanent loss during phone damage or repair.',
  'Phone batteries naturally degrade over time and eventually need replacement.',
  'High screen brightness significantly increases battery consumption.',
  'Extreme cold can temporarily reduce battery efficiency.',
  'Original spare parts ensure better durability during repairs.',
  'Water-resistant phones are not fully waterproof and can still get damaged.',
  'Charging overnight is generally safe, but heat buildup should be avoided.',
  'Clearing cache can improve performance without deleting personal data.',
  'Security locks and biometrics help protect personal data if the phone is lost.',
  'Not all cracks affect usage, but internal damage can worsen over time.',
  'Frequent software crashes may indicate storage or memory issues.',
  'Professional servicing helps extend the overall life of your smartphone.',
];

export function MobileCareSmartUsageGuideSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleFacts = isExpanded ? FACTS : FACTS.slice(0, 8);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
          Mobile Care & Smart Usage Guide (2026)
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-foreground leading-relaxed list-decimal list-inside">
          {visibleFacts.map((fact, index) => (
            <li key={index} className="text-muted-foreground">
              {fact}
            </li>
          ))}
        </ol>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-w-[140px] font-normal"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show more
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
