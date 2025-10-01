import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Carroussel({
  cards = [],
  width = "100%",
  height = "400px",
}) {
  const [index, setIndex] = useState(0);

  const slideStyles = useSpring({
    transform: `translateX(-${index * 100}%)`,
    config: { tension: 220, friction: 30 },
  });

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100"
      style={{ width, height }}
    >
      {/* Slides container */}
      <animated.div className="flex h-full w-full" style={slideStyles}>
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 flex items-center justify-center p-4"
          >
            {card.content}
          </div>
        ))}
      </animated.div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-3 py-2 shadow hover:bg-white transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-3 py-2 shadow hover:bg-white transition"
      >
        ▶
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
