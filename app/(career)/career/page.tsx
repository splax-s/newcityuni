"use client";

import React, { useState, useEffect } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import Image from "next/image";
import JobCard from "@/reuseComponents/JobCard";

export default function Career() {
  const jobs = [
    // FACULTY OF BASIC MEDICAL AND ALLIED HEALTH SCIENCES
    {
      id: 1,
      title: "Professor - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "We are seeking an exceptional Professor for our Nursing Science department. Must possess a Ph.D degree from accredited university with minimum of 3 years post-qualification experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 2,
      title: "Associate Professor - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Join our Nursing Science team as Associate Professor. Requires Ph.D with strong teaching and research background in nursing education...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 3,
      title: "Senior Lecturer - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "We are looking for experienced Senior Lecturer in Nursing Science. Master's degree required with minimum 6 years post-qualification experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 4,
      title: "Lecturer I - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Entry-level academic position in Nursing Science. Good first degree with minimum 3 years post-qualification experience in university teaching...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 5,
      title: "Lecturer II - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Teaching position in Nursing Science for fresh graduates. Must possess good first degree from accredited institution...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 6,
      title: "Assistant Lecturer - Nursing Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Entry-level academic position for Nursing Science graduates. Opportunity to pursue higher qualifications while teaching...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 7,
      title: "Professor - Physiotherapy",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Leading academic position in Physiotherapy. Ph.D required with extensive research and clinical experience in physiotherapy practice...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 8,
      title: "Professor - Medical Laboratory Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "We seek an exceptional Professor in Medical Laboratory Science. Must have Ph.D with proven track record in laboratory medicine research...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 9,
      title: "Professor - Public Health Science",
      department: "Faculty of Basic Medical and Allied Health Sciences",
      text: "Join our Public Health team as Professor. Requires Ph.D in Public Health with minimum 6 years post-qualification experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // FACULTY OF SCIENCE AND COMPUTING
    {
      id: 10,
      title: "Professor - Computer Science",
      department: "Faculty of Science and Computing",
      text: "Leading position in Computer Science department. Ph.D required with expertise in emerging technologies and strong research background...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 11,
      title: "Professor - Cyber Security",
      department: "Faculty of Science and Computing",
      text: "We are seeking a Professor in Cyber Security. Must have Ph.D with extensive experience in cybersecurity research and industry practice...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 12,
      title: "Professor - Information Technology",
      department: "Faculty of Science and Computing",
      text: "Academic leadership position in Information Technology. Requires Ph.D with proven expertise in IT systems and digital transformation...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 13,
      title: "Professor - Microbiology",
      department: "Faculty of Science and Computing",
      text: "Join our Microbiology department as Professor. Ph.D in Microbiology required with research focus on infectious diseases or biotechnology...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // FACULTY OF COMMUNICATIONS AND MEDIA STUDIES
    {
      id: 14,
      title: "Professor - Mass Communication",
      department: "Faculty of Communications and Media Studies",
      text: "Leading academic position in Mass Communication. Ph.D required with expertise in digital media and communication theory...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 15,
      title: "Professor - Public Relations",
      department: "Faculty of Communications and Media Studies",
      text: "We seek a Professor in Public Relations. Must have Ph.D with industry experience and research background in strategic communication...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 16,
      title: "Professor - Broadcasting",
      department: "Faculty of Communications and Media Studies",
      text: "Academic leadership in Broadcasting. Requires Ph.D with extensive experience in broadcast journalism and media production...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 17,
      title: "Professor - Journalism and Media Studies",
      department: "Faculty of Communications and Media Studies",
      text: "Join our Journalism department as Professor. Ph.D required with proven track record in journalism education and media research...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // FACULTY OF SOCIAL AND MANAGEMENT SCIENCES
    {
      id: 18,
      title: "Professor - Accounting",
      department: "Faculty of Social and Management Sciences",
      text: "Leading position in Accounting department. Ph.D in Accounting required with professional certification (ACA, ANAN, ACCA) preferred...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 19,
      title: "Professor - Economics",
      department: "Faculty of Social and Management Sciences",
      text: "We are seeking a Professor of Economics. Must have Ph.D with research expertise in development economics or econometrics...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 20,
      title: "Professor - Business Administration",
      department: "Faculty of Social and Management Sciences",
      text: "Academic leadership in Business Administration. Requires Ph.D with MBA and extensive industry or consulting experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // MEDICAL POSITIONS
    {
      id: 21,
      title: "Medical Doctor",
      department: "University Health Services",
      text: "We seek a qualified Medical Doctor for our campus health center. MBBS with valid medical license and minimum 3 years clinical experience required...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 22,
      title: "Pharmacist",
      department: "University Health Services",
      text: "Campus pharmacist position available. B.Pharm degree with valid pharmacy license and 2+ years experience in hospital or community pharmacy...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 23,
      title: "Assistant Chief Laboratory Technologist",
      department: "Medical Laboratory",
      text: "We are recruiting an Assistant Chief Laboratory Technologist. BSc or HND in Medical Laboratory Technology with minimum 5 years experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 24,
      title: "Laboratory Technologist II",
      department: "Medical Laboratory",
      text: "Entry-level position for Laboratory Technologist. HND in Medical Laboratory Technology with fresh graduate or minimal experience acceptable...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // ADMINISTRATIVE POSITIONS
    {
      id: 25,
      title: "Senior Administrative Staff (Registry)",
      department: "Registry Department",
      text: "Administrative role in University Registry. First degree with minimum 8 years administrative experience in higher education institution...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 26,
      title: "Administrative Officer I",
      department: "Administration",
      text: "Mid-level administrative position. First degree required with 3-5 years experience in university administration or equivalent...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 27,
      title: "Administrative Officer II",
      department: "Administration",
      text: "Entry-level administrative role. Good first degree with 0-2 years experience. Training will be provided for university procedures...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 28,
      title: "Confidential Secretary",
      department: "Executive Office",
      text: "Executive secretary position. First degree with secretarial qualifications and minimum 5 years experience supporting senior executives...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 29,
      title: "Senior Accountant",
      department: "Finance Department",
      text: "Senior accounting position. B.Sc Accounting with professional certification (ACA/ANAN) and minimum 6 years post-qualification experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 30,
      title: "Accountant I",
      department: "Finance Department",
      text: "Mid-level accounting role. BSc in Accounting with 3-5 years experience in financial accounting and reporting...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 31,
      title: "Accountant II",
      department: "Finance Department",
      text: "Entry-level accounting position. Good first degree in Accounting or HND with 0-2 years experience in accounting practice...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // TECHNICAL POSITIONS  
    {
      id: 32,
      title: "Higher Data Processing Officer",
      department: "Information Technology",
      text: "Senior IT position for data management. BSc Computer Science or related field with minimum 6 years experience in database administration...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 33,
      title: "Data Processing Officer I",
      department: "Information Technology", 
      text: "Mid-level IT support role. BSc/HND in Computer Science with 3-5 years experience in system administration and user support...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 34,
      title: "Data Processing Officer II",
      department: "Information Technology",
      text: "Entry-level IT position. Good first degree in Computer Science or related field with basic knowledge of computer systems...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 35,
      title: "Technical Officer/Maintenance Officer",
      department: "Facilities Management",
      text: "Campus maintenance role. Technical education (OND/HND) in Engineering or related field with hands-on maintenance experience...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 36,
      title: "Technical Assistant",
      department: "Facilities Management",
      text: "Entry-level technical support position. Technical certification with willingness to learn campus facility maintenance procedures...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // LIBRARY POSITIONS
    {
      id: 37,
      title: "Librarian I",
      department: "University Library",
      text: "Professional librarian position. MLS/MLIS degree with 3-5 years experience in academic library services and information management...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 38,
      title: "Librarian II",
      department: "University Library",
      text: "Entry-level librarian role. Bachelor's degree in Library Science or related field with basic knowledge of library operations...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 39,
      title: "Library Officer",
      department: "University Library",
      text: "Library support position. Good first degree with interest in library services. Training in modern library systems will be provided...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },

    // SECURITY AND SUPPORT
    {
      id: 40,
      title: "Security Officer",
      department: "Campus Security",
      text: "Campus security position. SSCE with security training certification. Previous experience in institutional security preferred...",
      type: "Full-Time", 
      deadline: "4 weeks after publication",
    },
    {
      id: 41,
      title: "Driver",
      department: "Transport Unit",
      text: "University driver position. Valid driver's license with minimum 5 years driving experience. Clean driving record required...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
    {
      id: 42,
      title: "Office Assistant",
      department: "General Administration",
      text: "General office support role. SSCE minimum with basic computer skills. Willingness to learn and support various administrative tasks...",
      type: "Full-Time",
      deadline: "4 weeks after publication",
    },
  ];

  const [showJobs, setShowJobs] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Filter and search logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "" || job.department === selectedDepartment;
    const matchesType = selectedType === "" || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  // Get unique departments and types for filter options
  const departments = [...new Set(jobs.map(job => job.department))];
  const jobTypes = [...new Set(jobs.map(job => job.type))];

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment, selectedType]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSelectedType("");
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      <TextImageBlock text="Careers" imageSrc="/career.png" imageAlt="Career" />
      <Breadcrumb />

      <div className="flex flex-col items-center justify-center my-[24px] lg:my-[80px]">
        {!showJobs ? (
          <div className="w-full px-[20px] lg:w-[50%] transition-all duration-300">
            <div className="lg:mb-[36px] mb-[24px]">
              <h1 className="text-black text-[24px] leading-[32px] mb-[24px]">
                <strong>
                  As a newly established Nigerian university, New City University (NCU) champions the humanities while demonstrating their value to society and the economy through innovative knowledge creation and exchange.
                </strong>
              </h1>
              <button
                onClick={() => setShowJobs(true)}
                className="group bg-[#61213C] md:bg-[#61213C] flex justify-center items-center gap-2 w-full sm:w-[246px] h-[56px] rounded-[4px] hover:cursor-pointer hover:bg-white border-[#61213C]  hover:border hover:text-[#61213C] transition-all duration-300"
              >
                <p>Apply for current jobs</p>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-[24px] h-[24px] group-hover:hidden"
                />
                <Image
                  src="/arrowd.svg"
                  alt="arrow hover"
                  width={20}
                  height={20}
                  className="w-[24px] h-[24px] hidden group-hover:block"
                />
              </button>
            </div>
            <p className="text-black lg:mb-[36px] mb-[24px] transition-all duration-300">
              We serve as a collaborative hub of academic excellence, bringing together diverse institutions and professionals to build a vibrant community of educators and researchers. Although NCU has not yet admitted its first cohort of students, our human resources are fully in place to drive academic and administrative excellence. With a strong and growing network of qualified staff and institutional partners, NCU is poised to deliver cutting-edge research and transformative education across disciplines.
              <br />
              <br />
              Our commitment to expanding access to education and leveraging collective expertise empowers us to transform lives, address pressing challenges, and make an enduring global impact.
            </p>
            <div className=" text-black lg:mb-[36px]">
              <h1>
                <strong>How to Apply</strong>
              </h1>
              <br />
              <p>
                At New City University, job vacancies are posted on our website to ensure transparency and equal opportunity. We do not accept unsolicited CVs.
                <br />
                <br />
                To apply for a vacancy:
              </p>
              <br />
              <ol className="list-decimal space-y-4 pl-6 ">
                <li>
                  Click the &quot;Apply&quot; button on the relevant job listing.
                </li>
                <li>
                  Create an account or log in if you already have one.
                </li>
                <li>
                  Complete your application online — you may save progress and edit before submission.
                </li>
                <li>
                  Once submitted, applications cannot be modified.
                </li>
              </ol>
              <br />
              <h2>
                <strong>Application Tips</strong>
              </h2>
              <ul className="list-disc space-y-2 pl-6 mt-4">
                <li>
                  Carefully review the Job Description and Person Specification.
                </li>
                <li>
                  Tailor your application by providing specific examples of how your skills and experience meet the stated requirements.
                </li>
              </ul>
              <br />
              <h2>
                <strong>Closing Dates</strong>
              </h2>
              <ul className="list-disc space-y-2 pl-6 mt-4">
                <li>
                  Vacancies close at midnight on the advertised date.
                </li>
                <li>
                  Late applications will not be accepted.
                </li>
              </ul>
              <br />
              <h2>
                <strong>Reasonable Adjustments</strong>
              </h2>
              <ul className="list-disc space-y-2 pl-6 mt-4">
                <li>
                  If you require assistance during the application or interview process, email recruitment@newcity.edu.ng to request accommodations.
                </li>
              </ul>
              <br />
              <h2>
                <strong>Technical Support</strong>
              </h2>
              <ul className="list-disc space-y-2 pl-6 mt-4">
                <li>
                  For issues with the application portal, email our support team or call +234 708 5530 656.
                </li>
              </ul>
              <br />
              <h2>
                <strong>Next Steps After Applying</strong>
              </h2>
              <ul className="list-disc space-y-2 pl-6 mt-4">
                <li>
                  You will receive an email confirmation once your application is submitted.
                </li>
                <li>
                  If shortlisted, you will receive an email invitation to schedule an interview — please check your spam or junk folder to avoid missing updates.
                </li>
                <li>
                  If you are not shortlisted, you will also be notified by email.
                </li>
                <li>
                  Due to the high volume of applications, feedback is not provided at the initial application stage.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="mx-2">
            {/* header code*/}
            <div className="flex flex-col  lg:flex-row justify-between mb-[40px]  w-full">
              <div className="mb-[24px] lg:mb-0">
                <h1 className="text-black text-[24px] font-[600] leading-[32px]">
                  All Vacancies
                </h1>
                <p className="text-[#545D66] text-[16px] leading-[24px]">
                  Showing {currentJobs.length} of {filteredJobs.length} results
                </p>
              </div>
              <div className="flex gap-[24px]   overflow-hidden ">
                {/* Search input with icon */}
                <div className="flex items-center rounded-[4px] border w-full lg:w-auto h-full border-[#919BA5] bg-[#F8F8F8] px-3 ">
                  <Image
                    src="/mag2.svg" // Replace with your search icon
                    alt="Search"
                    width={16}
                    height={16}
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <input
                    type="text"
                    placeholder="Search Jobs, e.g Lecturer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
                  />
                </div>

                {/* Filter button */}
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className="bg-[#61213C] rounded-[4px]  text-white px-4 flex items-center gap-2 text-sm hover:bg-[#4a1a2f] transition-colors">
                  <Image
                    src="/filter.svg" // Replace with your filter icon
                    alt="Filter"
                    width={16}
                    height={16}
                    className="w-[24px] h-[24px]"
                  />
                  <span className="hidden lg:block">Filter Jobs</span>
                </button>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilter && (
              <div className="bg-white border border-[#E5E7EB] rounded-[8px] p-6 mb-6 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full p-2 border border-[#919BA5] rounded-[4px] bg-white text-sm"
                    >
                      <option value="">All Departments</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full p-2 border border-[#919BA5] rounded-[4px] bg-white text-sm"
                    >
                      <option value="">All Types</option>
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 border border-[#919BA5] text-[#919BA5] rounded-[4px] text-sm hover:bg-gray-50 transition-colors"
                  >
                    Clear Filters
                  </button>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="px-4 py-2 bg-[#61213C] text-white rounded-[4px] text-sm hover:bg-[#4a1a2f] transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            {/* jobs code  */}
            {currentJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-[25px] lg:grid-cols-3 items-center justify-between w-full ">
                {currentJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    department={job.department}
                    text={job.text}
                    type={job.type}
                    deadline={job.deadline}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No jobs found</div>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or clearing the filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-[#61213C] text-white rounded-[4px] hover:bg-[#4a1a2f] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* pagination code */}
            {currentJobs.length > 0 && totalPages > 1 && (
              <div className="flex justify-between mt-8 gap-2 text-[#919BA5]">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 hover:text-[#7D2B4D] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="space-x-2 text-[#919BA5]">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1  rounded-full ${
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
                  className="px-3 py-1 hover:text-[#7D2B4D] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
