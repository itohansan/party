import React, { useState, useEffect } from "react";

const CarouselGallery = ({ data, activeSlide = 0 }) => {
  const [current, setCurrent] = useState(activeSlide);

  const next = () => current < data.length - 1 && setCurrent((c) => c + 1);
  const prev = () => current > 0 && setCurrent((c) => c - 1);

  // bp

  function useBreakpoint() {
    const [bp, setBp] = useState("sm");

    useEffect(() => {
      const check = () => {
        if (window.innerWidth >= 1024) setBp("lg");
        else if (window.innerWidth >= 768) setBp("md");
        else setBp("sm");
      };
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return bp;
  }

  const bp = useBreakpoint();

  const getStyles = (index) => {
    const range = bp === "sm" ? 0 : bp === "md" ? 1 : 2;
    // sm: only current, md: ±1, lg: ±2

    if (current === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };

    if (range >= 1 && current - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    if (range >= 1 && current + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };

    if (range >= 2 && current - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    if (range >= 2 && current + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };

    // everything else hidden
    return {
      opacity: 0,
      transform: "translateX(0px) translateZ(-600px)",
      zIndex: 0,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      {/* Carousel container */}
      <div
        className="relative max-w-full w-[458px] h-[680px] mx-auto flex justify-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {data.map((item, i) => (
          <React.Fragment key={item.id ?? i}>
            {/* Main slide */}
            <div
              className="absolute top-0 max-w-full w-[340px] sm:w-[430px] md:w-[430px] h-[680px] rounded-4xl   flex items-center bg-no-repeat bg-cover bg-center justify-center transition-all duration-500 my-auto"
              style={{
                backgroundImage: `url(${item.image})`, // 👈 use image here
                ...getStyles(i),
              }}
            >
              {/* <SliderContent {...item} /> */}
            </div>

            {/* Reflection */}
            <div
              className=""
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            ></div>
          </React.Fragment>
        ))}
      </div>

      {/* indicator buttons */}
      <div className="flex items-center justify-center gap-2 -mt-6 z-20">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : "false"}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              i === current ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SliderContent = ({ icon, title, desc }) => (
  <div className="flex flex-col text-white p-6 items-start font-sans">
    {icon}
    <h2 className="text-2xl font-bold my-4">{title}</h2>
    <p className="text-sm leading-relaxed">{desc}</p>
  </div>
);

export default CarouselGallery;
