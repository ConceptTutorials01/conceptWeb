import { useState } from "react";
import mdHusain from "@/assets/MOHAMMAD HUSAIN - 99.88 Percentile.png";
import logo from "@/assets/logo.jpg";
import ojasvee from "@/assets/ojasvee.png";
import saumya from "@/assets/SAUMYA TALATI - 99.50 Percentile.png";
import avi from "@/assets/avi.png";
import eshita from "@/assets/eshita.png";
import pranav from "@/assets/pranav.png";
import dreemy from "@/assets/DREEMY JAIN - 99.20 Percentile.png";
import nainaMittal from "@/assets/nainaMittal.png";
import mdHusainAdv from "@/assets/mohammad_husain_adv.png";
import grishaGargAdv from "@/assets/grisha_garg_adv.png";
import aakratiJainAdv from "@/assets/aakrati_jain_adv.png";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topperStar = {
  name: "Mohammad Husain",
  air: "1996",
  percentile: "99.88",
  image: mdHusain,
  subjects: [
    { name: "Maths", percentile: 99.95 },
    { name: "Physics", percentile: 99.94 },
    { name: "Chemistry", percentile: 96.8 },
  ],
};

const otherToppers = [
  { name: "Ojasvi Vatsa", percentile: "99.78", image: ojasvee, air: "2841" },
  { name: "Saumya Talati", percentile: "99.65", image: saumya, air: "3920" },
  { name: "Avi Verma", percentile: "99.52", image: avi, air: "5180" },
  { name: "Eshita Bhatiya", percentile: "99.40", image: eshita, air: "6740" },
  { name: "Pranav Adkar", percentile: "99.28", image: pranav, air: "8210" },
  { name: "Dreemy Jain", percentile: "99.15", image: dreemy, air: "9860" },
  { name: "Naina Mittal", percentile: "99.02", image: nainaMittal, air: "11200" },
];

const advancedToppers = [
  {
    name: "Mohammad Husain",
    air: "3068",
    allotment: {
      college: "IIT Patna",
      branch: "Computer Science Engineering",
    },
    image: mdHusainAdv,
    tags: ["IIT Patna CSE", "JEE Advanced 2026", "AIR 3068"],
  },
  {
    name: "Grisha Garg",
    air: "9393",
    allotment: {
      college: "IIT Patna",
      branch: "Artificial Intelligence",
    },
    image: grishaGargAdv,
    tags: ["IIT Patna AI", "JEE Advanced 2026", "AIR 9393"],
  },
  {
    name: "Aakrati Jain",
    air: null,
    allotment: {
      college: "IIT Patna",
      branch: "Material Science",
    },
    image: aakratiJainAdv,
    tags: ["IIT Patna Material Science", "JEE Advanced 2026", "IIT Seat Allotment"],
  },
];

const SubjectBar = ({
  name,
  percentile,
  delay,
}: {
  name: string;
  percentile: number;
  delay: string;
}) => (
  <div className={`animate-fade-up ${delay}`}>
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
        {name}
      </span>
      <span className="text-sm font-black text-amber-400">{percentile}</span>
    </div>
    <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
        style={{ width: `${percentile}%` }}
      />
    </div>
  </div>
);

