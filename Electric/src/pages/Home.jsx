import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Details from "../components/Details";
import EmissionsComparison from "../components/EmissionsComparison";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import CarbonCalculator from "../components/CarbonCalculator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const emissionsRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !emissionsRef.current) return;

    // Video animation
    gsap.fromTo(
      videoRef.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.to(videoRef.current, {
      x: 300,
      opacity: 0,
      ease: "power3.in",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 20%",
        end: "bottom top",
        scrub: true,
      },
    });

    // Emissions section horizontal animation
    gsap.fromTo(
      emissionsRef.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: emissionsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
      =
      <Navbar />
      <div className="overflow-x-hidden pt-1">
        <div className="flex flex-col text-center p-6">
          <div className="mx-auto mt-6 max-w-3xl">
            <h1 className="text-5xl font-bold">Electra EcoDrive</h1>
            <p className="mt-3 text-lg max-w-xl mx-auto">
              The future of driving is here. Experience breathtaking
              performance, groundbreaking technology, and zero emissions.
            </p>
          </div>

          <div
            ref={videoRef}
            className="mt-10 w-full max-w-5xl h-[500px] aspect-video overflow-hidden rounded-lg shadow-lg mx-auto"
          >
            <video
              className="w-full h-full object-cover"
              src="/car.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-4xl font-bold">
              Drive the Future. Protect the Planet.
            </h2>
            <p className="mt-3">Zero Emissions. Maximum Performance.</p>
            <div className="mt-5 flex justify-center items-center">
              <button
                className="bg-[#0bdb50] text-black font-bold py-2 px-4 rounded-lg cursor-pointer"
                onClick={() => navigate("/preorder")}
              >
                <span className="text">Reserve Now</span>
              </button>
            </div>
          </div>

          <div className="mt-6 w-full">
            <Details />
          </div>

          <div ref={emissionsRef} className="mx-auto mt-10 max-w-3xl mb-10">
            <h3 className="text-3xl font-bold">Emissions Comparison</h3>
            <p className="mt-3 text-lg max-w-xl text-[#7a8089] mx-auto">
              The Electra EcoDrive significantly reduces carbon emissions
              compared to traditional petrol cars, contributing to a cleaner
              environment.
            </p>
            <EmissionsComparison />
            <div className="mt-5 mb-10 flex flex-col items-center justify-center gap-5">
              <h1 className="text-5xl font-bold text-[#13ec5b]">75%</h1>
              <h4 className="text-lg">Reduction in Emissions</h4>
            </div>
          </div>

          <CarbonCalculator />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
