import { useEffect, useState } from "react";

export default function FakeLoad() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadProgress = 0;
    const fakeLoad = setInterval(() => {
      loadProgress = Math.min(loadProgress + 5, 100); // Smoother increments
      setProgress(loadProgress);

      if (loadProgress >= 100) {
        clearInterval(fakeLoad);
        setTimeout(() => setLoading(false), 700); // Allow transition to complete
      }
    }, 100); // Faster updates

    return () => clearInterval(fakeLoad);
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 transition-opacity duration-500"
      style={{ opacity: loading ? 1 : 0 }}
    >
      <div className="w-64 h-4 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#E3F6FF] via-[#8DCBE6] to-[#FFEA20] transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
