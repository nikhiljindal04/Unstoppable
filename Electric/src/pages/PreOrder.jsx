import { useState, useRef, useEffect } from "react";
import HeroSection from "../components/preOrder/HeroSection";
import ConfigPanel from "../components/preOrder/ConfigPanel";
import Navbar from "../components/Navbar";
import gsap from "gsap";

export default function PreOrder() {
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        gsap.to(panelRef.current, {
          x: "100%",
          duration: 0.6,
          ease: "power3.in",
        });
      }
    }
  }, [panelOpen]);

  return (
    <div>
    
      <div className="absolute top-0 left-0 w-full z-30 bg-background-dark/90 backdrop-blur-lg">
        <Navbar />
      </div>

     
      <main className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white overflow-hidden">
       
        <HeroSection />

        
        <ConfigPanel ref={panelRef} onClose={() => setPanelOpen(false)} />

   
        {!panelOpen && (
          <button
            onClick={() => setPanelOpen(true)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 sm:px-10 py-2.5 bg-[#13ec5b] text-black font-bold rounded-full shadow-lg backdrop-blur-sm hover:bg-opacity-80 transition-colors z-20"
          >
            Pre Order Now
          </button>
        )}
      </main>
    </div>
  );
}
