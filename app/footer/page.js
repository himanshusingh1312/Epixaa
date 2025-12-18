"use client";
import { useEffect , useState} from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
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
    <footer className="w-full bg-[#1e1e1e] py-20">
      <div className="mx-auto max-w-8xl xl:px-20 lg:px-16 md:px-12 sm:px-6 px-4">
        <div className="flex flex-col justify-between min-h-[320px]"  data-aos="fade-up">

          {/* TOP CONTENT */}
          <div className="flex flex-col md:flex-row justify-between gap-16">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2
              className="lg:text-[40px] sm:text[32px] text-[26px]"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 900,
                  
                  lineHeight: "100%",
                  color: "#84CF29",
                }}
              >
                Epixaa Digital Agency
              </h2>

              <p
                className="mt-6 sm:text-[18px] lg:text-[20px] text-[16px]"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 400,
                
                  lineHeight: "170%",
                  color: "#DDDDDD",
                }}
              >
                Dynamic and innovative design agency that brings creative ideas to
                life. We works with a wide range of clients to develop unique and
                effective branding, web design, and graphic design solutions.
              </p>
            </div>

            {/* RIGHT NAV LINKS */}
            <div className="flex flex-col gap-4 text-right items-center justify-center">
              {["Home", "Services", "FAQ", "Projects", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white sm:text-lg text-md font-medium hover:text-[#84CF29] transition-colors"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="sm:mt-16 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <span
              style={{
                fontFamily: "DM Sans",
                fontWeight: 400,
                fontSize: "14px",
                color: "#DDDDDD",
              }}
            >
              Copyright © 2023 Catalyst Studio. All rights reserved.
            </span>

            {/* SOCIAL ICONS */}
            <div className="flex items-center sm:gap-4 gap-2">
              {/* Facebook */}
              <a href="#">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#2a2a2a" />
                  <path
                    d="M13.5 8.5H15V6h-1.5C11.6 6 11 7.4 11 8.8V10H9.5v2H11v6h2v-6h1.5l.5-2H13V8.9c0-.3.2-.4.5-.4Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#2a2a2a" />
                  <path
                    d="M8.5 10.5h-2V17h2v-6.5Zm-1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 1h2v.9h.03c.28-.53.97-1.1 2-1.1 2.14 0 2.54 1.41 2.54 3.24V17h-2v-3.2c0-.77-.02-1.77-1.08-1.77-1.08 0-1.24.84-1.24 1.71V17h-2v-6.5Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#2a2a2a" />
                  <path
                    d="M12 6c-3.3 0-6 2.7-6 6 0 2.64 1.72 4.88 4.1 5.67.3.06.4-.13.4-.29v-1.02c-1.67.36-2.02-.8-2.02-.8-.27-.7-.66-.88-.66-.88-.54-.36.04-.35.04-.35.6.04.92.62.92.62.53.92 1.4.66 1.74.5.05-.39.2-.66.36-.81-1.33-.15-2.73-.66-2.73-2.96 0-.65.23-1.18.6-1.6-.06-.15-.26-.77.06-1.6 0 0 .5-.16 1.65.6a5.7 5.7 0 0 1 3 0c1.15-.76 1.65-.6 1.65-.6.32.83.12 1.45.06 1.6.38.42.6.95.6 1.6 0 2.3-1.4 2.8-2.73 2.96.21.18.4.54.4 1.1v1.63c0 .16.1.35.4.29A6.01 6.01 0 0 0 18 12c0-3.3-2.7-6-6-6Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>

              {/* Dribbble */}
              <a href="#">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#2a2a2a" />
                  <path
                    d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
