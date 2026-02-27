import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, injectStructuredData } from '@/lib/structuredData';
import { trackWhatsAppConversion, trackCallConversion } from '@/lib/googleAdsTracking';

const PHONE = 'tel:+919840077591';
const WHATSAPP_NUMBER = '919840077591';

const BRANDS = [
  {
    id: 'apple',
    name: 'Apple',
    logo: '/assets/generated/logo-apple-color-padded.dim_256x128.png',
    category: 'premium',
    description: 'iPhone 15 series and more. Genuine Apple products with warranty.',
    priceRange: '₹40,000 – ₹1,60,000+',
    whatsapp: 'Hi, I am interested in Apple iPhones. Please share available models and prices.',
    path: '/products/apple',
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/assets/generated/logo-samsung-color-padded.dim_256x128.png',
    category: 'premium',
    description: 'Galaxy S series, A series, and more. Wide range for every budget.',
    priceRange: '₹10,000 – ₹1,20,000+',
    whatsapp: 'Hi, I am interested in Samsung phones. Please share available models and prices.',
    path: '/products/samsung',
  },
  {
    id: 'motorola',
    name: 'Motorola',
    logo: '/assets/generated/logo-motorola-color-padded.dim_256x128.png',
    category: 'mid-range',
    description: 'Moto G series, Edge series. Pure Android experience with great value.',
    priceRange: '₹8,000 – ₹60,000',
    whatsapp: 'Hi, I am interested in Motorola phones. Please share available models and prices.',
    path: '/products/motorola',
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    logo: '/assets/generated/logo-oneplus-color-padded.dim_256x128.png',
    category: 'premium',
    description: 'OnePlus 12, Nord series. Flagship performance at competitive prices.',
    priceRange: '₹15,000 – ₹70,000',
    whatsapp: 'Hi, I am interested in OnePlus phones. Please share available models and prices.',
    path: '/products/oneplus',
  },
  {
    id: 'realme',
    name: 'Realme',
    logo: '/assets/generated/logo-realme-color-padded.dim_256x128.png',
    category: 'budget',
    description: 'Realme C series, Narzo series. Feature-packed phones at affordable prices.',
    priceRange: '₹7,000 – ₹35,000',
    whatsapp: 'Hi, I am interested in Realme phones. Please share available models and prices.',
    path: '/products/realme',
  },
  {
    id: 'vivo',
    name: 'Vivo',
    logo: '/assets/generated/logo-vivo-color.dim_256x128.png',
    category: 'mid-range',
    description: 'Vivo V series, Y series. Known for camera excellence and stylish design.',
    priceRange: '₹8,000 – ₹50,000',
    whatsapp: 'Hi, I am interested in Vivo phones. Please share available models and prices.',
    path: '/products/vivo',
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: '/assets/generated/logo-xiaomi-color.dim_256x128.png',
    category: 'budget',
    description: 'Redmi, POCO, Mi series. Best specs-to-price ratio in the market.',
    priceRange: '₹6,000 – ₹40,000',
    whatsapp: 'Hi, I am interested in Xiaomi/Redmi phones. Please share available models and prices.',
    path: '/products/xiaomi',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Brands' },
  { id: 'premium', label: 'Premium' },
  { id: 'mid-range', label: 'Mid-Range' },
  { id: 'budget', label: 'Budget' },
];

interface ProductsPageProps {
  onNavigate?: (path: string) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    updateSEO({
      title: 'Mobile Phones – Apple, Samsung, Motorola & More | Gadget Zone Chennai',
      description:
        'Buy genuine mobile phones from top brands – Apple, Samsung, Motorola, OnePlus, Realme, Vivo, Xiaomi – at Gadget Zone, Thiruvanmiyur, Chennai.',
      canonical: '/products',
      ogUrl: '/products',
    });
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  const filtered = activeCategory === 'all' ? BRANDS : BRANDS.filter((b) => b.category === activeCategory);

  const handleWhatsApp = (message: string) => {
    trackWhatsAppConversion();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBrandClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Mobile Phones</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genuine smartphones from all major brands. Walk in or WhatsApp us to check current stock and prices.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((brand) => (
              <article
                key={brand.id}
                className="bg-card rounded-2xl border border-border p-5 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="h-16 flex items-center justify-center mb-4 bg-muted rounded-xl p-3">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-1">{brand.name}</h2>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed flex-1">{brand.description}</p>
                <p className="text-sm font-semibold text-primary mb-4">{brand.priceRange}</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => handleBrandClick(brand.path)}
                    data-ga-event="product_view"
                    data-ga-label={brand.id}
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-1.5" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-600 text-green-700 hover:bg-green-50"
                    onClick={() => handleWhatsApp(brand.whatsapp)}
                    data-ga-event="product_enquiry"
                    data-ga-label={brand.id}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6">
            We can source any model for you. Contact us with your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={() => handleWhatsApp('Hi, I am looking for a specific mobile phone model. Can you help?')}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={PHONE} onClick={() => trackCallConversion()}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
