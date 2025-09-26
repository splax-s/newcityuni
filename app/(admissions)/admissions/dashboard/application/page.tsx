"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import Image from "next/image";

type AdmissionsData = {
  program?: string;
  fullname?: string;
  email?: string;
};

export default function AdmissionsDashboardApplicationPage() {
  const [selected, setSelected] = useState<
    "status" | "program" | "personal" | "academic"
  >("status");

  const [data, setData] = useState<AdmissionsData | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("admissions_form");
      if (raw) setData(JSON.parse(raw));
      else
        setData({
          program: "MSc in Technology",
          fullname: "Joshua Sam-Alade",
          email: "joshua@example.com",
        });
    } catch {
      setData(null);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">My Application</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <AdmissionsSidebar />
        {/* Middle section */}
        <main className="md:col-span-4">
          <div className="bg-white border rounded shadow-sm">
            <ul className="flex flex-col gap-4 p-2 text-[16px] text-gray-700">
              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelected("status")}
                onKeyDown={(e) => e.key === "Enter" && setSelected("status")}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer ${
                  selected === "status" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    selected === "status" ? "text-[#61213C]" : "text-gray-700"
                  }`}
                >
                  <svg
                    className={
                      selected === "status"
                        ? "opacity-100 w-6 h-6"
                        : "opacity-60 w-6 h-6"
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
                      fill="currentColor"
                    />
                    <path
                      d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 9.5H16.5V11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p> Track Application Status</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow icon"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelected("program")}
                onKeyDown={(e) => e.key === "Enter" && setSelected("program")}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer ${
                  selected === "program" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    selected === "program" ? "text-[#61213C]" : "text-gray-700"
                  }`}
                >
                  <svg
                    className={
                      selected === "program"
                        ? "opacity-100 w-6 h-6"
                        : "opacity-60 w-6 h-6"
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M14 21.2501H10V22.7501H14V21.2501ZM2.75 14.0001V10.0001H1.25V14.0001H2.75ZM21.25 13.563V14.0001H22.75V13.563H21.25ZM14.8912 4.61117L18.85 8.17407L19.8534 7.05912L15.8947 3.49623L14.8912 4.61117ZM22.75 13.563C22.75 11.8745 22.7651 10.8056 22.3391 9.84902L20.9689 10.4593C21.2349 11.0566 21.25 11.7421 21.25 13.563H22.75ZM18.85 8.17407C20.2034 9.39215 20.7029 9.86204 20.9689 10.4593L22.3391 9.84902C21.9131 8.89246 21.1084 8.18858 19.8534 7.05912L18.85 8.17407ZM10.0298 2.75005C11.6116 2.75005 12.2085 2.76163 12.7405 2.96578L13.2779 1.56535C12.4261 1.23847 11.498 1.25005 10.0298 1.25005V2.75005ZM15.8947 3.49623C14.8087 2.51883 14.1297 1.89219 13.2779 1.56535L12.7405 2.96578C13.2727 3.16998 13.7215 3.55841 14.8912 4.61117L15.8947 3.49623ZM10 21.2501C8.09318 21.2501 6.73851 21.2485 5.71085 21.1103C4.70476 20.9751 4.12511 20.7214 3.7019 20.2982L2.64124 21.3589C3.38961 22.1072 4.33855 22.4393 5.51098 22.597C6.66182 22.7517 8.13558 22.7501 10 22.7501V21.2501ZM1.25 14.0001C1.25 15.8645 1.24841 17.3383 1.40313 18.4891C1.56076 19.6615 1.89288 20.6105 2.64124 21.3589L3.7019 20.2982C3.27869 19.875 3.02502 19.2953 2.88976 18.2893C2.75159 17.2616 2.75 15.9069 2.75 14.0001H1.25ZM14 22.7501C15.8644 22.7501 17.3382 22.7517 18.489 22.597C19.6614 22.4393 20.6104 22.1072 21.3588 21.3589L20.2981 20.2982C19.8749 20.7214 19.2952 20.9751 18.2892 21.1103C17.2615 21.2485 15.9068 21.2501 14 21.2501V22.7501ZM21.25 14.0001C21.25 15.9069 21.2484 17.2616 21.1102 18.2893C20.975 19.2953 20.7213 19.875 20.2981 20.2982L21.3588 21.3589C22.1071 20.6105 22.4392 19.6615 22.5969 18.4891C22.7516 17.3383 22.75 15.8645 22.75 14.0001H21.25ZM2.75 10.0001C2.75 8.09323 2.75159 6.73856 2.88976 5.7109C3.02502 4.70481 3.27869 4.12516 3.7019 3.70195L2.64124 2.64129C1.89288 3.38966 1.56076 4.3386 1.40313 5.51103C1.24841 6.66187 1.25 8.13563 1.25 10.0001H2.75ZM10.0298 1.25005C8.15538 1.25005 6.67442 1.24847 5.51887 1.40312C4.34232 1.56059 3.39019 1.89235 2.64124 2.64129L3.7019 3.70195C4.12453 3.27933 4.70596 3.0253 5.71785 2.88987C6.75075 2.75163 8.11311 2.75005 10.0298 2.75005V1.25005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 14.5H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 18H11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p> Program</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelected("personal")}
                onKeyDown={(e) => e.key === "Enter" && setSelected("personal")}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer ${
                  selected === "personal" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    selected === "personal" ? "text-[#61213C]" : "text-gray-700"
                  }`}
                >
                  <svg
                    className={
                      selected === "personal"
                        ? "opacity-100 w-6 h-6"
                        : "opacity-60 w-6 h-6"
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p> Personal Information</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>

              <li
                role="button"
                tabIndex={0}
                onClick={() => setSelected("academic")}
                onKeyDown={(e) => e.key === "Enter" && setSelected("academic")}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer ${
                  selected === "academic" ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    selected === "academic" ? "text-[#61213C]" : "text-gray-700"
                  }`}
                >
                  <svg
                    className={
                      selected === "academic"
                        ? "opacity-100 w-6 h-6"
                        : "opacity-60 w-6 h-6"
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3.0918 6.63659L9.78291 3.49965C11.2039 2.83345 12.7964 2.83345 14.2174 3.49965L20.9086 6.63664C22.3641 7.31899 22.3641 9.68105 20.9086 10.3634L14.2175 13.5003C12.7965 14.1665 11.204 14.1665 9.783 13.5003L5.00019 11.2581"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.5 15V12.1376C2.5 10.8584 2.5 10.2188 2.83032 9.71781C3.16064 9.21687 3.74853 8.96492 4.92432 8.461L6 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p> Academic History</p>
                </div>
                <Image
                  src="/icons/right-arrow.svg"
                  width={8}
                  height={8}
                  alt="arrow"
                />
              </li>
            </ul>
          </div>
        </main>
        {/* Right section - conditionally render based on selected item */}
        <aside className="md:col-span-6">
          {selected === "program" ? (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">Program Details</h4>
                <Link
                  href="/admissions/form/step-2"
                  className="text-sm text-[#61213C]"
                >
                  Edit
                </Link>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-500">Academic Level</p>
                  <p className="text-gray-900">Undergraduate</p>
                </div>
                <div>
                  <p className="text-gray-500">Faculty</p>
                  <p className="text-gray-900">Science</p>
                </div>
                <div>
                  <p className="text-gray-500">Department</p>
                  <p className="text-gray-900">Mathematics</p>
                </div>
                <div>
                  <p className="text-gray-500">Program Name</p>
                  <p className="text-gray-900">BSc Computer Science</p>
                </div>
              </div>

              <hr className="my-4" />

              <div className="mt-6 flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="mode"
                    className="accent-[#8B1C3D]"
                  />
                  Part-Time
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="mode"
                    defaultChecked
                    className="accent-[#8B1C3D]"
                  />
                  Full-Time
                </label>
              </div>
            </div>
          ) : selected === "personal" ? (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">
                  Personal Information
                </h4>
                <Link
                  href="/admissions/form/step-2"
                  className="text-sm text-[#61213C]"
                >
                  Edit
                </Link>
              </div>

              <hr className="my-4" />

              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-normal text-gray-900 mb-4">
                    Basic Information
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Full Name</p>
                      <p className="text-gray-900">{data.fullname}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Middle Name</p>
                      <p className="text-gray-900">{data.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Name</p>
                      <p className="text-gray-900">{data.program}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone Number</p>
                      <p className="text-gray-900">+234 701 234 5678</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="text-gray-900">{data.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date of Birth</p>
                      <p className="text-gray-900">03/28/2025</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-sm font-normal text-gray-900 mb-4">
                    Residency Information
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Address</p>
                      <p className="text-gray-900">123 Banana Street, Lagos</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Country</p>
                      <p className="text-gray-900">Nigeria</p>
                    </div>
                    <div>
                      <p className="text-gray-500">State</p>
                      <p className="text-gray-900">Lagos</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Local Government Area</p>
                      <p className="text-gray-900">Ikeja</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-sm font-normal text-gray-900 mb-4">
                    State of Origin Information
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">State</p>
                      <p className="text-gray-900">Lagos State</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Local Government Area</p>
                      <p className="text-gray-900">Ikeja</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Nationality</p>
                      <p className="text-gray-900">Nigerian</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-sm font-normal text-gray-900 mb-4">
                    Health Information
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Blood Group</p>
                      <p className="text-gray-900">O-</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Genotype</p>
                      <p className="text-gray-900">AA</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Gender</p>
                      <p className="text-gray-900">Male</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Disability</p>
                      <p className="text-gray-900">None</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-gray-500">Health Issues</p>
                      <p className="text-gray-900">None</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-sm font-normal text-gray-900 mb-4">
                    Next of Kin Information
                  </h2>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Full name</p>
                      <p className="text-gray-900">John Doe</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Address</p>
                      <p className="text-gray-900">456 Mango Avenue, Lagos</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p className="text-gray-900">+234 701 234 5678</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : selected === "academic" ? (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">Academic History</h4>
                <Link
                  href="/admissions/form/step-3"
                  className="text-sm text-[#61213C]"
                >
                  Edit
                </Link>
              </div>
              <hr className="my-4" />

              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-normal text-gray-900 mb-4">
                    Senior Secondary School
                  </h3>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">School Name</p>
                      <p className="text-gray-900">Greenwood High School</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Year Completed</p>
                      <p className="text-gray-900">03/28/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Year Enrolled</p>
                      <p className="text-gray-900">03/28/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Certificate</p>
                      <p className="text-gray-900">SSS Leaving Certificate</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-normal text-gray-900 mb-4">
                    Junior Secondary School
                  </h3>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">School Name</p>
                      <p className="text-gray-900">Maple Leaf Academy</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Year Completed</p>
                      <p className="text-gray-900">03/28/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Year Enrolled</p>
                      <p className="text-gray-900">03/28/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Certificate</p>
                      <p className="text-gray-900">JSS Leaving Certificate</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-normal text-gray-900 mb-4">
                    Results
                  </h3>
                  <hr className="mb-4" />

                  {/* JAMB */}
                  <div className="grid grid-cols-3 gap-4 text-sm mb-8">
                    {/* Exam name */}
                    <div className="font-normal text-gray-700">JAMB</div>

                    {/* Header + subjects */}
                    <div className="col-span-2">
                      <div className="grid grid-cols-2 font-medium text-gray-500 mb-2">
                        <p>Subject</p>
                        <p>Grade</p>
                      </div>
                      <div className="grid grid-cols-2 gap-y-2">
                        <p className="text-gray-900">Mathematics</p>
                        <p className="text-gray-900">A+</p>
                        <p className="text-gray-900">Physics</p>
                        <p className="text-gray-900">B</p>
                        <p className="text-gray-900">Chemistry</p>
                        <p className="text-gray-900">A</p>
                        <p className="text-gray-900">History</p>
                        <p className="text-gray-900">A</p>
                      </div>
                    </div>
                  </div>

                  {/* WAEC */}
                  <div className="grid grid-cols-3 gap-4 text-sm border-t border-gray-200 pt-6">
                    {/* Exam name */}
                    <div className="font-normal text-gray-700">WAEC</div>

                    {/* Header + subjects */}
                    <div className="col-span-2">
                      <div className="grid grid-cols-2 font-medium text-gray-500 mb-2">
                        <p>Subject</p>
                        <p>Grade</p>
                      </div>
                      <div className="grid grid-cols-2 gap-y-2">
                        <p className="text-gray-900">Further Mathematics</p>
                        <p className="text-gray-900">A</p>
                        <p className="text-gray-900">Biology</p>
                        <p className="text-gray-900">A</p>
                        <p className="text-gray-900">English Literature</p>
                        <p className="text-gray-900">B+</p>
                        <p className="text-gray-900">Geography</p>
                        <p className="text-gray-900">B</p>
                        <p className="text-gray-900">Mathematics</p>
                        <p className="text-gray-900">A+</p>
                        <p className="text-gray-900">Computer Science</p>
                        <p className="text-gray-900">A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border rounded shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">Application Status</h4>
                <span className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-600">
                  In Progress
                </span>
              </div>

              <hr className="my-4" />

              <ul className="space-y-4 flex flex-col gap-6 text-sm">
                {[
                  "Sign up",
                  "Personal Information",
                  "Academic History",
                  "Document Upload",
                  "Payment",
                  "Application Submitted",
                  "Review Pending",
                  "Under Review",
                  "Offer Made",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-semibold ${
                        idx < 5
                          ? "bg-[#91213C] text-white"
                          : "bg-gray-200 text-gray-500 border"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`${
                        idx < 5 ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}
