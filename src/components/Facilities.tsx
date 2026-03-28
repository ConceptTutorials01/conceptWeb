import { Book, Users, Laptop, Clock, Award, HeadphonesIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Facilities = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  const amenities = [
    {
      icon: <Book className="w-7 h-7" />,
      title: "Comprehensive Study Material",
      description: "Meticulously crafted study materials covering entire JEE syllabus with practice problems.",
      color: "primary",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Small Batch Size",
      description: "Limited students per batch ensuring personalized attention and better interaction.",
      color: "secondary",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Flexible Timings",
      description: "Multiple batch timings to accommodate different student schedules and preferences and whole day availability of faculty.",
      color: "primary",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Regular Assessments",
      description: "Weekly tests, monthly evaluations, and mock exams to track progress continuously.",
      color: "secondary",
    },
    {
      icon: <Laptop className="w-7 h-7" />,
      title: "Cozy Classrooms",
      description: "Lecture Rooms with comfortable seating and overhead projections with Library and Reading Room.",
      color: "primary",
    },
    {
      icon: <HeadphonesIcon className="w-7 h-7" />,
      title: "Doubt Clearing Sessions",
      description: "Dedicated hours for one-on-one doubt clearing with experienced faculty members.",
      color: "secondary",
    }
  ];

  return (
    <section id="facilities" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-badge mx-auto">
            <Award className="w-3.5 h-3.5" />
            Our Facilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">World-Class </span>
            <span className="gradient-text">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience learning in our modern, well-equipped facilities designed to provide 
            the best offline coaching environment for IIT JEE preparation.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`card-3d transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="card-3d-inner glass-card rounded-2xl p-7 h-full relative overflow-hidden group">
                {/* Hover glow */}
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  amenity.color === 'primary' ? 'bg-primary/15' : 'bg-secondary/15'
                }`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                    amenity.color === 'primary'
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/20 group-hover:ring-primary/40'
                      : 'bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary ring-1 ring-secondary/20 group-hover:ring-secondary/40'
                  }`}>
                    {amenity.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {amenity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {amenity.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  amenity.color === 'primary'
                    ? 'bg-gradient-to-r from-transparent via-primary/50 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-secondary/50 to-transparent'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-20 relative rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '800ms' }}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-shift" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

          <div className="relative z-10 p-10 md:p-14 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-black font-display mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Visit our campus and see the facilities that have helped thousands achieve their IIT dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Visit
              </button>
              <button
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.open('tel:+91919300360180', '_self')}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;