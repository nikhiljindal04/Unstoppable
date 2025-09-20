import { forwardRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ConfigOptions from "./ConfigOptions";

const ConfigPanel = forwardRef(({ onClose }, ref) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedWheel, setSelectedWheel] = useState("Standard");

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 bottom-0 w-full md:w-1/3 bg-background-dark/90 backdrop-blur-lg flex flex-col p-6 sm:p-8 z-20 overflow-y-auto translate-x-full"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Configure Your Electra
        </h2>
        {/* Close Button */}
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
      <div className="mt-6 sm:mt-8">
        <button className="w-full flex items-center justify-center h-12 px-6 sm:px-8 rounded-lg bg-[#13ec5b] text-black font-bold shadow-lg hover:bg-opacity-90 transition-all cursor-pointer">
          Confirm Pre-Order
        </button>
      </div>
    </div>
  );
});

export default ConfigPanel;
