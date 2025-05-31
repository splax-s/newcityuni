"use client";

import { useState } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const [searchTerm, setSearchTerm] = useState("");

  const options = ["Undergraduate", "Masters", "PHD", "Diploma"];

  return (
    <div className="flex flex-col md:flex-row transition-all duration-300">
      <div className="bg-[#61213C] p-[32px] md:p-[58px] md:w-[486px] w-full">
        <p className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white">
          Find a Course
        </p>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
          Study with us in August or October 2025
        </p>
      </div>

      <div className="p-[32px] md:p-[58px] bg-[#F2D1B6] w-full flex flex-col md:flex-row items-stretch gap-[12px]">
        <div className="relative w-full md:w-64">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-none h-[56px] rounded-[4px] px-4 py-2 flex justify-between items-center text-[#545D66] hover:bg-gray-50"
          >
            <span>{selected}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-auto">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-black"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative w-full">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#545D66]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg> */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for courses"
            className="w-full bg-white border border-none h-[56px] rounded-[4px] pl-10 pr-4 py-2 text-[#545D66] placeholder:text-[#545D66]"
          />
        </div>
      </div>
    </div>
  );
}
