import { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BusinessHighlightsStrip } from '@/components/BusinessHighlightsStrip';
import { WhatsAppQuickMessages } from '@/components/WhatsAppQuickMessages';
import { MobileCareSmartUsageGuideSection } from '@/components/MobileCareSmartUsageGuideSection';

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
    '/assets/generated/hero-mobiles-accessories.dim_1600x900.jpg',
    '/assets/generated/hero-slide-accessories.dim_1600x900.jpg',
    '/assets/generated/hero-slide-service-repair.dim_1600x900.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const services = [
    {
      title: 'New Mobile Phones',
      image: '/assets/generated/card-new-mobiles.dim_1200x800.jpg',
    },
    {
      title: 'Mobile Accessories',
      image: '/assets/generated/card-accessories.dim_1200x800.jpg',
    },
    {
      title: 'Mobile Service & Repair',
      image: '/assets/generated/card-service-repair.dim_1200x800.jpg',
    },
    {
      title: 'Exchange & Upgrade Support',
      image: '/assets/generated/card-exchange-upgrade.dim_1200x800.jpg',
    },
    {
      title: 'EMI / Finance Options',
      image: '/assets/generated/card-emi-finance.dim_1200x800.jpg',
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
  ];

  const galleryImages = [
    '/assets/generated/gallery-01.dim_1200x800.jpg',
    '/assets/generated/gallery-02.dim_1200x800.jpg',
    '/assets/generated/gallery-03.dim_1200x800.jpg',
  ];

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

      {/* Brand Logo Strip */}
      <section className="py-10 md:py-14 px-4 section-alt-bg border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="w-32 h-24 md:w-40 md:h-28 p-2 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
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
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card">
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
                className="pointer-events-none"
              />
            </div>

            {/* Working Hours */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-3 text-foreground">Working Hours</h3>
              <p className="text-base text-muted-foreground">
                10:00 AM – 9:00 PM
              </p>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-[180px] font-normal"
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
                className="w-full sm:w-auto min-w-[180px] font-normal"
              />
            </div>

            {/* Social Media */}
            <div className="text-center pt-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-6 h-6 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Care & Smart Usage Guide Section */}
      <MobileCareSmartUsageGuideSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'gadget-zone')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Mobile-only Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
        <div className="grid grid-cols-3 gap-0">
          <Button
            asChild
            variant="ghost"
            className="h-14 rounded-none border-r border-border font-normal"
          >
            <a href={`tel:${phoneNumber}`} className="flex flex-col items-center justify-center gap-1">
              <Phone className="h-5 w-5" />
              <span className="text-xs">Call</span>
            </a>
          </Button>
          
          <WhatsAppQuickMessages
            whatsappNumber={whatsappNumber}
            variant="ghost"
            size="default"
            className="h-14 rounded-none border-r border-border font-normal flex-col gap-1"
            showIcon={true}
            label="WhatsApp"
          />
          
          <Button
            asChild
            variant="ghost"
            className="h-14 rounded-none font-normal"
          >
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1">
              <MapPin className="h-5 w-5" />
              <span className="text-xs">Map</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
