import React from "react";
import { FaLeaf, FaGasPump } from "react-icons/fa";
import ComparisonBar from "./ComparisonBar.jsx";

export default function EmissionsComparison() {
  return (
    <div className="flex items-center justify-center bg-background-dark p-6">
      <ComparisonBar
        leftLabel="Electra EV"
        rightLabel="Petrol Car"
        leftIcon={FaLeaf}
        rightIcon={FaGasPump}
        leftValue="0g CO₂/km"
        rightValue="120g CO₂/km"
        progress={25} // 25% filled
      />
    </div>
  );
}
