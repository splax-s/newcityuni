"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";
import Image from "next/image";
import { getReviewSubmit } from "@/services/api/admissionsService";

type AdmissionsData = Record<string, unknown> | null;

export default function AdmissionsFormStep6() {
  const router = useRouter();
  const [data, setData] = useState<AdmissionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getReviewSubmit()
      .then((res) => {
        if (!mounted) return;
        // API returns { application_data, step, progress }
        setData(res?.application_data ?? null);
      })
      .catch((err: unknown) => {
        console.error(err);
        setError(err instanceof Error ? err.message : String(err));
        // fallback: keep minimal mock so UI still works
        setData({
          program: "MSc in Technology",
          fullname: "Joshua Sam-Alade",
          email: "joshua@example.com",
        });
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const get = (key: string) => {
    if (!data) return '-';
    const v = (data as Record<string, unknown>)[key];
    return v === null || v === undefined || v === '' ? '-' : String(v);
  };

  function handleSubmit() {
    // simulated submit: clear local mock form state and redirect to dashboard
    localStorage.removeItem("admissions_form");
    router.push("/admissions/dashboard");
  }

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

      <div className="max-w-4xl mx-auto py-12 px-4">
        <Stepper current={5} />
        <h1 className="text-2xl font-bold text-black mb-4">
          Step 6: Review & Submit
        </h1>

        <p className="text-gray-600 mb-6">
          Please review your application before submitting. You won&apos;t be able to
          make changes after this step.
        </p>

        <div className="bg-white border rounded-lg p-6 mb-6">
          {loading ? (
            <p className="text-gray-600">Loading application...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : !data ? (
            <p className="text-gray-600">No saved application data found.</p>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-900">
                  Personal Info
                </h1>
                <button className="text-[#61213C] hover:text-[#6F7C89] flex items-center">
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
              <hr className="my-4" />
              {/* Section: Basic Information */}
              <div>
                <h2 className="text-sm font-normal text-gray-900 mb-4">
                  Basic Information
                </h2>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <p className="text-gray-900">{get('user_name') !== '-' ? get('user_name') : `${get('first_name')} ${get('last_name')}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Middle Name</p>
                    <p className="text-gray-900">{get('middle_name')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">First Course Choice</p>
                    <p className="text-gray-900">{get('first_course_choice')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone Number</p>
                    <p className="text-gray-900">{get('phone_number')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="text-gray-900">{get('email') !== '-' ? get('email') : get('user_email')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">{get('date_of_birth')}</p>
                  </div>
                </div>
              </div>

              {/* Section: Residency Information */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-sm font-normal text-gray-900 mb-4">
                  Residency Information
                </h2>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Address</p>
                    <p className="text-gray-900">{get('address')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Country</p>
                    <p className="text-gray-900">{get('country')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">State</p>
                    <p className="text-gray-900">{get('state')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Local Government Area</p>
                    <p className="text-gray-900">{get('city')}</p>
                  </div>
                </div>
              </div>

              {/* Section: State of Origin Information */}
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

              {/* Section: Health Information */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-sm font-normal text-gray-900 mb-4">
                  Health Information
                </h2>
                <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Gender</p>
                      <p className="text-gray-900">{get('gender_display') !== '-' ? get('gender_display') : get('gender')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Documents Verified</p>
                      <p className="text-gray-900">{get('documents_verified') === 'true' || get('documents_verified') === '1' ? 'Yes' : get('documents_verified') === '-' ? 'No' : get('documents_verified')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="text-gray-900">{get('status_display') !== '-' ? get('status_display') : get('status')}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-gray-500">Awards Won</p>
                      <p className="text-gray-900">{get('awards_won')}</p>
                    </div>
                  </div>
              </div>

              {/* Next of Kin Information */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-sm font-normal text-gray-900 mb-4">
                  Next of Kin Information
                </h2>
                <hr className="mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Full name</p>
                      <p className="text-gray-900">{get('user_name')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Address</p>
                      <p className="text-gray-900">{get('address')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p className="text-gray-900">{get('phone_number')}</p>
                    </div>
                  </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white border rounded-lg p-6 mb-6">
          {!data ? (
            <p className="text-gray-600">No saved application data found.</p>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-900">
                  Academic Info
                </h1>
                <button className="text-[#61213C] hover:text-[#6F7C89] flex items-center">
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
              <hr className="my-4" />

              {/* Senior Secondary School */}
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

              {/* Junior Secondary School */}
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

              {/* Results */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-normal text-gray-900 mb-4">
                  Results
                </h3>
                <hr className="mb-4" />

                {/* JAMB */}
                <div className="grid grid-cols-3 gap-4 text-sm mb-8">
                  {/* Exam name */}
                  <div className="font-bold text-gray-700">JAMB</div>

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
                  <div className="font-bold text-gray-700">WAEC</div>

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
          )}
        </div>

        <div className="bg-white border rounded-lg p-6 mb-6">
          {!data ? (
            <p className="text-gray-600">No saved application data found.</p>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-900">
                  Program Details
                </h1>
                <button className="text-[#61213C] hover:text-[#6F7C89] flex items-center">
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
                  <p className="text-gray-900">Computer Science</p>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="time" checked={false} readOnly />
                  <p className="text-gray-500 mr-2 ml-2">Part-Time</p>
                  <input type="radio" name="time" checked={true} readOnly />
                  <p className="text-gray-500 ml-2">Full-Time</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Document Upload */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          {!data ? (
            <p className="text-gray-600">No saved application data found.</p>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-900">
                  Document Upload
                </h1>
                <button className="text-[#61213C] hover:text-[#6F7C89] flex items-center">
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
              <hr className="my-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
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
                      <p className="text-[#6F7C89]">
                        Joshua Sam-Alade WAEC.pdf
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">NIN</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">Joshua Sam-Alade NIN.pdf</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/checkcircle.svg"
                    alt="checkcircle"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="text-[#1C1F22]">JAMB Result</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/pdf.svg"
                        alt="pdf"
                        width={16}
                        height={16}
                      />
                      <p className="text-[#6F7C89]">
                        Joshua Sam-Alade JAMB.pdf
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg p-6 mb-6 flex justify-end">
          <div className=" flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 border rounded-sm text-[#61213C]"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="ml-auto bg-[#61213C] text-white px-4 py-2 rounded-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
