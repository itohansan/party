import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

function StackedCarousel({
  slides = [],
  middleScale = "scale-96",
  sideScale = "scale-84",
  sideScaleSm = "sm:scale-89",
  heightClasses = "h-[500px] sm:h-[1000px] md:h-[500px] lg:h-[70vh] xl:h-[80vh]",
  widthClasses = "w-screen sm:w-[93vw] md:w-[620px] lg:w-[840px] xl:w-[1000px]",
  translateX = "translate-x-0 sm:translate-x-[40px] lg:translate-x-[60px] xl:translate-x-[80px]",
  translateXNeg = "-translate-x-0 sm:-translate-x-[40px] lg:-translate-x-[60px] xl:-translate-x-[80px]",
  showAllIndicators = false,
  top = "",
  z = "",
}) {
  const [current, setCurrent] = useState(0);
  const [props, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], velocity: [vx], direction: [dx], cancel }) => {
      if (!down && Math.abs(vx) > 0.2) {
        // Flick left or right
        if (dx > 0) {
          // swipe right → previous
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        } else {
          // swipe left → next
          setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }
        api.start({ x: 0, immediate: false });
      } else {
        api.start({ x: down ? mx : 0, immediate: down });
      }
    }
  );

  const getVisibleIndicators = () => {
    const prev = (current - 1 + slides.length) % slides.length;
    const next = (current + 1) % slides.length;
    return [prev, current, next];
  };

  return (
    <div className={`relative overflow-hidden ${top} ${z}`}>
      <div
        className={`flex items-center justify-center relative ${heightClasses}`}
      >
        {slides.map((slide, index) => {
          let position = "translate-x-full opacity-0 scale-100";

          if (index === current) {
            position = `translate-x-0 opacity-100 ${middleScale} z-10`;
          } else if (index === (current - 1 + slides.length) % slides.length) {
            position = `${translateXNeg} opacity-80 ${sideScale} ${sideScaleSm} z-0`;
          } else if (index === (current + 1) % slides.length) {
            position = `${translateX} opacity-80 ${sideScale} ${sideScaleSm} z-0`;
          }

          return (
            <animated.div
              {...(index === current ? bind() : {})}
              key={slide.id}
              style={{ x: index === current ? props.x : 0 }}
              className={`absolute transition-all duration-500 ease-in-out mx-4 ${widthClasses} h-full rounded-4xl shadow-xl flex items-center justify-center text-[#f8f9fa] text-2xl font-bold ${slide.bg} ${position}`}
            >
              <div className="fixed bottom-0 left-0 w-full h-[180px] flex justify-center items-center text-[#f8f9fa] flex-col rounded-b-4xl border-t-transparent z-50">
                <p className="text-[16px] z-20 px-2 py-1 mb-3 rounded-4xl glass font-medium">
                  {slide.day}
                </p>
                <h1 className="text-white text-4xl font-bold text-center leading-9 uppercase pb-3 z-20">
                  {slide.content}
                </h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-0 rounded-4xl" />
            </animated.div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-4">
        {(showAllIndicators
          ? slides.map((_, index) => index)
          : getVisibleIndicators()
        ).map((index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 flex ${
              index === current ? "bg-[#000814] scale-110" : "bg-[#a5a5a5]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default StackedCarousel;
