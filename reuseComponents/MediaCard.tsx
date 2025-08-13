"use client";

import Image from "next/image";
import React from "react";

type LayoutType = "top" | "left" | "right" | "landscape";
type MediaType = "image" | "video";

interface MediaCardProps {
  mediaSrc: string;
  mediaType?: MediaType;
  title: string;
  description: string;
  buttonText?: string;
  layout?: LayoutType;
}

const MediaCard: React.FC<MediaCardProps> = ({
  mediaSrc,
  mediaType = "image",
  title,
  description,
  buttonText = "Learn More",
  layout = "top",
}) => {
  const isHorizontal =
    layout === "left" || layout === "right" || layout === "landscape";
  const isMediaFirst = layout === "left" || layout === "top";

  const media = (
    <div className={`w-full ${isHorizontal ? "md:w-1/2" : ""}`}>
      {mediaType === "image" ? (
        <img
          src={mediaSrc}
          alt={title}
          className="w-full object-cover rounded-[4px]"
        />
      ) : (
        <video
          src={mediaSrc}
          controls
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  );

  const content = (
    <div
      className={` bg-white text-black ${isHorizontal ? "md:w-1/2" : "w-full"} flex flex-col justify-between `}
    >
      <div>
        <h2 className="text-2xl font-bold mb-2 w-full">{title}</h2>
        <p className="mb-[20px] text-[14px] text-gray-700 w-full">
          {description}
        </p>
      </div>
      <button className="bg-white text-[#61213C] flex items-center py-2 rounded  transition-all duration-300 w-fit">
        {buttonText}
        <Image src="arrowd.svg" alt="arrow" width={20} height={20} />
      </button>
    </div>
  );

  return (
    <div
      className={`flex flex-col ${isHorizontal ? "md:flex-row" : ""} ${
        !isMediaFirst && isHorizontal ? "md:flex-row-reverse" : ""
      } gap-4 h-full`} // <-- ADDED h-full
    >
      {media}
      {content}
    </div>
  );
};

export default MediaCard;
