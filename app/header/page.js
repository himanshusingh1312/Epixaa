"use client";
import { useState, useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMenu, FiX, FiPhone } from "react-icons/fi"; // Hamburger & Phone Icons

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
          <div className="text-2xl sm:text-3xl font-semibold text-[#9DFF50]">
            Epixaa
          </div>

          {/* NAV LINKS for md and above */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Services", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm lg:text-lg text-white hover:text-[#9DFF50] transition"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CONTACT BUTTON for md and above */}
          <button className="hidden md:flex items-center gap-2 rounded-full bg-[#9DFF50] px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-black hover:opacity-90 transition">
            <FiPhone className="text-white" /> Contact Us
          </button>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 px-6 py-4 bg-gray-700 rounded-2xl flex flex-col gap-4">
            {["Home", "Services", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-base hover:text-[#9DFF50] transition"
              >
                {link}
              </a>
            ))}
           <button className="flex items-center gap-2 rounded-full bg-[#9DFF50] px-4 py-2 text-black text-base font-medium hover:opacity-90 transition">
  <FiPhone className="text-black" /> Contact Us
</button>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
