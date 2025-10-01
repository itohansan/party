import React, { useEffect, useRef, useState, useMemo } from "react";

export default function LiquidGlass({
  radius = 16,
  border = 0.07,
  lightness = 50,
  displace = 5,
  blend = "difference",
  xChannel = "R",
  yChannel = "B",
  alpha = 0.93,
  blur = 11,
  rOffset = 0,
  gOffset = 10,
  bOffset = 20,
  scale = -180,
  frost = 0.05,
  shadow = 0.1,
  tint = 0.2,
  className = "",
  containerClass = "",
  children,
}) {
  const rootRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Watch for resize
  useEffect(() => {
    if (!rootRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const width =
        entry.borderBoxSize?.[0]?.inlineSize || entry.contentRect.width;
      const height =
        entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;

      setDimensions({ width, height });
    });

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  // Build SVG for displacement
  const displacementImage = useMemo(() => {
    if (!dimensions.width || !dimensions.height) return "";

    const borderVal =
      Math.min(dimensions.width, dimensions.height) * (border * 0.5);
    const yBorder = borderVal;

    return `
      <svg viewBox="0 0 ${dimensions.width} ${
      dimensions.height
    }" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" fill="black"></rect>
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" rx="${radius}" fill="url(#red)" />
        <rect x="0" y="0" width="${dimensions.width}" height="${
      dimensions.height
    }" rx="${radius}" fill="url(#blue)" style="mix-blend-mode: ${blend}" />
        <rect 
          x="${borderVal}" 
          y="${yBorder}" 
          width="${dimensions.width - borderVal * 2}" 
          height="${dimensions.height - borderVal * 2}" 
          rx="${radius}" 
          fill="hsl(0 0% ${lightness}% / ${alpha})" 
          style="filter:blur(${blur}px)" 
        />
      </svg>
    `;
  }, [dimensions, border, radius, lightness, alpha, blur, blend]);

  const displacementDataUri = useMemo(() => {
    if (!displacementImage) return "";
    return `data:image/svg+xml,${encodeURIComponent(displacementImage)}`;
  }, [displacementImage]);

  return (
    <div
      ref={rootRef}
      className={`effect ${containerClass}`}
      style={{
        "--frost": frost,
        borderRadius: `${radius}px`,
      }}
    >
      {/* Inner content */}
      <div className={`slot-container ${className}`}>{children}</div>

      {/* Filter overlay */}
      <svg
        className="filter absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="displacementFilter" colorInterpolationFilters="sRGB">
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={displacementDataUri}
              result="map"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + rOffset}
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="red"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + gOffset}
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="green"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              scale={scale + bOffset}
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
              result="blue"
            />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur stdDeviation={displace} />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
