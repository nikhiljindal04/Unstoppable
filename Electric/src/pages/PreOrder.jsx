import { useState, useRef, useEffect } from "react";
import HeroSection from "../components/preOrder/HeroSection";
import ConfigPanel from "../components/preOrder/ConfigPanel";
import { FaBars } from "react-icons/fa";
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
    <>
      <div>
        <div className="absolute top-0 left-0 w-full z-30 bg-background-dark/90 backdrop-blur-lg">
          <Navbar />
        </div>
        <main className="relative flex flex-1 min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center overflow-hidden">
          {/* Hero Section */}
          <HeroSection />

          {/* Config Panel */}
          <ConfigPanel ref={panelRef} onClose={() => setPanelOpen(false)} />

          {/* Floating Open Button */}
          <button
            onClick={() => setPanelOpen(true)}
            className="absolute top-11/12 -translate-y-1/2  left-6/12 z-10 p-2.5 px-10  bg-[#13ec5b] rounded-full backdrop-blur-sm text-white hover:bg-opacity-80 transition-colors shadow-lg cursor-pointer"
          >
            Pre Order Now
          </button>
        </main>
      </div>
    </>
  );
}
