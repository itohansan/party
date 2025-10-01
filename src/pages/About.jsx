import React from "react";
import CarouselGallery from "../components/CarouselGallery";
import { Link } from "react-router-dom";
import { gallery } from "../assets/assets";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";

function About() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-full">
      <div className="relative h-[135vh]">
        {/* Sticky text */}
        <div className="sticky top-0 left-0 w-full h-[50vh] flex justify-center items-center z-[1]">
          {/* HEADER */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About Us</h1>
        </div>

        {/* Image */}
        <div className="relative z-20 bg-no-repeat bg-cover bg-center max-w-full w-[450px] mx-auto h-[80vh] rounded-4xl bg-[url('/images/hi-vip-2.jpeg')]"></div>
      </div>

      <div className="max-w-4xl mx-auto my-20 text-[20px] sm:text-2xl  mb-12 text-left font-bold flex flex-col gap-7 leading-6 tracking-tight">
        {/* Header */}
        <p className="">
          At Party BÜn, we turn moments into memories. From epic concerts to
          intimate gatherings
        </p>
        <p className="">
          our platform makes discovering and booking events seamless and
          exciting.{" "}
        </p>{" "}
        <p className="">
          We’re more than an event hub — we’re a community where connections
          thrive.{" "}
        </p>{" "}
        <p>
          {" "}
          Skip the hassle, embrace the joy, and let every beat write your story.{" "}
        </p>{" "}
        <p>Join us to celebrate life’s best experiences!</p>
      </div>

      <CarouselGallery data={gallery} activeSlide={2} />

      {/* Values */}
      <div className="max-w-5xl mx-auto my-32">
        <h2 className="text-3xl font-bold text-center mb-8">What We Value</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl shadow text-center text-black ">
            <h3 className="text-xl font-semibold  mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Bringing people together through shared passions and interests.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold  mb-2">Simplicity</h3>
            <p className="text-gray-600 text-sm">
              Easy-to-use booking tools that take the stress out of planning.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600 text-sm">
              Every event is crafted to be memorable and worth sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className=" text-center h-1/2   translate-y-20">
        <h2 className="text-2xl font-bold text-[#000814] mb-4">
          Ready to join the experience?
        </h2>
        <Link
          to="/events"
          className="inline-flex justify-center items-center px-5 py-2 bg-[#3772ff] text-[#f8f9fa] rounded-4xl hover:brightness-90 transition shadow-md"
        >
          Explore Events
        </Link>
      </div>

      <Footer className="top-32" />
    </div>
  );
}

export default About;
