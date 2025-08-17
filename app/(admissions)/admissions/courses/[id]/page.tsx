"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { programs } from "@/data/programs";

interface CourseDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [programId, setProgramId] = useState<string | null>(null);
  
  useEffect(() => {
    params.then((resolvedParams) => {
      setProgramId(resolvedParams.id);
    });
  }, [params]);
  
  if (!programId) {
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
  
  const program = programs.find(p => p.id === parseInt(programId));
  
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

      {/* Course Details */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Application Deadline Banner */}
        <div className="bg-[#FFB800] text-black px-4 py-2 rounded-lg flex items-center gap-2 mb-6">
          <Image src="/file.svg" alt="deadline" width={16} height={16} />
          <span className="text-sm font-medium">Application deadline: 30 Nov 2025</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image 
                src={program.image} 
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Title and Faculty */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-1">{program.faculty}</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h2>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                <button 
                  onClick={() => setActiveTab("overview")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  📋 Program Overview
                </button>
                <button 
                  onClick={() => setActiveTab("requirements")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "requirements" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  📚 Requirements
                </button>
                <button 
                  onClick={() => setActiveTab("curriculum")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "curriculum" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  🎓 Curriculum Highlights
                </button>
                <button 
                  onClick={() => setActiveTab("experience")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "experience" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  🔬 Hands-on Experience
                </button>
                <button 
                  onClick={() => setActiveTab("partnerships")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "partnerships" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  🤝 Industry Partnerships
                </button>
                <button 
                  onClick={() => setActiveTab("why")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "why" 
                      ? "border-[#61213C] text-[#61213C]" 
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  💡 Why Choose This Program?
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="prose max-w-none">
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">📋 About the Program</h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <p className="text-gray-700">
                    Explore the frontiers of technology with our MSc program, tailored for graduates 
                    looking to deepen their knowledge and skills in the tech industry. This flexible hybrid 
                    course combines online and in-person learning, providing a dynamic and accessible 
                    learning experience.
                  </p>
                </div>
              )}

              {activeTab === "requirements" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">📚 Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">O&apos;level Including</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {program.requirements?.subjects.map((subject, index) => (
                          <li key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">UTME Subjects</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {program.requirements?.utmeSubjects.map((subject, index) => (
                          <li key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Cut-off Score</h4>
                      <p className="text-sm text-gray-700">{program.requirements?.cutOff}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Our Cut-off</h4>
                      <p className="text-sm text-gray-700">{program.requirements?.ourCutoff}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">🎓 Curriculum Highlights</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {program.curriculumHighlights?.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">🔬 Hands-on Experience</h3>
                  <p className="text-gray-700">{program.handsOnExperience}</p>
                </div>
              )}

              {activeTab === "partnerships" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">🤝 Industry Partnerships</h3>
                  <p className="text-gray-700">{program.industryPartnerships}</p>
                </div>
              )}

              {activeTab === "why" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">💡 Why Choose This Program?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.whyChoose?.map((reason, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              {/* Program Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Program Type</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cut-off:</span>
                    <span className="font-medium">{program.requirements?.cutOff || "TBD"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="font-medium">{program.lectureMode}</span>
                  </div>
                </div>
              </div>

              <hr />

              {/* Tuition Fees */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tuition Fees</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₦1,500,000</div>
                  <div className="text-sm text-gray-600">Academic Session & In-Person</div>
                </div>
              </div>

              <hr />

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link 
                  href="/admissions"
                  className="w-full bg-[#61213C] text-white py-3 px-4 rounded-lg hover:bg-[#724456] transition-colors text-center block font-medium"
                >
                  Apply
                </Link>
                <button className="w-full border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                  📄 Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((relatedProgram) => (
              <div key={relatedProgram.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={relatedProgram.image} 
                    alt={relatedProgram.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-600 mb-1">{relatedProgram.faculty}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">{relatedProgram.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProgram.description}</p>
                  <div className="flex gap-2">
                    <Link 
                      href={`/admissions/courses/${relatedProgram.id}`}
                      className="flex-1 bg-[#61213C] text-white py-2 px-3 rounded text-center text-sm hover:bg-[#724456] transition-colors"
                    >
                      Apply
                    </Link>
                    <button className="flex-1 border border-gray-300 py-2 px-3 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
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
