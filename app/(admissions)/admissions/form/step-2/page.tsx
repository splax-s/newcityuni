"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stepper from "@/reuseComponents/Stepper";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitPersonalInfo } from "@/services/api";

export default function AdmissionsFormStep2() {
  const router = useRouter();
  const [countries, setCountries] = useState<{ isoCode: string; name: string }[]>([]);
  const [states, setStates] = useState<{ isoCode?: string; name: string }[]>([]);
  const [countryIso, setCountryIso] = useState<string>("NG");
  const [stateValue, setStateValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // dynamic import so TypeScript doesn't require type declarations at build time
    let mounted = true;
    import("country-state-city")
      .then((mod) => {
        const all = mod?.Country?.getAllCountries?.() ?? [];
        if (mounted) setCountries(all as { isoCode: string; name: string }[]);
      })
      .catch(() => {
        if (mounted) setCountries([]);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (countryIso) {
      import("country-state-city")
        .then((mod) => {
          const st = mod?.State?.getStatesOfCountry?.(countryIso) ?? [];
          setStates(st as { isoCode?: string; name: string }[]);
          setStateValue("");
        })
        .catch(() => {
          setStates([]);
          setStateValue("");
        });
    } else {
      setStates([]);
      setStateValue("");
    }
  }, [countryIso]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Map form fields to API payload keys
      const countrySelectedIso = fd.get("country")?.toString() ?? "";
      const countryName = countries.find((c) => c.isoCode === countrySelectedIso)?.name ?? countrySelectedIso;

      const payload = {
        first_name: fd.get("firstName")?.toString() ?? "",
        middle_name: fd.get("middleName")?.toString() ?? "",
        last_name: fd.get("lastName")?.toString() ?? "",
        phone: fd.get("phone")?.toString() ?? "",
        email: fd.get("email")?.toString() ?? "",
        date_of_birth: fd.get("dob")?.toString() ?? "",
        address: fd.get("address")?.toString() ?? "",
        country: countryName,
        state: fd.get("state")?.toString() ?? "",
        local_government_area: fd.get("lga")?.toString() ?? "",
        state_of_origin: fd.get("originState")?.toString() ?? "",
        state_of_origin_lga: fd.get("originLga")?.toString() ?? "",
        nationality: fd.get("nationality")?.toString() ?? "",
        blood_group: fd.get("bloodGroup")?.toString() ?? "",
        gender: fd.get("gender")?.toString() ?? "",
        genotype: fd.get("genotype")?.toString() ?? "",
        disability: fd.get("disability")?.toString() ?? "",
        health_issue: fd.get("healthIssue")?.toString() ?? "",
        next_of_kin_name: fd.get("nokName")?.toString() ?? "",
        next_of_kin_address: fd.get("nokAddress")?.toString() ?? "",
        next_of_kin_phone: fd.get("nokPhone")?.toString() ?? "",
      };

      await submitPersonalInfo(payload);
      router.push("/admissions/form/step-3");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message || "An error occurred while submitting personal info.");
    } finally {
      setLoading(false);
    }
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

      {/* Form Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <Stepper current={1} />

        {/* Step Title */}
        <h2 className="text-3xl text-black font-bold mb-2">Step 2: Personal Info</h2>
        <p className="text-gray-600 mb-8">Please provide accurate details as they appear on official documents.</p>

        <form onSubmit={handleSubmit}>
          {/* Personal Info Card */}
          <div className="bg-white border rounded-lg p-6 mb-6">
            {/* Basic Information */}
            <div className="mb-8">
              <h3 className="text-gray-800 font-medium mb-4">Basic Information</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="First Name" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="middleName" className="block text-sm font-medium text-black mb-1">Middle Name</label>
                  <input id="middleName" name="middleName" type="text" placeholder="Middle Name" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">Last Name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Phone" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                  <input id="email" name="email" type="email" placeholder="Email" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-black mb-1">Date of Birth</label>
                  <input id="dob" name="dob" type="date" placeholder="Date of Birth" className="border rounded-md p-3 text-gray-700 w-full" />
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
                  <input id="address" name="address" type="text" placeholder="Address" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-black mb-1">Country</label>
                  <select id="country" name="country" value={countryIso} onChange={(e) => setCountryIso(e.target.value)} className="border rounded-md p-3 text-gray-700 w-full">
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c.isoCode} value={c.isoCode}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-black mb-1">State</label>
                  <select id="state" name="state" value={stateValue} onChange={(e) => setStateValue(e.target.value)} disabled={!states.length} className="border rounded-md p-3 text-gray-700 w-full">
                    <option value="">{states.length ? "Select state" : "Select country first"}</option>
                    {states.map((s) => (
                      <option key={s.isoCode || s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="lga" className="block text-sm font-medium text-black mb-1">Local Government Area</label>
                  <input id="lga" name="lga" type="text" placeholder="Local Government Area" className="border rounded-md p-3 text-gray-700 w-full" />
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
                  <input id="originLga" name="originLga" type="text" placeholder="Local Government Area" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-black mb-1">Nationality</label>
                  <input id="nationality" name="nationality" type="text" placeholder="Nationality" className="border rounded-md p-3 text-gray-700 w-full" />
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
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O-</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-black mb-1">Gender</label>
                  <select id="gender" name="gender" defaultValue="Male" className="border rounded-md p-3 text-gray-700 w-full">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="genotype" className="block text-sm font-medium text-black mb-1">Genotype</label>
                  <select id="genotype" name="genotype" defaultValue="AA" className="border rounded-md p-3 text-gray-700 w-full">
                    <option>Genotype</option>
                    <option>AA</option>
                    <option>AS</option>
                    <option>SS</option>
                    <option>SC</option>
                    <option>AC</option>
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
                  <input id="healthIssue" name="healthIssue" type="text" placeholder="Health Issue" className="border rounded-md p-3 text-gray-700 w-full" />
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
                  <input id="nokName" name="nokName" type="text" placeholder="Full Name" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="nokAddress" className="block text-sm font-medium text-black mb-1">Address</label>
                  <input id="nokAddress" name="nokAddress" type="text" placeholder="Address" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>

                <div>
                  <label htmlFor="nokPhone" className="block text-sm font-medium text-black mb-1">Phone</label>
                  <input id="nokPhone" name="nokPhone" type="tel" placeholder="Phone" className="border rounded-md p-3 text-gray-700 w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Save Drafts (left) and Buttons (right) in one row */}
          <div className="bg-white border rounded-lg p-4 flex items-center justify-between mb-6">
            <div>
              <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

              <button type="submit" disabled={loading} className="bg-[#61213C] text-white px-6 py-2 rounded-md hover:bg-[#4a192e] inline-flex items-center">
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