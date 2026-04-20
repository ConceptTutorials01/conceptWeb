import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GraduationCap, MessageCircle, FileText, PlayCircle, Phone, Info, CheckCircle2, X } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const inputClass = "bg-muted/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-xl";
const labelClass = "text-sm text-muted-foreground mb-1.5 block";

const WHATSAPP_NUMBER = "919960839401";

const Admissions = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    currentClass: '',
    courseInterest: '',
  });

  const [otherCourse, setOtherCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setIsVideoOpen(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const course = formData.courseInterest === 'Other' ? `Other – ${otherCourse}` : formData.courseInterest;

    // 1. Send email via EmailJS
    emailjs.send(
      "service_k95g5tr",
      "template_w7ivdov",
      {
        name: formData.studentName,
        email: "N/A",
        phone: formData.phone,
        class: formData.currentClass,
        message: `New Admission Inquiry\n\nName: ${formData.studentName}\nPhone: ${formData.phone}\nClass: ${formData.currentClass}\nCourse: ${course}`,
      },
      "IJzHJ2bV3iE2b_iQx"
    ).catch((err) => console.error("EmailJS error:", err));

    // 2. Open WhatsApp — use anchor click to avoid popup blocker
    const waText = `Hello Concept Tutorials! I'd like to inquire about admission.

*Name:* ${formData.studentName}
*Phone:* ${formData.phone}
*Current Class:* ${formData.currentClass}
*Course Interest:* ${course}

Please get back to me. Thank you!`;

    const a = document.createElement('a');
    a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSubmitted(true);
  };

  return (
    <>
    {/* Success Modal */}
    {submitted && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-up">
        <div className="glass-card rounded-2xl p-8 max-w-sm w-full text-center relative shadow-2xl border border-green-500/20">
          <button onClick={() => setSubmitted(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500/10 flex items-center justify-center ring-2 ring-green-500/30">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
          </div>
          <h4 className="text-2xl font-black font-display text-foreground mb-2">Inquiry Sent!</h4>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            WhatsApp has opened with your details pre-filled.<br />
            Just hit <span className="text-foreground font-semibold">Send</span> — we'll get back to you within a few hours.
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-[#25D366] hover:bg-[#20bc59] text-white font-bold rounded-xl"
              onClick={() => {
                const a = document.createElement('a');
                a.href = `https://wa.me/${WHATSAPP_NUMBER}`;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}>
              <MessageCircle className="w-4 h-4 mr-2" /> Open WhatsApp Again
            </Button>
            <Button variant="outline" className="w-full border-border/50 text-muted-foreground hover:text-foreground rounded-xl"
              onClick={() => {
                setSubmitted(false);
                setFormData({ studentName: '', phone: '', currentClass: '', courseInterest: '' });
                setOtherCourse('');
              }}>
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </div>
    )}
    <section id="admissions" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your details and we'll reach out on WhatsApp within a few hours.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}>

          {/* Inquiry Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              Quick Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="studentName" className={labelClass}>Student's Name *</Label>
                  <Input id="studentName" name="studentName" placeholder="Full name"
                    value={formData.studentName} onChange={handleInput} required className={inputClass} />
                </div>

                <div>
                  <Label htmlFor="phone" className={labelClass}>Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your WhatsApp number"
                    value={formData.phone} onChange={handleInput} required className={inputClass} />
                </div>

                <div>
                  <Label className={labelClass}>Current Class *</Label>
                  <Select onValueChange={handleSelect('currentClass')} value={formData.currentClass} required>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Select your class" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="Class 7">Class 7th</SelectItem>
                      <SelectItem value="Class 8">Class 8th</SelectItem>
                      <SelectItem value="Class 9">Class 9th</SelectItem>
                      <SelectItem value="Class 10">Class 10th</SelectItem>
                      <SelectItem value="Class 11">Class 11th</SelectItem>
                      <SelectItem value="Class 12">Class 12th</SelectItem>
                      <SelectItem value="Dropper">Dropper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Course Interest *</Label>
                  <Select onValueChange={handleSelect('courseInterest')} value={formData.courseInterest} required>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="JEE">JEE</SelectItem>
                      <SelectItem value="NEET">NEET</SelectItem>
                      <SelectItem value="Foundation (Class 8–10)">Foundation (Class 8–10)</SelectItem>
                      <SelectItem value="Board Exam Only">Board Exam Only</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.courseInterest === 'Other' && (
                    <Input className={`${inputClass} mt-2`} placeholder="Please specify..."
                      value={otherCourse} onChange={(e) => setOtherCourse(e.target.value)} required />
                  )}
                </div>

                <Button type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bc59] text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Send on WhatsApp
                </Button>
              </form>
          </div>

          {/* Right side cards */}
          <div className="space-y-5 flex flex-col justify-center">

            {/* Admission Form card */}
            <div className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20 shrink-0">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Admission Form</h3>
                  <p className="text-xs text-muted-foreground">For confirmed admissions only</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-secondary/5 border border-secondary/15">
                <Info className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Please bring <span className="text-foreground font-semibold">2 passport-size photographs</span> along with this form at the time of admission.
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-blue-500 text-white text-sm font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300"
                onClick={() => window.open("https://forms.cloud.microsoft/r/jTewtkzjqk", "_blank")}>
                Open Admission Form
              </Button>
            </div>

            {/* Demo lectures */}
            <div className="glass-card rounded-2xl p-6 group hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center ring-1 ring-secondary/20 shrink-0">
                  <PlayCircle className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Watch Demo Lectures</h3>
                  <p className="text-xs text-muted-foreground">See our teaching style before enrolling</p>
                </div>
              </div>
              <Button variant="outline"
                className="w-full border-secondary/20 text-secondary hover:bg-secondary/10 hover:border-secondary/40 text-sm rounded-xl transition-all duration-300"
                onClick={handleOpenVideo}>
                <PlayCircle className="w-4 h-4 mr-2" />
                Watch Now
              </Button>
            </div>

            {/* Video Modal */}
            <Dialog open={isVideoOpen} onOpenChange={(open) => { if (!open) handleCloseVideo(); }}>
              <DialogContent className="max-w-3xl w-full p-0 overflow-hidden rounded-2xl border border-secondary/20 bg-black shadow-2xl shadow-black/60">
                {/* Custom close button */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Video header */}
                <div className="px-5 pt-5 pb-3 bg-gradient-to-b from-[#0a0e1a] to-black">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center ring-1 ring-secondary/30">
                      <PlayCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Demo Lecture</h4>
                      <p className="text-xs text-white/50">Concept Tutorials — by Parag Kher Sir</p>
                    </div>
                  </div>
                </div>

                {/* Video player */}
                <div className="relative w-full bg-black">
                  <video
                    ref={videoRef}
                    src="/demo-lecture.mp4"
                    controls
                    autoPlay
                    className="w-full max-h-[65vh] outline-none"
                    style={{ display: 'block' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>

            {/* Call */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-shift" />
              <div className="relative z-10 p-5 text-center text-white">
                <Phone className="w-5 h-5 mx-auto mb-2 opacity-80" />
                <p className="text-sm font-bold mb-0.5">Have Questions?</p>
                <p className="text-xs opacity-70 mb-3">Mon–Sat, 8AM–8PM</p>
                <Button variant="outline" className="w-full bg-white text-primary border-white hover:bg-white/90 text-sm font-bold rounded-xl"
                  onClick={() => window.open('tel:+919300360180', '_self')}>
                  +91 93003 60180
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Admissions;
