import student1 from "@/assets/isha.png";
import student2 from "@/assets/durvesh.png";
import student3 from "@/assets/ajinkyaKher.jpg";
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

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Alumni = () => {
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
    <section id="alumni" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our successful alumni who achieved their IIT dreams through our
            comprehensive coaching program.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {testimonial.achievement}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Batch {testimonial.year}
                    </p>
                  </div>
                </div>

                {/* <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div> */}

                {/* <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.review}"
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Join Our Success Legacy
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be the next success story. Our proven methodology and dedicated
            faculty are here to guide you towards your IIT JEE success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
              12,500+ Students Trained
            </span>
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
              Top 100 AIR Achievers
            </span>
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
              25+ Years Legacy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
