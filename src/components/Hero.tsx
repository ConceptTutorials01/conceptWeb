import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Achieve Your <span className="text-yellow-300">IIT JEE</span> Dreams
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Join Indore's premier offline coaching institute with proven results, expert faculty, 
          and comprehensive preparation for IIT JEE Main & Advanced.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Enroll Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 border-white text-primary hover:bg-white hover:text-primary"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">95%</h3>
            <p className="text-lg">Success Rate</p>
          </div> */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">12,500+</h3>
            <p className="text-lg">Students Trained</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">25+</h3>
            <p className="text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;