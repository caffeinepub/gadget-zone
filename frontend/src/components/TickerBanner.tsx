export function TickerBanner() {
  const tickerText = "Mobile Phone's | Tablets | CCTV | Home and Shop Security Solutions | Bluetooth | Smart Watches | Spekers";

  return (
    <div className="w-full overflow-hidden bg-muted/30 border-y border-border py-3">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          <span className="ticker-item text-sm md:text-base text-muted-foreground font-normal tracking-wide">
            {tickerText}
          </span>
          <span className="ticker-item text-sm md:text-base text-muted-foreground font-normal tracking-wide">
            {tickerText}
          </span>
        </div>
      </div>
    </div>
  );
}
