import React from "react";
import LiquidGlass from "../components/LiquidGlass";

const Party = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <LiquidGlass radius={24} frost={0.1} blur={15} containerClass="w-96 h-60">
        <div className="flex items-center justify-center h-full text-white text-xl font-bold">
          Liquid Glass Effect ✨
        </div>
      </LiquidGlass>
    </div>
  );
};

export default Party;
