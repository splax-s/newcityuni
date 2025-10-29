"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

export default function SubmissionSuccess() {
  const router = useRouter();
  const search = useSearchParams();
  const appId = search?.get("application_id");

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
      <div className="max-w-3xl mx-auto py-24 px-4">
        <div className="bg-white border rounded-lg p-8 text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/checkcircleBig.svg"
              alt="checkcircle"
              width={96}
              height={96}
            />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-neutral-950">
            🎉 Application submitted successfully!
          </h1>
          <p className="text-gray-700 mb-4">
            Thank you for applying to{" "}
            <span className="text-neutral-950 font-bold">
              New City University.
            </span>
          </p>

          <p className="text-gray-900 mb-6">
            <span className="font-medium">Your Application ID:</span>{" "}
            <span className="text-[#61213C]">{appId ?? "-"}</span>
          </p>

          <p className="text-gray-600 mb-6">
            You will receive updates via email. You can also log in anytime to
            track your application status.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push("/admissions/dashboard")}
              className="bg-[#61213C] text-white px-4 py-2 rounded-sm font-semibold cursor-pointer"
            >
              Go to dashboard
            </button>

            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 border rounded-sm text-[#61213C] cursor-pointer"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
