import { Wifi, Zap, Waves, UtensilsCrossed, TreePine, BedDouble, Bath, Car, ShieldCheck, Clock, Users, AirVent, Ban, CigaretteOff, Dog, Volume2, UsersRound, PartyPopper } from "lucide-react";
import Layout from "@/components/Layout";
import bedroom1Img from "@/assets/bedroom1-real.jpg";
import bedroom2Img from "@/assets/bedroom3-real.jpg";
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
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-heading text-center mb-10">House Rules</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: CigaretteOff, label: "No smoking indoors" },
            { icon: UsersRound, label: "Max guests: 8" },
            { icon: Dog, label: "No pets allowed" },
            { icon: Clock, label: "24/7 check-in" },
            { icon: PartyPopper, label: "No parties" },
            { icon: Ban, label: "No reckless behaviour" },
          ].map((r) => (
            <div key={r.label} className="bg-card rounded-lg p-4 flex items-center gap-3 shadow-[var(--shadow-card)]">
              <r.icon className="text-primary shrink-0" size={22} />
              <span className="text-card-foreground text-sm font-medium">{r.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-6 md:p-8 shadow-[var(--shadow-elevated)] space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The daily rent is ₦100,000 and payable in advance after booking confirmation. In case of any extended period of stay, it should be paid before the extending day.
          </p>
          <p>
            A copy of valid identification should be submitted at check-in.
          </p>
          <p>
            <strong className="text-foreground">Amfa Suites</strong> shall pay for all utilities — water, gas, electricity, and internet — with the following allowance caps:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gas should last a month.</li>
            <li>Electricity use: 40 units per day.</li>
            <li>Internet use: 10GB per day.</li>
          </ul>
          <p>
            Anything above the allowance cap is the <strong className="text-foreground">Tenant's</strong> responsibility. Any overages will be invoiced and deducted from your caution fee.
          </p>
          <p>
            The apartment shall be cleaned based on your request for cleaning, and you must be present while the cleaner cleans, as the lessor will not be responsible for any personal property loss.
          </p>
          <p>
            Tenants are not allowed to have pets.
          </p>
          <p>
            No smoking indoors. Any damage caused by smoking to the unit or furnishings will be billed to the tenant upon vacating the apartment.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The swimming pool has no present lifeguard; only learned swimmers are advised to use the pool.</li>
            <li>Check-out time is 12 noon. If checking out after 12 noon, you will need to notify the lessor ahead of time.</li>
            <li>
              If you cancel your reservation <strong className="text-foreground">before 48 hours</strong> to the booked date, you will be fully refunded your deposit.
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>If you cancel <strong className="text-foreground">48 hours</strong> to the booked date, 5% of the required amount will be deducted from your deposit or paid.</li>
                <li>If you cancel <strong className="text-foreground">24 hours</strong> to, or on the booked date, 10% of the required amount will be deducted from your deposit or paid.</li>
              </ul>
            </li>
          </ul>
          <p>
            In situations where the tenant decides to use the outdoor space for parties, birthdays, and other outdoor events that accommodate more than 6 people, an extra charge of ₦50,000 per day will apply.
          </p>
          <p>
            No loud music later than 10 PM.
          </p>
          <p className="text-sm pt-4 border-t border-border">
            In addition to the provisions set forth above, tenants hereby agree that residency shall be governed by all agreements as set forth on this page. Tenant hereby certifies and agrees that all residents signing this lease agreement have fully examined, read, and understood the lease agreement.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
