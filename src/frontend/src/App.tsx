import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Camera } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BusinessHighlightsStrip } from '@/components/BusinessHighlightsStrip';
import { WhatsAppQuickMessages } from '@/components/WhatsAppQuickMessages';
import { MobileCareSmartUsageGuideSection } from '@/components/MobileCareSmartUsageGuideSection';
import { TickerBanner } from '@/components/TickerBanner';
import { SafeImage } from '@/components/SafeImage';
import { versionAsset } from '@/lib/assetVersion';
import { initializeTracking } from '@/lib/googleTracking';
import { initializeSPAPageViews } from '@/lib/spaPageViews';
import { initializeClickTracking } from '@/lib/clickTracking';
import { initializeScrollDepthTracking, resetScrollDepthTracking } from '@/lib/scrollDepthTracking';

// Service content mapping
const serviceContent = {
  'New Mobile Phones': {
    heading: 'New Mobile Phones',
    description: [
      'Explore the latest smartphones from top brands with warranty support.',
      'Choose from a wide range of models based on performance, camera, battery, and budget.',
      'EMI options available on eligible models.',
    ],
  },
  'Mobile Accessories': {
    heading: 'Mobile Accessories',
    description: [
      'Find quality mobile accessories including chargers, cables, earphones, cases, screen guards, and power banks.',
      'Both original and high-quality compatible accessories available.',
    ],
  },
  'Mobile Service & Repair': {
    heading: 'Mobile Service & Repair',
    description: [
      'Professional repair services for screen replacement, battery issues, charging port problems, speaker and mic issues, and software support.',
      'Quick diagnosis with transparent pricing and service warranty.',
    ],
  },
  'Exchange & Upgrade Support': {
    heading: 'Exchange & Upgrade Support',
    description: [
      'Upgrade your old phone to a new one with easy exchange options.',
      'Get fair value for your existing device and seamless assistance during the upgrade process.',
    ],
  },
  'EMI / Finance Options': {
    heading: 'EMI / Finance Options',
    description: [
      'Easy EMI and finance options available on selected mobile phones.',
      'Flexible plans with minimal documentation to make your purchase affordable.',
    ],
  },
  'CCTV Sales & Installation': {
    heading: 'CCTV Sales & Installation',
    description: [
      'We provide CCTV camera sales and professional installation services for homes, shops, offices, and commercial spaces.',
      'Our solutions include indoor and outdoor cameras, DVR/NVR setup, proper wiring, and basic configuration support to ensure reliable monitoring and security.',
      'Get assistance in selecting the right surveillance setup based on your space and requirement.',
    ],
  },
};

