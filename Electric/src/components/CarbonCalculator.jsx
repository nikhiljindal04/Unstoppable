import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CarbonCalculator() {
  const cardRef = useRef(null);
  const [distance, setDistance] = useState("");
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { x: 300, opacity: 0 }, // start from right
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // enters viewport
          end: "bottom 40%", // leaves viewport
          scrub: true,
        },
      }
    );
  }, []);

  const calculateSavings = () => {
    const kmPerYear = parseFloat(distance) || 0;
    const co2Saved = (kmPerYear * 140) / 1000000; // tons
    const treesPlanted = co2Saved * 1000 / 22; // approx 22 kg CO2 per tree
    setResult(co2Saved.toFixed(1));
    setTreesPlanted(treesPlanted.toFixed(0));
  };

  return (
    <div
      ref={cardRef}
      className="flex items-center justify-center min-h-screen overflow-x-hidden"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-background-light dark:bg-background-dark/50 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter">
            Carbon Footprint Calculator
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            See the difference you make by switching to an EV.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="distance"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Annual Distance (km)
            </label>
            <div className="mt-1 relative rounded-lg shadow-sm">
              <input
                id="distance"
                name="distance"
                type="number"
                placeholder="e.g., 15,000"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="form-input block w-full pl-4 pr-12 py-3 bg-white/5 dark:bg-black/20 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button
            onClick={calculateSavings}
            className="w-full flex justify-center py-3 px-4 border border-transparent bg-[#13ec5b] rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
          >
            Calculate Savings
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="pt-6 text-center transition-opacity duration-500">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By switching to an EV, you save:
            </p>
            <div className="mt-2">
              <p className="text-5xl font-bold text-primary animate-fadeIn">
                {result}
              </p>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                tons of CO₂ per year
              </p>
            </div>
            <p className="mt-4 text-xs text-green-500 animate-pulse">
              That's like planting {treesPlanted} trees!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
