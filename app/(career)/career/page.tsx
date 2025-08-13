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
    {
      id: 1,
      title: "Professor of Computer Science",
      department: "Faculty of Technology",
      text: "We are seeking an exceptional Professor to lead our Computer Science department. The ideal candidate will have a strong research background in AI/ML and experience in curriculum development...",
      type: "Full-Time",
      deadline: "25, Sep 2025",
    },
    {
      id: 2,
      title: "Lecturer in Economics",
      department: "Faculty of Management Sciences",
      text: "Join our dynamic Economics team as a Lecturer. You will teach undergraduate and postgraduate courses while conducting research in microeconomics and development economics...",
      type: "Full-Time",
      deadline: "15, Oct 2025",
    },
    {
      id: 3,
      title: "Senior Librarian",
      department: "University Library",
      text: "We are looking for an experienced Senior Librarian to manage our digital resources and support academic research. Experience with library management systems required...",
      type: "Full-Time",
      deadline: "30, Sep 2025",
    },
    {
      id: 4,
      title: "Assistant Professor of English Literature",
      department: "Faculty of Humanities",
      text: "Seeking a passionate educator and researcher in English Literature. Specialization in African Literature or Post-Colonial Studies preferred...",
      type: "Full-Time",
      deadline: "20, Nov 2025",
    },
    {
      id: 5,
      title: "Research Associate in Biotechnology",
      department: "Faculty of Life Sciences",
      text: "Join our cutting-edge biotechnology research team. PhD in Biotechnology or related field required. Experience with genetic engineering techniques preferred...",
      type: "Full-Time",
      deadline: "10, Oct 2025",
    },
    {
      id: 6,
      title: "Administrative Officer",
      department: "Student Affairs",
      text: "We need a dedicated Administrative Officer to support student services. Strong organizational skills and experience in higher education administration required...",
      type: "Full-Time",
      deadline: "05, Oct 2025",
    },
    {
      id: 7,
      title: "Part-time Mathematics Tutor",
      department: "Faculty of Natural Sciences",
      text: "Seeking qualified tutors for undergraduate mathematics courses. Master's degree in Mathematics or related field required. Flexible schedule available...",
      type: "Part-Time",
      deadline: "15, Sep 2025",
    },
    {
      id: 8,
      title: "Director of International Affairs",
      department: "International Office",
      text: "Lead our international partnerships and student exchange programs. Extensive experience in international education and multilingual abilities preferred...",
      type: "Full-Time",
      deadline: "01, Dec 2025",
    },
    {
      id: 9,
      title: "IT Support Specialist",
      department: "Information Technology Services",
      text: "Provide technical support for university systems and networks. Strong troubleshooting skills and experience with educational technology platforms required...",
      type: "Full-Time",
      deadline: "20, Sep 2025",
    },
    {
      id: 10,
      title: "Counseling Psychologist",
      department: "Student Wellness Center",
      text: "Support student mental health and wellbeing. Licensed psychologist with experience in counseling young adults in academic settings preferred...",
      type: "Full-Time",
      deadline: "12, Oct 2025",
    },
    {
      id: 11,
      title: "Laboratory Technician",
      department: "Faculty of Natural Sciences",
      text: "Maintain and operate laboratory equipment for chemistry and biology courses. Technical certification and 2+ years experience in academic laboratory settings...",
      type: "Full-Time",
      deadline: "08, Oct 2025",
    },
    {
      id: 12,
      title: "Marketing Coordinator",
      department: "University Communications",
      text: "Develop and implement marketing strategies for student recruitment and university branding. Bachelor's degree in Marketing or Communications required...",
      type: "Full-Time",
      deadline: "25, Oct 2025",
    },
    {
      id: 13,
      title: "Post Doctoral Research Associate",
      department: "Faculty of Management Sciences",
      text: "We are excited to welcome a curious, dedicated, and collaborative Post Doctoral Research Associate to join our business research team...",
      type: "Full-Time",
      deadline: "18, Nov 2025",
    },
    {
      id: 14,
      title: "Sports Coordinator",
      department: "Athletics Department",
      text: "Coordinate university sports programs and manage athletic facilities. Background in sports management or kinesiology with coaching experience preferred...",
      type: "Full-Time",
      deadline: "22, Sep 2025",
    },
    {
      id: 15,
      title: "Visiting Professor of Law",
      department: "Faculty of Law",
      text: "One-year visiting position for an experienced legal academic. Specialization in Constitutional Law or Human Rights Law preferred...",
      type: "Contract",
      deadline: "30, Oct 2025",
    },
    {
      id: 16,
      title: "Financial Analyst",
      department: "Finance Office",
      text: "Analyze university financial data and prepare budget reports. CPA certification and 3+ years experience in financial analysis required...",
      type: "Full-Time",
      deadline: "15, Nov 2025",
    },
    {
      id: 17,
      title: "Campus Security Supervisor",
      department: "Campus Security",
      text: "Lead our campus security team to ensure student and staff safety. Law enforcement background and supervisory experience preferred...",
      type: "Full-Time",
      deadline: "05, Sep 2025",
    },
    {
      id: 18,
      title: "Graduate Teaching Assistant",
      department: "Faculty of Social Sciences",
      text: "Support undergraduate courses in Sociology and Political Science. Currently enrolled in relevant PhD program with strong academic record...",
      type: "Part-Time",
      deadline: "10, Sep 2025",
    },
    {
      id: 19,
      title: "Maintenance Supervisor",
      department: "Facilities Management",
      text: "Oversee campus maintenance operations and manage maintenance staff. Technical certification and 5+ years supervisory experience in facilities management...",
      type: "Full-Time",
      deadline: "18, Oct 2025",
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

  // Example parent component or page

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
                  New City University is a leading Nigerian provider of
                  innovative education, offering programs to thousands of
                  students across Africa and beyond. While proudly rooted in
                  Nigeria, our community and impact are global.
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
              As a newly established Nigerian university, New City University
              champions the humanities, promoting their value to society and the
              economy through innovative knowledge creation and exchange. <br />
              <br /> We are a collaborative hub of academic excellence, uniting
              diverse institutions to foster a vibrant community of learners and
              educators. New City University’s growing network of over 10,000
              students and 1,000 staff drives cutting-edge research across
              disciplines. <br />
              <br /> Our commitment to expanding access to education and
              leveraging collective expertise empowers us to transform lives
              globally and tackle future challenges with a global impact.
            </p>
            <div className=" text-black lg:mb-[36px]">
              <h1>
                <strong>How to Apply</strong>
              </h1>
              <br />
              <p>
                At New City University, you can explore and apply for job
                vacancies through our website. We do not accept unsolicited CVs.{" "}
                <br />
                <br />
                To apply for a vacancy, click the “Apply” button to begin.
                Create an account or log in if you have one. Our portal allows
                you to save and revisit your application, editing sections
                before submission. Once submitted, no further changes can be
                made <strong>:</strong>
              </p>
              <br />
              <ol className="list-disc space-y-4 pl-6 ">
                <li>
                  <strong>Application Tips: </strong>
                  Carefully review the Job Description and Person Specification
                  to tailor your application, providing specific examples to
                  demonstrate how your skills and experience align with the
                  role’s requirements.
                </li>
                <li>
                  <strong>Closing Dates: </strong>
                  Vacancies close at midnight on the advertised date, and late
                  applications are not accepted.
                </li>
                <li>
                  <strong>Reasonable Adjustment: </strong>
                  If you need assistance during the application or interview
                  process, contact recruitment@newcity.edu.ng.
                </li>
                <li>
                  <strong>Technical Support: </strong>
                  For issues with the application portal, email our support team
                  or call +234 708 5530 656, selecting option 2.
                </li>
                <li>
                  <strong>Next Steps: </strong>
                  Upon submitting your application, you’ll receive a
                  confirmation email. If shortlisted, you’ll get an email to
                  book an interview slot—check your spam/junk folder. If not
                  shortlisted, you’ll be notified by email. Due to high
                  application volumes, feedback is not provided at the
                  application stage.
                </li>
                <li>
                  <strong>Interview Adjustments: </strong>
                  If invited to an interview and requiring adjustments, contact
                  the Recruitment Team promptly to arrange accommodations.
                </li>
              </ol>
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
