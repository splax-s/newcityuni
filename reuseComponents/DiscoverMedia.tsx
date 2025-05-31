'use client';

import React from 'react';
import Image from 'next/image';

interface DiscoverMediaProps {
  mediaSrc: string;
  title: string;
  description: string;
}

const DiscoverMedia: React.FC<DiscoverMediaProps> = ({
  mediaSrc,
  title,
  description,
}) => {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-full md:max-w-none flex flex-col items-center text-center gap-4 mx-auto rounded-lg">
      <div className="relative w-full h-[200px] sm:h-[240px] rounded-[12px] overflow-hidden">
        <Image
          src={mediaSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 100vw"
          priority={false}
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default DiscoverMedia;
