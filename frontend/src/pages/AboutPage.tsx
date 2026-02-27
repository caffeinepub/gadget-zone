import { useEffect } from 'react';
import { Shield, Star, Users, MapPin } from 'lucide-react';
import { updateSEO } from '@/lib/seoHelpers';
import { getBreadcrumbSchema, getLocalBusinessSchema, injectStructuredData } from '@/lib/structuredData';

const VALUES = [
  { icon: Shield, title: 'Genuine Products', desc: 'We only sell authentic, warranty-backed devices from authorized channels.' },
  { icon: Star, title: 'Expert Service', desc: 'Certified technicians with years of experience in mobile repair and support.' },
  { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our priority. We go the extra mile for every customer.' },
  { icon: MapPin, title: 'Local & Trusted', desc: 'Proudly serving Thiruvanmiyur and surrounding areas since our founding.' },
];

const GALLERY = [
  { src: '/assets/generated/gallery-01.dim_1200x800.jpg', alt: 'Gadget Zone store interior' },
  { src: '/assets/generated/gallery-02.dim_1200x800.jpg', alt: 'Mobile phone display section' },
  { src: '/assets/generated/gallery-03.dim_1200x800.jpg', alt: 'Service and repair counter' },
];

export default function AboutPage() {
  useEffect(() => {
    updateSEO({
      title: 'About Gadget Zone – Trusted Mobile Store in Thiruvanmiyur, Chennai',
      description:
        'Learn about Gadget Zone – your trusted mobile phone store in Thiruvanmiyur, Chennai. Our story, mission, values, and commitment to genuine products and expert service.',
      canonical: '/about',
      ogUrl: '/about',
    });
    injectStructuredData(getLocalBusinessSchema(), 'local-business-ld');
    injectStructuredData(
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]),
      'breadcrumb-ld'
    );
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <img
            src="/assets/generated/gadget-zone-logo.dim_512x512.png"
            alt="Gadget Zone"
            className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-lg object-contain"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Gadget Zone</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your neighbourhood mobile phone store in Thiruvanmiyur, Chennai – where technology meets trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gadget Zone was founded with a simple mission: to bring the best mobile technology to the people of Thiruvanmiyur and the surrounding neighbourhoods of Adyar, Besant Nagar, Thoraipakkam, Velachery, Perungudi, OMR, and ECR.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started as a small mobile accessories shop and grew into a full-service mobile destination – selling new phones, repairing devices, offering exchange deals, installing CCTV systems, and providing flexible EMI options.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we are proud to be one of the most trusted mobile stores in the area, known for our genuine products, transparent pricing, and exceptional after-sales support.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/generated/hero-showroom.dim_1600x900.jpg"
                alt="Gadget Zone showroom"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Store</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GALLERY.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden shadow-md aspect-video">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-primary/5 py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">Areas We Serve</h2>
          <p className="text-muted-foreground">
            Thiruvanmiyur · Adyar · Besant Nagar · Thoraipakkam · Velachery · Perungudi · OMR · ECR · Sholinganallur · Pallikaranai
          </p>
        </div>
      </section>
    </main>
  );
}
