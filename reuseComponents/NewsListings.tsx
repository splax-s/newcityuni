// components/NewsListings.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewsCard from "./NewsCards";
import { newsData } from "@/data/newsAndEvents";

const NewsListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const jobsPerPage = 6;

  // Get unique categories from news data
  const categories = [...new Set(newsData.map(item => item.category))];

  // Filter news based on search query and category
  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subheader.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredNews.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredNews.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="mx-2">
      <div className="flex flex-col lg:flex-row justify-between mb-[40px] w-full">
        <div className="mb-[24px] lg:mb-0">
          <h1 className="text-black text-[24px] font-[600] leading-[32px]">
            All News
          </h1>
          <p className="text-[#545D66] text-[16px] leading-[24px]">
            Showing {currentJobs.length} of {filteredNews.length} results
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
            />
          </div>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-[#61213C] rounded-[4px] text-white px-4 flex items-center gap-2 text-sm">
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

      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter by category:</span>
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                selectedCategory === "" 
                  ? "bg-[#61213C] text-white border-[#61213C]" 
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors capitalize ${
                  selectedCategory === category 
                    ? "bg-[#61213C] text-white border-[#61213C]" 
                    : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-[33%_33%_33%] items-center justify-between w-full">
        {currentJobs.map((news) => (
          <NewsCard
            key={news.id}
            image={news.image}
            header={news.header}
            subheader={news.subheader}
            date={news.date}
            category={news.category}
            href={`/news/article/${news.slug}`}
            type={news.type}
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
