"use client";

import React from "react";

interface JobCardProps {
  title: string;
  department: string;
  text: string;
  type: string;
  deadline: string;
}

export default function JobCard({
  title,
  department,
  type,
  text,
  deadline,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-[8px] border lg:w-[420px] border-[#DDE0E3] p-4 flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-[20px] font-semibold text-[#1E1E1E] mb-[8px]">
          {title}
        </h2>
        <p className="text-[12px] text-[#4A4A4A] mb-[8px]">
          <span className="text-[12px] leading-[18px] text-[#6f7c89]">
            Department:
          </span>{" "}
          {department}
        </p>
        <p
          className="text-sm text-[14px] leading-[20px] font-[400] text-[#1C1F22] mb-[8px] overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {text}
        </p>
        <p className="text-[12px] text-[#4A4A4A]">
          <span className="text-[12px] leading-[18px] text-[#6f7c89]">
            Employment Type:
          </span>{" "}
          {type}
        </p>
        <p className="text-[12px] text-[#4A4A4A]">
          <span className="text-[12px] leading-[18px] text-[#6f7c89]">
            Deadline:
          </span>{" "}
          {deadline}
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#61213C] w-[50%] text-white px-4 py-2 rounded hover:bg-white hover:text-[#61213C] border border-[#61213C] transition-all">
          Apply
        </button>
        <button className="border px-4 py-2 rounded w-[50%] text-[#61213C] border-[#61213C] hover:bg-[#61213C] hover:text-white transition-all">
          Save ♡
        </button>
      </div>
    </div>
  );
}
