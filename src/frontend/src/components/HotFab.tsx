import React from 'react';

interface HotFabProps {
  onClick: () => void;
}

export function HotFab({ onClick }: HotFabProps) {
  return (
    <a
      href="#hot-pick-section"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="fixed bottom-[90px] right-6 z-50 h-14 px-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-xl hover:from-red-600 hover:to-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 flex items-center justify-center no-underline"
      aria-label="Scroll to HOT PICK section"
    >
      <span className="text-base sm:text-lg font-semibold whitespace-nowrap flex items-center justify-center leading-none">🔥 HOT PICK</span>
    </a>
  );
}
