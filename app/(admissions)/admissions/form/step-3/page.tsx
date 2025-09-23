"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";

export default function AdmissionsFormStep3() {
  return (
    <>
      <Navbar />

      {/* Top Breadcrumb */}
      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Application Form</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <Stepper current={2} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">Step 3: Academic Info</h2>
        <p className="text-gray-600 mb-8">
          Include your most recent schools, results, and qualifications.
        </p>

        {/* Academic Info Card */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          {/* Senior Secondary School */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-4">Senior Secondary School</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block text-sm font-medium text-black">
                School Name
                <input
                  type="text"
                  placeholder="School Name"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Year Completed
                <input
                  type="date"
                  placeholder="Year Completed"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Year Enrolled
                <input
                  type="date"
                  placeholder="Year Enrolled"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Certificate
                <input
                  type="text"
                  placeholder="Certificate"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
            </div>
          </div>

          {/* Junior Secondary School */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-4">Junior Secondary School</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block text-sm font-medium text-black">
                School Name
                <input
                  type="text"
                  placeholder="School Name"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Year Completed
                <input
                  type="date"
                  placeholder="Year Completed"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Year Enrolled
                <input
                  type="date"
                  placeholder="Year Enrolled"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
              <label className="block text-sm font-medium text-black">
                Certificate
                <input
                  type="text"
                  placeholder="Certificate"
                  className="border rounded-md p-3 text-gray-700 w-full mt-1"
                />
              </label>
            </div>
          </div>

          {/* Results - JAMB */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-medium mb-4">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Examination
                <select className="border rounded-md p-3 text-gray-700 w-full mt-1">
                  <option>JAMB</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4 col-span-2">
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Mathematics"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A+"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Physics"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="B"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Chemistry"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="History"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-end mb-4">
               <button className="bg-none text-[#61213C] border border-[#61213C] px-4 py-2 rounded-md">
                + Add Subject
              </button>
            </div>
          </div>

          {/* Results - WAEC */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Examination
                <select className="border rounded-md p-3 text-gray-700 w-full mt-1">
                  <option>WAEC</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4 col-span-2">
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Mathematics"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A+"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Physics"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="B"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="Chemistry"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Subject
                  <input
                    type="text"
                    placeholder="History"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-600">
                  Grade
                  <input
                    type="text"
                    placeholder="A"
                    className="border rounded-md p-3 text-gray-700 w-full mt-1"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <button className="bg-none text-[#61213C] border border-[#61213C] px-4 py-2 rounded-md">
                + Add Subject
              </button>
            </div>
          </div>
        </div>

        

        {/* Save Drafts (left) and Buttons (right) in one row */}
        <div className="bg-white border rounded-lg p-4 flex items-center justify-between mb-6">
          <div>
            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              <svg
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <path d="M7 3v4"></path>
              </svg>
              Save to Drafts
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admissions/form/step-2" className="border border-[#8B1C3D] text-[#8B1C3D] px-6 py-2 rounded-md hover:bg-gray-50 inline-flex items-center">
              Go back
            </Link>
            <Link href="/admissions/form/step-4" className="bg-[#61213C] text-white px-6 py-2 rounded-md hover:bg-[#4a192e] inline-flex items-center">
              Proceed
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}