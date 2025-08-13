"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#61213C] flex flex-col pt-20 text-white">
      {/* Top Section */}
      <div className="py-3 px-5 md:px-[58px] flex flex-col md:flex-row md:justify-between gap-10 transition-all duration-300">
        {/* Logo & Contact */}
        <div className="w-full md:w-[264.8px] text-left gap-[8px] flex flex-col">
          <div className="mb-6">
            <Image
              src="/Logo2.png"
              alt="logo2"
              width={150}
              height={40}
              className="w-[130px] h-[40px]"
            />
          </div>
          <p className="mb-[24px]">
            Km. 50, Lagos-Ibadan Expressway, Ayetoro, Ogun State, Nigeria
          </p>
          <h1 className="font-semibold text-base leading-6">Contact</h1>
          <Link href="/" className="font-normal text-sm leading-5 block">
            help@newcity.edu.ng
          </Link>
          <Link href="/" className="font-normal text-sm leading-5 block mb-2">
            admissions@newcity.edu.ng
          </Link>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/x.svg" alt="X" width={24} height={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Academics */}
        <div className="w-full md:w-[264.8px] text-left gap-[8px] flex flex-col">
          <h1 className="text-[#E6A46D] font-semibold text-base leading-6">
            Academics
          </h1>
          <Link
            href="/academics"
            className="font-normal text-sm leading-5 block"
          >
            Courses & Programmes
          </Link>
          <Link
            href="/academics"
            className="font-normal text-sm leading-5 block"
          >
            Faculty
          </Link>
          <Link
            href="/academics"
            className="font-normal text-sm leading-5 block"
          >
            Departments
          </Link>
        </div>

        {/* Admissions */}
        <div className="w-full md:w-[264.8px] text-left gap-[8px] flex flex-col">
          <h1 className="text-[#E6A46D] font-semibold text-base leading-6">
            Admissions
          </h1>
          <Link
            href="/academics/Foundation"
            className="font-normal text-sm leading-5 block"
          >
            Pre-Degree
          </Link>
          <Link
            href="/admissions/undergraduate"
            className="font-normal text-sm leading-5 block"
          >
            Undergraduate
          </Link>
          <Link
            href="/admissions/PostGrad"
            className="font-normal text-sm leading-5 block"
          >
            Post Graduate
          </Link>
        </div>

        {/* About */}
        <div className="w-full md:w-[264.8px] text-left gap-[8px] flex flex-col">
          <h1 className="text-[#E6A46D] font-semibold text-base leading-6">
            About the NCU
          </h1>
          <Link
            href="/about-us/vision"
            className="font-normal text-sm leading-5 block"
          >
            Vision
          </Link>
          <Link
            href="/about-us/mission"
            className="font-normal text-sm leading-5 block"
          >
            Mission
          </Link>
          <Link
            href="/news/news"
            className="font-normal text-sm leading-5 block"
          >
            News
          </Link>
          <Link
            href="/news/events"
            className="font-normal text-sm leading-5 block"
          >
            Events
          </Link>
          <Link href="/" className="font-normal text-sm leading-5 block">
            Explore New City
          </Link>
        </div>

        {/* Portal */}
        <div className="w-full md:w-[264.8px] text-left gap-[8px] flex flex-col">
          <h1 className="text-[#E6A46D] font-semibold text-base leading-6">
            Portal
          </h1>
          <Link href="/student" className="font-normal text-sm leading-5 block">
            Students
          </Link>
          <Link
            href="/lecturer"
            className="font-normal text-sm leading-5 block"
          >
            Staff
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row md:justify-between text-left items-left gap-4 bg-[#46182B] py-3 px-5 md:px-[58px] text-sm  mt-[20px] sm:mt-[80px]">
        <p className="text-left">Copyright {currentYear} New City University</p>

        <div className="flex flex-col md:flex-row md:gap-6 gap-1 items-left text-left">
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:underline">
            Accessibility
          </Link>
          <Link href="/" className="hover:underline">
            Cookies
          </Link>
          <Link href="/" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>

        <Link href="#navbar" scroll={true} className="scroll-smooth">
          <button className="text-[#61213C] bg-[#FCF3ED] px-6 py-1 rounded-md flex gap-[8px]">
            <Image src="/top.svg" alt="top" width={16} height={16} />
            Back To Top
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
