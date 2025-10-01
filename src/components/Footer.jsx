import React from "react";
import SubscribeSection from "./SubscribeSection";

function Footer({ className }) {
  return (
    <div
      className={`relative  px-9 mt-11 bg- text-[16px] leading-tight md:grid md:grid-cols-2 ${className}`}
    >
      <div className="flex flex-col  justify-center items-center  md:justify-start md:items-start px-[50px] md:px-0 pb-[40px] h-fit ">
        <h1 className="text-center text-[16px] pb-[50px] mb-4 w-60">
          Sign-up now to receive latest
          <br /> updates on events
        </h1>
        {/* <button className=" w-[200px] bg-[#3772ff] hover:brightness-90  text-[#f8f9fa] py-[13px] px-4 rounded-4xl">
          Subscribe
        </button> */}
        <SubscribeSection />
      </div>
      <section>
        <div className="flex justify-between pb-4 ">
          <div className="flex flex-1 gap">
            <ul className="flex flex-col gap-2 pr-6">
              <li className="opacity-35">Social</li>
              <li>Instagram</li>
              <li>X</li>
              <li>Facebook</li>
              <li>Pintrest</li>
              <li>Snapchat</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div className="flex flex-1">
            <ul className="flex flex-col gap-2">
              <li className="opacity-35">Music</li>
              <li>Spotify</li>
              <li>Apple Music</li>
              <li>YouTube</li>
              <li>Soundcloud</li>
            </ul>
          </div>
        </div>
        <hr className="opacity-35" />
        <div className="flex justify-between  pt-4 pb-16 ">
          <div className=" flex flex-1 ">
            <ul className="flex flex-col gap-2 pr-6">
              <li className="opacity-35">Legal</li>
              <li>Terms and Conditions</li>
              <li>Protection of Personal Data</li>
              <li>Cookies Policy</li>
              <li>Cookies Settings</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Internal Information</li>
              <li>System</li>
            </ul>
          </div>
          <div className="flex flex-1">
            <ul className="flex flex-col gap-2">
              <li className="opacity-35">FAQs / Contact</li>
              <li>About</li>
              <li>VIP Tables</li>
              <li>VIP Info +2349999999</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:col-span-2">
        <div className="flex justify-center items-center flex-col pb-10 ">
          <p className="flex items-center gap-1 text-xs">
            powered by{" "}
            <span className="flex flex-col items-center leading-tight">
              <span className="text-4xl font-extrabold -tracking-[3px]">
                TYL
              </span>
              <span className="text-[6px] -mt-2">Events</span>
            </span>
          </p>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
