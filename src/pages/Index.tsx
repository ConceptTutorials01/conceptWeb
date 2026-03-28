// Excellence IIT Coaching Institute - Premier offline coaching for IIT JEE Main & Advanced

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Alumni from "@/components/Alumni";
import Facilities from "@/components/Facilities";
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
        <Facilities />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
