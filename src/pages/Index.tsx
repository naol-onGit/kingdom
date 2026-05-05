import { CheckCircle2, Clock, ShieldCheck, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServiceCard from "@/components/ServiceCard";
import constructionImg from "@/assets/service-construction.png";
import electricalImg from "@/assets/service-electrical.png";
import plumbingImg from "@/assets/service-plumbing.png";
import maintenanceImg from "@/assets/service-maintenance.png";
import landscapingImg from "@/assets/service-landscaping.png";
import generalLaborImg from "@/assets/service-general-labor.png";
import machineryImg from "@/assets/service-machinery.png";

const services = [
  {
    title: "Construction Workers",
    description: "Skilled laborers for residential and commercial construction projects of any scale.",
    image: constructionImg,
    category: "Construction",
  },
  {
    title: "Electrical Services",
    description: "Licensed electricians for installations, repairs, and maintenance work.",
    image: electricalImg,
    category: "Electrical",
  },
  {
    title: "Plumbing Teams",
    description: "Professional plumbers for new installations and emergency repairs.",
    image: plumbingImg,
    category: "Plumbing",
  },
  {
    title: "Maintenance Crews",
    description: "Reliable teams for building maintenance, cleaning, and facility management.",
    image: maintenanceImg,
    category: "Maintenance",
  },
  {
    title: "Landscaping & Groundwork",
    description: "Experienced crews for landscaping, groundwork, and outdoor projects.",
    image: landscapingImg,
    category: "Landscaping",
  },
  {
    title: "General Labor",
    description: "Versatile workers ready for warehousing, logistics, and general labor tasks.",
    image: generalLaborImg,
    category: "General Labor",
  },
  {
    title: "Machinery Rental",
    description: "Heavy equipment and machinery available for rent — excavators, loaders, cranes, and more.",
    image: machineryImg,
    category: "Coming Soon",
  },
];

const StatsSection = () => (
  <section className="py-12 rounded-3xl my-12 animate-slide-up shadow-xl mx-4 glass-stats">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-8">
      <div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">500+</h3>
        <p className="text-white/75 font-medium text-lg">Verified Workers</p>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">350+</h3>
        <p className="text-white/75 font-medium text-lg">Completed Jobs</p>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">120+</h3>
        <p className="text-white/75 font-medium text-lg">Happy Clients</p>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">24/7</h3>
        <p className="text-white/75 font-medium text-lg">Reliable Support</p>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-16 md:py-24">
    <div className="text-center mb-16 animate-slide-up">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Choose Deldey</h2>
      <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto font-medium">
        We make finding the right talent simple, fast, and secure.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-1 hover:-translate-y-2 hover:shadow-2xl">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(26,46,90,0.12)'}}>
          <ShieldCheck className="w-8 h-8 text-[#1a2e5a] dark:text-[#7ba7d4]" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Verified Workers</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">Every worker is thoroughly vetted, skilled, and ready to contribute to your project efficiently.</p>
      </div>
      <div className="glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-2 hover:-translate-y-2 hover:shadow-2xl">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(26,46,90,0.12)'}}>
          <Clock className="w-8 h-8 text-[#1a2e5a] dark:text-[#7ba7d4]" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Fast Hiring Process</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">Skip the long recruitment cycles. Get matched with reliable workers quickly and seamlessly.</p>
      </div>
      <div className="glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-3 hover:-translate-y-2 hover:shadow-2xl">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(26,46,90,0.12)'}}>
          <CheckCircle2 className="w-8 h-8 text-[#1a2e5a] dark:text-[#7ba7d4]" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Reliable Service</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">We back our placements with ongoing support to ensure your complete satisfaction and project success.</p>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-muted rounded-3xl my-16 px-8 lg:px-16 shadow-inner">
    <div className="text-center mb-16 animate-slide-up">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How It Works</h2>
      <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto font-medium">
        Three simple steps to build your dedicated workforce.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
      <div className="hidden md:block absolute top-[10%] left-[17%] w-[66%] border-t-4 border-dotted border-border z-0"></div>

      <div className="relative z-10 glass-card p-10 rounded-2xl flex flex-col items-center text-center animate-slide-up stagger-1 hover:-translate-y-2 transition-all">
        <div className="w-20 h-20 rounded-full text-white flex items-center justify-center text-3xl font-extrabold mb-8 shadow-xl border-4 border-white/30" style={{backgroundColor: '#1a2e5a'}}>1</div>
        <h3 className="text-2xl font-bold mb-4">Request Workers</h3>
        <p className="text-muted-foreground text-lg">Tell us about your project, location, and the specialized skills you need.</p>
      </div>
      <div className="relative z-10 glass-card p-10 rounded-2xl flex flex-col items-center text-center animate-slide-up stagger-2 hover:-translate-y-2 transition-all">
        <div className="w-20 h-20 rounded-full text-white flex items-center justify-center text-3xl font-extrabold mb-8 shadow-xl border-4 border-white/30" style={{backgroundColor: '#1a2e5a'}}>2</div>
        <h3 className="text-2xl font-bold mb-4">We Match You</h3>
        <p className="text-muted-foreground text-lg">We review our pool of verified talent and select the absolute best fit for your requirements.</p>
      </div>
      <div className="relative z-10 glass-card p-10 rounded-2xl flex flex-col items-center text-center animate-slide-up stagger-3 hover:-translate-y-2 transition-all">
        <div className="w-20 h-20 rounded-full text-white flex items-center justify-center text-3xl font-extrabold mb-8 shadow-xl border-4 border-white/30" style={{backgroundColor: '#1a2e5a'}}>3</div>
        <h3 className="text-2xl font-bold mb-4">Start Working</h3>
        <p className="text-muted-foreground text-lg">Your selected workers arrive on-site and your project begins, completely hassle-free.</p>
      </div>
    </div>
    <div className="mt-16 text-center">
      <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" target="_blank" rel="noopener noreferrer">
         <button className="text-white rounded-full px-10 py-5 text-lg font-bold transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg hover:opacity-90" style={{backgroundColor: '#1a2e5a'}}>
            Get Started Now <ArrowRight className="w-6 h-6"/>
         </button>
      </a>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 md:py-24">
    <div className="text-center mb-16 animate-slide-up">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">What Our Clients Say</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-1 hover:-translate-y-1">
        <div className="flex text-secondary mb-6 space-x-1">
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
        </div>
        <p className="text-xl text-foreground font-medium italic mb-8">"Deldey made hiring for our new site incredibly easy. The workers arrived on time and were very professional."</p>
        <div className="font-bold text-lg text-primary">- Dawit M., Lead Contractor</div>
      </div>
      <div className="glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-2 hover:-translate-y-1">
        <div className="flex text-secondary mb-6 space-x-1">
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
          <Star className="w-6 h-6 fill-current" />
        </div>
        <p className="text-xl text-foreground font-medium italic mb-8">"Finding reliable maintenance staff used to be a headache. Since partnering with Deldey, we save so much time."</p>
        <div className="font-bold text-lg text-primary">- Sarah A., Facility Manager</div>
      </div>
    </div>
  </section>
);

const BottomCTA = () => (
  <section className="py-16 md:py-24 bg-primary rounded-[2.5rem] text-center text-primary-foreground my-16 px-6 relative overflow-hidden shadow-2xl mx-4">
    <div className="absolute inset-0 opacity-10 bg-[url('/worker_hero.png')] bg-cover bg-center mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/80"></div>
    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Ready to build your team?</h2>
      <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-2xl mx-auto">
        Join the hundreds of businesses across Ethiopia trusting Deldey for their workforce needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
        <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" target="_blank" rel="noopener noreferrer">
          <button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 py-6 text-xl font-bold transition-all hover:scale-105 w-full shadow-xl">
            Hire Workers Now
          </button>
        </a>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />


        <StatsSection />
        <WhyChooseUs />
        <HowItWorks />

        {/* Services Grid */}
        <section id="services" className="py-16 md:py-24 rounded-3xl px-8 lg:px-12 my-12 glass-card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 animate-slide-up gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
            <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" className="text-lg font-bold text-white border-2 border-white/60 hover:bg-white/15 px-8 py-4 rounded-full shadow-sm transition-all hover:opacity-90" target="_blank" rel="noopener noreferrer">
              Request a Service →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`animate-slide-up stagger-${Math.min(index + 1, 6)} hover:-translate-y-2 transition-transform duration-300`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        <Testimonials />
        <BottomCTA />
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
                <li><a href="/#services" className="hover:text-accent transition-colors">Machinery Rental</a></li>
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
                <li><a href="https://forms.gle/oagY2kerM915zR6T9" className="hover:text-accent transition-colors">Join Our Team</a></li>
                <li><a href="https://forms.gle/oagY2kerM915zR6T9" className="hover:text-accent transition-colors">Career Opportunities</a></li>
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
            <p>© {new Date().getFullYear()} Deldey Recruitment Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
