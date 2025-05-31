// components/SectionHeader.tsx
"use client"; // 👈 This makes it a Client Component

import Image from "next/image";
import React from "react";

interface SectionHeaderProps {
  title?: string;
  currentCount: number;
  totalCount: number;
  placeholder?: string;
  filterLabel?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  searchIconSrc?: string;
  filterIconSrc?: string;
}

const SectionHeader = ({
  title = "All Items",
  currentCount,
  totalCount,
  placeholder = "Search...",
  filterLabel = "Filter",
  onSearchChange,
  onFilterClick,
  searchIconSrc = "/mag2.svg",
  filterIconSrc = "/filter.svg",
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-[40px] w-full">
      <div className="mb-[24px] lg:mb-0">
        <h1 className="text-black text-[24px] font-[600] leading-[32px]">
          {title}
        </h1>
        <p className="text-[#545D66] text-[16px] leading-[24px]">
          Showing {currentCount} of {totalCount} results
        </p>
      </div>

      <div className="flex gap-[24px] overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center rounded-[4px] border w-full lg:w-auto border-[#919BA5] bg-[#F8F8F8] px-3">
          <Image
            src={searchIconSrc}
            alt="Search"
            width={24}
            height={24}
            className="mr-2 w-[24px] h-[24px]"
          />
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="bg-[#61213C] rounded-[4px] text-white px-4 flex items-center gap-2 text-sm"
        >
          <Image
            src={filterIconSrc}
            alt="Filter"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
          />
          <span className="hidden lg:block">{filterLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
