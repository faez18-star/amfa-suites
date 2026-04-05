import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">Amfa Suites</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your luxury 2-bedroom suite with premium amenities. Experience comfort like never before.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Home</Link>
            <Link to="/about" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">About Us</Link>
            <Link to="/book" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Book Now</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
          <p className="text-primary-foreground/70 text-sm">info@amfasuites.com</p>
          <p className="text-primary-foreground/70 text-sm mt-1">+234 800 000 0000</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} Amfa Suites. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
