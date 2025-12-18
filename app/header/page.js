"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <header className="w-full py-4 bg-[url('/ep8.png')] bg-cover bg-center">
      <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
        <div
          className="flex items-center justify-between px-6 py-3 bg-gray-500 rounded-4xl"
          data-aos="fade-up"
        >
          {/* LOGO */}
          <a href="/" className="text-2xl sm:text-3xl font-semibold text-[#9DFF50]">
            Epixaa
          </a>

          {/* NAV LINKS (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white hover:text-[#9DFF50] transition">
              Home
            </a>
            <a href="#services" className="text-white hover:text-[#9DFF50] transition">
              Services
            </a>
            <a href="#examples" className="text-white hover:text-[#9DFF50] transition">
              Projects
            </a>
          </nav>

          {/* CONTACT BUTTON (Desktop) */}
          <button className="hidden md:flex items-center gap-2 rounded-full bg-[#9DFF50] px-6 py-2 text-black font-medium hover:opacity-90 transition">
            <FiPhone className="text-black" /> Contact Us
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-3 px-6 py-4 bg-gray-700 rounded-2xl flex flex-col gap-4">
            <a href="/" onClick={() => setIsOpen(false)} className="text-white">
              Home
            </a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-white">
              Services
            </a>
            <a href="#examples" onClick={() => setIsOpen(false)} className="text-white">
              Projects
            </a>

            <button className="flex items-center gap-2 rounded-full bg-[#9DFF50] px-4 py-2 text-black font-medium">
              <FiPhone /> Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
