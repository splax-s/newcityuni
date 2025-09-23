"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Stepper from "@/reuseComponents/Stepper";

export default function AdmissionsFormStep4() {
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
        <Stepper current={3} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">
          Step 4: Document Upload
        </h2>
        <p className="text-gray-600 mb-8">
          Supported file formats: PDF, JPG, PNG (max 5MB each)
        </p>

        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-[208px_1fr_1fr] gap-6 ">
          {/* Upload Box */}
          <div className="bg-white border rounded-lg p-6 md:w-[208px]">
            <h3 className="text-gray-800 font-medium mb-4">
              Upload required documents
            </h3>
            <div className="bg-white border border-dashed border-[#8B1C3D] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Image
                  src="/icons/cloud-plus.svg"
                  alt="Upload Icon"
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-[#1C1F22] text-center">
                Drag & drop to upload
              </p>
              <p className="text-[#A73966]">or browse</p>
            </div>
          </div>

          {/* Upload Record */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-800 font-medium mb-4">Upload record</h3>
            <hr className="my-4" />
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/pdf1.svg"
                    alt="Uploaded File"
                    width={35}
                    height={35}
                  />
                  <div>
                    <p className="text-gray-700">WAEC</p>
                    <p className="text-gray-600 text-xs">900kb</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50">
                    Preview
                  </button>
                  <Image
                    src="/icons/trash.svg"
                    alt="Uploaded File"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/jpeg.svg"
                    alt="Uploaded File"
                    width={35}
                    height={35}
                  />
                  <div>
                    <p className="text-gray-700">High_School</p>
                    <p className="text-gray-600 text-xs">500kb</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1  text-sm text-gray-700 hover:bg-gray-50">
                    Preview
                  </button>
                  <Image
                    src="/icons/trash.svg"
                    alt="Uploaded File"
                    width={25}
                    height={25}
                  />
                </div>
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
            <hr className="my-4" />
            <div className="space-y-4">
              {/* Uploaded */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">WAEC Result</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">Joshua-WAEC.pdf</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">NIN Result</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">Joshua-WAEC.pdf</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit
                </button>
              </div>
              {/* Pending */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle2.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <span className="text-gray-700">Jamb Result</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-5 py-1 rounded-md text-sm">
                  Upload
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle2.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <span className="text-gray-700">Just a filler</span>
                </div>
                <button className="bg-[#F4C2C2] text-white px-5 py-1 rounded-md text-sm">
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
