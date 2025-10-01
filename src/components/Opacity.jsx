// ✅ custom hook
const useOpacity1 = (options) => {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersectionRatio(entry.intersectionRatio);
    }, options);

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, intersectionRatio];
};

// export default useOpacity1;

import { useEffect, useRef, useState } from "react";

const useOpacity2 = ({
  threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  rootMargin = "0px",
}) => {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, intersectionRatio];
};

const useOpacitymain = ({
  threshold = [0, 0.25, 0.5, 0.75, 1],
  rootMargin = "0px",
} = {}) => {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersectionRatio(entry.intersectionRatio);
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect(); // ✅ full cleanup
    };
  }, [threshold, rootMargin]);

  return [elementRef, intersectionRatio];
};

const useOpacity = ({
  threshold = [0, 0.25, 0.5, 0.75, 1],
  rootMargin = "0px",
} = {}) => {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersectionRatio(entry.intersectionRatio);
        setIsVisible(entry.isIntersecting); // ✅ track visibility
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [elementRef, intersectionRatio, isVisible];
};

export default useOpacity;

// export default useOpacity;
