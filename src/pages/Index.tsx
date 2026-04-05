import { Link } from "react-router-dom";
import { Wifi, Zap, Waves, UtensilsCrossed, TreePine, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero.jpg";
import bedroom1Img from "@/assets/bedroom1.jpg";
import poolImg from "@/assets/pool.jpg";

const features = [
  { icon: Wifi, title: "Fast WiFi", desc: "High-speed internet throughout" },
  { icon: Zap, title: "24/7 Power", desc: "Uninterrupted power supply" },
  { icon: Waves, title: "Swimming Pool", desc: "Refreshing pool access" },
  { icon: UtensilsCrossed, title: "Kitchenette", desc: "Fully equipped kitchen" },
  { icon: TreePine, title: "Garden", desc: "Beautiful private garden" },
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

    {/* Features */}
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

    {/* Preview */}
    <section className="py-20 bg-secondary">
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
            <img src={bedroom1Img} alt="Master bedroom" className="rounded-lg object-cover w-full h-64 shadow-[var(--shadow-elevated)]" loading="lazy" width={1024} height={768} />
            <img src={poolImg} alt="Swimming pool" className="rounded-lg object-cover w-full h-64 shadow-[var(--shadow-elevated)]" loading="lazy" width={1024} height={768} />
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
