import { Wifi, Zap, Waves, UtensilsCrossed, TreePine, BedDouble, Bath, Car, ShieldCheck, Clock, Users, AirVent } from "lucide-react";
import Layout from "@/components/Layout";
import bedroom1Img from "@/assets/bedroom1.jpg";
import bedroom2Img from "@/assets/bedroom2.jpg";
import poolImg from "@/assets/pool-real.jpg";
import heroImg from "@/assets/pool-real.jpg";
import gardenImg from "@/assets/garden-real.jpg";

const amenities = [
  { icon: Wifi, label: "Fast WiFi" },
  { icon: Zap, label: "24/7 Power Supply" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: UtensilsCrossed, label: "Kitchenette" },
  { icon: TreePine, label: "Private Garden" },
  { icon: BedDouble, label: "2 Bedrooms" },
  { icon: Bath, label: "Modern Bathrooms" },
  { icon: Car, label: "Free Parking" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Clock, label: "Self Check-in" },
  { icon: Users, label: "Up to 6 Guests" },
  { icon: AirVent, label: "Air Conditioning" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Amfa Suites" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-3">About Amfa Suites</h1>
        <p className="text-primary-foreground/80 text-lg">Your home away from home</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="section-heading mb-6">Our Story</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Amfa Suites was created with one goal in mind — to offer guests an exceptional stay that combines the comfort of home with the luxury of a premium hotel. Our beautifully appointed 2-bedroom suite provides everything you need for a relaxing getaway.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From our sparkling swimming pool to our lush private garden, every detail has been thoughtfully designed to make your stay unforgettable. Whether you're visiting for business or leisure, Amfa Suites is the perfect choice.
        </p>
      </div>
    </section>

    {/* Rooms */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-14">Our Rooms</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={bedroom1Img} alt="Master bedroom" className="w-full h-72 object-cover" loading="lazy" width={1024} height={768} />
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-2 text-card-foreground">Master Bedroom</h3>
              <p className="text-muted-foreground leading-relaxed">Spacious king-size bed with premium linens, en-suite bathroom, air conditioning, and stunning natural light.</p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={bedroom2Img} alt="Second bedroom" className="w-full h-72 object-cover" loading="lazy" width={1024} height={768} />
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-2 text-card-foreground">Second Bedroom</h3>
              <p className="text-muted-foreground leading-relaxed">Comfortable twin or double bed setup, modern furnishings, ample storage, and a cozy atmosphere.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pool */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={poolImg} alt="Swimming pool" className="rounded-lg w-full h-80 object-cover shadow-[var(--shadow-elevated)]" loading="lazy" width={1024} height={768} />
          <div>
            <h2 className="section-heading mb-4">Relax by the Pool</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Take a refreshing dip in our sparkling swimming pool or lounge in the sun. Our pool area is the perfect spot to unwind after a busy day.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Amenities */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-14">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div key={a.label} className="bg-card rounded-lg p-5 flex items-center gap-3 shadow-[var(--shadow-card)]">
              <a.icon className="text-primary shrink-0" size={24} />
              <span className="text-card-foreground font-medium text-sm">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* House Rules */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="section-heading text-center mb-10">House Rules</h2>
        <div className="space-y-4">
          {[
            ["Check-in", "From 2:00 PM"],
            ["Check-out", "By 12:00 PM"],
            ["Max Guests", "6"],
            ["Pets", "Not allowed"],
            ["Smoking", "Not allowed indoors"],
            ["Parties", "No parties or events"],
          ].map(([rule, detail]) => (
            <div key={rule} className="flex justify-between items-center border-b border-border pb-3">
              <span className="font-medium text-foreground">{rule}</span>
              <span className="text-muted-foreground">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
