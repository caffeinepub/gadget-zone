import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'logo' | 'card';
  fallbackText?: string;
}

export function SafeImage({ 
  src, 
  alt, 
  className = '', 
  fallbackType = 'card',
  fallbackText 
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  // Reset error state when src changes to allow retry with new URL
  useEffect(() => {
    setHasError(false);
  }, [src]);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    // Fallback UI that preserves layout
    if (fallbackType === 'logo') {
      return (
        <div className={`flex items-center justify-center bg-muted/30 ${className}`}>
          <span className="text-sm font-medium text-muted-foreground">
            {fallbackText || alt}
          </span>
        </div>
      );
    }
    
    // Card image fallback
    return (
      <div className={`flex flex-col items-center justify-center bg-muted/30 ${className}`}>
        <Camera className="w-12 h-12 text-muted-foreground/40 mb-2" />
        <span className="text-sm font-medium text-muted-foreground text-center px-4">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