function App() {
  const phoneNumber = '+919840077591';
  const whatsappNumber = '919840077591';
  const instagramUrl = 'https://www.instagram.com/gadget_zone_ind';
  const address = 'KRISHNAMURTHY SALAI, 73 KALKI, Lattice Brg Rd, Thiruvanmiyur, Chennai, Tamil Nadu 600041';
  
  // Single source of truth for the Google Maps link
  const MAPS_LINK = 'https://maps.app.goo.gl/gZZFWDAMTsQW4nkD9';
  
  // Keyless Google Maps embed URL using the store address
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const heroSlides = [
    versionAsset('/assets/generated/hero-mobiles-accessories.dim_1600x900.jpg'),
    versionAsset('/assets/generated/hero-slide-accessories.dim_1600x900.jpg'),
    versionAsset('/assets/generated/hero-slide-service-repair.dim_1600x900.jpg'),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<keyof typeof serviceContent>('New Mobile Phones');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const descriptionSectionRef = useRef<HTMLElement>(null);

  // Initialize all tracking on mount
  useEffect(() => {
    initializeTracking();
    
    // Initialize SPA page views, click tracking, and scroll depth tracking
    const cleanupSPA = initializeSPAPageViews();
    const cleanupClick = initializeClickTracking();
    const cleanupScroll = initializeScrollDepthTracking();
    
    // Cleanup on unmount
    return () => {
      cleanupSPA();
      cleanupClick();
      cleanupScroll();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Back to Top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const services = [
    {
      title: 'New Mobile Phones' as keyof typeof serviceContent,
      image: '/assets/generated/card-new-mobiles-premium.dim_1200x800.jpg',
    },
    {
      title: 'Mobile Accessories' as keyof typeof serviceContent,
      image: '/assets/generated/card-accessories.dim_1200x800.jpg',
    },
    {
      title: 'Mobile Service & Repair' as keyof typeof serviceContent,
      image: '/assets/generated/card-service-repair.dim_1200x800.jpg',
    },
    {
      title: 'Exchange & Upgrade Support' as keyof typeof serviceContent,
      image: '/assets/generated/card-exchange-upgrade.dim_1200x800.jpg',
    },
    {
      title: 'EMI / Finance Options' as keyof typeof serviceContent,
      image: '/assets/generated/card-emi-finance.dim_1200x800.jpg',
    },
    {
      title: 'CCTV Sales & Installation' as keyof typeof serviceContent,
      image: '/assets/CCTV-IMAGE.png',
    },
  ];

  const trustPoints = [
    {
      title: 'Genuine Products Only',
      description: 'Original mobiles and accessories with proper bill and warranty.',
      icon: '/assets/generated/icon-genuine-products.dim_128x128.png',
    },
    {
      title: 'Expert Service & Repairs',
      description: 'Skilled technicians for reliable mobile service.',
      icon: '/assets/generated/icon-service-repairs.dim_128x128.png',
    },
    {
      title: 'Easy Exchange & EMI Options',
      description: 'Flexible upgrade and finance support.',
      icon: '/assets/generated/icon-exchange-emi.dim_128x128.png',
    },
    {
      title: 'Trusted Local Store',
      description: 'Reliable neighbourhood mobile store in Thiruvanmiyur.',
      icon: '/assets/generated/icon-trusted-local.dim_128x128.png',
    },
  ];

  const brands = [
    { name: 'Apple', logo: '/assets/generated/logo-apple-color-padded.dim_256x128.png' },
    { name: 'Samsung', logo: '/assets/generated/logo-samsung-color-padded.dim_256x128.png' },
    { name: 'Motorola', logo: '/assets/generated/logo-motorola-color-padded.dim_256x128.png' },
    { name: 'Xiaomi', logo: '/assets/generated/logo-xiaomi-color.dim_256x128.png' },
    { name: 'OnePlus', logo: '/assets/generated/logo-oneplus-color-padded.dim_256x128.png' },
    { name: 'Realme', logo: '/assets/generated/logo-realme-color-padded.dim_256x128.png' },
    { name: 'Vivo', logo: '/assets/generated/logo-vivo-color.dim_256x128.png' },
    { name: 'CCTV', logo: '/assets/CCTV-IMAGE.png' },
  ];

  const galleryImages = [
    '/assets/generated/gallery-01.dim_1200x800.jpg',
    '/assets/generated/gallery-02.dim_1200x800.jpg',
    '/assets/generated/gallery-03.dim_1200x800.jpg',
  ];

  const handleServiceClick = (serviceTitle: keyof typeof serviceContent) => {
    setSelectedService(serviceTitle);
    
    // Smooth scroll to description section with offset for mobile sticky bar
    if (descriptionSectionRef.current) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 20; // Extra offset on mobile for sticky bar
      const elementPosition = descriptionSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentContent = serviceContent[selectedService];

  return (
    <div className="min-h-screen bg-background bg-texture pb-20 md:pb-0">
      {/* Hero Section with Slider */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt="Gadget Zone Showroom"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{
                opacity: currentSlide === index ? 1 : 0,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-center w-full">
            <img
              src="/assets/Gadget Zone-Logo-1.png"
              alt="Gadget Zone"
              className="h-24 md:h-32 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
            Gadget Zone
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-3 font-light">
            Mobiles • Accessories • Service
          </p>
          
          <p className="text-base md:text-lg text-white/80 mb-10 font-light">
            Thiruvanmiyur, Chennai
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto min-w-[180px] bg-white text-foreground hover:bg-white/90 font-normal"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            
            <WhatsAppQuickMessages
              whatsappNumber={whatsappNumber}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-normal"
            />
          </div>
        </div>
      </section>

      {/* Ticker Banner */}
      <TickerBanner />

      {/* Brand Logo Strip */}
      <section className="py-10 md:py-14 px-4 section-alt-bg border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => {
                  if (brand.name === 'CCTV') {
                    handleServiceClick('CCTV Sales & Installation');
                  }
                }}
                onKeyDown={(e) => {
                  if (brand.name === 'CCTV' && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleServiceClick('CCTV Sales & Installation');
                  }
                }}
                className="w-32 h-24 md:w-40 md:h-28 p-2 flex items-center justify-center transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                aria-label={brand.name === 'CCTV' ? 'View CCTV Sales & Installation details' : brand.name}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Business Highlights Strip */}
      <BusinessHighlightsStrip />

      {/* Products & Services Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Products & Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service.title);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details about ${service.title}`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-normal text-center text-foreground">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 px-4 section-alt-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={point.icon}
                    alt={point.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base font-medium mb-2 text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Store Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={image}
                    alt={`Store view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Visit Section */}
      <section className="py-16 md:py-24 px-4 section-alt-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Contact & Visit
          </h2>
          
          <div className="space-y-8">
            {/* Address */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-3 text-foreground">Address</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {address}
              </p>
              <Button
                asChild
                variant="link"
                className="mt-2 text-primary"
              >
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                  View on Map
                </a>
              </Button>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-border">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Open in Google Maps"
              >
                <span className="sr-only">Open in Google Maps</span>
              </a>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gadget Zone Location"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-3 text-foreground">Phone</h3>
                <Button
                  asChild
                  variant="link"
                  className="text-primary text-base"
                >
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </Button>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium mb-3 text-foreground">WhatsApp</h3>
                <WhatsAppQuickMessages
                  whatsappNumber={whatsappNumber}
                  variant="link"
                  size="default"
                  className="text-primary text-base"
                  showIcon={false}
                  label="Chat with us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section ref={descriptionSectionRef} className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            {currentContent.heading}
          </h2>
          
          <div className="space-y-4">
            {currentContent.description.map((paragraph, index) => (
              <p key={index} className="text-base text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Care & Smart Usage Guide Section */}
      <MobileCareSmartUsageGuideSection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-foreground">About Gadget Zone</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted mobile store in Thiruvanmiyur, Chennai. We offer new mobile phones, accessories, repair services, exchange options, EMI facilities, and CCTV solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => handleServiceClick('New Mobile Phones')}
                    className="hover:text-primary transition-colors"
                  >
                    New Mobile Phones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('Mobile Accessories')}
                    className="hover:text-primary transition-colors"
                  >
                    Mobile Accessories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('Mobile Service & Repair')}
                    className="hover:text-primary transition-colors"
                  >
                    Service & Repair
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceClick('CCTV Sales & Installation')}
                    className="hover:text-primary transition-colors"
                  >
                    CCTV Solutions
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-foreground">Connect With Us</h3>
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                
                <WhatsAppQuickMessages
                  whatsappNumber={whatsappNumber}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  label="WhatsApp"
                />
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <SiInstagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Gadget Zone. All rights reserved.
            </p>
            <p className="mt-2">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
        <div className="grid grid-cols-3 gap-2 p-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          
          <WhatsAppQuickMessages
            whatsappNumber={whatsappNumber}
            variant="default"
            size="sm"
            className="flex-1"
            showIcon={true}
            label=""
          />
          
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-24 md:bottom-8 right-4 z-40 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

export default App;
