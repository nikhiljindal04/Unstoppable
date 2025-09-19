import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechnologyCard = ({ title, description, image, reverse }) => {
  const imageRef = useRef(null);

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
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      {/* Text */}
      <div className={reverse ? "order-2 md:order-1" : ""}>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Image */}
      <div className={reverse ? "order-1 md:order-2 relative" : "relative"}>
        <div
          ref={imageRef}
          className="aspect-video h-75 rounded-xl bg-cover bg-center glow-effect"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default TechnologyCard;
