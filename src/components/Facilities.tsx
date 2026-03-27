import classroomImage from "@/assets/classroom.jpg";
import labImage from "@/assets/lab.jpg";
import { Book, Users, Laptop, Clock, Award, HeadphonesIcon } from "lucide-react";

const Facilities = () => {
  const facilities = [
    /*{
      title: "Modern Classrooms",
      description: "Air-conditioned classrooms with advanced teaching aids and comfortable seating for optimal learning experience.",
      image: classroomImage,
      features: ["AC Classrooms", "Smart Boards", "Comfortable Seating", "Proper Lighting"]
    },
    {
      title: "Computer Lab",
      description: "State-of-the-art computer lab with high-speed internet for online mock tests and digital learning resources.",
      image: labImage,
      features: ["High-Speed Internet", "Mock Test Platform", "Digital Resources", "Technical Support"]
    }*/
  ];

  const amenities = [
    {
      icon: <Book className="w-8 h-8 text-primary" />,
      title: "Comprehensive Study Material",
      description: "Meticulously crafted study materials covering entire JEE syllabus with practice problems."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Small Batch Size",
      description: "Limited students per batch ensuring personalized attention and better interaction."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Timings",
      description: "Multiple batch timings to accommodate different student schedules and preferences and whole day availability of faculty."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Regular Assessments",
      description: "Weekly tests, monthly evaluations, and mock exams to track progress continuously."
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Cozy Classrooms",
      description: "Lecture Rooms with comfortable seating and overhead projections with Library and Reading Room."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-secondary" />,
      title: "Doubt Clearing Sessions",
      description: "Dedicated hours for one-on-one doubt clearing with experienced faculty members."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">World-Class Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience learning in our modern, well-equipped facilities designed to provide 
            the best offline coaching environment for IIT JEE preparation.
          </p>
        </div>

        {/* Main Facilities 
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-border">
              <img 
                src={facility.image} 
                alt={facility.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{facility.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{facility.description}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* Additional Amenities */}
        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{amenity.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
          <p className="text-lg mb-6 opacity-90">
            Visit our campus and see the facilities that have helped thousands achieve their IIT dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Visit
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.open('tel:+91919300360180', '_self')}
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;