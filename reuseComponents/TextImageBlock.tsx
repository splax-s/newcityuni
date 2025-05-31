import React from "react";
import Image from "next/image";

interface TextImageBlockProps {
  text: string;
  imageSrc: string;
  imageAlt?: string;
}

const TextImageBlock: React.FC<TextImageBlockProps> = ({
  text,
  imageSrc,
  imageAlt = "Image",
}) => {
  return (
    <div className="w-full h-[220px] flex flex-col lg:flex-row">
      {/* Text Area */}
      <div className="w-full lg:w-[30%] bg-[#61213C] p-4 flex items-center lg:justify-center text-left lg:text-center">
        <p className="text-base font-medium text-white text-[30px] lg:text-[48px]">{text}</p>
      </div>

      {/* Image Area */}
      <div className="w-full lg:w-[70%]  relative h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default TextImageBlock;
