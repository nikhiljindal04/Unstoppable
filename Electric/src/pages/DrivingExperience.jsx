import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Models/Features";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const DrivinngExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-10 mt-10 h-auto sm:h-[400px] md:h-[450px] max-w-8xl bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt7Ab529-eome8ZuWgm5LDmI0KuOzQe4Q3PhZNPhwGJLXugqlCWyboywkKHOszxRs3M4ilwAym4743kSOsMUSqyAMgpBPowr8FPVYAPwxzSBprjXPS3ytIMyiJSWWOr-pBI9QpkHBucJroxKZNX1KkBZNoZ_DFLq0UoBDL9jAcYTHQtCtXUSxTzdyVe5wVQLUr9WVg4g2S7LU28eVqxPaMtPCwIdh8IXUHJ7I--fL27vHFSxhHX5jlOCgZEcR7CXD6ev7OKFV4o28c')] bg-cover bg-center bg-no-repeat py-10 sm:py-16 md:py-20 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-auto">
          Experience the Future of Driving
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">
          Electra's innovative technology and sleek design redefine the driving experience. Explore the features that set us apart.
        </p>
      </div>

      {/* Intro Section */}
      <div className="mx-auto mt-10 sm:mt-16 md:mt-20 max-w-3xl px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Immersive Driving Experience
        </h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-[#7a8089] py-3">
          Embark on a journey through various environments, showcasing the unique capabilities of Electra's electric vehicle.
        </p>
      </div>

      {/* Features Section */}
      <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-6xl px-2">
        <Features />
      </div>

      {/* CTA Button */}
      <div className="mb-10 flex flex-col items-center justify-center mt-6">
        <button
          className="w-full sm:w-auto bg-[#0bdb50] text-black font-bold py-2 px-6 rounded-lg"
          onClick={() => navigate("/explore")}
        >
          Explore All Models
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default DrivinngExperience;
