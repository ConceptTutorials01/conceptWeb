// Excellence IIT Coaching Institute - Premier offline coaching for IIT JEE Main & Advanced

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Alumni from "@/components/Alumni";
import Class10Results from "@/components/Class10Results";
import Facilities from "@/components/Facilities";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewBranchPopup from "@/components/NewBranchPopup";
import MouseBackground from "@/components/MouseBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Interactive Mouse Background */}
      <MouseBackground />
      
      {/* Popup */}
      <NewBranchPopup />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Alumni />
        <Class10Results />
        <Facilities />
        <Admissions />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
