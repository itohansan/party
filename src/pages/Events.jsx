import React, { useState, useRef, useEffect } from "react";
import EventCard from "../components/EventCard";
import { reservationCards } from "../assets/assets";
import LiquidGlass from "../components/LiquidGlass";
import Footer from "../components/Footer";

const tabs = ["Next Up", "September", "October"];

function Events() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const eventDate = new Date("2025-12-20");
  const formattedEventDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const [activeTabIndex, setActiveTabIndex] = useState(null);

  const tabRefs = useRef([]);

  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const activeTab = tabRefs.current[activeTabIndex];
    if (activeTab) {
      setSliderStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    } else {
      // No active tab = hide slider
      setSliderStyle({ width: 0 });
    }
  }, [activeTabIndex]);

  const handleMouseOver = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setSliderStyle({
        left: tab.offsetLeft,
        width: tab.offsetWidth,
      });
    }
  };

  const handleMouseLeave = () => {
    if (activeTabIndex !== null) {
      const activeTab = tabRefs.current[activeTabIndex];
      if (activeTab) {
        setSliderStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
      }
    } else {
      setSliderStyle({ width: 0 }); // Reset if nothing active
    }
  };

  return (
    <div className="max-w-screen ">
      {/* Wrapper provides scroll context */}
      <div className="relative min-h-screen">
        {/* Sticky text */}

        <div className="sticky top-0 left-0 w-full h-[50vh] flex flex-col justify-center items-center z-0 ">
          <p className="px-1 rounded-4xl font-medium bg-[#a5a5a5] uppercase text-[11px] tracking-widest">
            events
          </p>

          <h1 className="text-[39px] leading-9 font-extrabold uppercase py-5  tracking-tight text-center">
            Summer 2025
          </h1>
          <p>
            {formattedDate} &mdash; {formattedEventDate}
          </p>
        </div>

        {/* Image */}
        <div className="relative z-20 bg-no-repeat max-w-full bg-cover bg-center  sm:w-[630px] md:w-[750px] lg:w-[1000px]  xl:w-[1270px] mx-auto h-[80vh] rounded-4xl bg-[url('/images/hi-vip-2.jpeg')] "></div>
      </div>

      <div className="relative top-40 min-h-[200vh] w-full flex flex-col items-center ">
        {/* sticky */}

        <div className="sticky top-20 flex justify-center items-center z-10 h-[100px] rounded-4xl ">
          <LiquidGlass radius={32} className=" ">
            <ul
              className="relative flex w-[330px] h-[55px] items-center rounded-4xl gap-1 p-1"
              onMouseLeave={handleMouseLeave}
            >
              {/* The sliding element */}
              <div
                className="absolute h-[46px] bg-[#fff2f6] rounded-4xl shadow-md transition-all duration-300 ease-in-out"
                style={sliderStyle}
              />

              {/* Map over the tabs data to create the list items */}
              {tabs.map((tab, index) => (
                <li
                  key={tab}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`flex-1 h-[46px] items-center justify-center rounded-full flex z-10 cursor-pointer transition-colors duration-300
              ${
                activeTabIndex === index
                  ? "bg-[#f5b4ce] text-black"
                  : "text-gray-600"
              }`}
                  onMouseOver={() => handleMouseOver(index)}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </LiquidGlass>
        </div>

        <div className="container mx-auto p-4 w-screen sm:w-[450px] md:w-[800px] lg:w-[880px] xl:w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1 justify-items-center">
            {reservationCards.map((card, idx) => (
              <EventCard
                key={idx}
                date={card.date}
                time={card.time}
                eventName={card.eventName}
                venues={card.venues}
                actions={[
                  {
                    label: "Buy Tickets",
                    onClick: () => alert("Buying ticket..."),
                  },
                  {
                    label: "VIP Tables",
                    onClick: () => alert("Booking VIP table..."),
                  },
                ]}
                onHomeClick={() => alert("Going Home...")}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer className="sm:top-36 md:top-4" /> */}
      <Footer className="top-52 " />
    </div>
  );
}

export default Events;
