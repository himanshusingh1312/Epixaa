"use client";
import { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hire = () => {
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
    <section className="w-full bg-white py-8">
      <div
        className="mx-auto max-w-8xl h-full xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4"
        data-aos="fade-up"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[220px] sm:h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="/ep5.png"
            alt="Hiring Strategy"
            fill
            className="object-cover bg-center"
            priority
          />
        </div>

        {/* TEXT */}
        <p
          className="mt-10 text-center max-w-4xl mx-auto text-[16px] sm:text-[22px] leading-tight"
          style={{
            fontFamily: "Archivo",
            fontWeight: 400,
            color: "#010205",
          }}
          data-aos="fade-up"
        >
          Finding the right talent for your business can be a daunting task.
          Let Catalyst Studio&apos;s hiring agency take the guesswork out of the
          process and help you find the perfect fit for your team
        </p>

        {/* BUTTONS */}
        <div
          className="sm:my-10 my-8 flex items-center justify-center sm:gap-6 gap-4"
          data-aos="fade-up"
        >
          <button className="rounded-full bg-[#84CF29] xl:text-xl lg:text-lg sm:text-md text-sm md:px-10 sm:px-8 px-6 lg:py-4 md:py-3 sm:py-2 py-1.5 text-white font-semibold hover:opacity-90 transition">
            Hire Us
          </button>

          <button className="rounded-full border border-[#010205] xl:text-xl lg:text-lg sm:text-md text-sm md:px-10 sm:px-8 px-6  lg:py-4 md:py-3 sm:py-2 py-1.5  font-semibold text-[#010205] hover:bg-[#010205] hover:text-white transition">
            Schedule Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hire;
