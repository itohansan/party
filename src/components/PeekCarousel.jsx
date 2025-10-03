import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const PeekCarousel2 = ({
  slides = [],
  initialIndex = 0,
  imageFlex = 3,
  contentFlex = 1,
  showIndicators = true,
  className = "",
  onSlideChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [slideStep, setSlideStep] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const [props, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], velocity: [vx], direction: [dx] }) => {
      if (!down && Math.abs(vx) > 0.2) {
        if (dx > 0) {
          setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        } else {
          setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }
        api.start({ x: 0, immediate: false });
      } else {
        api.start({ x: down ? mx : 0, immediate: down });
      }
    }
  );

  useEffect(() => {
    function updateSizes() {
      if (containerRef.current) {
        const firstSlide = containerRef.current.querySelector(".slide");
        if (firstSlide) {
          const width = firstSlide.offsetWidth;
          const style = window.getComputedStyle(firstSlide);
          const marginLeft = parseInt(style.marginLeft, 10) || 0;
          const marginRight = parseInt(style.marginRight, 10) || 0;

          const newSlideWidth = width;
          const newSlideStep = width + marginLeft + marginRight;
          const newContainerWidth = containerRef.current.offsetWidth;

          setSlideWidth(newSlideWidth);
          setSlideStep(newSlideStep);
          setContainerWidth(newContainerWidth);

          //
          let minValidIndex = 0;
          let maxValidIndex = slides.length - 1;

          if (window.innerWidth >= 1024) {
            minValidIndex = 1;
            maxValidIndex = slides.length - 2;
          }

          setActiveIndex((prev) =>
            Math.min(Math.max(prev, minValidIndex), maxValidIndex)
          );
        }
      }
    }

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [slides.length]);

  // cebter slide
  const translateX =
    slideStep && containerWidth
      ? -activeIndex * slideStep + (containerWidth - slideWidth) / 2
      : 0;

  const handleIndicatorClick = (i) => {
    setActiveIndex(i);
    if (onSlideChange) onSlideChange(i);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full mb-40 z-20 ${className} pb-3`}
    >
      {/* wrapper */}
      <div className="overflow-hidden ">
        <animated.div
          {...bind()}
          className="flex transition-transform duration-500 ease-in-out pb-3 "
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {slides.map((slide, index) => {
            const isCurrent = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + slides.length) % slides.length;
            const isNext = index === (activeIndex + 1) % slides.length;

            const extraClasses = isCurrent
              ? "scale-100 opacity-100 z-20"
              : isPrev || isNext
              ? "scale-0 sm:scale-90 opacity-80 z-10"
              : "scale:0 sm:scale-75 opacity-0 pointer-events-none";

            return (
              <div
                key={slide.id || index}
                className={`slide flex-col flex-shrink-0 h-[60vh] sm:h-[75vh] w-[90vw] sm:w-[55vw] lg:w-[30vw] 
              rounded-3xl shadow-xl flex p-4 text-2xl font-bold text-white 
              transition-transform duration-500 bg-glass
              ${extraClasses}`}
              >
                {/* IMAGE */}
                <div
                  style={{ flex: imageFlex }}
                  className="w-full flex items-center justify-center min-h-0"
                >
                  {slide.image && (
                    <img
                      src={slide.image}
                      alt={slide.title || `slide-${index}`}
                      className="w-full h-full object-cover object-center rounded-3xl"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div
                  style={{ flex: contentFlex }}
                  className="w-full flex items-center flex-col  justify-center gap-3"
                >
                  <p className="text-gray-800">
                    {slide.date} <span>{slide.time}</span>
                  </p>
                  <p className="text-[18px] font-medium text-gray-800">
                    📍{slide.venue}
                  </p>
                  {/* <h2 className="text-center px-2">{slide.date}</h2> */}
                </div>
              </div>
            );
          })}
        </animated.div>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute -bottom-6 w-full flex justify-center space-x-2">
          {slides.map((_, i) => {
            const isEdge = i === 0 || i === slides.length - 1;
            return (
              <button
                key={i}
                onClick={() => handleIndicatorClick(i)}
                className={`w-[10px] h-[10px] rounded-full transition-colors ${
                  activeIndex === i ? "bg-[#000814] scale-110" : "bg-[#a5a5a5]"
                } ${isEdge ? "lg:hidden" : ""}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PeekCarousel2;
