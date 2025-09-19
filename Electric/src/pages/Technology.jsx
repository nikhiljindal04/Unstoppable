import React from "react";
import Navbar from "../components/Navbar";
import TechnologySection from "../components/TechnologySection";
import Footer from "../components/Footer";

const Technology = () => {
  return (
    <div>
      <div className="flex flex-col flex-items-center min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center ">
      <Navbar />
      <div className="overflow-hidden">
        <main className="pt-0">
          <TechnologySection />
        </main>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default Technology;