const TopperCard = ({
  name,
  percentile,
  image,
  air,
  index,
}: {
  name: string;
  percentile: string;
  image: string;
  air: string;
  index: number;
}) => (
  <div
    className="glass-card rounded-2xl p-4 group relative overflow-hidden cursor-pointer animate-fade-up"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    {/* shimmer sweep on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-transparent" />
    </div>

    <div className="relative z-10 flex items-center gap-3">
      {/* photo */}
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-400/40 group-hover:ring-amber-400/80 transition-all duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-amber-500 to-yellow-400 text-[8px] text-black font-black px-1.5 py-0.5 rounded-full shadow-lg">
          AIR {air}
        </div>
      </div>

      {/* info */}
      <div className="min-w-0">
        <p className="font-bold text-sm text-white truncate group-hover:text-amber-300 transition-colors duration-300">
          {name}
        </p>
        <p className="gradient-text-gold font-black text-lg leading-none mt-0.5">
          {percentile}
        </p>
        <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">
          Percentile
        </p>
      </div>
    </div>

    {/* bottom accent */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const JEEResults2026 = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);
  const [activeTab, setActiveTab] = useState<"advanced" | "main">("advanced");

  return (
    <section id="jee-results-2026" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/6 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full filter blur-[120px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="section-badge mx-auto mb-4">
            <Trophy className="w-3.5 h-3.5" />
            {activeTab === "advanced" ? "JEE Advanced 2026 Results" : "JEE Main 2026 · Session 2"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
            <span className="text-foreground">2026 </span>
            <span className="gradient-text">{activeTab === "advanced" ? "JEE Advanced" : "JEE Main"} Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {activeTab === "advanced"
              ? "Proud to announce another champion! Outstanding ranks in JEE Advanced 2026. Hard work and right guidance lead to extraordinary results!"
              : "Outstanding performances in JEE Main April 2026 — our students continue to set the benchmark."}
          </p>
        </div>

        {/* ── Tab Selector Switch ── */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("advanced")}
            className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${
              activeTab === "advanced"
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-2 ring-amber-400"
                : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            JEE Advanced
          </button>
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${
              activeTab === "main"
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-2 ring-amber-400"
                : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            JEE Main
          </button>
        </div>

        {/* ── Advanced Tab Content ── */}
        {activeTab === "advanced" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advancedToppers.map((topper, i) => (
              <div
                key={topper.name + i}
                className="relative group transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* outer glow ring */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300 animate-gradient-shift" />

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#111118] to-[#0d0d14] border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
                  {/* decorative corner marks */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-amber-500/40 rounded-tl" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-amber-500/40 rounded-tr" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-amber-500/40 rounded-bl" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-amber-500/40 rounded-br" />

                  {/* top banner strip */}
                  <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-1.5 px-4 flex items-center justify-between">
                    <span className="text-black font-black text-[10px] tracking-widest uppercase">
                      Concept Tutorials
                    </span>
                    <span className="text-black font-bold text-[9px] tracking-wider uppercase opacity-80">
                      JEE Advanced 2026
                    </span>
                  </div>

                  <div className="p-8 flex flex-col items-center">
                    {/* Exam badge */}
                    <div className="text-center mb-5">
                      <p className="text-amber-400 font-black text-lg tracking-widest uppercase leading-none">
                        JEE ADVANCED
                      </p>
                      <p className="text-white/60 font-bold text-xs tracking-widest mt-0.5">
                        2026 CHAMPION
                      </p>
                    </div>

                    {/* Photo with animated rings */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border border-amber-400/20 scale-110 animate-spin-slow" />
                      <div className="absolute inset-0 rounded-full border border-yellow-300/10 scale-120" />

                      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                        <img
                          src={topper.image}
                          alt={topper.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Name chevron */}
                    <div className="relative px-6 py-1.5 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 via-yellow-500/80 to-amber-600/80 rounded-sm" />
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[10px] border-t-transparent border-b-transparent border-r-amber-600/80" />
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[10px] border-t-transparent border-b-transparent border-l-amber-600/80" />
                      <p className="relative text-black font-black text-sm tracking-wider uppercase text-center leading-tight">
                        {topper.name}
                      </p>
                    </div>

                    {/* AIR rank text glow */}
                    <div className="text-center mb-4">
                      <span
                        className="font-black leading-none animate-text-glow text-3xl md:text-4xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #f59e0b, #fde047, #f59e0b)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          backgroundSize: "200% 200%",
                        }}
                      >
                        {topper.air ? `AIR ${topper.air}` : "IIT SEAT"}
                      </span>
                    </div>

                    {/* Allotment Details */}
                    {topper.allotment && (
                      <div className="text-center mt-1 mb-5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 w-full group-hover:border-amber-500/30 transition-colors duration-300 min-h-[72px] flex flex-col justify-center">
                        <p className="gradient-text-gold font-extrabold text-sm uppercase tracking-wider leading-none mb-1">
                          {topper.allotment.college}
                        </p>
                        <p className="text-white/80 font-bold text-[10px] md:text-xs tracking-wide uppercase leading-tight">
                          {topper.allotment.branch}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {topper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                        >
                          <Award className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── Main Tab Content ── */
          <>
            {/* ── Star Topper Card ── */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              {/* outer glow ring */}
              <div className="relative mx-auto max-w-3xl">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-40 blur-sm animate-gradient-shift" />

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#111118] to-[#0d0d14] border border-amber-500/20 shadow-[0_0_60px_rgba(245,158,11,0.12)]">
                  {/* decorative corner marks */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/60 rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/60 rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/60 rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/60 rounded-br-lg" />

                  {/* top banner strip */}
                  <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-black/20 shrink-0 bg-white">
                        <img
                          src={logo}
                          alt="Concept Tutorials"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-black font-black text-sm tracking-widest uppercase">
                        Concept Tutorials
                      </span>
                    </div>
                    <span className="text-black font-bold text-xs tracking-wider uppercase opacity-80">
                      Aims For The Top
                    </span>
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      {/* ── Left: Photo + Name ── */}
                      <div className="flex flex-col items-center gap-4 shrink-0">
                        {/* Exam badge */}
                        <div className="text-center">
                          <p className="text-amber-400 font-black text-xl tracking-widest uppercase leading-none">
                            JEE MAIN
                          </p>
                          <p className="text-white/60 font-bold text-sm tracking-widest mt-0.5">
                            2026 · April
                          </p>
                        </div>

                        {/* Photo with animated rings */}
                        <div className="relative">
                          {/* outer orbit ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 scale-110 animate-spin-slow" />
                          <div className="absolute inset-0 rounded-full border border-yellow-300/10 scale-125" />

                          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,0.35)]">
                            <img
                              src={topperStar.image}
                              alt={topperStar.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* AIR badge floating */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                            AIR {topperStar.air}
                          </div>
                        </div>

                        {/* Name chevron */}
                        <div className="relative mt-4 px-6 py-2">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 via-yellow-500/80 to-amber-600/80 rounded-sm" />
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-r-[14px] border-t-transparent border-b-transparent border-r-amber-600/80" />
                          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-l-[14px] border-t-transparent border-b-transparent border-l-amber-600/80" />
                          <p className="relative text-black font-black text-base tracking-widest uppercase text-center leading-tight">
                            {topperStar.name}
                          </p>
                        </div>
                      </div>

                      {/* ── Right: Score + Subject Bars ── */}
                      <div className="flex-1 w-full space-y-6">
                        {/* Big percentile display */}
                        <div className="text-center md:text-left">
                          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">
                            Overall Percentile
                          </p>
                          <div className="flex items-end gap-2 justify-center md:justify-start">
                            <span
                              className="font-black leading-none animate-text-glow"
                              style={{
                                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                                background:
                                  "linear-gradient(135deg, #f59e0b, #fde047, #f59e0b)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                backgroundSize: "200% 200%",
                              }}
                            >
                              {topperStar.percentile}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-transparent" />

                        {/* Subject bars */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-amber-400" />
                            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                              Subject-wise Percentile
                            </p>
                          </div>
                          {topperStar.subjects.map((subj, i) => (
                            <SubjectBar
                              key={subj.name}
                              name={subj.name}
                              percentile={subj.percentile}
                              delay={`delay-${(i + 1) * 100}`}
                            />
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {["Top 2000 AIR", "Session 2 Topper", "Batch 2026"].map(
                            (tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                <Award className="w-3 h-3" />
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Other Toppers Grid ── */}
            <div
              className={`mt-14 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30" />
                <p className="text-amber-400/70 text-xs font-bold uppercase tracking-[0.2em]">
                  More Brilliant Performers
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {otherToppers.map((topper, i) => (
                  <TopperCard key={topper.name + i} {...topper} index={i} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Bottom CTA strip ── */}
        <div
          className={`mt-16 relative rounded-2xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-yellow-900/10 to-amber-900/20" />
          <div className="absolute inset-0 glass" />
          <div className="relative z-10 p-8 text-center">
            <p className="text-2xl font-black font-display mb-2">
              <span className="text-foreground">Be Our Next </span>
              <span className="gradient-text-gold">Star Performer</span>
            </p>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Join Concept Tutorials and get the guidance that turns JEE dreams
              into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JEEResults2026;
