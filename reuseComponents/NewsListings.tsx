// components/NewsListings.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewsCard from "./NewsCards";

const NewsListings = () => {
  const news = Array.from({ length: 19 }, (_, i) => ({
    id: i,
    image: "/newscard.png",
    header: "Global Careers via New City’s Postgraduate Programs",
    subheader: "New City’s PGD, Master’s, and PhD programs launch global careers in 2–6 semesters!",
    date: "08 23 2025",
    category: "academics"
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = news.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(news.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="mx-2">
      <div className="flex flex-col lg:flex-row justify-between mb-[40px] w-full">
        <div className="mb-[24px] lg:mb-0">
          <h1 className="text-black text-[24px] font-[600] leading-[32px]">
            All News
          </h1>
          <p className="text-[#545D66] text-[16px] leading-[24px]">
            Showing {currentJobs.length} of {news.length} results
          </p>
        </div>

        <div className="flex gap-[24px] overflow-hidden">
          <div className="flex items-center rounded-[4px] border w-full lg:w-auto h-full border-[#919BA5] bg-[#F8F8F8] px-3">
            <Image
              src="/mag2.svg"
              alt="Search"
              width={16}
              height={16}
              className="mr-2 w-[24px] h-[24px]"
            />
            <input
              type="text"
              placeholder="Search News, e.g Admission Dates"
              className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
            />
          </div>

          <button className="bg-[#61213C] rounded-[4px] text-white px-4 flex items-center gap-2 text-sm">
            <Image
              src="/filter.svg"
              alt="Filter"
              width={16}
              height={16}
              className="w-[24px] h-[24px]"
            />
            <span className="hidden lg:block">Filter News</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-[33%_33%_33%] items-center justify-between w-full">
        {currentJobs.map((news) => (
          <NewsCard
            key={news.id}
            image={news.image}
            header={news.header}
            subheader={news.subheader}
            date={news.date}
            category={news.category}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8 gap-2 text-[#919BA5]">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 hover:text-[#7D2B4D]"
        >
          Previous
        </button>

        <div className="space-x-2 text-[#919BA5]">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1 ? "bg-[#F4DFE8] text-[#7D2B4D]" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 hover:text-[#7D2B4D]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsListings;
