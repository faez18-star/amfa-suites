import { Link } from "react-router-dom";
import { Wifi, Zap, Waves, UtensilsCrossed, TreePine, Star, ShieldCheck, Car, Tv, AirVent, BedDouble, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import poolImg from "@/assets/pool-real.jpg";
import gardenImg from "@/assets/garden-real.jpg";
import heroImg from "@/assets/pool-real.jpg";
import bedroomImg from "@/assets/bedroom1-real.jpg";

const features = [
  { icon: Wifi, title: "Fast WiFi", desc: "High-speed internet throughout" },
  { icon: Zap, title: "24/7 Power", desc: "Uninterrupted power supply" },
  { icon: Waves, title: "Swimming Pool", desc: "Refreshing pool access" },
  { icon: UtensilsCrossed, title: "Kitchenette", desc: "Fully equipped kitchen" },
  { icon: TreePine, title: "Garden", desc: "Beautiful private garden" },
];

const offerings = [
  { icon: BedDouble, title: "2 Luxury Bedrooms", desc: "Spacious, elegantly furnished bedrooms with premium bedding and blackout curtains for the perfect night's rest." },
  { icon: Waves, title: "Private Swimming Pool", desc: "Take a refreshing dip in our beautifully lit private pool — available day and night for your exclusive enjoyment." },
  { icon: UtensilsCrossed, title: "Fully Equipped Kitchenette", desc: "Cook your favourite meals in our modern kitchenette stocked with cookware, utensils, and a refrigerator." },
  { icon: Zap, title: "24/7 Power Supply", desc: "Enjoy uninterrupted electricity with our dedicated power backup system — no generator noise, just seamless comfort." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected with fast, reliable internet throughout the property — perfect for remote work or streaming." },
  { icon: AirVent, title: "Air Conditioning", desc: "Every room is climate-controlled with modern split-unit air conditioners for your comfort in any weather." },
  { icon: Tv, title: "Smart TV Entertainment", desc: "Enjoy Netflix, YouTube, and cable channels on large smart TVs in the living room and bedrooms." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Rest easy with round-the-clock security personnel and CCTV surveillance keeping you and your belongings safe." },
  { icon: Car, title: "Free Parking", desc: "Secure, gated parking space is available for your vehicle at no extra cost during your stay." },
  { icon: TreePine, title: "Lush Garden & Outdoor Area", desc: "Relax in our beautifully landscaped garden with ambient lighting — perfect for evening gatherings." },
  { icon: Clock, title: "Flexible Check-in/Check-out", desc: "We accommodate flexible arrival and departure times to fit your travel schedule — just let us know in advance." },
  { icon: Star, title: "Personalized Service", desc: "Our dedicated team ensures your stay is perfect with prompt responses and attention to every detail." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Amfa Suites exterior with pool" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="font-body text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-4">Welcome to</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6">
          Amfa Suites
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl mx-auto mb-2">
          Luxury 2-Bedroom Suite · Premium Amenities
        </p>
        <p className="text-accent font-display text-3xl md:text-4xl font-bold mb-8">
          ₦120,000<span className="text-lg font-body font-normal text-primary-foreground/70"> / night</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <Link to="/book">Book Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Features quick strip */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-3">Why Choose Amfa Suites</h2>
          <p className="section-subheading mx-auto">Everything you need for a perfect stay</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-lg p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <f.icon className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-display font-semibold text-card-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What We Offer */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-3">What We Offer</h2>
          <p className="section-subheading mx-auto">A complete luxury experience designed for your comfort and convenience</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o) => (
            <div key={o.title} className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <o.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Preview */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-heading mb-4">Experience Luxury Living</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Our beautifully designed 2-bedroom suite offers spacious rooms, modern furnishings, and all the amenities you need for a comfortable and memorable stay.
            </p>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
              <span className="ml-2 text-muted-foreground text-sm">5.0 · Exceptional</span>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/book">Reserve Your Stay</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={bedroomImg} alt="Master bedroom" className="rounded-lg object-cover w-full h-64 shadow-[var(--shadow-elevated)]" loading="lazy" width={1024} height={768} />
            <img src={gardenImg} alt="Garden with string lights" className="rounded-lg object-cover w-full h-64 shadow-[var(--shadow-elevated)]" loading="lazy" width={1024} height={768} />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          ₦120,000 per night · 2 Bedrooms · Premium Amenities
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10">
          <Link to="/book">Book Now</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
