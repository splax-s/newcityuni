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
              title: 'Accounting',
              description: 'Providing a robust academic and professional foundation in financial reporting, auditing, taxation, and accounting systems. The program is tailored to meet the standards of top accounting bodies and prepare students for national and international certifications.'
            },
            {
              mediaSrc: '/feature2.png',
              title: 'Computer Science',
              description: 'Delivers a rigorous curriculum focused on algorithms, programming, software systems, and artificial intelligence. Students are trained to design and build innovative software solutions that address today’s technological challenges.'
            },
            {
              mediaSrc: '/feature3.png',
              title: 'Microbiology',
              description: 'Exploring the world of microorganisms and their effects on health, agriculture, and the environment. The program trains students in both industrial and medical microbiology through rigorous lab-based education.'
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
                description={course.description}
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
