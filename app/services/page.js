"use client";
import { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Services = () => {
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
      {/* TOP BAR */}
      <section id="services"
      data-aos="fade-up"
        className="w-full flex items-center"
        style={{
          height: "70px",
          background: "linear-gradient(90deg, #285B00 0%, #9DFF50 100%)",
        }}
      >
        <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
          <h2
            className="text-white sm:text-[30px] text-[26px]"
            style={{
              fontFamily: "DM Sans",
              fontWeight: 600,
              
            }}
          >
            Our Services
          </h2>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full bg-white sm:py-20 py-16">
        <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-20 items-start">

            {/* LEFT SIDE — 40% */}
            <div data-aos="fade-up">
              <p
                className="sm:mb-10 mb-6 max-w-md text-[20px] text-[18px]"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 400,
              
                  color: "#444444",
                }}
              >
                Epixaa offers a range of design services that are tailored
                to meet the unique needs of each client
              </p>

              {[
                { no: "01", title: "UI/UX Design", active: true },
                { no: "02", title: "Web Development" },
                { no: "03", title: "App Developments" },
                { no: "04", title: "Ai Product Images" },
              ].map((item, index) => (
             <div
  key={index}
  className={`mb-6 flex items-center justify-between rounded-full px-8 lg:py-6 sm:py-4 py-3 transition
    ${!item.active ? "hover:bg-gray-100 cursor-pointer" : ""}
  `}
  style={{
    border: item.active ? "none" : "1px solid #DDDDDD",
    background: item.active ? "#0E0E0E" : "transparent",
    color: item.active ? "#FFFFFF" : "#444444",
  }}
>
  <div className="flex items-center gap-6">
    <span
      className="lg:text-[22px] sm:text-[20px] text-[18px] "
      style={{
        fontFamily: "DM Sans",
        fontWeight: 700,
        
        color: item.active ? "#9DFF50" : "#444444",
      }}
    >
      {item.no}
    </span>

    <span
    className="lg:text-[20px] sm:text-[18px] text-[16px]"
      style={{
        fontFamily: "DM Sans",
        fontWeight: 500,
        
      }}
    >
      {item.title}
    </span>
  </div>

  <span className="text-xl">→</span>
</div>

              ))}
            </div>
{/* RIGHT SIDE — 60% */}
<div
  className="
    flex flex-col md:flex-row
    gap-4 md:gap-2
  "
  data-aos="fade-up"
>
  {/* BIG IMAGE */}
  <div
    className="
      flex items-center justify-center
      rounded-[24px] md:rounded-[32px]
      w-full md:w-[520px]
      h-[420px] sm:h-[480px] md:h-[650px]
      p-4 sm:p-5 md:p-8
    "
  >
    <Image
      src="/ep2.png"
      alt="Service Image Large"
      width={450}
      height={580}
      className="
        object-contain
        rounded-[20px] md:rounded-[32px]
        border border-gray-400
        shadow-md
      "
      priority
    />
  </div>

  {/* TWO SMALL IMAGES */}
  <div
    className="
      flex flex-col
      gap-4 md:gap-0
      justify-between
      w-full md:w-auto
      h-auto md:h-[650px]
    "
  >
    {/* SMALL IMAGE 1 */}
    <div
      className="
        hidden items-center justify-center
        rounded-[20px] md:flex
        w-full md:w-[320px]
        h-[220px] sm:h-[260px] md:h-[320px]
      "
    >
      <Image
        src="/ep3.png"
        alt="Service Image Small 1"
        width={280}
        height={240}
        className="
          object-contain
          rounded-[18px] md:rounded-[32px]
          border border-gray-400
          shadow-md
        "
      />
    </div>

    {/* SMALL IMAGE 2 */}
    <div
      className="
        hidden items-center justify-center
        rounded-[20px] md:flex
        w-full md:w-[320px]
        h-[220px] sm:h-[260px] md:h-[320px]
      "
    >
      <Image
        src="/ep4.png"
        alt="Service Image Small 2"
        width={280}
        height={240}
        className="
          object-contain
          rounded-[18px] md:rounded-[32px]
          border border-gray-400
          shadow-md
        "
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
