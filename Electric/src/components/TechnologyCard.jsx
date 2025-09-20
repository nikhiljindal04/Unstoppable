import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechnologyCard = ({ title, description, image, reverse }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { x: reverse ? -200 : 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );
  }, [reverse]);

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-y-10 md:gap-x-12`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <div
          ref={imageRef}
          className="w-full aspect-video rounded-xl bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default TechnologyCard;
