import React, { useRef, useState } from "react";

import REMA from "../assets/REMA.mp4";
import REMA4k from "../assets/REMA4k.mp4";

function Concert() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleVolume = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative  h-screen max-w-screen overflow-hidden ">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src={REMA4k} type="video/mp4" media="(min-width: 1024px)" />
        <source src={REMA} type="video/mp4" media="(max-width: 1023px)" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <button
          onClick={toggleVolume}
          className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/20 transition"
        >
          {isMuted ? "🔊" : " 🔇"}
        </button>
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
    </div>
  );
}

export default Concert;
