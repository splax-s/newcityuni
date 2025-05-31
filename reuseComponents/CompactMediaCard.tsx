"use client";

import React from "react";
import Image from "next/image";

interface CompactMediaCardProps {
  mediaSrc: string;
  title: string;
  description: string;
  buttonText?: string;
}

const CompactMediaCard: React.FC<CompactMediaCardProps> = ({
  mediaSrc,
  title,
  description,
  buttonText = "Learn More",
}) => {
  return (
    <div className="flex flex-col sm:flex-col items-start gap-4  rounded-md ">
      {/* Optimized Image */}
      <div className="w-[68px] h-[68px] relative flex-shrink-0">
        <Image
          src={mediaSrc}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 640px) 68px"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between text-left">
        <div>
          <h3 className="text-base font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <button className="mt-3 text-[#61213C] text-sm font-medium flex items-center gap-1 hover:underline">
          {buttonText}
          <Image src="/arrowd.svg" alt="arrow" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default CompactMediaCard;
