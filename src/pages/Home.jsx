import React, { useState } from "react";

import LandingPage from "../components/LandingPage";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Footer className="top-24 sm:top-80 md:-top-48" />
    </div>
  );
};

export default Home;
