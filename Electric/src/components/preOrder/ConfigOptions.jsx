export default function ConfigOptions({
  selectedColor,
  setSelectedColor,
  selectedWheel,
  setSelectedWheel,
}) {
  const colors = [
    { key: "black", label: "Midnight Black" },
    { key: "white", label: "Pearl White" },
    { key: "blue", label: "Ocean Blue" },
    { key: "yellow", label: "Sunset Yellow" },
  ];

  const wheels = ["Standard", "Sport"];

  return (
    <div className="space-y-8 flex-1 text-white">
      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <label
              key={color.key}
              className={`relative h-10 w-10 cursor-pointer rounded-full border-2 ${
                selectedColor === color.key
                  ? "ring-2 ring-primary"
                  : "border-transparent"
              }`}
            >
              <input
                type="radio"
                name="color-option"
                checked={selectedColor === color.key}
                onChange={() => setSelectedColor(color.key)}
                className="sr-only"
              />
              <span
                className="block h-full w-full rounded-full border border-white/20"
                style={{
                  backgroundColor:
                    color.key === "blue"
                      ? "rgb(46,134,193)"
                      : color.key === "yellow"
                      ? "rgb(241,196,15)"
                      : color.key,
                }}
              ></span>
            </label>
          ))}
        </div>
      </div>

      {/* Wheels */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Wheels</h3>
        <div className="flex flex-wrap gap-3">
          {wheels.map((wheel) => (
            <label key={wheel} className="relative cursor-pointer">
              <input
                type="radio"
                name="wheel-option"
                checked={selectedWheel === wheel}
                onChange={() => setSelectedWheel(wheel)}
                className="sr-only peer"
              />
              <div
                className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all ${
                  selectedWheel === wheel
                    ? "border-primary bg-primary/20 text-white"
                    : "border-white/20 text-white/80"
                }`}
              >
                {wheel}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Summary</h3>
        <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-white/5 p-4 text-sm">
          <div className="grid grid-cols-3 gap-2 py-2">
            <p className="text-white/60">Model</p>
            <p className="col-span-2 font-medium">Electra Model X</p>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2">
            <p className="text-white/60">Color</p>
            <p className="col-span-2 font-medium">
              {colors.find((c) => c.key === selectedColor)?.label}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2">
            <p className="text-white/60">Wheels</p>
            <p className="col-span-2 font-medium">{selectedWheel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
