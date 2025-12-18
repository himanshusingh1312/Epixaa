"use client";
import { useEffect } from "react";
import { useState } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Example = () => {
   useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-out-cubic",
          once: false,
          offset: 80,
        });
      
        AOS.refresh();
      }, []);
  const [active, setActive] = useState("UI/UX Design");
  const tabs = [
    "UI/UX Design",
    "Web Development",
    "App Developments",
    "AI Product Images",
  ];

  return (
   <section className="relative w-full py-16 overflow-hidden"  id="examples">
  {/* NOISE BACKGROUND */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/noisebg.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      opacity: 0.6,
    }}
  />

  {/* DARK + BLUR OVERLAY */}
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: "rgba(2, 6, 9, 0.4)", // #020609
      backdropFilter: "blur(64px)",
      WebkitBackdropFilter: "blur(64px)",
    }}
  />

  {/* CONTENT */}
  <div className="relative mx-auto max-w-8xl h-full xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
        
        {/* HEADING */}
        <h2
        data-aos="fade-up"
          className="text-center text-white sm:mb-14 mb-10 lg:text-[48px] md:text-[32px] sm:text-[28px] text-[24px]"
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
          
            lineHeight: "130%",
          }}
        >
          Real-world examples of how we have helped companies
          <br />
          achieve their marketing objectives.
        </h2>

        {/* TABS */}
       <div className="flex justify-center sm:gap-6 sm:mb-16 gap-4 mb-12 flex-wrap" data-aos="fade-up">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActive(tab)}
      className="rounded-full px-8 sm:py-3 py-2 transition-all"
      style={{
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 600,
        backgroundColor: active === tab ? "#84CF29" : "#FFFFFF",
        color: active === tab ? "#000000" : "#000000",
        border: active === tab ? "none" : "1px solid #FFFFFF",
      }}
    >
      {tab}
    </button>
  ))}
</div>

        {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-6 justify-items-center">
  {["/ep6.png", "/ep6.png", "/ep6.png"].map((img, index) => (
    <div
      key={index}
      className={`
        relative overflow-hidden
        ${index > 0 ? "hidden sm:block" : ""}
      `}
      style={{
        borderRadius: "30px",
        border: "1px solid #FFFFFF4D",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(6px)",
      }}
      data-aos="fade-up"
    >
      {/* RESPONSIVE SIZE */}
      <div
        className="
          relative
          w-[300px] h-[300px]
          sm:w-[360px] sm:h-[360px]
          lg:w-[420px] lg:h-[420px]
        "
      >
        <Image
          src={img}
          alt={`Project ${index + 1}`}
          fill
          className="object-cover rounded-[30px]"
        />

        {/* LABEL */}
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm opacity-70 mb-1">
            {index === 0
              ? "Ai Corporation. 2023"
              : "Lancer Corporation. 2023"}
          </p>
          <p className="text-lg font-semibold">
            {index === 0
              ? "Ai Wave – Ai Chatbot Mobile App"
              : "App Lancer – Freelance Mobile App"}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Example;
