import { useMarqueeText } from "../hooks/usePublicQueries";

const DEFAULT_TICKER_TEXT =
  "Mobile Phone's \u00a0\u00a0|\u00a0\u00a0 Tablets \u00a0\u00a0|\u00a0\u00a0 CCTV \u00a0\u00a0|\u00a0\u00a0 Home and Shop Security Solutions \u00a0\u00a0|\u00a0\u00a0 Bluetooth \u00a0\u00a0|\u00a0\u00a0 Smart Watches \u00a0\u00a0|\u00a0\u00a0 Speakers \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0";

const keys = ["t1", "t2", "t3", "t4", "t5", "t6"];

export function TickerBanner() {
  const { data: backendText } = useMarqueeText();
  const tickerText = backendText?.trim() ? backendText : DEFAULT_TICKER_TEXT;

  return (
    <div className="w-full overflow-hidden bg-muted/30 border-y border-border py-3">
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker-scroll-new 35s linear infinite",
          willChange: "transform",
        }}
      >
        {keys.map((key, i) => (
          <span
            key={key}
            aria-hidden={i > 0 ? "true" : undefined}
            style={{ display: "inline-block", flexShrink: 0 }}
            className="text-sm md:text-base text-muted-foreground font-normal tracking-wide"
          >
            {tickerText}
          </span>
        ))}
      </div>
    </div>
  );
}
