import React from "react";
import girl from "../assets/girl.jpeg";
import halloween from "../assets/halloween.jpg";
import image from "../assets/image.jpeg";
// import pineapple from "../assets/jpeg";

import { useState } from "react";

const cardsData = [
  { id: 1, img: { girl }, text: "Card 1 Description" },
  { id: 2, img: { halloween }, text: "Card 2 Description" },
  { id: 3, img: { image }, text: "Card 3 Description" },
  { id: 4, img: { image }, text: "Card 4 Description" },
  { id: 5, img: { girl }, text: "Card 5 Description" },
];

function CarouselStacked() {
  const [cards, setCards] = useState(cardsData);

  const handleNext = () => {
    // Move last card to top
    const updated = [...cards];
    const last = updated.pop();
    setCards([last, ...updated]);
  };

  const handlePrev = () => {
    // Move first card to bottom
    const updated = [...cards];
    const first = updated.shift();
    setCards([...updated, first]);
  };

  return (
    <div className="relative w-[95vw] h-[250px] mx-auto mt-10 bg-amber-950">
      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="hidden absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/70 rounded-full w-9 h-9 text-white text-xl z-10 group-hover:flex justify-center items-center transition hover:scale-125"
      >
        &lt;
      </button>

      {/* Card list */}
      <ul className="relative w-[300px] mx-auto">
        {cards.map((card, index) => (
          <li
            key={card.id}
            className={`absolute left-0 right-0 mx-auto flex flex-col items-center justify-center bg-amber-400 rounded-xl shadow-lg text-center p-2 transition-all duration-200 ${
              index === 0
                ? "top-12 w-[80%] z-30"
                : index === 1
                ? "top-9 w-[70%] z-20"
                : index === 2
                ? "top-6 w-[60%] z-10"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={card.img}
              alt={card.text}
              className="h-[200px] rounded-lg object-cover"
            />
            <h3 className="text-white font-light mt-2">{card.text}</h3>
          </li>
        ))}
      </ul>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="hidden absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/70 rounded-full w-9 h-9 text-white text-xl z-10 group-hover:flex justify-center items-center transition hover:scale-125"
      >
        &gt;
      </button>
    </div>
  );
}
export default CarouselStacked;
