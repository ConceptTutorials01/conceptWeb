import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Alumni', href: '#alumni' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['contact', 'admissions', 'facilities', 'alumni', 'about'];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '#') return activeSection === 'home';
    return activeSection === href.replace('#', '');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('#')}>
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300 group-hover:scale-110">
              <img
                src={logo}
                alt="Concept Tutorials Logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display gradient-text tracking-tight">
                Concept Tutorials
              </h2>
              <p className="text-[11px] text-muted-foreground tracking-wide">
                Coaching Institute By Parag Kher
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link-3d relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#admissions')}
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 font-semibold px-6"
            >
              <span className="relative z-10">Enroll Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg glass flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="transition-all duration-300">
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="glass rounded-xl p-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
            <Button
              className="w-full mt-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold"
              onClick={() => scrollToSection('#admissions')}
            >
              Enroll Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;