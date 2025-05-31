"use client";

import React, { useState, useEffect } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import Image from "next/image";
import JobCard from "@/reuseComponents/JobCard";

export default function Career() {
  const jobs = Array.from({ length: 19 }, (_, i) => ({
    id: i,
    title: "Post Doctoral Research Associate",
    department: "Faculty of Management Sciences",
    text: "We are excited to welcome a curious, dedicated, and collaborative Post Doctoral Research Associate...",
    type: "Full-Time",
    deadline: "18, Jun 2025",
  }));

  const [showJobs, setShowJobs] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                  process, contact recruitment@newcityuniversity.edu.ng.
                </li>
                <li>
                  <strong>Technical Support: </strong>
                  For issues with the application portal, email our support team
                  or call +234 803 123 4567, selecting option 2.
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
                  Showing {currentJobs.length} of {jobs.length} results
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
                    className="bg-transparent outline-none text-sm text-[#919BA5] w-full py-2"
                  />
                </div>

                {/* Filter button */}
                <button className="bg-[#61213C] rounded-[4px]  text-white px-4 flex items-center gap-2 text-sm">
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

            {/* jobs code  */}
            <div className="grid grid-cols-1 gap-[25px] lg:grid-cols-3 items-center justify-between w-full ">
              {currentJobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  department={job.department}
                  text={job.text}
                  type={job.type}
                  deadline={job.deadline}
                />
              ))}
            </div>

            {/* pagination code */}
            <div className="flex justify-between mt-8 gap-2 text-[#919BA5]">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 hover:text-[#7D2B4D] "
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
                className="px-3 py-1 hover:text-[#7D2B4D]"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
