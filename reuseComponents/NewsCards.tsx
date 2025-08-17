"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface NewsCardProps {
  image: string | StaticImageData;
  header: string;
  subheader: string;
  date: string;
  category: string;
  href?: string;
  onClick?: () => void;
  type?: 'news' | 'event';
}

export default function NewsCard({
  image,
  header,
  subheader,
  date,
  category,
  href,
  onClick,
  type = 'news',
}: NewsCardProps) {
  return (
    <div className="bg-white lg:w-[550px] flex flex-col justify-between">
      <div className="">
        <Image
          src={image}
          alt="image"
          width={420}
          height={240}
          className="w-full h-[240px] object-cover rounded-[4px] mb-4"
        />
        <h2 className="text-[24px] font-[600] leading-[32px] text-[#1E1E1E] mb-[8px]">
          {header}
        </h2>
        <p className="text-[14px] text-[#1C1F22] mb-[8px] leading-[20px]">
          {subheader}
        </p>
        <div className="flex items-center space-x-[8px] mb-[26px]">
          <p className="flex items-center gap-[2px] text-[#A73966] capitalize text-[12px]">
            <Image
              src="/academics.svg"
              alt="academics"
              width={16}
              height={16}
            />
            {category}
          </p>
          <div className="w-[4px] h-[4px] rounded-full bg-[#D1D6DA]" />
          <p
            className="text-[14px] leading-[20px] font-[400] text-[#6F7C89] overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {date}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {type === 'news' && (
          <>
            {href ? (
              <Link 
                href={href}
                className="bg-[white] text-[#61213C] rounded hover:text-[#ce5084] text-left transition-all"
              >
                Read Article
              </Link>
            ) : (
              <button 
                onClick={onClick}
                className="bg-[white] text-[#61213C] rounded hover:text-[#ce5084] text-left transition-all"
              >
                Read Article
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
