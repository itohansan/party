import React, { useMemo, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const Carousel3D = ({ slides = [], width = 200, height = 200, gap = 20 }) => {
  const cellCount = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [styles, api] = useSpring(() => ({ rotateY: 0 }));

  const tz = useMemo(() => {
    return Math.round(width / 2 / Math.tan(Math.PI / cellCount));
  }, [width, cellCount]);

  // Arc length per slice
  const arcLength = (2 * Math.PI * tz) / cellCount;

  // Allow gap by reducing width a bit
  const cellWidth = arcLength - gap;
  const cellHeight = height;

  // Rotation angle (clockwise)
  const rotateY = -((360 / cellCount) * currentIndex);

  // Scene size should fit your cells comfortably
  const sceneSize = Math.max(width, height) * 2;

  const bind = useDrag(
    ({ down, movement: [mx], velocity: [vx], direction: [dx], cancel }) => {
      if (!down && Math.abs(vx) > 0.2) {
        // Flick left or right
        if (dx > 0) {
          // swipe right → previous
          setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          );
        } else {
          // swipe left → next
          setCurrentIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          );
        }
        api.start({ x: 0, immediate: false });
      } else {
        api.start({ x: down ? mx : 0, immediate: down });
      }
    }
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-2/3 overflow-hidden ">
      {/* Scene */}
      <div
        className="relative perspective-[1500px] overflow-hidden "
        style={{ width: sceneSize, height: sceneSize }}
      >
        <animated.div
          {...bind()}
          className="absolute inset-0 transition-transform duration-700 preserve-3d  overflow-ellipsis "
          style={{
            transform: `translateZ(-${tz}px) rotateY(${rotateY}deg)`,
          }}
        >
          {slides.map((slide, i) => {
            const angle = (360 / cellCount) * i;
            return (
              <div
                key={slide.id}
                className={`absolute flex items-center justify-center text-[#f8f9fa]  text-lg font-bold rounded-4xl shadow-2xl border-[1px] border-[#000814]/10  cursor-pointer overflow-hidden ${slide.bg} top-[20%]`}
                style={{
                  width: `${cellWidth}px`,
                  height: `${cellHeight}px`,
                  left: `${(sceneSize - cellWidth) / 2}px`,
                  //   top: `${cellHeight}px`,
                  transform: `rotateY(${angle}deg) translateZ(${tz}px)`,
                }}
              >
                <div className="fixed bottom-0 left-0 w-full h-[180px] flex justify-end items-center text-[#f8f9fa] flex-col rounded-b-4xl border-t-transparent z-50">
                  <p className="text-[12px] z-20">{slide.day}</p>
                  <h1 className="text-[#f8f9fa] text-[30px] font-bold text-center leading-9 uppercase pb-3 z-20">
                    {slide.content}
                  </h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[#000814]/10 z-0 rounded-4xl" />
              </div>
            );
          })}
        </animated.div>
      </div>

      {/* Indicators */}
      <div className="flex gap-4 relative -top-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              i === currentIndex ? "bg-[#f8f9fa]  scale-100" : "bg-[#f8f9fa]/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
