import nainaMittal from "@/assets/nainaMittal.png";
import naqiya from "@/assets/naqiya.png";
import neilChitale from "@/assets/neilChitale.png";
import eshita from "@/assets/eshita.png";
import avi from "@/assets/avi.png";
import devansh from "@/assets/devansh.png";
import hiyanshiNeema from "@/assets/hiyanshiNeema.png";
import ishanShrivastav from "@/assets/ishanShrivastav.png";
import mdHusain from "@/assets/mdHusain.png";
import ojasvee from "@/assets/ojasvee.png";
import pranav from "@/assets/pranav.png";
import saharsh from "@/assets/saharsh.png";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Alumni = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  const testimonials = [
    {
      name: "Ojasvee Vatsa",
      achievement: "JEE MAINS - 99.51",
      image: ojasvee,
      review:
        "Concept Tutorials offline classes and personalized attention helped me crack JEE Mains with AIR 32. The faculty's dedication and comprehensive study material were exceptional.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Avi Verma",
      achievement: "JEE MAINS - 99.34",
      image: avi,
      review:
        "The classroom environment and peer learning at Concept Tutorials motivated me throughout my preparation. Got AIR 35 in JEE Mains. Highly recommend their offline coaching.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Pranav Adkar",
      achievement: "JEE MAINS - 99.20",
      image: pranav,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Devansh Parmar",
      achievement: "JEE MAINS - 98.87",
      image: devansh,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Mohammad Husain",
      achievement: "JEE MAINS - 98.7%",
      image: mdHusain,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Saharsh Pawshe",
      achievement: "JEE MAINS - 98.22%",
      image: saharsh,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Ishan Shrivastav",
      achievement: "JEE MAINS - 98.2%",
      image: ishanShrivastav,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Hiyanshi Neema",
      achievement: "JEE MAINS - 98.1%",
      image: hiyanshiNeema,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Naina Mittal",
      achievement: "IIT DELHI",
      image: nainaMittal,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Eshita Bhati",
      achievement: "IIT ROORKE",
      image: eshita,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Neil Chitale",
      achievement: "IIT BHILAI",
      image: neilChitale,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Naqiya Barnagarwala",
      achievement: "NIT TRICHY",
      image: naqiya,
      review:
        "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions.",
      rating: 5,
      year: "2024",
    }
  ];

  return (
    <section id="alumni" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-badge mx-auto">
            <Star className="w-3.5 h-3.5" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our successful alumni who achieved their IIT dreams through our
            comprehensive coaching program.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card rounded-2xl p-6 group relative overflow-hidden cursor-pointer">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {/* Photo with ring */}
                      <div className="relative mr-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Year badge */}
                        <div className="absolute -bottom-1 -right-1 bg-primary text-[9px] text-white font-bold px-1.5 py-0.5 rounded-full">
                          {testimonial.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="gradient-text-gold font-bold text-sm">
                          {testimonial.achievement}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Batch {testimonial.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Join Legacy Section */}
        <div className={`mt-20 relative rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10" />
          <div className="absolute inset-0 glass" />

          <div className="relative z-10 p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-black font-display mb-4">
              <span className="text-foreground">Join Our </span>
              <span className="gradient-text">Success Legacy</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the next success story. Our proven methodology and dedicated
              faculty are here to guide you towards your IIT JEE success.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/25 transition-colors duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                12,500+ Students Trained
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/20 text-secondary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/25 transition-colors duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Top 100 AIR Achievers
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/25 transition-colors duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                30+ Years Legacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
