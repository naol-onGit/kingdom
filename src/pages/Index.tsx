import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Construction Workers",
    description: "Skilled laborers for residential and commercial construction projects of any scale.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Construction",
  },
  {
    title: "Electrical Services",
    description: "Licensed electricians for installations, repairs, and maintenance work.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    category: "Electrical",
  },
  {
    title: "Plumbing Teams",
    description: "Professional plumbers for new installations and emergency repairs.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    category: "Plumbing",
  },
  {
    title: "Maintenance Crews",
    description: "Reliable teams for building maintenance, cleaning, and facility management.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    category: "Maintenance",
  },
  {
    title: "Landscaping & Groundwork",
    description: "Experienced crews for landscaping, groundwork, and outdoor projects.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    category: "Landscaping",
  },
  {
    title: "General Labor",
    description: "Versatile workers ready for warehousing, logistics, and general labor tasks.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6525?w=800&q=80",
    category: "General Labor",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <IntroSection />

        {/* Services Grid */}
        <section id="services" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Workers & Services</h2>
            <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              Request a quote →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#services" className="hover:text-accent transition-colors">Construction</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Electrical</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Plumbing</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Workers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-accent transition-colors">Join Our Team</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Career Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Kingdom Workforce Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
