import React from "react";

export default function DetailsCard({ heading, icon: Icon, paragraph }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-[#1c2d21] p-6 pb-10 text-center shadow-md hover:shadow-lg transition">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center bg-[#1a532c] rounded-full bg-primary/20 text-primary">
        <Icon size={28} />
      </div>

      {/* Heading */}
      <h3 className="text-lg font-bold text-white">{heading}</h3>

      {/* Paragraph */}
      <p className="text-sm font-semibold text-gray-300">{paragraph}</p>
    </div>
  );
}
