import { useEffect, useRef } from "react";

const MouseBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      // Orb 1 follows mouse closely
      currentPos.current.x1 = lerp(currentPos.current.x1, mousePos.current.x, 0.03);
      currentPos.current.y1 = lerp(currentPos.current.y1, mousePos.current.y, 0.03);

      // Orb 2 follows with more delay
      currentPos.current.x2 = lerp(currentPos.current.x2, mousePos.current.x, 0.015);
      currentPos.current.y2 = lerp(currentPos.current.y2, mousePos.current.y, 0.015);

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${currentPos.current.x1 - 200}px, ${currentPos.current.y1 - 200}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${currentPos.current.x2 - 250}px, ${currentPos.current.y2 - 250}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${10 + Math.random() * 20}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div ref={containerRef} className="mouse-gradient-bg">
      {/* Mouse-following gradient orbs */}
      <div
        ref={orb1Ref}
        className="mouse-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent 70%)",
        }}
      />
      <div
        ref={orb2Ref}
        className="mouse-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, hsl(38 95% 55% / 0.25), transparent 70%)",
        }}
      />

      {/* Static ambient glows */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-float-slow"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(38 95% 55%), transparent 70%)",
          filter: "blur(80px)",
          animation: "floatSlow 12s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default MouseBackground;
