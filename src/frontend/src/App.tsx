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
      'Explore the latest smartphones from top brands at our mobile shop in Thiruvanmiyur with warranty support.',
      'Choose from a wide range of models based on performance, camera, battery, and budget.',
      'EMI options available on eligible models.',
    ],
  },
  'Mobile Accessories': {
    heading: 'Mobile Accessories',
    description: [
      'Find quality mobile accessories near Thiruvanmiyur including chargers, cables, earphones, cases, screen guards, and power banks.',
      'Both original and high-quality compatible accessories available at our mobile store in Chennai.',
    ],
  },
  'Mobile Service & Repair': {
    heading: 'Mobile Service & Repair',
    description: [
      'Professional mobile repair service in Thiruvanmiyur for screen replacement, battery issues, charging port problems, speaker and mic issues, and software support.',
      'Quick diagnosis with transparent pricing and service warranty.',
    ],
  },
  'Exchange & Upgrade Support': {
    heading: 'Exchange & Upgrade Support',
    description: [
      'Upgrade your old phone to a new one with easy exchange options at our mobile store in Chennai.',
      'Get fair value for your existing device and seamless assistance during the upgrade process.',
    ],
  },
  'EMI / Finance Options': {
    heading: 'EMI / Finance Options',
    description: [
      'Easy EMI and finance options available on selected mobile phones at Gadget Zone.',
      'Flexible plans with minimal documentation to make your purchase affordable.',
    ],
  },
  'CCTV Solutions': {
    heading: 'CCTV Solutions',
    description: [
      'We provide CCTV camera sales and professional installation services at our CCTV shop in Thiruvanmiyur, Chennai for homes, shops, offices, and commercial spaces.',
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
  'CCTV Solutions': {
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

  // Section refs for scroll navigation
  const newMobilesRef = useRef<HTMLElement>(null);
  const accessoriesRef = useRef<HTMLElement>(null);
  const serviceRepairRef = useRef<HTMLElement>(null);
  const exchangeRef = useRef<HTMLElement>(null);
  const emiRef = useRef<HTMLElement>(null);
  const cctvRef = useRef<HTMLElement>(null);
  const productsServicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // HOT products configuration - static list of products marked as HOT
  const hotProducts: (keyof typeof serviceContent)[] = [
    'New Mobile Phones',
    'Mobile Service & Repair',
  ];

  // Initialize all tracking on mount
  // NOTE: This app does not modify SEO metadata at runtime; all meta title/description/schema remain as defined in index.html
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
    sendGA4Event('hot_pick_jump', {
      page_url: window.location.href,
      source: 'floating_button',
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
      title: 'CCTV Solutions' as keyof typeof serviceContent,
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

  // Map service titles to their section refs
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    'New Mobile Phones': newMobilesRef,
    'Mobile Accessories': accessoriesRef,
    'Mobile Service & Repair': serviceRepairRef,
    'Exchange & Upgrade Support': exchangeRef,
    'EMI / Finance Options': emiRef,
    'CCTV Solutions': cctvRef,
  };

  const handleServiceClick = (serviceTitle: keyof typeof serviceContent) => {
    // Send GA4 event for category click
    sendGA4Event('category_click', {
      page_url: window.location.href,
      category_name: serviceTitle,
    });

    const targetRef = sectionRefs[serviceTitle];
    
    if (targetRef?.current) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 20;
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBrandClick = (brandName: string) => {
    // Send GA4 event for brand click
    sendGA4Event('category_click', {
      page_url: window.location.href,
      category_name: 'New Mobile Phones',
      brand_name: brandName,
    });

    // Scroll to New Mobile Phones section
    if (newMobilesRef.current) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 20;
      const elementPosition = newMobilesRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentContent = serviceContent[selectedService];
  const currentHotDetails = hotProductDetails[selectedHotProduct];

  return (
    <div className="min-h-screen bg-background bg-texture pb-20 md:pb-0">
      {/* 1. Hero Section with Slider */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Gadget Zone mobile shop in Thiruvanmiyur Chennai - ${index === 0 ? 'Mobile phones and accessories' : index === 1 ? 'Mobile accessories store' : 'Mobile repair service'}`}
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
              alt="Gadget Zone logo"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
            Gadget Zone
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg font-medium max-w-3xl mx-auto">
            Your Trusted Mobile Store for Phones, Accessories, Repairs & CCTV Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
              data-ga-event="cta_click"
              data-ga-context="hero"
              data-ga-label="call_now"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <WhatsAppQuickMessages whatsappNumber={whatsappNumber} gaContext="hero" />
          </div>
        </div>
      </section>

      {/* Business Highlights Strip */}
      <BusinessHighlightsStrip />

      {/* Ticker Banner */}
      <TickerBanner />

      {/* 2. Brands Section */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Brands We Deal With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => handleBrandClick(brand.name)}
                className="bg-card hover:bg-accent transition-all duration-300 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 cursor-pointer border border-border"
                aria-label={`View ${brand.name} products`}
              >
                <SafeImage
                  src={versionAsset(brand.logo)}
                  alt={`${brand.name} brand logo`}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products & Services Section */}
      <section id="products-services" ref={productsServicesRef} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Products & Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive mobile solutions under one roof
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const isHot = hotProducts.includes(service.title);
              return (
                <Card
                  key={service.title}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-border hover:scale-105"
                  onClick={() => handleServiceClick(service.title)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <SafeImage
                      src={versionAsset(service.image)}
                      alt={`${service.title} service at Gadget Zone`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {isHot && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-hot-pulse">
                        🔥 HOT
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Description Sections */}
      <section id="new-mobile-phones" ref={newMobilesRef} className="py-16 px-4 bg-section-alt scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['New Mobile Phones'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['New Mobile Phones'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="mobile-accessories" ref={accessoriesRef} className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['Mobile Accessories'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['Mobile Accessories'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="mobile-service-repair" ref={serviceRepairRef} className="py-16 px-4 bg-section-alt scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['Mobile Service & Repair'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['Mobile Service & Repair'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="exchange-upgrade-support" ref={exchangeRef} className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['Exchange & Upgrade Support'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['Exchange & Upgrade Support'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="emi-finance-options" ref={emiRef} className="py-16 px-4 bg-section-alt scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['EMI / Finance Options'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['EMI / Finance Options'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="cctv-solutions" ref={cctvRef} className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            {serviceContent['CCTV Solutions'].heading}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            {serviceContent['CCTV Solutions'].description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your trusted partner for all mobile needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-border hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                    <SafeImage
                      src={versionAsset(point.icon)}
                      alt={`${point.title} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg mb-2">{point.title}</CardTitle>
                  <CardDescription className="text-sm">{point.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOT PICK Section */}
      <section id="hot-pick-section" ref={hotPickSectionRef} className="scroll-mt-20">
        <HotPickSection />
      </section>

      {/* 6. Educational Section */}
      <MobileCareSmartUsageGuideSection />

      {/* 7. Store Gallery Section */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Store Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visit our showroom in Thiruvanmiyur
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <SafeImage
                  src={versionAsset(image)}
                  alt={`Gadget Zone store interior view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Visit Us Today
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-muted-foreground">{address}</p>
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <SiInstagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Instagram</p>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @gadget_zone_ind
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold mb-2">Business Hours</p>
                  <p className="text-muted-foreground">Open Daily: 10 AM – 9 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Find Us on Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[400px]">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gadget Zone location map"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Gadget Zone</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your trusted mobile store in Thiruvanmiyur, Chennai
              </p>
              <p className="text-sm text-muted-foreground">
                Open Daily: 10 AM – 9 PM
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#products-services" className="hover:text-primary transition-colors">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="#hot-pick-section" className="hover:text-primary transition-colors">
                    HOT PICK
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="h-6 w-6" />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
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

      {/* Floating HOT PICK Button */}
      <HotFab onClick={scrollToHotPick} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

export default App;
