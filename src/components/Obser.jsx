// import React from "react";

import { useEffect, useRef, useState } from "react";

// height = "40vh";
const Obser = ({
  text = "MUSIC FESTIVAL",
  // height = "50vh",
  top = "",
  position = "relative",
}) => {
  const wrapperRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Distance of element center from viewport center
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

      // Normalize: 0 at center → fade in, larger distance → fade out
      const maxDistance = viewportHeight / 2; // half viewport = fully gone
      let newOpacity = 1 - distanceFromCenter / maxDistance;

      // Clamp between 0–1
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setOpacity(newOpacity);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`${position} z-10 ${top} w-full h-[60vh] sm:h-[60vh]`}
      // style={{ height }}
      // top-20
    >
      <div
        className="sticky top-[50%] flex items-center justify-center"
        style={{
          opacity,
          transition: "opacity 0.2s linear",
        }}
      >
        <h1 className="mx-auto text-gray-800 text-4xl sm:text-6xl md:text-8xl text-center font-bold uppercase tracking-tighter">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Obser;
