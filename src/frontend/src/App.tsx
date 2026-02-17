import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BusinessHighlightsStrip } from '@/components/BusinessHighlightsStrip';
import { WhatsAppQuickMessages } from '@/components/WhatsAppQuickMessages';
import { MobileCareSmartUsageGuideSection } from '@/components/MobileCareSmartUsageGuideSection';
import { TickerBanner } from '@/components/TickerBanner';
import { SafeImage } from '@/components/SafeImage';
import { HotFab } from '@/components/HotFab';
import { HotPickSection } from '@/components/HotPickSection';
import { versionAsset } from '@/lib/assetVersion';
import { initializeTracking } from '@/lib/googleTracking';
import { initializeSPAPageViews } from '@/lib/spaPageViews';
import { initializeClickTracking } from '@/lib/clickTracking';
import { initializeScrollDepthTracking, resetScrollDepthTracking } from '@/lib/scrollDepthTracking';
import { sendGA4Event } from '@/lib/ga4';

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

// HOT product details content
const hotProductDetails: Record<string, { title: string; description: string[] }> = {
  'New Mobile Phones': {
    title: 'Latest Smartphones',
    description: [
      'Our new mobile phones are trending because they offer the perfect balance of cutting-edge technology and affordability. Customers trust us for genuine products with full warranty coverage.',
      'We provide expert guidance to help you choose the right device based on your needs, whether it\'s for photography, gaming, or everyday use.',
      'Easy EMI options make premium smartphones accessible to everyone. Plus, our exchange program ensures you get the best value for your old device.',
    ],
  },
  'Mobile Accessories': {
    title: 'Premium Mobile Accessories',
    description: [
      'Our mobile accessories are highly sought after for their quality and reliability. From original chargers to premium cases, we stock only the best products.',
      'Customers appreciate our wide selection and competitive pricing. Whether you need a power bank for travel or a screen guard for protection, we have you covered.',
      'All accessories come with quality assurance, and our team helps you find the perfect match for your device. EMI options available on select premium accessories.',
    ],
  },
  'Mobile Service & Repair': {
    title: 'Expert Repair Services',
    description: [
      'Our repair services are in high demand because of our skilled technicians and transparent pricing. We handle everything from screen replacements to complex motherboard repairs.',
      'Customers choose us for quick turnaround times and service warranty on all repairs. We use genuine parts and provide detailed diagnostics before any work begins.',
      'With years of experience and hundreds of satisfied customers, we\'re the trusted choice for mobile repairs in Thiruvanmiyur. Walk-in service available.',
    ],
  },
  'Exchange & Upgrade Support': {
    title: 'Hassle-Free Exchange',
    description: [
      'Our exchange program is popular because we offer fair valuations and seamless upgrade experiences. Trade in your old phone and get instant credit toward a new one.',
      'We accept devices in any condition and provide competitive exchange values. Our team handles all the paperwork, making the process quick and easy.',
      'Combined with EMI options, upgrading to the latest smartphone has never been more affordable. Visit us for a free evaluation of your current device.',
    ],
  },
  'EMI / Finance Options': {
    title: 'Flexible Payment Plans',
    description: [
      'Our EMI and finance options are trending because they make premium smartphones accessible to everyone. We offer flexible payment plans with minimal documentation.',
      'Customers appreciate our transparent terms with no hidden charges. Choose from multiple EMI tenures to find a plan that fits your budget.',
      'Quick approval process and partnerships with leading financial institutions ensure you get the best rates. Make your dream phone affordable today.',
    ],
  },
  'CCTV Sales & Installation': {
    title: 'Professional Security Solutions',
    description: [
      'Our CCTV solutions are in high demand for homes, shops, and offices across Chennai. We provide complete security packages with professional installation and setup.',
      'Customers trust us for reliable surveillance systems with HD quality, night vision, and remote viewing capabilities. Our technicians ensure proper placement and configuration.',
      'We offer ongoing support and maintenance services. EMI options available on complete CCTV packages. Protect your property with our proven security solutions.',
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
  const [selectedHotProduct, setSelectedHotProduct] = useState<keyof typeof serviceContent>('New Mobile Phones');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const descriptionSectionRef = useRef<HTMLElement>(null);
  const hotDetailsSectionRef = useRef<HTMLElement>(null);
  const hotPickSectionRef = useRef<HTMLElement>(null);

  // HOT products configuration - static list of products marked as HOT
  const hotProducts: (keyof typeof serviceContent)[] = [
    'New Mobile Phones',
    'Mobile Service & Repair',
  ];

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

  const scrollToHotPick = () => {
    // Send GA4 event for HOT PICK button click
    sendGA4Event('hot_pick_click', {
      page_url: window.location.href,
    });

    // Scroll to HOT PICK section
    if (hotPickSectionRef.current) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 20;
      const elementPosition = hotPickSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToHotDetails = () => {
    // Default to first HOT product
    setSelectedHotProduct(hotProducts[0]);
    
    if (hotDetailsSectionRef.current) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 20;
      const elementPosition = hotDetailsSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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
    { name: 'CCTV', logo: '/assets/Brand-Image%20Feb%2011,%202026,%2004_23_52%20PM.png' },
  ];

  const galleryImages = [
    '/assets/generated/gallery-01.dim_1200x800.jpg',
    '/assets/generated/gallery-02.dim_1200x800.jpg',
    '/assets/generated/gallery-03.dim_1200x800.jpg',
  ];

  const handleServiceClick = (serviceTitle: keyof typeof serviceContent) => {
    const isHot = hotProducts.includes(serviceTitle);
    
    if (isHot) {
      // HOT product: scroll to HOT details section
      setSelectedHotProduct(serviceTitle);
      
      if (hotDetailsSectionRef.current) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 80 : 20;
        const elementPosition = hotDetailsSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // Non-HOT product: scroll to description section
      setSelectedService(serviceTitle);
      
      if (descriptionSectionRef.current) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 80 : 20;
        const elementPosition = descriptionSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const currentContent = serviceContent[selectedService];
  const currentHotDetails = hotProductDetails[selectedHotProduct];

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
            {services.map((service, index) => {
              const isHot = hotProducts.includes(service.title);
              
              return (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50"
                  onClick={() => handleServiceClick(service.title)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceClick(service.title);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${service.title}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {isHot && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                        HOT
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-normal group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Description Section (for non-HOT products) */}
      <section
        ref={descriptionSectionRef}
        className="py-16 md:py-24 px-4 section-alt-bg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            {currentContent.heading}
          </h2>
          
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            {currentContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
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
              className="w-full sm:w-auto min-w-[180px]"
            />
          </div>
        </div>
      </section>

      {/* HOT Product Details Section */}
      <section
        ref={hotDetailsSectionRef}
        className="py-16 md:py-24 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
              HOT
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              {currentHotDetails.title}
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            {currentHotDetails.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
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
              className="w-full sm:w-auto min-w-[180px]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 section-alt-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Why Choose Gadget Zone
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={point.icon}
                    alt={point.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-normal text-foreground">
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

      {/* Mobile Care & Smart Usage Guide Section */}
      <MobileCareSmartUsageGuideSection />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 section-alt-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Our Store
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <SafeImage
                  src={image}
                  alt={`Gadget Zone Store ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOT PICK Section - Always at the bottom */}
      <HotPickSection sectionRef={hotPickSectionRef} />

      {/* Contact & Location Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            Visit Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-normal mb-4 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {address}
                      </p>
                      <Button
                        asChild
                        variant="link"
                        className="h-auto p-0 mt-2 text-primary hover:text-primary/80"
                      >
                        <a
                          href={MAPS_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions →
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      WhatsApp: +91 98400 77591
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <SiInstagram className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      @gadget_zone_ind
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-normal mb-3 text-foreground">
                  Store Hours
                </h3>
                <p className="text-base text-muted-foreground">
                  Monday - Sunday: 10:00 AM - 9:00 PM
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px]"
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
                  className="w-full sm:w-auto min-w-[180px]"
                />
              </div>
            </div>
            
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden border border-border shadow-lg">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gadget Zone. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'gadget-zone'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <HotFab onClick={scrollToHotPick} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Back to top"
          type="button"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default App;
