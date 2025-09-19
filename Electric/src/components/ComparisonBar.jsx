import React from "react";


export default function ComparisonBar({
  leftLabel,
  rightLabel,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftValue,
  rightValue,
  progress, // number from 0–100
}) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Top labels */}
      <div className="flex justify-between text-sm font-medium text-gray-300 mb-2">
        <div className="flex items-center gap-2">
          {LeftIcon && <LeftIcon className="text-primary" />}
          <span>{leftLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{rightLabel}</span>
          {RightIcon && <RightIcon className="text-primary" />}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="absolute h-4 rounded-full bg-[#13ec5b] transition-all"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Center divider */}
        <div className="absolute inset-y-0 left-1/2 -ml-px w-px bg-gray-500/40"></div>
      </div>

      {/* Bottom values */}
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>{leftValue}</span>
        <span>{rightValue}</span>
      </div>
    </div>
  );
}
