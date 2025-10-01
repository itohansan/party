// import React from "react";
import { Link } from "react-router-dom";

function EventCard({
  date,
  time,
  eventName,
  venues = [],
  actions = [],
  onHomeClick,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col w-full h-full min-h-[400px] bg-[#f8f9fa] p-2 gap-2 rounded-4xl shadow-lg ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col items-start gap- p-4 text-[15px]">
        <p className="">{date}</p>
        <p className="">{time}</p>

        <p
          className="px-2 bg-[#3772ff] text-white rounded-4xl transition text-[12px] uppercase py-1 mt-1"
          onClick={onHomeClick}
        >
          party bün
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 w-full bg-[#a5a5a5]/50 rounded-4xl p-4 mt-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[30px] font-bold uppercase">{eventName}</h1>

          {venues.map((venue, idx) => (
            <div key={idx} className="mt-4">
              <Link>
                <p className="inline-block bg-[#000814]  px-1 text-[#f8f9fa] rounded-4xl transition uppercase text-[12px] font-medium mb-3">
                  {venue.name}
                </p>
              </Link>
              {venue.details?.map((detail, i) => (
                <p key={i} className="tracking- leading-tight">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-2 justify-center items-center">
          {actions.map((action, idx) => (
            <button
              key={idx}
              className="flex-1 px-4 py-3 bg-[#000814] text-[#f8f9fa] rounded-4xl hover:bg-black hover:brightness-90 transition cursor-pointer"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
