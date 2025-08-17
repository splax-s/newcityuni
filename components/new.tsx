'use client';

import Image from 'next/image';
import Link from 'next/link';

import NewsCard from "@/reuseComponents/NewsCard";
import { newsData } from "@/data/newsAndEvents";

export default function News() {
  // Get the latest 3 news items for the homepage
  const latestNews = newsData.slice(0, 3);

  return (
    <div className="bg-[#FCF3ED] text-black flex flex-col lg:flex-row gap-8 md:gap-0 px-6 md:px-[58px] py-[80px] transition-all duration-300">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-between items-center lg:flex-col lg:justify-start lg:block">
        <h1 className="text-[28px] lg:text-[36px] font-[700] lg:mb-[20px]">
          Latest News from NCU
        </h1>
        <Link href="/news" className="text-[#61213C] text-sm font-medium flex items-center gap-1 hover:text-[#7D2B4D] transition-colors">
          View All
          <Image
            src="/rightd.svg"
            alt="right arrow icon"
            width={16}
            height={16}
            className="w-auto h-auto"
          />
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {latestNews.map((news) => (
          <NewsCard
            key={news.id}
            mediaSrc={news.image}
            title={news.header}
            href={`/news/article/${news.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
