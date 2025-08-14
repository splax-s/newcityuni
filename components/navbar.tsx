"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Academics", path: "/academics/FTundergraduate" },
  { label: "Campus Life", path: "/campus" },
  { label: "Admissions", path: "/admissions/undergraduate" },
  { label: "News & Events", path: "/news" },
  { label: "Careers", path: "/career" },
  { label: "Portals", path: "/portals" },
  { label: "About Us", path: "/about-us" },
];

// Search data for intelligent suggestions
const searchData = [
    // Academic programs
  { title: "Undergraduate Programs", category: "Academics", path: "/academics/FTundergraduate", keywords: ["undergraduate", "bachelor", "degree", "studies"] },
  // { title: "Part-Time Programs", category: "Academics", path: "/academics/PTundergraduate", keywords: ["part-time", "evening", "working", "flexible"] },
  { title: "Postgraduate Programs", category: "Academics", path: "/academics/PostGrad", keywords: ["master", "phd", "postgraduate", "msc", "ma", "doctorate"] },
  { title: "Foundation Programs", category: "Academics", path: "/academics/Foundation", keywords: ["foundation", "jupeb", "preparatory", "pre-degree"] },
  
  // Faculties
  { title: "Faculty of Social & Management Sciences", category: "Academics", path: "/academics/FTundergraduate", keywords: ["business", "accounting", "economics", "management"] },
  { title: "Faculty of Communication & Media Studies", category: "Academics", path: "/academics/FTundergraduate", keywords: ["mass communication", "journalism", "media", "public relations"] },
  { title: "Faculty of Computing & Sciences", category: "Academics", path: "/academics/FTundergraduate", keywords: ["computer science", "technology", "it", "programming"] },
  { title: "Faculty of Law", category: "Academics", path: "/academics/FTundergraduate", keywords: ["law", "legal", "jurisprudence", "barrister"] },
  { title: "Faculty of Humanities", category: "Academics", path: "/academics/FTundergraduate", keywords: ["english", "literature", "languages", "humanities"] },
  
  // Admissions
  { title: "Undergraduate Admissions", category: "Admissions", path: "/admissions/undergraduate", keywords: ["apply", "admission", "requirements", "application", "entry"] },
  { title: "Postgraduate Admissions", category: "Admissions", path: "/admissions/PostGrad", keywords: ["masters", "phd", "graduate", "admission"] },
  
  // Campus Life
  { title: "Campus Life", category: "Campus", path: "/campus", keywords: ["dormitory", "hostel", "accommodation", "residence", "student life"] },
  { title: "Campus Facilities", category: "Campus", path: "/campus", keywords: ["library", "sports", "dining", "health", "facilities"] },
  
  // Career & Jobs
  { title: "Job Vacancies", category: "Careers", path: "/career", keywords: ["jobs", "vacancy", "employment", "hiring", "positions"] },
  { title: "Academic Positions", category: "Careers", path: "/career", keywords: ["lecturer", "professor", "faculty", "teaching", "academic"] },
  
  // About & Leadership
  { title: "Chancellor", category: "About", path: "/about-us/chancellor", keywords: ["chancellor", "prof akinfeleye", "leadership"] },
  { title: "Pro Chancellor", category: "About", path: "/about-us/proChancellor", keywords: ["pro chancellor", "chief akingbesote", "chairman"] },
  { title: "University History", category: "About", path: "/about-us/history", keywords: ["history", "founded", "establishment", "background"] },
  
  // News & Events
  { title: "Latest News", category: "News", path: "/news", keywords: ["news", "updates", "announcements", "press"] },
  
  // Portals
  { title: "Student Portal", category: "Portals", path: "/portals/student", keywords: ["student portal", "login", "grades", "results"] },
  { title: "Lecturer Portal", category: "Portals", path: "/portals/lecturer", keywords: ["lecturer portal", "faculty", "staff portal"] },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [showResults, setShowResults] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper function to navigate and close modal
  const go = (path: string) => {
    // close UI first so state changes don't cancel navigation
    setSearchQuery("");
    setShowResults(false);
    setSearchOpen(false);
    setMenuOpen(false);
    router.push(path); // client-side nav (keeps SPA behavior)
  };

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
      setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // if click is inside either desktop or mobile container, ignore
      if (
        (desktopSearchRef.current && desktopSearchRef.current.contains(target)) ||
        (mobileSearchRef.current && mobileSearchRef.current.contains(target))
      ) {
        return;
      }
      
      // Only close search results, not the mobile search container itself
      if (showResults) {
        setShowResults(false);
      }
      
      // Only close desktop search dropdown, not mobile search
      if (searchOpen && desktopSearchRef.current) {
        setSearchOpen(false);
      }
    };

    // use 'click' instead of 'mousedown' so navigation/clicks aren't pre-empted
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showResults, searchOpen]);

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) go(searchResults[0].path);
  };

  // Toggle search on mobile
  const toggleSearch = () => {
    const newSearchOpen = !searchOpen;
    setSearchOpen(newSearchOpen);
    
    if (newSearchOpen) {
      // Clear any existing search state when opening
      setSearchQuery("");
      setShowResults(false);
      // Focus input after a small delay to ensure it's rendered
      setTimeout(() => {
        const input = document.querySelector('input[placeholder="Search university content..."]') as HTMLInputElement;
        if (input) input.focus();
      }, 100);
    } else {
      // Clean up when closing
      setSearchQuery("");
      setShowResults(false);
    }
  };

  return (
    <>
      {menuOpen && (
        <div
          onClick={(e) => {
            // Only close if clicking directly on the backdrop, not on child elements
            if (e.target === e.currentTarget) {
              setMenuOpen(false);
              setSearchOpen(false);
              setShowResults(false);
            }
          }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col relative z-50">
        <div className="bg-[#61213C] h-[80px] flex items-center px-[20px] lg:px-[59px] justify-between text-white">
          <Link href="/" aria-label="Homepage">
            <Image
              src="/Logo2.png"
              alt="New City University Logo"
              width={130}
              height={40}
              className="w-[130px] h-[40px]"
              priority
            />
          </Link>

          <div className="flex items-center gap-3 lg:gap-2">
            <div className="hidden lg:flex items-center gap-2 relative" ref={desktopSearchRef}>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSearchOpen(!searchOpen)}>
                <Image
                  src="/Mag.svg"
                  alt="Search"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                />
                <span className="text-[16px] leading-[24px]">Search</span>
              </div>

              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[60]">
                  <form onSubmit={handleSearchSubmit} className="p-4">
                    <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                      <Image
                        src="/mag2.svg"
                        alt="Search"
                        width={20}
                        height={20}
                        className="ml-3 w-[20px] h-[20px]"
                      />
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search university content..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                        autoFocus
                      />
                    </div>
                  </form>

                  {showResults && searchResults.length > 0 && (
                    <div className="max-h-[400px] overflow-y-auto border-t border-gray-100">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => go(result.path)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors block"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-gray-800 font-medium text-sm mb-1">{result.title}</h4>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{result.category}</span>
                            </div>
                            <Image
                              src="/right.svg"
                              alt="Go to"
                              width={16}
                              height={16}
                              className="w-[16px] h-[16px] text-gray-400 ml-2"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {showResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
                    <div className="p-4 text-center text-gray-500 border-t border-gray-100">
                      <p className="text-sm">No results found for &quot;{searchQuery}&quot;</p>
                      <p className="text-xs mt-2">Try searching for academics, admissions, news, or careers</p>
                    </div>
                  )}

                  {!showResults && (
                    <div className="border-t border-gray-100 p-4">
                      <h5 className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Quick Links</h5>
                      <div className="space-y-2">
                        {[
                          { label: 'Apply Now', path: '/admissions/undergraduate' },
                          { label: 'Academics', path: '/academics/FTundergraduate' },
                          { label: 'Career', path: '/career' },
                          { label: 'Student Portal', path: '/portals/student' },
                          { label: 'News', path: '/news' },
                          { label: 'Campus', path: '/campus' }
                        ].map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => go(item.path)}
                            className="flex items-center w-full text-left text-sm text-gray-700 hover:text-[#61213C] hover:bg-gray-50 p-2 rounded transition-colors group"
                          >
                            <span>{item.label}</span>
                            <Image
                              src="/right.svg"
                              alt=""
                              width={14}
                              height={14}
                              className="w-[14px] h-[14px] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button 
              onClick={toggleSearch}
              className="lg:hidden"
              aria-label="Toggle search"
            >
              <Image
                src="/Mag.svg"
                alt="Search"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden"
            >
              <Image src="/menu.svg" alt="Open menu" width={24} height={24} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 p-4 relative z-50" ref={mobileSearchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                <Image
                  src="/mag2.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="ml-3 w-[20px] h-[20px]"
                />
                <input
                  type="text"
                  placeholder="Search university content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowResults(false);
                    setSearchOpen(false);
                  }}
                  className="mr-3 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-lg">&times;</span>
                </button>
              </div>
            </form>

            {showResults && searchResults.length > 0 && (
              <div className="mt-4 bg-white rounded-lg border border-gray-200 max-h-[300px] overflow-y-auto relative z-50">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => go(result.path)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 block"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-gray-800 font-medium text-sm mb-1">{result.title}</h4>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{result.category}</span>
                      </div>
                      <Image
                        src="/right.svg"
                        alt="Go to"
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px] text-gray-400 ml-2"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {showResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
              <div className="mt-4 p-4 text-center text-gray-500 bg-gray-50 rounded-lg">
                <p className="text-sm">No results found for &quot;{searchQuery}&quot;</p>
                <p className="text-xs mt-2">Try searching for academics, admissions, news, or careers</p>
              </div>
            )}
          </div>
        )}

        <div className="hidden lg:flex justify-end items-center px-[58px] text-black">
          {navLinks.map(({ label, path }) => {
            const isActive =
              label === "About Us"
                ? pathname.startsWith("/about-us")
                : pathname === path;

            return (
              <Link
                key={label}
                href={path}
                className={`py-3 px-4 border-b-2 text-sm font-medium transition-all duration-200
              ${isActive ? "border-[#61213C]" : "border-transparent hover:border-[#61213C]"}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-[#61213C] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-end items-center p-2 border-b border-[#7e4262]">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-gray-300 text-3xl font-bold px-2"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`text-left py-3 px-2 rounded font-semibold transition-colors duration-200
                ${pathname === path ? "bg-[#7e4262]" : "hover:bg-[#7e4262]"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;