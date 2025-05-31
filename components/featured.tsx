'use client';

import MediaCard from '@/reuseComponents/MediaCard';
import Image from 'next/image';

export default function Feature() {
  return (
    <div className="mx-[24px] md:mx-[58px] my-[80px] transition-all duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-[36px]">
        <p className="text-[20px] md:text-[30px] leading-[28px] md:leading-[38px] text-black font-[700]">
          Featured Courses
        </p>
        <button className="flex items-center gap-[8px] p-[8px] hover:cursor-pointer">
          <p className="text-[#61213C] text-[14px] md:text-[16px]">Learn More</p>
          <Image
            src="/rightd.svg"
            alt="right arrow icon"
            width={16}
            height={16}
            className="w-auto h-auto"
          />
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-[20px]">
        {/* Left Large Card */}
        <div className="w-full md:w-1/2 h-full">
          <MediaCard
            mediaSrc="/feature.png"
            mediaType="image"
            title="Computer Science"
            description="Learn all about our Computer Science programme, your vision for a degree in Computer Sciences."
            buttonText="Apply Now"
            layout="top"
          />
        </div>

        {/* Right Column with Smaller Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
          {[
            {
              mediaSrc: '/feature1.png',
              title: 'Electrical Engineering',
            },
            {
              mediaSrc: '/feature2.png',
              title: 'Digital Marketing',
            },
            {
              mediaSrc: '/feature3.png',
              title: 'Micro Biology',
            },
          ].map((course, index) => (
            <div
              key={index}
              className="w-full h-auto md:h-[177px] overflow-hidden"
            >
              <MediaCard
                mediaSrc={course.mediaSrc}
                mediaType="image"
                title={course.title}
                description="Learn all about our Computer Science programme, your vision for a degree in Computer Sciences."
                buttonText="Apply Now"
                layout="left"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
