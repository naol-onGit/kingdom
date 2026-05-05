import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon from "@/assets/deldey-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 rounded-full text-white px-4 sm:px-6 glass-nav">
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2" aria-label="Deldey Recruitment Agency home">
              <img src={icon} alt="" width={48} height={48} className="h-9 sm:h-12 w-auto bg-white/10 rounded-full object-contain flex-shrink-0 ring-2 ring-white/30" />
              <span className="font-bold font-sans text-xl hidden sm:inline">Deldey Finishing Specialist</span>
              <span className="font-bold font-sans flex flex-col leading-tight sm:hidden">
                <span className="text-sm">Deldey</span>
                <span className="text-[10px] font-medium opacity-90 tracking-wide uppercase">Finishing Specialist</span>
              </span>
            </a>
          </div>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-2">
            <a href="/" className="text-sm font-medium hover:bg-white/10 rounded-full px-4 py-2 transition-all">Home</a>
            <a href="/#services" className="text-sm font-medium hover:bg-white/10 rounded-full px-4 py-2 transition-all">Services</a>
            <a href="/about" className="text-sm font-medium hover:bg-white/10 rounded-full px-4 py-2 transition-all">About</a>
            <a href="/contact" className="text-sm font-medium hover:bg-white/10 rounded-full px-4 py-2 transition-all">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center min-w-11 min-h-11 rounded-full hover:bg-white/10 transition-all"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Button
              className="hidden md:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all font-bold border-2 border-white/40"
              onClick={() => window.open('https://forms.gle/QQfPxA8EQd5nmRvQA', '_blank')}
            >
              Hire Workers
            </Button>

            <button
              className="md:hidden inline-flex items-center justify-center min-w-11 min-h-11"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-2 py-5 px-5 rounded-2xl animate-fade-in glass-nav">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              <a href="/" className="text-sm font-semibold text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all">Home</a>
              <a href="/#services" className="text-sm font-semibold text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all">Services</a>
              <a href="/about" className="text-sm font-semibold text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all">About</a>
              <a href="/contact" className="text-sm font-semibold text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all">Contact</a>
              <div className="pt-3 mt-1 border-t border-white/20">
                <Button
                  className="bg-white text-primary hover:bg-white/90 rounded-full w-full font-bold py-5 text-base"
                  onClick={() => window.open('https://forms.gle/QQfPxA8EQd5nmRvQA', '_blank')}
                >
                  Hire Workers
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

