import { useState } from "react";
import { CalendarIcon, Wifi, Zap, Waves, UtensilsCrossed, TreePine } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const NIGHTLY_RATE = 120000;
const CLEANING_FEE = 15000;
const SERVICE_FEE = 10000;

const Book = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nights = checkIn && checkOut ? Math.max(differenceInDays(checkOut, checkIn), 0) : 0;
  const subtotal = nights * NIGHTLY_RATE;
  const total = subtotal > 0 ? subtotal + CLEANING_FEE + SERVICE_FEE : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !checkIn || !checkOut || nights < 1) {
      toast.error("Please fill in all fields and select valid dates.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request submitted! We'll contact you shortly.");
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32 bg-background text-center">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="font-display text-4xl font-bold mb-4 text-foreground">Booking Confirmed!</h1>
            <p className="text-muted-foreground text-lg mb-2">Thank you, {name}.</p>
            <p className="text-muted-foreground mb-1">
              {checkIn && checkOut && `${format(checkIn, "PPP")} → ${format(checkOut, "PPP")}`}
            </p>
            <p className="text-muted-foreground mb-6">{nights} night{nights > 1 ? "s" : ""} · {guests} guest{Number(guests) > 1 ? "s" : ""}</p>
            <p className="font-display text-3xl font-bold text-primary">₦{total.toLocaleString()}</p>
            <p className="text-muted-foreground text-sm mt-1 mb-8">Total amount</p>
            <p className="text-muted-foreground text-sm">We'll send a confirmation email to <strong>{email}</strong> with payment details.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-heading mb-3">Book Your Stay</h1>
            <p className="section-subheading mx-auto">₦120,000 per night · 2 Bedrooms</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="mt-1" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 800 000 0000" className="mt-1" />
                </div>
                <div>
                  <Label>Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>{n} Guest{n > 1 ? "s" : ""}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Check-in</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full mt-1 justify-start text-left font-normal", !checkIn && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Check-out</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full mt-1 justify-start text-left font-normal", !checkOut && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} disabled={(d) => d < (checkIn || new Date())} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                Confirm Booking
              </Button>
            </form>

            {/* Summary sidebar */}
            <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-elevated)] h-fit">
              <h3 className="font-display text-xl font-semibold mb-4 text-card-foreground">Booking Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">₦{NIGHTLY_RATE.toLocaleString()} × {nights} night{nights !== 1 ? "s" : ""}</span>
                  <span className="text-card-foreground font-medium">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Caution fee</span>
                  <span className="text-card-foreground font-medium">₦{CLEANING_FEE.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span className="text-card-foreground font-medium">₦{SERVICE_FEE.toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold text-card-foreground">Total</span>
                  <span className="font-display text-xl font-bold text-primary">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-semibold text-card-foreground text-sm mb-3">Included Amenities</h4>
                <div className="space-y-2">
                  {[
                    { icon: Wifi, label: "Fast WiFi" },
                    { icon: Zap, label: "24/7 Power Supply" },
                    { icon: Waves, label: "Swimming Pool" },
                    { icon: UtensilsCrossed, label: "Kitchenette" },
                    { icon: TreePine, label: "Garden" },
                  ].map((a) => (
                    <div key={a.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <a.icon size={16} className="text-primary" />
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
