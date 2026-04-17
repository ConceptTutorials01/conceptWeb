import { Trophy, Star, Medal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topThree = [
  { rank: 2, name: "Mrunmai Gokhale", maths: 99, science: 95, medal: "silver" },
  { rank: 1, name: "Rajat Oza",       maths: 99, science: 96, medal: "gold"   },
  { rank: 3, name: "Farida Batterwala", maths: 93, science: 99, medal: "bronze" },
];

const rest = [
  { rank: 4,  name: "Pranav Pathak",    maths: 98, science: 97 },
  { rank: 5,  name: "Nityaraj Solanki", maths: 96, science: 91 },
  { rank: 6,  name: "Manas Tiwari",     maths: 93, science: 95 },
  { rank: 7,  name: "Tuvisha",          maths: 95, science: 93 },
  { rank: 8,  name: "Yug Jain",         maths: 95, science: 92 },
  { rank: 9,  name: "Dev Mahajan",      maths: 91, science: 95 },
  { rank: 10, name: "Vinamra Tokkar",   maths: 91, science: 91 },
  { rank: 11, name: "Sanvi Arya",       maths: 96, science: 82 },
  { rank: 12, name: "Agastya Rathora",  maths: 93, science: 87 },
  { rank: 13, name: "Manvendra Raikar", maths: 90, science: 89 },
  { rank: 14, name: "Aarav",            maths: 92, science: 84 },
  { rank: 15, name: "Hriddhi Malpani",  maths: 88, science: 88 },
  { rank: 16, name: "Nyasa",            maths: 85, science: 85 },
  { rank: 17, name: "Vaidurya Trivedi", maths: 82, science: 78 },
  { rank: 18, name: "Dhairya Gattani",  maths: 81, science: 76 },
  { rank: 19, name: "Vaishnav Kataria", maths: 74, science: 82 },
  { rank: 20, name: "Aditi Jatale",     maths: 79, science: 80 },
];

const medalStyle = {
  gold:   { ring: "ring-yellow-400/60",  bg: "from-yellow-400/20 to-yellow-600/10",  text: "text-yellow-400",  label: "bg-yellow-400 text-black" },
  silver: { ring: "ring-slate-300/60",   bg: "from-slate-300/20 to-slate-400/10",   text: "text-slate-300",   label: "bg-slate-300 text-black"  },
  bronze: { ring: "ring-amber-600/60",   bg: "from-amber-600/20 to-amber-700/10",   text: "text-amber-500",   label: "bg-amber-600 text-white"  },
};

const Class10Results = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);

  return (
    <section id="class10results" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-24" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-badge mx-auto">
              <Trophy className="w-3.5 h-3.5" />
              Gems of Concept
            </div>
            <span className="inline-flex items-center gap-1.5 bg-secondary/15 border border-secondary/30 text-secondary text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Class 10 · Results 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            <span className="text-foreground">Our Students Made Us </span>
            <span className="gradient-text-gold">Incredibly Proud</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Heartfelt congratulations to every <span className="text-foreground font-semibold">student</span> for their hard work &amp; to every <span className="text-foreground font-semibold">parent</span> for their trust &amp; faith in Concept Tutorials.
          </p>
        </div>

        {/* Podium — top 3 */}
        <div className={`flex flex-col md:flex-row items-end justify-center gap-4 mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}>
          {topThree.map((s) => {
            const m = medalStyle[s.medal as keyof typeof medalStyle];
            const isFirst = s.rank === 1;
            return (
              <div
                key={s.rank}
                className={`glass-card rounded-2xl p-6 text-center relative overflow-hidden group transition-all duration-500 hover:scale-105
                  ${isFirst ? 'md:mb-6 w-full md:w-64 ring-2' : 'w-full md:w-56 ring-1'} ${m.ring}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${m.bg} opacity-60`} />
                <div className="relative z-10">
                  {isFirst && (
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-yellow-400/20 flex items-center justify-center ring-1 ring-yellow-400/40">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                  )}
                  {!isFirst && (
                    <Medal className={`w-6 h-6 mx-auto mb-2 ${m.text}`} />
                  )}
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${m.label}`}>
                    {s.medal === 'gold' ? '1st' : s.medal === 'silver' ? '2nd' : '3rd'}
                  </span>
                  <h3 className={`mt-3 font-black font-display text-lg ${m.text}`}>{s.name}</h3>
                  <div className="flex justify-center gap-4 mt-3">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Maths</p>
                      <p className={`text-2xl font-black ${m.text}`}>{s.maths}</p>
                    </div>
                    <div className="w-px bg-border/40" />
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Science</p>
                      <p className={`text-2xl font-black ${m.text}`}>{s.science}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ranks 4–20 grid */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '350ms' }}>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/40" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-secondary" /> Top Performers
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/40" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {rest.map((s) => (
              <div key={s.rank}
                className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 group hover:border-primary/30 transition-all duration-300">
                <span className="text-xs font-black text-muted-foreground w-5 text-right shrink-0">{s.rank}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">{s.name}</p>
                  <p className="text-[11px] text-muted-foreground">M: <span className="text-foreground font-medium">{s.maths}</span> &nbsp;|&nbsp; Sci: <span className="text-foreground font-medium">{s.science}</span></p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            ✦ &amp; Many More Awaited...
          </p>
        </div>

        {/* Admissions open callout */}
        <div className={`mt-14 glass-card rounded-2xl p-6 text-center border-secondary/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '500ms' }}>
          <p className="text-sm text-muted-foreground">
            <span className="gradient-text-gold font-bold">Admissions Open 2026–27</span>
            &nbsp;·&nbsp; Lokmanya Nagar, Indore &nbsp;·&nbsp; 0731 358 2568
          </p>
        </div>

      </div>
    </section>
  );
};

export default Class10Results;
