import { CheckCircle2, Clock, ShieldCheck, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import constructionImg from "@/assets/service-construction.webp";
import electricalImg from "@/assets/service-electrical.webp";
import plumbingImg from "@/assets/service-plumbing.webp";
import maintenanceImg from "@/assets/service-maintenance.webp";
import landscapingImg from "@/assets/service-landscaping.webp";
import generalLaborImg from "@/assets/service-general-labor.webp";
import machineryImg from "@/assets/service-machinery.webp";
import heroImg from "@/assets/hero-workers.webp";

const services = [
  { title: "Construction Workers", description: "Skilled laborers for residential and commercial construction projects of any scale.", image: constructionImg, category: "Construction" },
  { title: "Electrical Services", description: "Licensed electricians for installations, repairs, and maintenance work.", image: electricalImg, category: "Electrical" },
  { title: "Plumbing Teams", description: "Professional plumbers for new installations and emergency repairs.", image: plumbingImg, category: "Plumbing" },
  { title: "Maintenance Crews", description: "Reliable teams for building maintenance, cleaning, and facility management.", image: maintenanceImg, category: "Maintenance" },
  { title: "Landscaping & Groundwork", description: "Experienced crews for landscaping, groundwork, and outdoor projects.", image: landscapingImg, category: "Landscaping" },
  { title: "General Labor", description: "Versatile workers ready for warehousing, logistics, and general labor tasks.", image: generalLaborImg, category: "General Labor" },
  { title: "Machinery Rental", description: "Heavy equipment available for rent — excavators, loaders, cranes, and more.", image: machineryImg, category: "Coming Soon" },
];

const StatsSection = () => (
  <section className="py-12 rounded-3xl my-12 animate-slide-up shadow-xl mx-4 glass-stats" aria-label="Company stats">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-8">
      {[
        ["500+", "Verified Workers"],
        ["350+", "Completed Jobs"],
        ["120+", "Happy Clients"],
        ["24/7", "Reliable Support"],
      ].map(([n, l]) => (
        <div key={l}>
          <p className="text-4xl md:text-5xl font-extrabold mb-2 text-white">{n}</p>
          <p className="text-white/75 font-medium text-lg">{l}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-16 md:py-24" aria-labelledby="why-heading">
    <div className="text-center mb-16 animate-slide-up">
      <h2 id="why-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Choose Deldey</h2>
      <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto font-medium">
        We make finding the right talent simple, fast, and secure.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { Icon: ShieldCheck, title: "Verified Workers", body: "Every worker is thoroughly vetted, skilled, and ready to contribute to your project efficiently." },
        { Icon: Clock, title: "Fast Hiring Process", body: "Skip long recruitment cycles. Get matched with reliable workers quickly and seamlessly." },
        { Icon: CheckCircle2, title: "Reliable Service", body: "We back every placement with ongoing support to ensure your complete satisfaction." },
      ].map(({ Icon, title, body }, i) => (
        <div key={title} className={`glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-${i + 1} hover:-translate-y-2 hover:shadow-2xl`}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary/10">
            <Icon className="w-8 h-8 text-primary dark:text-primary-foreground" aria-hidden />
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-muted rounded-3xl my-16 px-8 lg:px-16 shadow-inner" aria-labelledby="how-heading">
    <div className="text-center mb-16 animate-slide-up">
      <h2 id="how-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How It Works</h2>
      <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto font-medium">
        Three simple steps to build your dedicated workforce.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
      <div className="hidden md:block absolute top-[10%] left-[17%] w-[66%] border-t-4 border-dotted border-border z-0" />
      {[
        ["Request Workers", "Tell us about your project, location, and the specialized skills you need."],
        ["We Match You", "We review our pool of verified talent and select the absolute best fit."],
        ["Start Working", "Your selected workers arrive on-site and your project begins, hassle-free."],
      ].map(([title, body], i) => (
        <div key={title} className={`relative z-10 glass-card p-10 rounded-2xl flex flex-col items-center text-center animate-slide-up stagger-${i + 1} hover:-translate-y-2 transition-all`}>
          <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-extrabold mb-8 shadow-xl border-4 border-white/30">{i + 1}</div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground text-lg">{body}</p>
        </div>
      ))}
    </div>
    <div className="mt-16 text-center">
      <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" target="_blank" rel="noopener noreferrer">
        <button className="bg-primary text-primary-foreground rounded-full px-10 py-5 text-lg font-bold transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg hover:opacity-90">
          Get Started Now <ArrowRight className="w-6 h-6" aria-hidden />
        </button>
      </a>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 md:py-24" aria-labelledby="testimonials-heading">
    <div className="text-center mb-16 animate-slide-up">
      <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">What Our Clients Say</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        ["\"Deldey made hiring for our new site incredibly easy. The workers arrived on time and were very professional.\"", "Dawit M., Lead Contractor"],
        ["\"Finding reliable maintenance staff used to be a headache. Since partnering with Deldey, we save so much time.\"", "Sarah A., Facility Manager"],
      ].map(([quote, author], i) => (
        <figure key={author} className={`glass-card p-10 rounded-2xl transition-all animate-slide-up stagger-${i + 1} hover:-translate-y-1`}>
          <div className="flex text-secondary mb-6 space-x-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-6 h-6 fill-current" aria-hidden />)}
          </div>
          <blockquote className="text-xl text-foreground font-medium italic mb-8">{quote}</blockquote>
          <figcaption className="font-bold text-lg text-primary">— {author}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const BottomCTA = () => (
  <section className="py-16 md:py-24 bg-primary rounded-[2.5rem] text-center text-primary-foreground my-16 px-6 relative overflow-hidden shadow-2xl mx-4">
    <img src={heroImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/80" />
    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Ready to build your team?</h2>
      <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-2xl mx-auto">
        Join hundreds of businesses across Ethiopia trusting Deldey for their workforce needs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
        <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" target="_blank" rel="noopener noreferrer">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-12 py-6 text-xl font-bold transition-all hover:scale-105 w-full shadow-xl">
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
      <SEO
        title="Deldey Finishing Specialist — Skilled Workers in Ethiopia"
        description="Vetted construction, electrical, plumbing, maintenance and finishing workers matched to your project across Addis Ababa, typically on-site within 48 hours."
        path="/"
      />
      <Header />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <StatsSection />
        <WhyChooseUs />
        <HowItWorks />

        <section id="services" className="py-16 md:py-24 rounded-3xl px-8 lg:px-12 my-12 glass-card" aria-labelledby="services-heading">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 animate-slide-up gap-6">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
            <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" className="text-lg font-bold text-foreground border-2 border-border hover:bg-foreground/5 px-8 py-4 rounded-full shadow-sm transition-all" target="_blank" rel="noopener noreferrer">
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

      <Footer />
    </div>
  );
};

export default Index;
