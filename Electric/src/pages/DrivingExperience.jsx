import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Models/Features";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DrivinngExperience = () => {
  const navigate = useNavigate();
  

  return (
    <div>
      <div className="flex flex-col flex-items-center min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
      <Navbar />
        <div className="flex flex-col items-center justify-center mx-30 mt-10 h-[450px] max-w-8xl bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt7Ab529-eome8ZuWgm5LDmI0KuOzQe4Q3PhZNPhwGJLXugqlCWyboywkKHOszxRs3M4ilwAym4743kSOsMUSqyAMgpBPowr8FPVYAPwxzSBprjXPS3ytIMyiJSWWOr-pBI9QpkHBucJroxKZNX1KkBZNoZ_DFLq0UoBDL9jAcYTHQtCtXUSxTzdyVe5wVQLUr9WVg4g2S7LU28eVqxPaMtPCwIdh8IXUHJ7I--fL27vHFSxhHX5jlOCgZEcR7CXD6ev7OKFV4o28c')] bg-cover bg-center bg-no-repeat py-20 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mx-auto">
            Experience the Future of Driving
          </h1>
          <p className="mt-6 text-md max-w-xl mx-auto">
            Electra's innovative technology and sleek-design redefine the
            driving experience. Explore the features that set us apart.
          </p>
        </div>
        <div className="ml-auto mr-auto mt-20 max-w-2\3xl">
          <h1 className="text-4xl font-bold">Immersive Driving Experience</h1>
          <p className="mt-3 text-lg max-w-3xl text-[#7a8089] py-3">
            Embark on a journey through various environments, showcasing the
            unique capabilities of Electra's electric vehicle.
          </p>
        </div>
        <div className="mx-auto mt-10  max-w-6xl">
          <Features />
        </div>
        <div className="mb-10 flex flex-col items-center justify-center">
            {/* use navigate to change route */}
            <button className="bg-[#0bdb50] text-black font-bold py-2 px-4 rounded-lg" onClick={() => navigate("/explore")}>Explore All Models</button>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DrivinngExperience;
