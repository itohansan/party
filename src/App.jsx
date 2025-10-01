import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Party from "./pages/Party";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Events from "./pages/Events";
import FakeLoad from "./components/FakeLoad";
import NavBar from "./components/NavBar";
import SpecialEventPage from "./pages/SpecialEventPage";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <FakeLoad />;
  }
  return (
    <div>
      {showLoader && <FakeLoad />}
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/special" element={<SpecialEventPage />} />
        {/* <Route path="/events/id" element={<Events />} /> */}
        <Route path="/party" element={<Party />} />
      </Routes>
    </div>
  );
};

export default App;
