import React from "react";

function SpecialEvent({ top = "", mt = "", onHomeClick, actions = [] }) {
  return (
    <div
      className={`relative z-20  w-[97vw] sm:w-[610px]  md:w-[745px] lg:w-[1000px] xl:w-[1248px]  h-[500px] sm:h-[160vh] md:h-[500px] lg:h-[85vh] xl:h-[820px]  rounded-4xl left-1/2 -translate-x-1/2  bg-[url('/images/halloweenhouse.jpg')] bg-no-repeat bg-cover bg-center bg-fixed  object-contain
        ${top} ${mt}`}
    >
      <div className=" sticky top-[50%] text-center p-5 ">
        <h2 className="text-[44px] font-bold  text-amber-50 ">
          HALLOWEEN SPECIAL 2025
        </h2>

        <div className="pt-6 flex flex-wrap gap-3 justify-center items-center">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="
                px-4 py-2 text-sm 
                sm:px-6 sm:py-3 sm:text-base 
                lg:px-8 lg:py-4 lg:text-lg
                bg-[#3772ff] text-white rounded-3xl font-medium 
                hover:brightness-90 transition cursor-pointer
              "
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
      ;
    </div>
  );
}

export default SpecialEvent;
