import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipButton from "./FlipButton";
import { Link, useLocation } from "react-router-dom";
import { getMenuLinks, residents } from "../assets/assets";

import Carousel3D from "./Carousel3D";

const WaveText = ({ text }) => {
  return (
    <p className="text-3xl font-bold text-[#D4AF37] flex space-x-1">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            delay: i * 0.15,
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("select");
  const dropDownRef = useRef(null);

  // LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // handle logout logic
      setIsLoggedIn(false);
    } else {
      // handle login logic
      setIsLoggedIn(true);
    }
  };
  const menuLinks = getMenuLinks(isLoggedIn);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  // prevent bg scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center fixed z-50 left-1/2 -translate-x-1/2 top-0 w-full">
          <motion.div
            ref={dropDownRef}
            animate={{ borderRadius: isOpen ? "2rem 2rem 0 0" : "5rem" }}
            transition={{ duration: 0.09, ease: "easeInOut" }}
            className={`flex flex-col mt-4 sm:w-[410px] w-[90%] max-w-[410px]  relative   ${
              isOpen
                ? "bg-[#000814] text-[#f8f9fa]"
                : "bg-[#f8f9fa] text-[#000814]"
            }`}
          >
            <div className="flex h-[56px] justify-between items-center px-1">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center justify-center  ${
                    isOpen ? "hover:bg-[#a5a5a5]" : "hover:bg-[#a5a5a5]/40"
                  } h-[50px] rounded-3xl px-4 active:scale-105 transition-transform duration-150  cursor-pointer`}
                >
                  <h1 className="text-[20px] sm:text-2xl font-bold tracking-tighter">
                    PARTY <span className="relative ">BÜN</span>
                  </h1>
                </div>
              </Link>
              <button
                id="nav.toggle"
                className={`relative z-50 ${
                  isOpen
                    ? "bg-none hover:bg-[#a5a5a5]"
                    : "bg-[#a5a5a5]/40  hover:bg-[#a5a5a5]"
                }  w-[90px] h-[50px] flex text-center items-center justify-center rounded-3xl hover:bg- text-[16px] font-normal active:scale-105 transition-transform duration-150 cursor-pointer`}
                onClick={toggleDropDown}
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "87vh", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.03, ease: "easeInOut" }}
                  className="absolute left-0 top-14 w-full bg-[#000814] p-2 shadow-lg rounded-b-4xl overflow-y-auto z-20 "
                >
                  <ul className="flex flex-col justify-center items-center gap-2 text-3xl font-Header cursor-pointer z-30">
                    {menuLinks.map((link, index) => (
                      <div key={index}>
                        {link.name === "LOGIN" || link.name === "LOGOUT" ? (
                          <FlipButton
                            onClick={() => {
                              handleAuthClick();
                              setIsOpen(false);
                            }}
                            frontText={link.name}
                            backText={`${link.name}!`}
                          />
                        ) : (
                          <Link to={link.path} onClick={() => setIsOpen(false)}>
                            <FlipButton
                              frontText={link.name}
                              backText={`${link.name}!`}
                            />
                          </Link>
                        )}
                      </div>
                    ))}
                  </ul>

                  <Carousel3D
                    slides={residents}
                    width={300}
                    height={250}
                    gap={2}
                  />
                  <footer className="flex items-center justify-center h-16 text-[12px]">
                    &copy; 2025 All Rights Reserved
                  </footer>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
