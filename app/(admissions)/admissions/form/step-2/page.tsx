"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AdmissionsFormStep2() {
  const steps = [
    "Program Choice",
    "Personal Info",
    "Academic Info",
    "Uploads",
    "Payment",
    "Review & Submit",
  ];
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
        {/* Stepper */}
        <div className="flex justify-between items-center mb-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  idx === 1
                    ? "border-[#8B1C3D] bg-white text-[#8B1C3D]"
                    : idx < 1
                    ? "border-[#8B1C3D] bg-white text-[#8B1C3D]"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {idx <= 1 ? "✓" : idx + 1}
              </div>
              <p
                className={`mt-2 text-sm ${
                  idx === 1 ? "text-[#8B1C3D] font-medium" : "text-gray-400"
                }`}
              >
                {step}
              </p>
              {/* Line Connector */}
              {idx < steps.length - 1 && (
                <div className="absolute top-5 left-0 right-0 flex justify-between -z-10">
                  {steps.slice(0, -1).map((_, lineIdx) => (
                    <span
                      key={lineIdx}
                      className={`flex-1 h-0.5 ${
                        lineIdx < 1 ? "bg-[#8B1C3D]" : "bg-gray-300"
                      } mx-2`}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">Step 2: Personal Info</h2>
        <p className="text-gray-600 mb-8">
          Please provide accurate details as they appear on official documents.
        </p>

        {/* Personal Info Card */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          {/* Basic Information */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-medium mb-4">Basic Information</h3>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-black mb-1">Middle Name</label>
                <input
                  id="middleName"
                  name="middleName"
                  type="text"
                  placeholder="Middle Name"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-black mb-1">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder="Date of Birth"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          {/* Residency Information */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-medium mb-4">Residency Information</h3>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-black mb-1">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-black mb-1">Country</label>
                <select id="country" name="country" defaultValue="Nigeria" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>Country</option>
                  <option>Nigeria</option>
                </select>
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-black mb-1">State</label>
                <select id="state" name="state" defaultValue="Lagos" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>State</option>
                  <option>Lagos</option>
                </select>
              </div>

              <div>
                <label htmlFor="lga" className="block text-sm font-medium text-black mb-1">Local Government Area</label>
                <input
                  id="lga"
                  name="lga"
                  type="text"
                  placeholder="Local Government Area"
                  className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
            </div>
          </div>

            <hr className="mb-4" />

          {/* State of Origin Information */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-medium mb-4">State of Origin Information</h3>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="originState" className="block text-sm font-medium text-black mb-1">State</label>
                <select id="originState" name="originState" defaultValue="Lagos State" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>State</option>
                  <option>Lagos State</option>
                </select>
              </div>

              <div>
                <label htmlFor="originLga" className="block text-sm font-medium text-black mb-1">Local Government Area</label>
                <input
                  id="originLga"
                  name="originLga"
                  type="text"
                  placeholder="Local Government Area"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-black mb-1">Nationality</label>
                <input
                  id="nationality"
                  name="nationality"
                  type="text"
                  placeholder="Nationality"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
            </div>
          </div>

            <hr className="mb-4" />

          {/* Health Information */}
          <div className="mb-8">
            <h3 className="text-gray-800 font-medium mb-4">Health Information</h3>
            <hr className="mb-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="bloodGroup" className="block text-sm font-medium text-black mb-1">Blood Group</label>
                <select id="bloodGroup" name="bloodGroup" defaultValue="O+" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>Blood Group</option>
                  <option>O+</option>
                </select>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-black mb-1">Gender</label>
                <select id="gender" name="gender" defaultValue="Male" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>Gender</option>
                  <option>Male</option>
                </select>
              </div>

              <div>
                <label htmlFor="genotype" className="block text-sm font-medium text-black mb-1">Genotype</label>
                <select id="genotype" name="genotype" defaultValue="AA" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>Genotype</option>
                  <option>AA</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label htmlFor="disability" className="block text-sm font-medium text-black mb-1">Disability</label>
                <select id="disability" name="disability" defaultValue="None" className="border rounded-md p-3 text-gray-700 w-full">
                  <option>Disability</option>
                  <option>None</option>
                </select>
              </div>

              <div>
                <label htmlFor="healthIssue" className="block text-sm font-medium text-black mb-1">Health Issue</label>
                <input
                  id="healthIssue"
                  name="healthIssue"
                  type="text"
                  placeholder="Health Issue"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
            </div>
          </div>

            <hr className="mb-4" />

          {/* Next of Kin Information */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Next of Kin Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="nokName" className="block text-sm font-medium text-black mb-1">Full Name</label>
                <input
                  id="nokName"
                  name="nokName"
                  type="text"
                  placeholder="Full Name"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="nokAddress" className="block text-sm font-medium text-black mb-1">Address</label>
                <input
                  id="nokAddress"
                  name="nokAddress"
                  type="text"
                  placeholder="Address"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>

              <div>
                <label htmlFor="nokPhone" className="block text-sm font-medium text-black mb-1">Phone</label>
                <input
                  id="nokPhone"
                  name="nokPhone"
                  type="tel"
                  placeholder="Phone"
                    className="border rounded-md p-3 text-gray-700 w-full"
                />
              </div>
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
            <Link href="/admissions/form/step-1" className="border border-[#8B1C3D] text-[#8B1C3D] px-6 py-2 rounded-md hover:bg-gray-50 inline-flex items-center">
              Go back
            </Link>
            <Link href="/admissions/form/step-3" className="bg-[#61213C] text-white px-6 py-2 rounded-md hover:bg-[#4a192e] inline-flex items-center">
              Proceed
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}