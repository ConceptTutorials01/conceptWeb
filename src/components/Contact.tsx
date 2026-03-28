import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building2, Sparkles } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your IIT JEE journey? Contact us today for admission details,
            course information, or to schedule a campus visit.
          </p>
        </div>

        {/* ── Two Branch Cards ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Head Office */}
          <Card className="border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Head Office</span>
                  <h3 className="text-lg font-bold text-foreground leading-tight">Lokmanya Nagar Centre</h3>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>113, Lokmanya Nagar</p>
                    <p>Indore (M.P.) – 452009</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p><span className="font-medium text-foreground">Parag Kher:</span> 93003 60180</p>
                    <p><span className="font-medium text-foreground">Sachin Agrawal:</span> 99608 39401</p>
                    <p>0731 3582568</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">conceptutorials@outlook.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p>Morning: 6AM – 12PM</p>
                    <p>Evening: 2PM – 8PM</p>
                    <p>Test Series: Sundays</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs"
                  onClick={() => window.open('tel:+919300360180', '_self')}>
                  Call Now
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs"
                  onClick={() => window.open('https://wa.me/919300360180', '_blank')}>
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* New Branch */}
          <Card className="border-2 border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              <Sparkles className="w-3 h-3" /> New Branch
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">New Centre</span>
                  <h3 className="text-lg font-bold text-foreground leading-tight">Vidhyanchal Nagar Centre</h3>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>36, Vidhyanchal Nagar</p>
                    <p>Behind Bhuteshwar Mandir</p>
                    <p>Indore (M.P.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p><span className="font-medium text-foreground">Parag Kher:</span> 93003 60180</p>
                    <p><span className="font-medium text-foreground">Achal Agrawal:</span> 97526 76676</p>
                    <p><span className="font-medium text-foreground">Sachin Agrawal:</span> 99608 39401</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">conceptutorials@outlook.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground space-y-0.5">
                    <p>Morning: 6AM – 12PM</p>
                    <p>Evening: 2PM – 8PM</p>
                    <p>Test Series: Sundays</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <Button variant="outline" size="sm"
                  className="flex-1 text-xs border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open('tel:+919752676676', '_self')}>
                  Call Now
                </Button>
                <Button variant="outline" size="sm"
                  className="flex-1 text-xs border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open('https://wa.me/919752676676', '_blank')}>
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Inquiry Form + Quick Actions ── */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Admission Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" type="text" placeholder="Enter your full name"
                      value={formData.name} onChange={handleInputChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email"
                      value={formData.email} onChange={handleInputChange} required className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number"
                      value={formData.phone} onChange={handleInputChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="class">Current Class</Label>
                    <Select onValueChange={handleSelectChange} value={formData.class}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                      <SelectContent>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message"
                    placeholder="Tell us about your goals, questions, or any specific requirements..."
                    value={formData.message} onChange={handleInputChange} rows={4} className="mt-1" />
                </div>

                <Button type="submit" variant="cta" className="w-full">Submit Inquiry</Button>

                <Button type="button" variant="outline" className="w-full"
                  onClick={() => window.open("https://forms.cloud.microsoft/r/jTewtkzjqk", "_blank")}>
                  Admission Form
                </Button>

                <Button type="button" variant="outline" className="w-full"
                  onClick={() => window.open("#", "_blank")}>
                  Watch Demo Lectures
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6 flex flex-col justify-center">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Need Immediate Assistance?</h3>
                <p className="text-sm opacity-80 mb-4">Available Mon–Sat, 8AM to 8PM</p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full bg-white text-primary border-white hover:bg-opacity-90"
                    onClick={() => window.open('tel:+919300360180', '_self')}>
                    Call: +91 93003 60180
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.open('https://wa.me/919300360180', '_blank')}>
                    WhatsApp Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Class Timings</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Morning Batch</span>
                    <span className="font-medium text-foreground">6AM – 12PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening Batch</span>
                    <span className="font-medium text-foreground">2PM – 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Test Series</span>
                    <span className="font-medium text-foreground">Sundays</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
