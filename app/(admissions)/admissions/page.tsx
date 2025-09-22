"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/programs";

export default function Admissions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDegreeType, setSelectedDegreeType] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  
  // State for showing/hiding filter sections - Academic Level starts open
  const [showAcademicLevel, setShowAcademicLevel] = useState(true);
  const [showDegreeType, setShowDegreeType] = useState(false);
  const [showAreasOfInterest, setShowAreasOfInterest] = useState(false);
  const [showLectureMode, setShowLectureMode] = useState(false);
  
  // Mobile filter visibility state
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique values for filters
  const uniqueDegreeTypes = [...new Set(programs.map(p => p.degreeType))];
  const uniqueModes = [...new Set(programs.map(p => p.lectureMode))];

  // Filter programs based on search and filters
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !selectedLevel || program.level === selectedLevel;
    const matchesDegreeType = !selectedDegreeType || program.degreeType === selectedDegreeType;
    const matchesArea = !selectedArea || program.areaOfInterest === selectedArea;
    const matchesMode = !selectedMode || program.lectureMode.includes(selectedMode);

    return matchesSearch && matchesLevel && matchesDegreeType && matchesArea && matchesMode;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLevel("");
    setSelectedDegreeType("");
    setSelectedArea("");
    setSelectedMode("");
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#61213C] text-white py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Programs & Eligibility</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">Admissions</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle Button & Search - Same style as career page */}
          <div className="lg:hidden">
            <div className="flex gap-4 mb-4">
              {/* Search input with icon */}
              <div className="flex items-center rounded-[4px] border w-full border-[#919BA5] bg-[#F8F8F8] px-3">
                <Image
                  src="/mag2.svg"
                  alt="Search"
                  width={16}
                  height={16}
                  className="mr-2 w-[24px] h-[24px]"
                />
                <input
                  type="text"
                  placeholder="Search Programs/Courses, e.g Medicine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
                />
              </div>

              {/* Filter button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="bg-[#61213C] rounded-[4px] text-white px-4 flex items-center gap-2 text-sm hover:bg-[#4a1a2f] transition-colors"
              >
                <Image src="/filter.svg" alt="filter" width={16} height={16} className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>

          {/* Filter Panel for Mobile (same style as career page) */}
          {showMobileFilters && (
            <div className="lg:hidden bg-white border border-[#E5E7EB] rounded-[8px] p-6 mb-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

                {/* Academic Level */}
                <div>
                  <button 
                    onClick={() => setShowAcademicLevel(!showAcademicLevel)}
                    className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showAcademicLevel ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                        {showAcademicLevel ? '−' : '+'}
                      </span>
                      Academic Level
                    </div>
                  </button>
                  {showAcademicLevel && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      <button 
                        onClick={() => setSelectedLevel(selectedLevel === "Graduate" ? "" : "Graduate")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedLevel === "Graduate" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedLevel === "Graduate" ? "− Graduate" : "+ Graduate"}
                      </button>
                      <button 
                        onClick={() => setSelectedLevel(selectedLevel === "Undergraduate" ? "" : "Undergraduate")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedLevel === "Undergraduate" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedLevel === "Undergraduate" ? "− Undergraduate" : "+ Undergraduate"}
                      </button>
                    </div>
                  )}
                </div>

                {/* Degree Type */}
                <div>
                  <button 
                    onClick={() => setShowDegreeType(!showDegreeType)}
                    className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showDegreeType ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                        {showDegreeType ? '−' : '+'}
                      </span>
                      Degree Type
                    </div>
                  </button>
                  {showDegreeType && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {uniqueDegreeTypes.map((type) => (
                        <button 
                          key={type}
                          onClick={() => setSelectedDegreeType(selectedDegreeType === type ? "" : type)}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedDegreeType === type 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedDegreeType === type ? `− ${type}` : `+ ${type}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Areas of Interest */}
                <div>
                  <button 
                    onClick={() => setShowAreasOfInterest(!showAreasOfInterest)}
                    className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showAreasOfInterest ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                        {showAreasOfInterest ? '−' : '+'}
                      </span>
                      Areas of Interest
                    </div>
                  </button>
                  {showAreasOfInterest && (
                    <div className="space-y-2 mb-2">
                      <button 
                        onClick={() => setSelectedArea(selectedArea === "Basic Medicine & Applied Sciences" ? "" : "Basic Medicine & Applied Sciences")}
                        className={`block w-full text-left px-3 py-2 rounded-full text-sm border transition-colors ${
                          selectedArea === "Basic Medicine & Applied Sciences" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedArea === "Basic Medicine & Applied Sciences" ? "− Basic Medicine & Applied Sciences" : "+ Basic Medicine & Applied Sciences"}
                      </button>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => setSelectedArea(selectedArea === "Computing & Sciences" ? "" : "Computing & Sciences")}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedArea === "Computing & Sciences" 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedArea === "Computing & Sciences" ? "− Computing & Sciences" : "+ Computing & Sciences"}
                        </button>
                        <button 
                          onClick={() => setSelectedArea(selectedArea === "Law" ? "" : "Law")}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedArea === "Law" 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedArea === "Law" ? "− Law" : "+ Law"}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => setSelectedArea(selectedArea === "Social & Management" ? "" : "Social & Management")}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedArea === "Social & Management" 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedArea === "Social & Management" ? "− Social & Management" : "+ Social & Management"}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => setSelectedArea(selectedArea === "Communication & Media Sciences" ? "" : "Communication & Media Sciences")}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedArea === "Communication & Media Sciences" 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedArea === "Communication & Media Sciences" ? "− Communication & Media Sciences" : "+ Communication & Media Sciences"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lecture Delivery Mode */}
                <div>
                  <button 
                    onClick={() => setShowLectureMode(!showLectureMode)}
                    className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showLectureMode ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                        {showLectureMode ? '−' : '+'}
                      </span>
                      Lecture Delivery Mode
                    </div>
                  </button>
                  {showLectureMode && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {uniqueModes.slice(0, 6).map((mode) => (
                        <button 
                          key={mode}
                          onClick={() => setSelectedMode(selectedMode === mode ? "" : mode)}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            selectedMode === mode 
                              ? "bg-[#61213C] text-white border-[#61213C]" 
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                          }`}
                        >
                          {selectedMode === mode ? `− ${mode}` : `+ ${mode}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-[#919BA5] text-[#919BA5] rounded-[4px] text-sm hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="px-4 py-2 bg-[#61213C] text-white rounded-[4px] text-sm hover:bg-[#4a1a2f] transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Desktop Sidebar Filters */}
          <div className={`hidden lg:block w-full lg:max-w-[350px] lg:w-[350px] lg:flex-shrink-0 border border-gray-200 rounded-lg p-4 space-y-4 bg-[#FBFCFC] h-fit`}>
            {/* Search - Desktop Only */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Programs/Courses, e.g Medicine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 text-gray-900 placeholder-gray-500"
                />
                <div className="absolute right-3 top-2.5">
                  <Image src="/Mag.svg" alt="search" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

              {/* Academic Level */}
              <div>
                <button 
                  onClick={() => setShowAcademicLevel(!showAcademicLevel)}
                  className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="flex items-center">
                    <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showAcademicLevel ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                      {showAcademicLevel ? '−' : '+'}
                    </span>
                    Academic Level
                  </div>
                </button>
                {showAcademicLevel && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    <button 
                      onClick={() => setSelectedLevel(selectedLevel === "Graduate" ? "" : "Graduate")}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        selectedLevel === "Graduate" 
                          ? "bg-[#61213C] text-white border-[#61213C]" 
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                      }`}
                    >
                      {selectedLevel === "Graduate" ? "− Graduate" : "+ Graduate"}
                    </button>
                    <button 
                      onClick={() => setSelectedLevel(selectedLevel === "Undergraduate" ? "" : "Undergraduate")}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        selectedLevel === "Undergraduate" 
                          ? "bg-[#61213C] text-white border-[#61213C]" 
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                      }`}
                    >
                      {selectedLevel === "Undergraduate" ? "− Undergraduate" : "+ Undergraduate"}
                    </button>
                  </div>
                )}
              </div>

              {/* Degree Type */}
              <div>
                <button 
                  onClick={() => setShowDegreeType(!showDegreeType)}
                  className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="flex items-center">
                    <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showDegreeType ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                      {showDegreeType ? '−' : '+'}
                    </span>
                    Degree Type
                  </div>
                </button>
                {showDegreeType && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {uniqueDegreeTypes.map((type) => (
                      <button 
                        key={type}
                        onClick={() => setSelectedDegreeType(selectedDegreeType === type ? "" : type)}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedDegreeType === type 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedDegreeType === type ? `− ${type}` : `+ ${type}`}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas of Interest */}
              <div>
                <button 
                  onClick={() => setShowAreasOfInterest(!showAreasOfInterest)}
                  className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="flex items-center">
                    <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showAreasOfInterest ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                      {showAreasOfInterest ? '−' : '+'}
                    </span>
                    Areas of Interest
                  </div>
                </button>
                {showAreasOfInterest && (
                  <div className="space-y-2 mb-2">
                    <button 
                      onClick={() => setSelectedArea(selectedArea === "Basic Medicine & Applied Sciences" ? "" : "Basic Medicine & Applied Sciences")}
                      className={`block w-full text-left px-3 py-2 rounded-full text-sm border transition-colors ${
                        selectedArea === "Basic Medicine & Applied Sciences" 
                          ? "bg-[#61213C] text-white border-[#61213C]" 
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                      }`}
                    >
                      {selectedArea === "Basic Medicine & Applied Sciences" ? "− Basic Medicine & Applied Sciences" : "+ Basic Medicine & Applied Sciences"}
                    </button>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setSelectedArea(selectedArea === "Computing & Sciences" ? "" : "Computing & Sciences")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedArea === "Computing & Sciences" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedArea === "Computing & Sciences" ? "− Computing & Sciences" : "+ Computing & Sciences"}
                      </button>
                      <button 
                        onClick={() => setSelectedArea(selectedArea === "Law" ? "" : "Law")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedArea === "Law" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedArea === "Law" ? "− Law" : "+ Law"}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setSelectedArea(selectedArea === "Social & Management" ? "" : "Social & Management")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedArea === "Social & Management" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedArea === "Social & Management" ? "− Social & Management" : "+ Social & Management"}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setSelectedArea(selectedArea === "Communication & Media Sciences" ? "" : "Communication & Media Sciences")}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedArea === "Communication & Media Sciences" 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedArea === "Communication & Media Sciences" ? "− Communication & Media Sciences" : "+ Communication & Media Sciences"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Lecture Delivery Mode */}
              <div>
                <button 
                  onClick={() => setShowLectureMode(!showLectureMode)}
                  className="w-full flex items-center justify-between font-medium mb-2 text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="flex items-center">
                    <span className={`w-4 h-4 rounded border-2 border-[#61213C] mr-2 flex items-center justify-center text-xs font-bold ${showLectureMode ? 'bg-[#61213C] text-white' : 'bg-white text-[#61213C]'}`}>
                      {showLectureMode ? '−' : '+'}
                    </span>
                    Lecture Delivery Mode
                  </div>
                </button>
                {showLectureMode && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {uniqueModes.slice(0, 6).map((mode) => (
                      <button 
                        key={mode}
                        onClick={() => setSelectedMode(selectedMode === mode ? "" : mode)}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedMode === mode 
                            ? "bg-[#61213C] text-white border-[#61213C]" 
                            : "bg-white border-gray-300 text-gray-700 hover:border-[#61213C]"
                        }`}
                      >
                        {selectedMode === mode ? `− ${mode}` : `+ ${mode}`}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredPrograms.length > 0 && (
              <div className="mb-4 text-gray-600">
                Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
              </div>
            )}
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 sm:h-48">
                    <Image 
                      src={program.image} 
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{program.faculty}</p>
                    <p className="text-xs text-gray-500 mb-2">{program.department}</p>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{program.description}</p>
                    
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-700 mb-1">Key Features:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {program.keyFeatures?.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#61213C] mr-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {program.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 rounded text-xs ${
                            index === 0 
                              ? 'bg-purple-100 text-purple-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500">
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={`/admissions/signup?program=${program.slug}`}
                        className="flex-1 bg-[#61213C] text-white h-[44px] px-6 py-3 rounded-[4px] hover:bg-[#724456] transition-colors font-medium text-sm flex items-center justify-center"
                      >
                        Apply
                      </Link>
                      <Link 
                        href={`/admissions/courses/${program.slug}`}
                        className="flex-1 border border-[#61213C] text-[#61213C] h-[44px] px-6 py-3 rounded-[4px] hover:bg-[#61213C] hover:text-white transition-colors font-medium text-sm flex items-center justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Image src="/Mag.svg" alt="No results" width={48} height={48} className="mx-auto opacity-50" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No programs found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search criteria or clearing filters.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-[#61213C] text-white px-4 py-2 rounded hover:bg-[#724456] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
