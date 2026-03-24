import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted mt-4 mb-16 animate-fade-in shadow-lg">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 p-8 md:p-16 lg:p-20 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center space-y-8 md:space-y-10 order-2 md:order-1">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight animate-slide-down text-foreground">
              Reliable Construction & Maintenance Workers in Ethiopia
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-xl animate-slide-up stagger-1 font-medium">
              Connecting skilled professionals with top employers across Ethiopia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-6 animate-slide-up stagger-2">
            <a href="https://forms.gle/QQfPxA8EQd5nmRvQA" className="w-full sm:w-auto text-center" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-bold transition-all hover:scale-105 w-full shadow-md">
                Hire Workers
              </Button>
            </a>
            <a href="https://forms.gle/oagY2kerM915zR6T9" className="w-full sm:w-auto text-center" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-10 py-7 text-lg font-bold transition-all hover:scale-105 w-full bg-transparent shadow-sm">
                Register as Worker
              </Button>
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative aspect-[4/3] md:aspect-[4/4] rounded-[2rem] overflow-hidden animate-scale-in order-1 md:order-2 shadow-2xl border-4 border-white/10">
          <img
            src="/worker_hero.png"
            alt="Ethiopian workers in safety gear"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
