import React from "react";
import useOpacity from "./Opacity";

function FadeHeading({ defaultText, changedText }) {
  const [elementRef, intersectionRatio] = useOpacity({
    threshold: [0, 0.5, 1],
  });

  const visible = intersectionRatio > 0.5;
  console.log("intersectionRatio:", intersectionRatio);

  return (
    <div
      ref={elementRef}
      className="h-[150vh] flex items-center justify-center"
    >
      <div className="sticky top-[50%] text-center">
        <h2 className="text-6xl transition-opacity duration-500">
          {visible ? changedText : defaultText}
        </h2>
      </div>
    </div>
  );
}

export default FadeHeading;
