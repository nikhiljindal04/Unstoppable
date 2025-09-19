import { forwardRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ConfigOptions from "./ConfigOptions";

const ConfigPanel = forwardRef(({ onClose }, ref) => {
  // state for configuration
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedWheel, setSelectedWheel] = useState("Standard");

  return (
    <div
      ref={ref}
      className="absolute top-12 right-0 bottom-0 w-full md:w-1/3 bg-background-dark/90 backdrop-blur-lg flex flex-col p-8 z-20 overflow-y-auto translate-x-full"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Configure Your Electra
        </h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>

      {/* Options */}
      <ConfigOptions
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedWheel={selectedWheel}
        setSelectedWheel={setSelectedWheel}
      />

      {/* Confirm Button */}
      <div className="flex top-4 mt-8">
        <button className="w-full flex h-12 items-center justify-center rounded-lg bg-[#13ec5b] px-6 text-base font-bold text-black shadow-lg shadow-primary/30 transition-all hover:bg-opacity-90 hover:shadow-primary/50 cursor-pointer">
          Confirm Pre-Order
        </button>
      </div>
    </div>
  );
});

export default ConfigPanel;
