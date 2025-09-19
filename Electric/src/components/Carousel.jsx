import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "EcoDrive Urban",
    desc: "Navigate the city with style and efficiency.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeC1uyXmeBqZAklrGLEx8ppd_aolQWpPBAl7OFsKPxN3-lhGKNqhi6hPZMnz3dzAWrFOB6OYPEPoZkaS7p9vfOkBVaT9l-LFzAgDkEwF7UahN1FdTE-q0eDjUNHqTgEnx3mWzO-SfbXcCvmsHdDXHwB6QWFIDH_lPUCUUysoMYDSp3f24LBYMjdG8B7CzZCiPSYpLSM2f5NCMzmGnBKEYGwXpCsugOrhhfhGY1ExnPm3alyt9Pvp5L7DMYKu7hxpxjz78c88RgtN3G",
  },
  {
    title: "EcoDrive Voyager",
    desc: "Your adventure awaits with extended range and comfort.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcOBEIBzip9yM_f0LqD_xQI_mTDrOsWN6tFgsHujniS4OXkE09HoyJ6Tf9VSJKi30S96nOiM3Kn1mk3jbi2nw9lAA1m_b7TbxcvuvMSvWQaHO8URpYhxSGHzMhQ0Gv3xHik-elir3ZKvA6GWVDyeFuFVr0HznMHchCpiKNJQplmhNQ3yWN3sBi54NU7J5dGKbq4gn7xaUTO8p2gEjktU6BIkFnRDIoB6yHNKQIFJ2Si8spZqPTgpFQJHGYthVEs6HxvxmnMtSrhH_I",
  },
  {
    title: "EcoDrive Compact",
    desc: "The perfect blend of performance and practicality.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcMgHz31ZRQS8SOkBwuoZrJK6DvjpYVq6wofTfI8EgpSEpqS-AnSRhFJwGmWWZBbS4txyb4FQYEOVL-o-zzJproGTb8Ip9TrsnlfM5lY_LgSTMoSK7EOsh70PnE_Nnp5WnLlPANpnrZQKwAToJoLWr5vIACxEhYhOWhfrQA6uG1-Nh4N5fXe7Zs4yl4R_2goHIYU5-7M7SrGqDL_1YcIZprEW-EQEvXOcaRXJNd1gna7aOVoxK8MG_JOnScnClbRuaRKoQZLhenK6j",
  },
  {
    title: "EcoDrive Luxe",
    desc: "Experience unparalleled luxury and cutting-edge technology.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGAFbe783GVe6uriUAeCD_Dv23ysp2QISEMqveD44q6DzDUX39NTtLIAtYagDdvIh7mXbLdDblgfCGQ7GBkX6LmkgLCz0iVBfEz8w9XVwyhoKceiY7YoQFwOzBvg84JJxvJwMWsr9OhP-V-O1Iayc0HDjGVVl9J-0M_jnG20DsysD2WuXUiERFLP-G0EqZ-PhhG1jowlI4F1MG2F4m_LEz7NDtj1b42atI0Eu69BhJAoqOSqR4n8JKJM0rEUT06oLKtQl74x6g9WQ1",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full relative">
              <img src={slide.img} alt={slide.title} className="w-full h-[90vh] object-cover" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 p-6 rounded-xl text-center text-white max-w-[80%]">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg text-white/70">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
        <button onClick={prev} className="bg-white/20 hover:bg-white/40 p-3 rounded-md">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="bg-white/20 hover:bg-white/40 p-3 rounded-md">
          <FaChevronRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
