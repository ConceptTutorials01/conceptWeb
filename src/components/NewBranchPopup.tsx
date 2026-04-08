import { useState, useEffect } from "react";
import { X, MapPin, Phone, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewBranchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Popup paused for now
    // const timer = setTimeout(() => setIsOpen(true), 800);
    // return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Card */}
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
        style={{
          animation: 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          background: 'linear-gradient(135deg, hsl(225 20% 12%), hsl(225 20% 8%))',
          border: '1px solid hsl(225 15% 20%)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/80" />
        </button>

        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_100%] animate-gradient-shift px-7 pt-10 pb-8 text-white text-center overflow-hidden">
          {/* Decorative sparkles */}
          <div className="absolute top-3 left-5 opacity-40 animate-float">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-5 right-10 opacity-30 animate-float-slow">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
          </div>
          <div className="absolute bottom-4 left-12 opacity-20">
            <Star className="w-3 h-3 fill-white text-white" />
          </div>
          <div className="absolute bottom-3 right-7 opacity-40 animate-float">
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow-400/90 text-gray-900 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide shadow-lg">
              🎉 Grand New Centre Launch
            </div>

            <h2 className="text-2xl md:text-3xl font-black font-display leading-tight mb-2">
              Three Decades of Excellence, Now Expanding Across Indore!
            </h2>
            <p className="text-white/70 text-sm">
              Announcing Our Newest Location!
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {/* Institute name */}
          <div className="text-center mb-5">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em]">
              Concept Tutorials
            </p>
            <h3 className="text-xl font-black font-display text-foreground mt-1.5">
              New Branch Now Open at
            </h3>
          </div>

          {/* New Branch Address */}
          <div className="glass-card rounded-xl p-5 mb-5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
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
          <div className="grid grid-cols-2 gap-2.5 mb-5 text-sm">
            {[
              "Expert Faculty",
              "Small Batch Size",
              "Regular Doubt Sessions",
              "Weekly Tests",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 justify-center">
            <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-secondary" />
            </div>
            <span>
              <span className="font-semibold text-foreground">9300360180</span>
              {" · "}
              <span className="font-semibold text-foreground">9752676676</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
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
              className="px-5 border-border/50 text-muted-foreground hover:bg-muted/50 hover:text-foreground rounded-xl transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>

        {/* Footer stripe */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-shift" />
      </div>
    </div>
  );
};

export default NewBranchPopup;
