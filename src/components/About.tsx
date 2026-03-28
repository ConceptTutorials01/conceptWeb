import { Target, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-badge mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">About </span>
            <span className="gradient-text">Concept Tutorials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our object of teaching a child is to enable him to study without a Teacher
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Vision Card */}
          <div
            className={`card-3d transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="card-3d-inner glass-card rounded-2xl p-8 h-full relative overflow-hidden group">
              {/* Glow on hover */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-110">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Our Vision</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe <b className="text-foreground">"Faith"</b> is the foundation of every student's success, built through trust in teachers and guidance.
                  </p>
                  <p>
                    Our vision is to deliver quality education with ethics, truth, and transparency, while striving for excellence and perfection.
                  </p>
                  <p>
                    We are committed to igniting students' potential and ensuring an optimum student–teacher ratio.
                  </p>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`card-3d transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="card-3d-inner glass-card rounded-2xl p-8 h-full relative overflow-hidden group">
              {/* Glow on hover */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center ring-1 ring-secondary/20 group-hover:ring-secondary/40 transition-all duration-300 group-hover:scale-110">
                    <Target className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Our Mission</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We are a <b className="text-foreground">United Team</b> with one voice, dedicated to imparting the best training for aspiring engineers.
                  </p>
                  <p>
                    We provide comprehensive coaching for competitive exams while staying true to being an institute, not an industry.
                  </p>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;