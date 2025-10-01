import React from "react";

const FlipButton = ({ frontText = "Front", backText = "Back", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
          relative w-48 h-12 overflow-hidden text-center uppercase tracking-tighter
          group cursor-pointer font-bold text-[40px] active:scale-105 transition-transform duration-150 
        "
    >
      {/* Front text */}
      <span
        className="
            absolute inset-0 flex items-center justify-center
             text-[#f8f9fa]
            transition-all duration-500
            group-hover:opacity-0 group-hover:translate-y-1/2 group-hover:rotate90 preserve-3d perspective-1000 
          "
      >
        {frontText}
      </span>

      {/* Back text */}
      <span
        className="
            absolute inset-0 flex items-center justify-center
            bg-[#000814]  text-[#f8f9fa]
            opacity-0 rounded-2xl
            transition-all duration-500
            -translate-y-1/2 rotate-x-90
            
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate0 preserve-3d perspective-1000 group-hover:animate-vibrate
          "
      >
        {backText}
      </span>
    </button>
  );
};

export default FlipButton;
