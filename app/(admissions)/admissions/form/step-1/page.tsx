"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";
import { submitProgramChoice } from "@/services/api";

function toApiValue(label: string) {
  return label.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
}

export default function AdmissionsFormStep1() {
  const router = useRouter();
  const [academicLevel, setAcademicLevel] = useState("Undergraduate");
  const [faculty, setFaculty] = useState("Faculty of Science");
  const [department, setDepartment] = useState("Department of Computer Science");
  const [programName, setProgramName] = useState("Software Engineering");
  const [modeOfStudy, setModeOfStudy] = useState("full_time");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const payload = {
        academic_level: toApiValue(academicLevel),
        faculty: toApiValue(faculty.replace(/^faculty of /i, "")),
        department: toApiValue(department.replace(/^department of /i, "")),
        program_name: toApiValue(programName),
        mode_of_study: modeOfStudy,
      };

      await submitProgramChoice(payload);
      // navigate to step 2 on success
      router.push("/admissions/form/step-2");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message || "An error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      {/* Top Breadcrumb */}
      <div className="bg-[#61213C] text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm">
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
        <Stepper current={0} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">Step 1: Program Choice</h2>
        <p className="text-gray-600 mb-8">Select your preferred course and mode of study.</p>

        <form onSubmit={handleSubmit}>
          {/* Program Details Card */}
          <div className="bg-white border rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-center">
              <h3 className="text-gray-800 font-medium">Program Details</h3>

              <div className="flex justify-end">
                <div className="w-full md:w-80">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Programs/Courses, e.g MSc"
                      className="w-full border rounded-md p-3 pl-10 text-gray-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="mb-6" />

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="academicLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Level
                </label>
                <select
                  id="academicLevel"
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="border rounded-md p-3 text-gray-700 w-full"
                >
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Diploma</option>
                  <option>Doctorate</option>
                </select>
              </div>
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">
                  Faculty
                </label>
                <select
                  id="faculty"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="border rounded-md p-3 text-gray-700 w-full"
                >
                  <option>Faculty Of Basic Medical And Allied Health Sciences</option>
                  <option>Faculty Of Science and Computing</option>
                  <option>Faculty Of Communications And Media Studies</option>
                  <option>Faculty Of Social And Management Sciences</option>
                </select>
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="border rounded-md p-3 text-gray-700 w-full"
                >
                  <option>Department Of Nursing Science</option>
                  <option>Department Of Doctor of Physiotherapy(DPT)</option>
                  <option>Department Of Medical Laboratory Science</option>
                  <option>Department Of Radiography</option>
                  <option>Department Of Public Health</option>
                  <option>Department of Computer Science</option>
                  <option>Department of Cyber-Security</option>
                  <option>Department of Information Technology</option>
                  <option>Department of Biochemistry</option>
                  <option>Department of Mass Communication</option>
                  <option>Department of Accounting</option>
                  <option>Department of Business Administration</option>
                  <option>Department of Economics</option>
                  <option>Department of Public Relations</option>
                  <option>Department of Advertising</option>
                  <option>Department of Broadcasting</option>
                  <option>Department of Journalism and Media Studies</option>
                </select>
              </div>
            </div>

            {/* Program Name & Search */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-1">
                  Program Name
                </label>
                <select
                  id="programName"
                  value={programName}
                  onChange={(e) => setProgramName(e.target.value)}
                  className="border rounded-md p-3 text-gray-700 w-full"
                >
                  
                  <option>B.sc Nursing Science</option>
                  <option>PhD Doctor of Physiotherapy(DPT)</option>
                  <option>B.sc Medical Laboratory Science</option>
                  <option>B.sc Radiography</option>
                  <option>B.sc Public Health</option>
                  <option>B.sc Computer Science</option>
                  <option>B.sc Cyber-Security</option>
                  <option>B.sc Information Technology</option>
                  <option>B.sc Biochemistry</option>
                  <option>B.sc Mass Communication</option>
                  <option>B.sc Accounting</option>
                  <option>B.sc Business Administration</option>
                  <option>B.sc Economics</option>
                  <option>B.sc Public Relations</option>
                  <option>B.sc Advertising</option>
                  <option>B.sc Broadcasting</option>
                  <option>B.sc Journalism and Media Studies</option>
                </select>
              </div>
            </div>

            {/* Mode of Study */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="mode"
                  checked={modeOfStudy === "part_time"}
                  onChange={() => setModeOfStudy("part_time")}
                  className="accent-[#8B1C3D]"
                />
                Part-Time
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="mode"
                  checked={modeOfStudy === "full_time"}
                  onChange={() => setModeOfStudy("full_time")}
                  className="accent-[#8B1C3D]"
                />
                Full-Time
              </label>
            </div>
          </div>

          {/* Save Drafts (left) and Buttons (right) in one row */}
          <div className="bg-white border rounded-lg p-4 flex items-center justify-between mb-6">
            <div>
              <button
                type="button"
                className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
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
              <Link href="/admissions/dashboard" className="border border-[#8B1C3D] text-[#8B1C3D] px-6 py-2 rounded-md hover:bg-gray-50 inline-flex items-center">
                Go back
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#61213C] text-white px-6 py-2 rounded-md hover:bg-[#4a192e] inline-flex items-center"
              >
                {loading ? "Submitting..." : "Proceed"}
              </button>
            </div>
          </div>

          {error && <div className="text-red-600 mb-4">{error}</div>}
        </form>
      </div>

      <Footer />
    </>
  );
}
