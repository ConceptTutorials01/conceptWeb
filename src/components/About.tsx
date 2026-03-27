import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Concept Tutorials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our object of teaching a child is to enable him to study without a Teacher
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe <b>“Faith”</b> is the foundation of every student’s success, built through trust in teachers and guidance.
                  <br></br>
                  Our vision is to deliver quality education with ethics, truth, and transparency, while striving for excellence and perfection.
                  <br></br>
                  We are committed to igniting students’ potential and ensuring an optimum student–teacher ratio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are a <b>United Team</b> with one voice, dedicated to imparting the best training for aspiring engineers.
                  <br></br>
We provide comprehensive coaching for competitive exams while staying true to being an institute, not an industry.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-border">
              <h4 className="text-3xl font-bold text-primary mb-2">2500+</h4>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-border">
              <h4 className="text-3xl font-bold text-secondary mb-2">5+</h4>
              <p className="text-muted-foreground">Expert Faculty</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-border">
              <h4 className="text-3xl font-bold text-primary mb-2">25+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-border">
              <h4 className="text-3xl font-bold text-secondary mb-2">98%</h4>
              <p className="text-muted-foreground">Parent Satisfaction</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;