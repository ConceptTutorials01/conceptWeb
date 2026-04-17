import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Mail, Phone, FileText, PlayCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Admissions = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, class: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_k95g5tr",
        "template_w7ivdov",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          class: formData.class,
          message: formData.message,
        },
        "IJzHJ2bV3iE2b_iQx"
      )
      .then(
        () => { alert("Inquiry submitted successfully!"); },
        (error) => {
          console.error("Email failed:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="admissions" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-badge mx-auto">
            <GraduationCap className="w-3.5 h-3.5" />
            Admissions 2026–27
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">Start Your </span>
            <span className="gradient-text">Journey Here</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards cracking IIT JEE or NEET. Fill in the inquiry below
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}>

          {/* Inquiry Form */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                Admission Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="adm-name" className="text-sm text-muted-foreground mb-1.5 block">Full Name *</Label>
                    <Input id="adm-name" name="name" type="text" placeholder="Enter your full name"
                      value={formData.name} onChange={handleInputChange} required
                      className="bg-muted/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="adm-email" className="text-sm text-muted-foreground mb-1.5 block">Email Address *</Label>
                    <Input id="adm-email" name="email" type="email" placeholder="Enter your email"
                      value={formData.email} onChange={handleInputChange} required
                      className="bg-muted/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-xl" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="adm-phone" className="text-sm text-muted-foreground mb-1.5 block">Phone Number *</Label>
                    <Input id="adm-phone" name="phone" type="tel" placeholder="Enter your phone number"
                      value={formData.phone} onChange={handleInputChange} required
                      className="bg-muted/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="adm-class" className="text-sm text-muted-foreground mb-1.5 block">Current Class</Label>
                    <Select onValueChange={handleSelectChange} value={formData.class}>
                      <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary/50 text-foreground rounded-xl">
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="8">Class 8th</SelectItem>
                        <SelectItem value="9">Class 9th</SelectItem>
                        <SelectItem value="10">Class 10th</SelectItem>
                        <SelectItem value="11">Class 11th</SelectItem>
                        <SelectItem value="12">Class 12th</SelectItem>
                        <SelectItem value="12-pass">12th Pass</SelectItem>
                        <SelectItem value="dropper">Dropper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="adm-message" className="text-sm text-muted-foreground mb-1.5 block">Message</Label>
                  <Textarea id="adm-message" name="message"
                    placeholder="Tell us about your goals, questions, or any specific requirements..."
                    value={formData.message} onChange={handleInputChange} rows={4}
                    className="bg-muted/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-xl resize-none" />
                </div>

                <Button type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>

          {/* Right side actions */}
          <div className="space-y-6 flex flex-col justify-center">

            {/* Official form */}
            <div className="glass-card rounded-2xl p-7 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Official Admission Form</h3>
                  <p className="text-xs text-muted-foreground">Fill the Microsoft Forms registration</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300"
                onClick={() => window.open("https://forms.cloud.microsoft/r/jTewtkzjqk", "_blank")}>
                Open Admission Form
              </Button>
            </div>

            {/* Demo lectures */}
            <div className="glass-card rounded-2xl p-7 group hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center ring-1 ring-secondary/20">
                  <PlayCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Watch Demo Lectures</h3>
                  <p className="text-xs text-muted-foreground">See our teaching style before enrolling</p>
                </div>
              </div>
              <Button variant="outline"
                className="w-full border-secondary/20 text-secondary hover:bg-secondary/10 hover:border-secondary/40 rounded-xl transition-all duration-300"
                onClick={() => window.open("#", "_blank")}>
                Watch Demo Lectures
              </Button>
            </div>

            {/* Call CTA */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-shift" />
              <div className="relative z-10 p-6 text-center text-white">
                <Phone className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <p className="text-sm font-semibold mb-1">Have Questions? Call Us</p>
                <p className="text-xs opacity-70 mb-4">Mon–Sat, 8AM to 8PM</p>
                <Button variant="outline" className="w-full bg-white text-primary border-white hover:bg-white/90 font-bold rounded-xl"
                  onClick={() => window.open('tel:+919300360180', '_self')}>
                  +91 93003 60180
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
