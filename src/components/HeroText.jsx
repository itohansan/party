import React from "react";
// import './styles.css';

export default function HeroText() {
  const text = "Welcome";

  return (
    <div className="p-20 pt-52 w-screen min-h-[100vh] flex items-start justify-center">
      <div className="w-full sm:w-[24em] mx-auto border-white/75 text-[var(--color-text)] font-extrabold text-center whitespace-nowrap overflow-hidden translate-y-[-50%] typewriter-animation sticky top-[30%] text-responsive">
        {text}
      </div>
    </div>
  );
}
