'use client';

import Image from 'next/image';

export default function Benefits() {
  return (
    <div className="px-[24px] md:px-[58px] py-[80px] text-black hidden sm:block">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-[20px] transition-all duration-300">
        {/* Text Section */}
        <div className="w-full md:w-[50%]">
          <div className="mb-[36px]">
            <h1 className="text-[28px] md:text-[36px] font-[700] leading-[36px] md:leading-[44px] mb-[24px]">
              Discover the Unmatched Benefits of Studying at NCU
            </h1>
            <p className="text-[16px] font-[400] leading-[24px]">
              At New City University, we offer a vibrant learning environment that fosters personal and professional growth. Our diverse programmes prepare students for a wide range of career opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px]">
            <div>
              <h2 className="text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] mb-[8px]">
                Career Opportunities
              </h2>
              <p className="text-[16px] font-[400] leading-[24px]">
                Gain skills and knowledge that lead to rewarding careers in various fields.
              </p>
            </div>
            <div>
              <h2 className="text-[20px] md:text-[24px] font-[600] leading-[28px] md:leading-[32px] mb-[8px]">
                Diverse Programs
              </h2>
              <p className="text-[16px] font-[400] leading-[24px]">
                Choose from a wide range of courses tailored to your interests and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] relative h-[300px] md:h-[520px]">
          <Image
            src="/benefits.png"
            alt="Students benefiting from education"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}
