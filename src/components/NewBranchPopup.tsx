import { useState, useEffect } from "react";
import { X, MapPin, Phone, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewBranchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary px-6 pt-8 pb-6 text-white text-center relative overflow-hidden">
          {/* Decorative sparkles */}
          <div className="absolute top-2 left-4 opacity-40">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-4 right-8 opacity-30">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
          </div>
          <div className="absolute bottom-3 left-10 opacity-20">
            <Star className="w-4 h-4 fill-white text-white" />
          </div>
          <div className="absolute bottom-2 right-6 opacity-40">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            🎉 Grand New Centre Launch
          </div>

          <h2 className="text-3xl font-extrabold leading-tight mb-1">
            We're Expanding! 🚀
          </h2>
          <p className="text-white/80 text-sm mt-1">
            30 Years of Excellence — Now at a New Location
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Institute name */}
          <div className="text-center mb-4">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
              Concept Tutorials
            </p>
            <h3 className="text-xl font-bold text-foreground mt-1">
              New Branch Now Open at
            </h3>
          </div>

          {/* New Branch Address */}
          <div className="bg-gradient-to-r from-primary/8 to-secondary/8 border border-primary/20 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground text-base">
                  36, Vidhyanchal Nagar
                </p>
                <p className="text-muted-foreground text-sm">
                  Behind Bhuteshwar Mandir
                </p>
                <p className="text-muted-foreground text-sm">
                  Indore, Madhya Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* What we offer highlights */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            {[
              "Expert Faculty",
              "Small Batch Size",
              "Regular Doubt Sessions",
              "Weekly Tests",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-green-500 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5 justify-center">
            <Phone className="w-4 h-4 text-primary" />
            <span>
              <span className="font-medium text-foreground">9300360180</span>
              {" · "}
              <span className="font-medium text-foreground">9752676676</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              variant="cta"
              className="flex-1"
              onClick={() => {
                setIsOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Enroll Now — Limited Seats!
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-4"
            >
              Close
            </Button>
          </div>
        </div>

        {/* Footer stripe */}
        <div className="bg-gradient-to-r from-primary to-secondary h-1.5" />
      </div>
    </div>
  );
};

export default NewBranchPopup;
