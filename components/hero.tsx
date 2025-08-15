"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = ["/landing.png", "/landing2.png", "/landing3.png"];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="
        relative
        h-[685px] 
        bg-cover bg-center bg-no-repeat 
        flex flex-col md:flex-row justify-between items-center 
         md:pl-[58px]  
        text-white 
        transition-bg duration-500
      "
      style={{ backgroundImage: `url('${images[activeIndex]}')` }}
    >
      {/* Text container */}
      <div
        className="
        w-full
        max-w-full md:max-w-[652px]
        p-6 md:p-0
        mt-auto md:mt-0
        text-white
        relative
        z-10
      "
        style={{
          background: isMobile
            ? "linear-gradient(to top, #3C0B1F 70%, transparent 100%)"
            : "transparent",
        }}
      >
        <h1 className="font-[700] leading-[38px] text-[30px] sm:text-[36px] md:text-[48px]  transition-all duration-300 sm:leading-[44px] md:leading-[60px] mb-6 md:mb-[24px]">
          Ignite Your Future at New City University with a Bold and Global
          Vision!
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] mb-8 md:mb-[52px]">
          Join innovators shaping tomorrow with cutting-edge programs and global
          opportunities.
        </p>

        {/* Buttons container */}
        <div className="relative flex gap-3 ">
          {/* Apply Now */}
          <Link
            href="/admissions"
            className="group bg-[#61213C] md:bg-[#61213C] flex justify-center items-center gap-2 w-full sm:w-[163px] h-[56px] rounded-[4px] hover:cursor-pointer hover:bg-white hover:text-[#61213C] transition-all duration-300"
          >
            <p>Apply Now</p>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={20}
              height={20}
              className="w-[24px] h-[24px] group-hover:hidden"
              />
            <Image
              src="/arrowd.svg"
              alt="arrow hover"
              width={20}
              height={20}
              className="w-[24px] h-[24px] hidden group-hover:block"
            />
          </Link>

          {/* Learn More */}
          <button
            onClick={() => setActiveIndex(1)}
            className="bg-white text-[#61213C] flex justify-center items-center gap-2 w-full sm:w-[135px] h-[56px] rounded-[4px] hover:cursor-pointer hover:bg-[#61213C] hover:text-white transition-all duration-300"
          >
            <p>Learn More</p>
          </button>
        </div>

        {/* Dash indicator - positioned below buttons */}
        <div className="flex gap-3 mt-12">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300`}
              style={{
                width: activeIndex === index ? 80 : 24,
                height: 4,
                backgroundColor:
                  activeIndex === index ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right arrow button - hidden on mobile */}
      <button
        onClick={handleNext}
        className="hidden md:flex bg-[#61213C] h-[56px] w-[72px] rounded-[4px] px-[24px] py-[12px]  justify-center items-center"
        aria-label="Next"
      >
        <Image src="/right.svg" alt="right" width={20}
              height={20} className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
}
