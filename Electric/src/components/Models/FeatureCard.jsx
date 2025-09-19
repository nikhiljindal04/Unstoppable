import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function FeatureCard({ image, heading, paragraph }) {

  const imageRef = React.useRef(null);
  
    useEffect(() => {
      if (!imageRef.current) return;
  
      // Animate image in from right on scroll down and out to right on scroll up
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
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-30 mb-10">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg h-70 w-120">
        <img
          ref={imageRef}
          src={image}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        {/* Optional icon if passed */}
        { (
          <div className="flex justify-center mb-4">
            
          </div>
        )}
        <h3 className="text-2xl font-bold sm:text-3xl">{heading}</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400">{paragraph}</p>
      </div>
    </div>
  );
}
