"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AdmissionsFormStep4() {
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
                  idx <= 3
                    ? "border-[#8B1C3D] text-[#8B1C3D]"
                    : "border-gray-300 text-gray-400"
                } bg-white`}
              >
                {idx <= 3 ? "✓" : idx + 1}
              </div>
              <p
                className={`mt-2 text-sm ${
                  idx === 3 ? "text-[#8B1C3D] font-medium" : "text-gray-400"
                }`}
              >
                {step}
              </p>
              {idx < steps.length - 1 && (
                <div className="absolute top-5 left-0 right-0 flex justify-between -z-10">
                  {steps.slice(0, -1).map((_, lineIdx) => (
                    <span
                      key={lineIdx}
                      className={`flex-1 h-0.5 ${
                        lineIdx < 3 ? "bg-[#8B1C3D]" : "bg-gray-300"
                      } mx-2`}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">
          Step 4: Document Upload
        </h2>
        <p className="text-gray-600 mb-8">
          Supported file formats: PDF, JPG, PNG (max 5MB each)
        </p>

        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upload Box */}
          <div className="bg-white border border-dashed border-[#8B1C3D] rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0L8 8m4-4 4 4M4 16h16"
                />
              </svg>
            </div>
            <p className="text-gray-600">Drag & drop to upload</p>
            <p className="text-gray-600">or browse</p>
          </div>

          {/* Upload Record */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-800 font-medium mb-4">Upload record</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                    PDF
                  </span>
                  <span className="text-gray-700">WAEC.pdf</span>
                </div>
                <span className="text-gray-500">900kb</span>
                <button className="text-[#8B1C3D] text-sm">Preview</button>
                <button className="text-red-500">🗑</button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                    JPG
                  </span>
                  <span className="text-gray-700">High_School_Certific...</span>
                </div>
                <span className="text-gray-500">500kb</span>
                <button className="text-[#8B1C3D] text-sm">Preview</button>
                <button className="text-red-500">🗑</button>
              </div>
            </div>
          </div>

          {/* Attach Documents */}
          <div className="bg-white border rounded-lg p-6 col-span-1 md:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-medium">
                Attach the following documents
              </h3>
              <p className="text-gray-600">2/4</p>
            </div>
            <div className="space-y-4">
              {/* Uploaded */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-700">WAEC Result</span>
                </div>
                <span className="text-gray-600">Joshua Sam-Alade WAEC.pdf</span>
                <button className="text-[#8B1C3D] text-sm">Edit</button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    ✓
                  </span>
                  <span className="text-gray-700">NIN</span>
                </div>
                <span className="text-gray-600">Joshua Sam-Alade WAEC.pdf</span>
                <button className="text-[#8B1C3D] text-sm">Edit</button>
              </div>
              {/* Pending */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gray-200"></span>
                  <span className="text-gray-700">Jamb Result</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-4 py-1 rounded-md text-sm">
                  Upload
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gray-200"></span>
                  <span className="text-gray-700">Just a filler</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-4 py-1 rounded-md text-sm">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Draft + Buttons */}
        <div className="bg-white border rounded-lg p-4 flex items-center justify-between mt-6">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <path d="M7 3v4"></path>
            </svg>
            Save to Drafts
          </button>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions/form/step-3"
              className="border border-[#8B1C3D] text-[#8B1C3D] px-6 py-2 rounded-md hover:bg-gray-50"
            >
              Go back
            </Link>
            <Link
              href="/admissions/form/step-5"
              className="bg-[#F4C2C2] text-white px-6 py-2 rounded-md hover:bg-[#e6a8a8]"
            >
              Proceed to Pay
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
