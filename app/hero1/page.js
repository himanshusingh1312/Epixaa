"use client";
import { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero1 = () => {
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
    <section className="relative bg-[#222222] py-12 overflow-hidden bg-[url('/ep8.png')] ">
      <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20 md:gap-16 sm:gap-12 gap-8">
          
          {/* LEFT CONTENT */}
          <div className="xl:space-y-6 lg:space-y-5 sm:space-y-4 space-y-2"  data-aos="fade-up"> 
            {/* Epixaa */}
            <h1
              className="text-white xl:text-[130px] lg:text-[100px] md:text-[80px] sm:text-[70px]  text-[60px]"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 800,
              
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Epixaa
            </h1>

            {/* Digital Agency */}
            <h2
              className="xl:text-[40px] lg:text-[35px] sm:text-[30px] text-[25px]"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 800,
               
                color: "#84CF29",
              }}
            >
              Digital Agency
            </h2>

            {/* Description */}
            <p
              className="sm:mt-8 mt-6 max-w-xl text-white/70 lg:text-2xl sm:text-xl text-lg"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 400,
              
                lineHeight: "32px",
              }}
            >
              Dynamic and innovative design agency that brings creative ideas
              to life. We works with a wide range of clients to develop unique
              and effective branding, web design, and graphic design solutions.
            </p>

            {/* CTA */}
            <button
              className="mt-10 inline-flex items-center gap-3 rounded-full px-10 sm:py-3 py-2 sm:text-lg text-md font-semibold text-white transition hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #84CF29 0%, #436915 100%)",
                fontFamily: "DM Sans",
              }}
            >
              Schedule Call
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center lg:justify-end"  data-aos="fade-up">
            {/* Image 1 */}
            <div className=" rounded-3xl">
              <Image
                src="/ep7.png"
                alt="Product Image 1"
                width={630}
                height={450}
                className="rounded-2xl"
              />
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero1;
