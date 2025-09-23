"use client";

import React from "react";

type Props = {
  current: number;
};

const steps = [
  "Program Choice",
  "Personal Info",
  "Academic Info",
  "Uploads",
  "Payment",
  "Review & Submit",
];

export default function Stepper({ current }: Props) {
  const percent = steps.length > 1 ? (current / (steps.length - 1)) * 100 : 0;

  return (
    <div className="relative flex justify-between items-center mb-12">
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 -z-10" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-[#8B1C3D] -z-10"
        style={{ width: `${percent}%` }}
      />

      {steps.map((step, idx) => (
        <div key={step} className="flex-1 text-center">
          <div
            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 font-medium text-sm ${
              idx < current
                ? "border-[#8B1C3D] text-[#8B1C3D] bg-white"
                : idx === current
                ? "border-[#8B1C3D] text-[#8B1C3D] bg-white"
                : "border-gray-300 text-gray-400 bg-white"
            }`}
          >
            {idx < current ? "✓" : idx + 1}
          </div>
          <p className={`mt-2 text-sm ${idx === current ? "text-[#8B1C3D] font-medium" : "text-gray-400"}`}>
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}
