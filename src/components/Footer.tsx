import { Mail, MapPin, Phone, Send, Instagram, Facebook } from "lucide-react";
import icon from "@/assets/deldey-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src={icon}
                alt="Deldey Finishing Specialist logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-primary/10 object-contain ring-2 ring-border"
              />
              <span className="font-bold text-lg">Deldey Finishing Specialist</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Connecting Ethiopian businesses with vetted, reliable workers across construction, finishing, electrical, plumbing, maintenance and more.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden />
                <span>Oromia Tower, Bole, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden />
                <a href="tel:+251946333435" className="hover:text-foreground transition-colors">+251 946 333 435</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden />
                <a href="mailto:info@deldey.net" className="hover:text-foreground transition-colors">info@deldey.net</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-foreground transition-colors">Construction</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Electrical</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Plumbing</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Maintenance</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Machinery Rental</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="https://forms.gle/oagY2kerM915zR6T9" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Join Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://t.me/deldeyrec" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Send className="w-4 h-4" aria-hidden /> Telegram</a></li>
              <li><a href="https://www.facebook.com/abushamesekr/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Facebook className="w-4 h-4" aria-hidden /> Facebook</a></li>
              <li><a href="https://instagram.com/deldeyrec" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Instagram className="w-4 h-4" aria-hidden /> Instagram</a></li>
            </ul>
            <h3 className="font-semibold mt-6 mb-2">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Deldey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
