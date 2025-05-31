"use client";

import Link from "next/link";
import Image from "next/image";

export default function LecturerLoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Image Section */}
      <div className="relative bg-blue-900 hidden md:block">
        <Image
          src="/lecturer.jpg"
          alt="Lectuirer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center px-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">Welcome, Lecturer</h2>
            <p className="text-lg">Access your dashboard and resources</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center px-6 py-12">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6">
          Lecturer Login
        </h1>

        <form className="w-full max-w-sm space-y-4">
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="student@example.com"
            />
          </div>

          <div>
            <label
              className="block text-sm text-black font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Not a lecturer?{" "}
          <Link href="/student" className="text-blue-700 underline">
            Go to student Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
