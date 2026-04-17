import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/90" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-float-slow" />

      {/* Orbiting Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/[0.07] animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-secondary/[0.05]" style={{ animation: 'spin-slow 30s linear infinite reverse' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Indore's Most Trusted Offline Coaching Since 1994
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-6 leading-[1.1] animate-fade-up"
            style={{ animationDelay: '150ms' }}>
          <span className="text-foreground">Crack </span>
          <span className="gradient-text-gold animate-text-glow inline-block">IIT JEE & NEET</span>
          <br />
          <span className="text-foreground">With Conceptual Clarity</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up opacity-0"
           style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          We don't just cover the syllabus — we build the deep conceptual foundation that transforms average students into top rankers. Whether your goal is IIT JEE or NEET, our proven approach has delivered results for 30+ years.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
          style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-10 py-6 bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-gradient-shift text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-bold rounded-xl"
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-10 py-6 border-white/20 text-foreground hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 font-semibold rounded-xl"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <div className="glass-card rounded-2xl p-6 group hover:border-primary/40 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-black font-display gradient-text mb-2">
              <AnimatedCounter end={20000} suffix="+" />
            </div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Students Trained</p>
          </div>
          <div className="glass-card rounded-2xl p-6 group hover:border-secondary/40 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-black font-display gradient-text-gold mb-2">
              <AnimatedCounter end={30} suffix="+" />
            </div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Years Experience</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;