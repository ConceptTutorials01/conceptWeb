import nainaMittal from "@/assets/nainaMittal.png";
import eshita from "@/assets/eshita.png";
import avi from "@/assets/avi.png";
import mdHusain from "@/assets/mdHusain.png";
import ojasvee from "@/assets/ojasvee.png";
import pranav from "@/assets/pranav.png";
import saumya from "@/assets/saumya.png";
import dreemy from "@/assets/dreemy.png";
import naqiya from "@/assets/naqiya.png";
import neilChitale from "@/assets/neilChitale.png";
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
      name: "Mohammad Husain",
      achievement: "99.80 PERCENTILE",
      image: mdHusain,
      review:
        "Concept Tutorials' structured program and excellent faculty guidance were instrumental in my success. The test series perfectly simulated the actual exam environment.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Ojasvi Vatsa",
      achievement: "99.51 PERCENTILE",
      image: ojasvee,
      review:
        "The personalized attention and doubt-clearing sessions at Concept Tutorials helped me strengthen my weak areas and boost my confidence for JEE.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Saumya Talati",
      achievement: "99.50 PERCENTILE",
      image: saumya,
      review:
        "The study material is top-notch and exactly aligned with the latest pattern. The regular performance analysis helped me track my progress effectively.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Avi Verma",
      achievement: "99.34 PERCENTILE",
      image: avi,
      review:
        "Concept Tutorials provided a highly competitive yet supportive environment. The teachers' unique problem-solving techniques saved me a lot of time during the exam.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Eshita Bhatiya",
      achievement: "99.34 PERCENTILE",
      image: eshita,
      review:
        "The mock tests were an eye-opener. The detailed solutions and faculty discussions after every test helped me avoid silly mistakes in the final exam.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Pranav Adkar",
      achievement: "99.20 PERCENTILE",
      image: pranav,
      review:
        "I joined Concept Tutorials for their renowned faculty, and they exceeded my expectations. Their focus on concept clarity rather than rote learning made all the difference.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Dreemy Jain",
      achievement: "99.20 PERCENTILE",
      image: dreemy,
      review:
        "The constant motivation from the teachers kept me going during stressful times. The DPPS (Daily Practice Problems) were carefully curated to cover all difficulty levels.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Naina Mittal",
      achievement: "99.00 PERCENTILE",
      image: nainaMittal,
      review:
        "The systematic curriculum at Concept Tutorials ensured that I completed the syllabus well in time for multiple revisions. Truly the best institute for JEE preparation.",
      rating: 5,
      year: "2025",
    },
    {
      name: "Pranav Adkar",
      achievement: "IIT DELHI",
      image: pranav,
      review:
        "Securing a seat at IIT Delhi was my dream, and the continuous support from the faculty made it a reality.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Naina Mittal",
      achievement: "IIT DELHI",
      image: nainaMittal,
      review:
        "The rigorous training and mentorship at Concept Tutorials laid the foundation for my success at IIT Delhi.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Ojasvi Vatsa",
      achievement: "IIT PATNA",
      image: ojasvee,
      review:
        "Concept Tutorials provided the exact competitive environment I needed. Proud to be at IIT Patna!",
      rating: 5,
      year: "2024",
    },
    {
      name: "Neil Chitle",
      achievement: "IIT BHILAI",
      image: neilChitale,
      review:
        "The doubt-solving sessions were incredibly helpful. They helped me achieve my goal of entering IIT Bhilai.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Eshita Bhatia",
      achievement: "IIT ROORKEE",
      image: eshita,
      review:
        "Consistency and the right guidance from Concept Tutorials led me straight to IIT Roorkee.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Dreemy Jain",
      achievement: "IIT GANDHINAGAR",
      image: dreemy,
      review:
        "The personalized attention here was unmatched. Thrilled to start my journey at IIT Gandhinagar.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Naqiya Barnagarwala",
      achievement: "NIT TRICHY",
      image: naqiya,
      review:
        "Thanks to the excellent study material and mock tests, I secured admission at NIT Trichy.",
      rating: 5,
      year: "2024",
    },
    {
      name: "Avi Verma",
      achievement: "NIT JAIPUR",
      image: avi,
      review:
        "The focused curriculum and amazing teachers helped me grab a seat at NIT Jaipur. Highly recommended!",
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
