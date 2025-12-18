"use client";
import { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Hero2 = () => {
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
    <>
      {/* Section 1 - Marquee */}
      <section
        className="w-full overflow-hidden lg:h-[100px] sm:h-[80px] h-[60px]"
        style={{
          
          background: "linear-gradient(90deg, #84CF29 0%, #1C3300 100%)",
        }}
      >
        <div className="mx-auto max-w-8xl h-full xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
          {/* Marquee wrapper */}
          <div className="flex h-full items-center">
            <div
              className="flex lg:gap-16 sm:gap-12 gap-10 animate-marquee"
              style={{ whiteSpace: "nowrap" }}
            >
              {[
                "WEB DEVELOPMENTS",
                "APP DEVELOPMENTS",
                "UI / UX",
                "AI PRODUCT IMAGES",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 lg:text-[28px] sm:text-[24px] text-[18px] text-white"
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                  
                    lineHeight: "100%",
                  }}
                >
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                  {item}
                </div>
              ))}
              {/* Repeat items for continuous scroll */}
              {[
                "WEB DEVELOPMENTS",
                "APP DEVELOPMENTS",
                "UI / UX",
                "AI PRODUCT IMAGES",
              ].map((item, index) => (
                <div
                  key={"repeat-" + index}
                  className="flex items-center gap-6 text-white"
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "100%",
                  }}
                >
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full bg-white xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12">
        <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 sm:gap-12 gap-6 items-start">
            {/* LEFT CONTENT */}
            <h2
              className="text-black max-w-xl xl:text-[48px] lg:text-[44px] sm:text-[36px] text-[28px]"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 600,
                
                lineHeight: "130%",
                letterSpacing: "0%",
              }}
              data-aos="fade-up"
            >
              Provide the best service with out of the box ideas
            </h2>

            {/* RIGHT CONTENT */}
            <p
              data-aos="fade-up"
              className="text-[#5e646f] max-w-xl lg:text-[18px] sm:text-[16px] text-[16px]"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
              
                lineHeight: "180%",
                letterSpacing: "0%",
              }}
            >
              we are a passionate team dedicated to helping businesses succeed
              in the digital world. With years of experience and a deep
              understanding of the ever-evolving online landscape, we stay at
              the forefront of industry trends and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 14s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Hero2;
