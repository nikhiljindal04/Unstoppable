import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeatureCard({ image, heading, paragraph }) {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 items-center">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg h-56 sm:h-72 md:h-80 lg:h-96 w-full">
        <img
          ref={imageRef}
          src={image}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{heading}</h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
