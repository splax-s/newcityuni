"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Course data with real university programs
const courseData = [
  // Undergraduate Courses - Full Time
  { 
    id: 1,
    title: "Computer Science", 
    level: "Undergraduate", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["comp", "computer", "programming", "software", "technology", "coding", "algorithms"]
  },
  { 
    id: 2,
    title: "Information Technology", 
    level: "Undergraduate", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["IT", "networks", "systems", "database", "web development"]
  },
  { 
    id: 3,
    title: "Cyber Security", 
    level: "Undergraduate", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["security", "cybersecurity", "hacking", "network security", "encryption"]
  },
  { 
    id: 4,
    title: "Medical Laboratory Science", 
    level: "Undergraduate", 
    faculty: "Faculty of Basic Medical and Allied health Sciences",
    mode: "Full-Time",
    duration: "5 years",
    path: "/academics/FTundergraduate",
    keywords: ["medical", "laboratory", "diagnosis", "healthcare", "science"]
  },
  { 
    id: 5,
    title: "Nursing", 
    level: "Undergraduate", 
    faculty: "Faculty of Basic Medical and Allied health Sciences",
    mode: "Full-Time",
    duration: "5 years",
    path: "/academics/FTundergraduate",
    keywords: ["nursing", "healthcare", "patient care", "medical"]
  },
  { 
    id: 6,
    title: "Physiotherapy", 
    level: "Undergraduate", 
    faculty: "Faculty of Basic Medical and Allied health Sciences",
    mode: "Full-Time",
    duration: "5 years",
    path: "/academics/FTundergraduate",
    keywords: ["physiotherapy", "rehabilitation", "physical therapy", "health"]
  },
  { 
    id: 7,
    title: "Accounting", 
    level: "Undergraduate", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["accounting", "finance", "bookkeeping", "auditing", "business"]
  },
  { 
    id: 8,
    title: "Economics", 
    level: "Undergraduate", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["economics", "finance", "business", "markets", "policy"]
  },
  { 
    id: 9,
    title: "Business Administration", 
    level: "Undergraduate", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["business", "management", "administration", "marketing", "leadership"]
  },
  { 
    id: 10,
    title: "Mass Communication", 
    level: "Undergraduate", 
    faculty: "Faculty of Communication & Media Studies",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["communication", "media", "journalism", "broadcasting", "public relations"]
  },
  { 
    id: 11,
    title: "Public Relations", 
    level: "Undergraduate", 
    faculty: "Faculty of Communication & Media Studies",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["public relations", "PR", "communication", "marketing", "media"]
  },
  { 
    id: 12,
    title: "Private & Property Law", 
    level: "Undergraduate", 
    faculty: "Faculty of Law",
    mode: "Full-Time",
    duration: "5 years",
    path: "/academics/FTundergraduate",
    keywords: ["law", "legal", "property", "private law", "jurisprudence"]
  },
  { 
    id: 27,
    title: "Radiography", 
    level: "Undergraduate", 
    faculty: "Faculty of Basic Medical and Allied health Sciences",
    mode: "Full-Time",
    duration: "4 years",
    path: "/academics/FTundergraduate",
    keywords: ["radiography", "medical imaging", "x-ray", "CT", "MRI", "ultrasound", "radiology"]
  },
  
  // Part-Time Undergraduate
  // { 
  //   id: 13,
  //   title: "Computer Science (Part-Time)", 
  //   level: "Undergraduate", 
  //   faculty: "Faculty of Computing and Sciences",
  //   mode: "Part-Time",
  //   duration: "5-6 years",
  //   path: "/academics/PTundergraduate",
  //   keywords: ["comp", "computer", "programming", "part-time", "evening", "working"]
  // },
  // { 
  //   id: 14,
  //   title: "Accounting (Part-Time)", 
  //   level: "Undergraduate", 
  //   faculty: "Faculty of Social and Management Sciences",
  //   mode: "Part-Time",
  //   duration: "5-6 years",
  //   path: "/academics/PTundergraduate",
  //   keywords: ["accounting", "part-time", "evening", "finance", "working"]
  // },
  // { 
  //   id: 15,
  //   title: "Mass Communication (Part-Time)", 
  //   level: "Undergraduate", 
  //   faculty: "Faculty of Communication & Media Studies",
  //   mode: "Part-Time",
  //   duration: "5-6 years",
  //   path: "/academics/PTundergraduate",
  //   keywords: ["communication", "media", "part-time", "evening", "journalism"]
  // },

  // Master's Programs
  { 
    id: 16,
    title: "MSc Computer Science", 
    level: "Masters", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "18 months",
    path: "/academics/PostGrad",
    keywords: ["comp", "masters", "computer science", "postgraduate", "msc", "advanced"]
  },
  { 
    id: 17,
    title: "MSc Accounting", 
    level: "Masters", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "18 months",
    path: "/academics/PostGrad",
    keywords: ["masters", "accounting", "msc", "finance", "postgraduate"]
  },
  { 
    id: 18,
    title: "MSc Economics", 
    level: "Masters", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "18 months",
    path: "/academics/PostGrad",
    keywords: ["masters", "economics", "msc", "postgraduate", "policy"]
  },
  { 
    id: 19,
    title: "MSc Communication and Media Studies", 
    level: "Masters", 
    faculty: "Faculty of Communication & Media Studies",
    mode: "Full-Time",
    duration: "18 months",
    path: "/academics/PostGrad",
    keywords: ["masters", "communication", "media", "msc", "journalism"]
  },
  { 
    id: 20,
    title: "MBA Business Administration", 
    level: "Masters", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "18 months",
    path: "/academics/PostGrad",
    keywords: ["mba", "business", "masters", "management", "administration"]
  },

  // PhD Programs
  { 
    id: 21,
    title: "PhD Computer Science", 
    level: "PHD", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "3-6 years",
    path: "/academics/PostGrad",
    keywords: ["comp", "phd", "doctorate", "computer science", "research", "postgraduate"]
  },
  { 
    id: 22,
    title: "PhD Accounting", 
    level: "PHD", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "3-6 years",
    path: "/academics/PostGrad",
    keywords: ["phd", "doctorate", "accounting", "research", "finance"]
  },
  { 
    id: 23,
    title: "PhD Economics", 
    level: "PHD", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "3-6 years",
    path: "/academics/PostGrad",
    keywords: ["phd", "doctorate", "economics", "research", "policy"]
  },

  // Diploma Programs
  { 
    id: 24,
    title: "PGD Computer Science", 
    level: "Diploma", 
    faculty: "Faculty of Computing and Sciences",
    mode: "Full-Time",
    duration: "1 year",
    path: "/academics/PostGrad",
    keywords: ["comp", "diploma", "pgd", "computer science", "postgraduate", "certificate"]
  },
  { 
    id: 25,
    title: "PGD Accounting", 
    level: "Diploma", 
    faculty: "Faculty of Social and Management Sciences",
    mode: "Full-Time",
    duration: "1 year",
    path: "/academics/PostGrad",
    keywords: ["diploma", "pgd", "accounting", "postgraduate", "finance"]
  },
  { 
    id: 26,
    title: "Foundation Programme", 
    level: "Foundation", 
    faculty: "All Faculties",
    mode: "Full-Time",
    duration: "1 year",
    path: "/academics/Foundation",
    keywords: ["foundation", "preparatory", "pre-degree", "jupeb", "bridging"]
  },
];

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Levels");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof courseData>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const options = ["All Levels", "Undergraduate", "Masters", "PHD", "Diploma", "Foundation"];

  // Filter courses based on level and search term
  const filterCourses = (level: string, search: string) => {
    let filtered = courseData;

    // Filter by level
    if (level !== "All Levels") {
      filtered = filtered.filter(course => 
        course.level === level || 
        (level === "Foundation" && course.level === "Foundation")
      );
    }

    // Filter by search term
    if (search.trim()) {
      const query = search.toLowerCase();
      filtered = filtered.filter(course => {
        // Check if course title starts with the search term (highest priority)
        if (course.title.toLowerCase().startsWith(query)) {
          return true;
        }
        
        // Check if any word in the title starts with the search term
        const titleWords = course.title.toLowerCase().split(' ');
        if (titleWords.some(word => word.startsWith(query))) {
          return true;
        }
        
        // Check if any keyword starts with the search term
        if (course.keywords.some(keyword => keyword.toLowerCase().startsWith(query))) {
          return true;
        }
        
        // Only check for contains if the search term is longer than 3 characters
        if (query.length > 3) {
          return course.title.toLowerCase().includes(query) ||
                 course.faculty.toLowerCase().includes(query) ||
                 course.keywords.some(keyword => keyword.toLowerCase().includes(query));
        }
        
        return false;
      });
    }

    return filtered.slice(0, 10); // Limit to 10 results
  };

  // Handle level selection
  const handleLevelSelect = (level: string) => {
    setSelected(level);
    setIsOpen(false);
    
    // Only show results if there's also a search term
    if (searchTerm.trim().length > 0) {
      const results = filterCourses(level, searchTerm);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchTerm(search);
    
    // Only show results if user is actually searching
    if (search.trim().length > 0) {
      const results = filterCourses(selected, search);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  // Handle course selection
  const handleCourseSelect = (course: typeof courseData[0]) => {
    router.push(course.path);
    setShowResults(false);
    setSearchTerm("");
    setSelected("All Levels"); // Reset level filter too
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleCourseSelect(searchResults[0]);
    } else {
      // If no specific results, go to general academics page
      router.push('/academics/FTundergraduate');
    }
  };

  return (
    <div className="flex flex-col md:flex-row transition-all duration-300 relative">
      <div className="bg-[#61213C] p-[32px] md:p-[58px] md:w-[486px] w-full">
        <p className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white">
          Find a Course
        </p>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white">
          Study with us in August or October 2025
        </p>
      </div>

      <div className="p-[32px] md:p-[58px] bg-[#F2D1B6] w-full flex flex-col">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-stretch gap-[12px] mb-4">
          <div className="relative w-full md:w-64">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white border border-none h-[56px] rounded-[4px] px-4 py-2 flex justify-between items-center text-[#545D66] hover:bg-gray-50 transition-colors"
            >
              <span>{selected}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleLevelSelect(option)}
                    className="cursor-pointer px-4 py-3 hover:bg-gray-100 text-black transition-colors"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative w-full flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for courses..."
              className="w-full bg-white border border-none h-[56px] rounded-[4px] px-4 py-2 text-[#545D66] placeholder:text-[#545D66] focus:outline-none focus:ring-2 focus:ring-[#61213C]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#61213C] text-white h-[56px] px-6 rounded-[4px] hover:bg-[#4a1930] transition-colors font-medium min-w-[120px]"
          >
            Search
          </button>
        </form>

        {/* Search Results */}
        {showResults && (
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-h-[400px] overflow-y-auto z-10">
            {searchResults.length > 0 ? (
              <div className="p-2">
                <div className="text-sm text-gray-600 px-3 py-2 border-b border-gray-100">
                  Found {searchResults.length} course{searchResults.length !== 1 ? 's' : ''}
                </div>
                {searchResults.map((course) => (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => handleCourseSelect(course)}
                    className="w-full text-left px-3 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-gray-800 font-medium text-sm mb-1">{course.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-1">
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {course.level}
                          </span>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                            {course.mode}
                          </span>
                          <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                            {course.duration}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{course.faculty}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 ml-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p className="text-sm">No courses found</p>
                <p className="text-xs mt-2">Try adjusting your search terms or level filter</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
