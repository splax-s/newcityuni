"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { programs } from "@/data/programs";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const [programSlug, setProgramSlug] = useState<string | null>(null);
  
  useEffect(() => {
    params.then((resolvedParams) => {
      setProgramSlug(resolvedParams.slug);
    });
  }, [params]);
  
  if (!programSlug) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#61213C] mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const program = programs.find(p => p.slug === programSlug);
  
  if (!program) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
            <Link href="/admissions" className="text-[#61213C] hover:underline">
              Back to Admissions
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-[#61213C] text-white py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <Link href="/" className="hover:text-[#FFB800]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/admissions" className="hover:text-[#FFB800]">Admissions</Link>
            <span className="mx-2">›</span>
            <span>Programs & Eligibility</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Program Details</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">Admissions</h1>
        </div>
      </div>

      {/* Application Deadline Banner - Full Width */}
      <div className="bg-[#F2D1B6] text-black px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <Image src="/file.svg" alt="deadline" width={16} height={16} className="flex-shrink-0" />
          <span className="text-sm font-medium">Application deadline: {program.deadline}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">

        {/* Course Hero Section */}
        <div className="mb-6 sm:mb-8">
          <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-4 sm:mb-6">
            <Image 
              src={program.image} 
              alt={program.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4 sm:mb-6">
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-800 mb-1">{program.faculty}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">{program.title}</h2>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {/* Main Content Area - Full Width */}
          <div className="space-y-6 sm:space-y-8">
            {/* Action Buttons Above Table */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full">
              <button className="bg-[#61213C] text-white h-[44px] px-6 py-3 rounded-[4px] hover:bg-[#724456] transition-colors font-medium text-sm sm:text-base flex-1" style={{paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}}>
                Apply
              </button>
              <button className="border border-[#61213C] text-[#61213C] h-[44px] px-6 py-3 rounded-[4px] hover:bg-[#61213C] hover:text-white transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base flex-1" style={{paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Brochure
              </button>
            </div>

            {/* Program Overview Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                Program Overview
              </h3>
              
              {/* Program Details Table */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
                  <div className="p-4 text-center">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Program Type</div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">{program.level}</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">{program.duration.replace(' months', ' Semesters')}</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Tuition</div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">₦1,200,000</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Delivery</div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">Hybrid (Online & In-Person)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Program */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                About the Program
              </h3>
              <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">{program.description}</p>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Explore the frontiers of technology with our comprehensive program, tailored for graduates 
                looking to deepen their knowledge and skills in their chosen field. This program combines 
                theoretical foundations with practical applications, providing a dynamic and accessible 
                learning experience that prepares students for leadership roles in their respective industries.
              </p>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                📚 Requirements
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm sm:text-base">O&apos;level Including</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {program.requirements?.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm sm:text-base">UTME Subjects</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {program.requirements?.utmeSubjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full flex-shrink-0"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm sm:text-base">Cut-off Score</h4>
                  <p className="text-lg sm:text-xl font-bold text-[#61213C]">{program.requirements?.cutOff}</p>
                </div>
                
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900 text-sm sm:text-base">Our Cut-off</h4>
                  <p className="text-lg sm:text-xl font-bold text-[#61213C]">{program.requirements?.ourCutoff}</p>
                </div>
              </div>
            </div>

            {/* Curriculum Highlights */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                🎓 Curriculum Highlights
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {program.curriculumHighlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#61213C] rounded-full flex-shrink-0 mt-2"></span>
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on Experience */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                ✓ Hands-on Experience
              </h3>
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{program.handsOnExperience}</p>
              </div>
            </div>

            {/* Industry Partnerships */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                ⭐ Industry Partnerships
              </h3>
              <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{program.industryPartnerships}</p>
              </div>
            </div>

            {/* Why Choose This Program */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#61213C] flex items-center gap-2">
                💡 Why Choose This Program?
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {program.whyChoose?.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold text-lg sm:text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Content</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programs.slice(0, 3).map((relatedProgram) => (
              <div key={relatedProgram.slug} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-40 sm:h-48">
                  <Image 
                    src={relatedProgram.image} 
                    alt={relatedProgram.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mb-2">
                      {relatedProgram.faculty.split(' ')[0]} & {relatedProgram.faculty.split(' ')[1]}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 text-sm sm:text-base">{relatedProgram.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-800 mb-4 line-clamp-3">{relatedProgram.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-700">
                    <span>📅 Starting admissions</span>
                    <span>🏃‍♂️ {relatedProgram.deadline}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      href={`/admissions/courses/${relatedProgram.slug}`}
                      className="w-full bg-[#61213C] text-white h-[44px] px-6 py-3 rounded-[4px] text-center flex items-center justify-center text-xs sm:text-sm hover:bg-[#724456] transition-colors"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
