import React from "react";
import { FaBolt, FaCar, FaBatteryFull, FaCarSide } from "react-icons/fa";
import { GiAerodynamicHarpoon } from "react-icons/gi";

import DetailsCard from "./DetailsCard.jsx";

export default function Details() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-8 bg-background-dark ">
      <DetailsCard
        heading="Speed"
        icon={FaBolt}
        paragraph="Experience unparalleled acceleration and handling with our advanced electric powertrain. It can go from 0-60 mph in just 3.0 seconds."
      />
      <DetailsCard
        heading="Battery"
        icon={FaBatteryFull}
        paragraph="Our long-range battery provides exceptional mileage, reducing range anxiety."
      />
      <DetailsCard
        heading="Design"
        icon={FaCar}
        paragraph="Step into a luxurious and technologically advanced cabin designed for comfort and connectivity."
      />
      <DetailsCard
        heading="Advanced Aerodynamics"
        icon={GiAerodynamicHarpoon}
        paragraph="Optimized design for maximum efficiency and a smooth ride."
      />
      <DetailsCard
        heading="Regenerative Braking"
        icon={FaCar}
        paragraph="Recaptures energu to extend your range and reduce brake wear."
      />
      <DetailsCard
        heading="Sustainable Materials"
        icon={FaCarSide}
        paragraph="Crafted with eco-friendly materials for a responsible luxury experience."
      />
    </div>
  );
}
