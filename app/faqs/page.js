"use client";
import { useEffect, useState } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Digital marketing improves visibility through SEO, content marketing, paid advertising, and social media strategies that drive targeted traffic and improve search rankings.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "Results vary depending on strategy, competition, and goals. SEO may take months, while paid campaigns can show results within weeks.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success is measured using KPIs such as traffic, conversions, engagement, ROI, and lead quality through analytics and reporting tools.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20">

          {/* LEFT CONTENT */}
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#010205]">
              FAQs
            </h2>

            <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-[#010205]">
              As a leading digital agency, we are dedicated to providing
              comprehensive educational resources and answering frequently
              asked questions to help our clients.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <button className="rounded-full border border-[#010205] px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#010205] hover:bg-[#010205] hover:text-white transition">
                More Questions
              </button>

              <a
                href="#"
                className="text-xs sm:text-sm font-semibold underline text-[#010205]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT FAQ ACCORDION */}
          <div className="border-t border-[#010205]" data-aos="fade-up">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#010205] py-4 sm:py-6"
              >
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <h3 className="text-base sm:text-lg font-semibold pr-6 text-[#010205]">
                    {item.question}
                  </h3>

                  <span className="text-xl sm:text-2xl font-light text-[#010205]">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[#010205]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faqs;
