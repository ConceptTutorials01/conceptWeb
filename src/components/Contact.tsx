import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Building2, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-badge mx-auto">
            <Mail className="w-3.5 h-3.5" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">Get in </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your IIT JEE journey? Contact us today for admission details,
            course information, or to schedule a campus visit.
          </p>
        </div>

        {/* ── Two Branch Cards ── */}
        <div className={`grid md:grid-cols-2 gap-6 mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '200ms' }}>

          {/* Head Office */}
          <div className="glass-card rounded-2xl p-7 relative overflow-hidden group">
            {/* Hover glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center ring-1 ring-primary/20">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Head Office</span>
                  <h3 className="text-lg font-bold text-foreground leading-tight">Lokmanya Nagar Centre</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>113, Lokmanya Nagar</p>
                    <p>Indore (M.P.) – 452009</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p><span className="font-medium text-foreground">Parag Kher:</span> 93003 60180</p>
                    <p><span className="font-medium text-foreground">Sachin Agrawal:</span> 99608 39401</p>
                    <p>0731 3582568</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">conceptutorials@outlook.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p>Morning: 6AM – 12PM</p>
                    <p>Evening: 2PM – 8PM</p>
                    <p>Test Series: Sundays</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 text-xs border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  onClick={() => window.open('tel:+919300360180', '_self')}>
                  Call Now
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/919300360180', '_blank')}>
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* New Branch */}
          <div className="glass-card rounded-2xl p-7 relative overflow-hidden group border-secondary/20 hover:border-secondary/40">
            {/* New badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-secondary to-amber-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-lg shadow-secondary/20 z-20">
              <Sparkles className="w-3 h-3" /> New Branch
            </div>

            {/* Hover glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl flex items-center justify-center ring-1 ring-secondary/20">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary">New Centre</span>
                  <h3 className="text-lg font-bold text-foreground leading-tight">Vidhyanchal Nagar Centre</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>36, Vidhyanchal Nagar</p>
                    <p>Behind Bhuteshwar Mandir</p>
                    <p>Indore (M.P.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p><span className="font-medium text-foreground">Parag Kher:</span> 93003 60180</p>
                    <p><span className="font-medium text-foreground">Achal Agrawal:</span> 97526 76676</p>
                    <p><span className="font-medium text-foreground">Sachin Agrawal:</span> 99608 39401</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">conceptutorials@outlook.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p>12PM – 8PM</p>
                    <p>Test Series: Saturday</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="outline" size="sm"
                  className="flex-1 text-xs border-secondary/20 text-secondary hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300"
                  onClick={() => window.open('tel:+919752676676', '_self')}>
                  Call Now
                </Button>
                <Button variant="outline" size="sm"
                  className="flex-1 text-xs border-secondary/20 text-secondary hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/919752676676', '_blank')}>
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Class Timings */}
        <div className={`glass-card rounded-2xl p-7 max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center ring-1 ring-secondary/20">
              <Clock className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Class Timings</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-border/30">
              <span className="text-muted-foreground">Morning Batch</span>
              <span className="font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full text-xs">6AM – 12PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/30">
              <span className="text-muted-foreground">Evening Batch</span>
              <span className="font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full text-xs">2PM – 8PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Test Series</span>
              <span className="font-semibold text-foreground bg-secondary/10 px-3 py-1 rounded-full text-xs">Sundays</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
