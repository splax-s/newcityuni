'use client';

import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imageSrc,
  name,
  position,
  description,
}) => {
  return (
    <div className="flex flex-col text-left w-[280px] sm:w-auto rounded-md cursor-pointer hover:transform hover:scale-105 transition-all duration-300 group">
      {/* Circular Image with Border */}
      <div className="relative w-32 h-32 rounded-full border-4 border-[#61213C] overflow-hidden mb-4 group-hover:border-[#4a1930] transition-colors duration-300">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="128px"
          priority
        />
      </div>

      {/* Text Content */}
      <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#61213C] transition-colors duration-300">{name}</h3>
      <p className="text-sm text-[#61213C] font-medium mb-2">{position}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TeamCard;
