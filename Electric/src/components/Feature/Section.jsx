import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ id, title, content, image, reverse }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;

    // Animate image in/out based on scroll direction
    gsap.fromTo(
      el,
      { x: 300, opacity: 0 }, // Start outside to right
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // when image enters
          end: "bottom 20%",  // when scrolled past
          scrub: true,        // ties animation to scroll (forward & backward)
        },
      }
    );
  }, []);

  return (
    <section id={id} className="mb-24">
      <h2 className="text-3xl font-bold text-center text-gray-100 dark:text-white mb-12">
        {title}
      </h2>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Content */}
        <div className={`space-y-8 ${reverse ? "lg:order-first" : ""}`}>
          {content.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className={`rounded-xl overflow-hidden shadow-2xl shadow-primary/20 ${
            reverse ? "lg:order-last" : ""
          }`}
        >
          <div
            className="w-full aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
