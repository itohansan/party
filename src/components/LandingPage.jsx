import React, { useEffect, useState } from "react";
import Obser from "./Obser";
import Concert from "./Concert";
import StackedCarousel from "./StackedCarousel";
import PeekCarousel2 from "./PeekCarousel";
import { dummyCardData, dummyCardData2, residents } from "../assets/assets";
import SpecialEvent from "./SpecialEvent";
import Form from "./Form";
import HeroText from "./HeroText";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [changeText, setChangeText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windHeight = window.innerHeight;
      const scrollable = docHeight - windHeight;

      if (scrollable > 0) {
        const scrolledPercent = (scrollTop / scrollable) * 100;
        setChangeText(scrolledPercent > 15);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Concert />
      <HeroText />
      <SpecialEvent
        top="-top-[300px]"
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
      />

      <section className={` `}>
        <Obser text="Residents" height="100vh" top="-top-96">
          {" "}
        </Obser>
        <StackedCarousel slides={residents} top="-top-[500px]" z="z-20" />
      </section>

      <div>
        <Obser text="SPECIAL EVENTS" top="-top-100" />
        <div className="w-full">
          <div className="relative w-screen  sm:w-[410px] h-[570px] rounded-4xl left-1/2 -translate-x-1/2  overflow-hidden bg-[url('/images/halloweenhouse.jpg')] bg-no-repeat bg-cover bg-center bg-fixed  object-contain pb-14 mb-11 -top-[600px] z-20">
            <div className="fixed bottom-0 left-0 w-full h-[180px] flex justify-center items-center text-white flex-col">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <p className="text-[12px] z-20">SAURDAY, OCT 30, 2025</p>
              <h1 className="text-[#f8f9fa]  text-3xl font-semibold text-center leading-9 uppercase pb-3 z-20">
                Halloween party <br /> 2025
              </h1>
              <Link
                to="/Special"
                className="inline-block px-4 py-3 bg-[#f8f9fa] text-[#000814] rounded-3xl z-20
               hover:bg-[#f8f9fa]/80 transition cursor-pointer shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/events"
          className="left-1/2 -translate-x-1/2  inline-block px-4 relative bottom-[620px] z-20 py-3.5 bg-[#000814]/15 text-[#000814] rounded-3xl font-normal
            hover:bg-[#000814]/40 transition cursor-pointer shadow-md"
        >
          Show All
        </Link>
      </div>
      <div className="relative z-0 w-full h-[80vh] flex flex-col items-center -top-[510px] px-16 ">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter pb-20">
          PARTY <span className="relative ">BÜN</span>
        </h1>
        <div className=" w-[100vw] sm:w-[600px] h-full px-6 text-left">
          <h3 className="pb-4 text-[17px] sm:text-2xl font-extrabold">
            Welcome to the future of events.
          </h3>

          <div className=" text-[14px] sm:text-[16px] font-normal tracking-tight space-y-4">
            <p>
              From high-energy parties and live concerts to intimate gatherings,
              our platform helps you find, book, and enjoy experiences that
              bring people together.
            </p>

            <p>
              Curated for connection and creativity, our events turn moments
              into memories with world class organizers and fresh experiences
              every time.
              <br />
            </p>
            <p>
              Arrive ready to celebrate, stay for the unexpected moments, and
              leave with stories worth sharing. Your next adventure starts here.
            </p>

            <p>
              With new events added every week, there’s always something fresh
              waiting to explore.
            </p>
          </div>
        </div>
      </div>
      <section className={` `}>
        <Obser
          text="CONCERTS"
          // height="60vh"
          // top="-top-[450px] sm:-top-[350px]"
          top="-top-[500px] sm:-top-[460px]"
          className="z-30"
        />

        <PeekCarousel2
          slides={dummyCardData}
          className="-top-[700px] sm:-top-[600px] z-30"
        />
      </section>

      <section className="">
        <Obser
          text="MUSIC FESTIVAL"
          top="-top-[800px] sm:-top-[700px]"
          className=""
        />
        <PeekCarousel2
          slides={dummyCardData2}
          className="-top-[1070px] sm:-top-[870px] "
        />
      </section>

      {/* 
  

      {/*  top-[280%]*/}
      <section className="relative">
        <Obser text="SUBSCRIBE" top="top-[-1160px] sm:top-[-980px]" />

        <div className="absolute w-full sm:w-[425px] md:w-[750px] lg:w-[850px] h-[180vh] sm:h-[190vh]  md:h-[100vh] lg:h-[100vh] 2xl:h-[75vh] -top-[850px] sm:-top-[670px] z-20 -translate-x-1/2 left-1/2 p-2 rounded-4xl flex flex-col md:flex-row bg-[#000814]/90">
          {/* Left (Image) */}
          <div className="flex-1 rounded-4xl   bg-[url('/images/ibiza-vip.jpg')] bg-no-repeat bg-center bg-cover w-full h-full"></div>

          {/* Right (Form) */}
          <div className="flex-1 flex ">
            <Form
              className="w-full h-full"
              title="Sign-up now to be the first to receive latest event update"
              disclaimer={
                <>
                  We will keep your data as long as you allow us and we are
                  bound by law. Your Data Protection rights are Access,
                  Rectification, Erasure, Restriction of processing, Data
                  Portability and Object. You might exercise them by written
                  enquiry to USHUAÏA ENTERTAINMENT SL, AVDA. BARTOLOMÉ ROSSELLÓ
                  18, 07800 IBIZA (ISLAS BALEARES) or THE NIGHT LEAGUE SL, APDO.
                  CORREOS, 1020, 07817 SANT JORDI DE SES SALINES (ISLAS
                  BALEARES) or by email to
                  <a
                    href="mailto:data.protection@thenightleague.com"
                    className="text-blue-600 underline"
                  >
                    data.protection@thenightleague.com
                  </a>
                  .
                  <br />
                  In case of disagreement, you might make a complaint to the
                  <a
                    href="https://www.aepd.es"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    Spanish Data Protection Agency
                  </a>
                  .
                  <br />
                </>
              }
              fields={[
                {
                  name: "name",

                  type: "text",
                  placeholder: "Name",
                  required: true,
                  row: "row1",
                },
                {
                  name: "surname",

                  type: "text",
                  placeholder: "Surname",
                  required: true,
                  row: "row1",
                },
                {
                  name: "email",

                  type: "email",
                  placeholder: "Enter email",
                  required: true,
                },
                {
                  name: "phone",

                  type: "number",
                  placeholder: "Phone ",
                  required: true,
                  row: "row2",
                },
                {
                  name: "option",
                  placeholder: "Number of People",
                  type: "select",
                  required: true,
                  row: "row2",
                  options: [
                    { value: "one", label: "One" },
                    { value: "two", label: "Two" },
                    { value: "three", label: "Three" },
                  ],
                },
                {
                  name: "comment",
                  label: "Comment",
                  type: "textarea",
                  placeholder: "Optional comment",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
