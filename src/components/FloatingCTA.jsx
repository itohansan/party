import React, { useEffect, useState } from "react";

function FloatingCTA({ text, onClick, className }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Fade in between 0px and 200px scroll
      const fadeInStart = 50;
      const fadeInEnd = 200;

      // Fade out between bottom-300px and bottom
      const fadeOutStart = docHeight - 300;
      const fadeOutEnd = docHeight;

      let newOpacity = 1;

      if (scrollTop < fadeInStart) {
        newOpacity = 0;
      } else if (scrollTop >= fadeInStart && scrollTop <= fadeInEnd) {
        newOpacity = (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart);
      } else if (scrollTop >= fadeOutStart && scrollTop <= fadeOutEnd) {
        newOpacity =
          1 - (scrollTop - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      } else if (scrollTop > fadeOutEnd) {
        newOpacity = 0;
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-[9999] transition-opacity duration-300 ${className}`}
      style={{ opacity }}
    >
      <button
        onClick={onClick}
        className="px-6 py-3 bg-black rounded-4xl text-[#fff8fa] hover:bg-black/70 shadow-lg font-semibold uppercase"
      >
        {text}
      </button>
    </div>
  );
}

export default FloatingCTA;
