import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Alumni Stories', href: '#alumni' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    'IIT JEE Main',
    'IIT JEE Advanced',
    'Class 11th Foundation',
    'Class 12th Intensive',
    'Class 10th',
    'Class 9th',
    'NTSE',
    'Crash Course',
    'Test Series'
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/concept_tutorials_/?hl=en', name: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(225,20%,8%)] to-[hsl(225,25%,5%)]" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(217 91% 60% / 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('#')}>
              <div className="w-11 h-11 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <span className="font-black text-lg gradient-text">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-display gradient-text">Concept Tutorials</h3>
                <p className="text-xs text-muted-foreground">Coaching Institute By Parag Kher</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students to achieve their IIT JEE dreams through comprehensive
              offline coaching, expert faculty, and proven methodologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>113, Lokmanya Nagar</p>
                  <p>Indore (M.P.)</p>
                  <p>India - 452009</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>0731 3582568</p>
                  <p>93003 60180</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>conceptutorials@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground/70 mb-4 md:mb-0">
            © 2025 Concept Tutorials. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground/70">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;