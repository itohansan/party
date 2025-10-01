import React from "react";
import center from "../assets/center.jpg";
import Obser from "../components/Obser";
import Form from "../components/Form";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";

function Reservation() {
  return (
    <div className="">
      {/* Wrapper provides scroll context */}
      <div className="relative min-h-screen max-w-screen">
        {/* Sticky text */}
        <div className="sticky top-0 left-0 w-full h-[50vh] flex flex-col justify-center items-center z-0 ">
          <p className="px-1 rounded-4xl font-medium bg-[#ffeaf1] uppercase text-[11px] tracking-widest">
            VIP TABLES
          </p>
          <h1 className="text-[39px] leading-9 font-extrabold uppercase py-5  tracking-tight text-center">
            Step into a world of <br /> timeless elegance and <br />
            luxury.
          </h1>
        </div>
        {/* Scrollable content */}
        <div className="bg-amber-200">
          <div
            className="absolute mx-auto bg-no-repeat bg-cover bg-center  
  w-[98vw] sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1260px] 
  translate-x-1/2 right-1/2 h-[100vh] sm:h-[900px] md:h-[420px] lg:h-[530px] xl:h-[730px] 
  rounded-4xl bg-[url('/images/hi-vip-2.jpeg')] z-20"
          />
        </div>
      </div>

      <div
        className="relative left-1/2 pb-24 -translate-x-1/2 translate-y-[600px]  sm:translate-y-[800px] 
  text-2xl font-bold w-[90%] tracking-tight leading-8 flex "
      >
        <p className="text-left">
          From high-energy parties and live concerts to intimate gatherings, our
          platform helps you find, book, and enjoy experiences that bring people
          together.
        </p>
      </div>

      {/* <div className="flex justify-center items-center  h-screen">
        <div className=" font-bold bg-red-300 p-4 rounded-lg"></div>
      </div> */}

      <div className=" z-10">
        <Obser text="Concerts" height="90vh" top="top-[550px]" />

        <div
          className="relative sm:w-[430px] md:w-[750px] lg:w-[850px] 
  h-[225vh] md:h-[100vh] lg:h-[100vh] 2xl:h-[75vh]  bg-[#1E2022] top-[400px] z-20 
  -translate-x-1/2 left-1/2 p-2 rounded-4xl flex flex-col md:flex-row mb-64 md:mb-72"
        >
          {/* Left (Image) */}
          <div className="flex-1 rounded-4xl bg-[url('/images/ibiza-vip.jpg')] bg-no-repeat bg-center bg-cover"></div>

          {/* Right (Form) */}
          <div className="flex-1 flex">
            <Form
              className="w-full h-full"
              title="RSVP Form"
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
                  <span className="font-semibold">Dress code</span>: Flip-flops,
                  tank tops and swimwear are not allowed. Men must wear long
                  pants, not shorts. We don’t allow any sports team merch or any
                  ideological attire that may cause offence.
                  <br />
                  <span className="font-semibold">Age restriction</span>: All
                  attendants must be aged 18 or older to enter Hï Ibiza. Anyone
                  younger than 18 or anyone who is unable to prove their age via
                  valid identification will be refused entry.
                  <br />
                  <span className="font-semibold">Safety</span>: As a client,
                  you are responsible for your own safety and the security of
                  your belongings while attending (or travelling to and from)
                  our events.
                </>
              }
              fields={[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter your name",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter your email",
                  required: true,
                },
                {
                  name: "option",
                  label: "Number of People",
                  type: "select",
                  required: true,
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
        <FloatingCTA
          text="vip tables"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[330px] flex justify-center items-center "
        />
      </div>
      <Footer className="top-52" />
    </div>
  );
}

export default Reservation;
