"use client";

import React from "react";
import Image from "next/image";

interface NewsCardProps {
  mediaSrc: string;
  title: string;
  buttonText?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  mediaSrc,
  title,
  buttonText = "Read More",
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-1 lg:gap-4 rounded-md p-4">
      {/* Image on the left (or top on mobile) */}
      <div className="relative w-full sm:w-[140px] md:w-[700px] lg:w-[316px] h-[200px] rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={mediaSrc}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 700px, 316px"
        />
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-between h-auto lg:h-[177px]">
        <h3 className="text-base font-semibold text-black mb-2">{title}</h3>
        <button className="text-[#61213C] text-sm font-medium flex items-center gap-1 mt-auto">
          {buttonText}
          <Image
            src="/arrowd.svg"
            alt="arrow"
            width={16}
            height={16}
            className="inline"
          />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
