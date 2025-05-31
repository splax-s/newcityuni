"use client";

import Link from "next/link";
import Image from "next/image";

export default function Portals() {
  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Floating Logo & Back Link */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-50 flex items-center bg-white  lg:bg-[#46182B] px-3 py-2 rounded-md shadow hover:bg-black transition"
      >
        {/* Mobile Logo */}
        <Image
          src="/logo.svg"
          alt="Mobile Logo"
          width={50}
          height={20}
          className="object-contain block md:hidden"
        />

        {/* Desktop Logo */}
        <Image
          src="/logo2.svg"
          alt="Desktop Logo"
          width={150}
          height={120}
          className="object-contain hidden md:block"
        />
      </Link>

      {/* Lecturer Section */}
      <Link
        href="/lecturer"
        className="relative group bg-blue-900 text-white flex flex-col justify-center items-center p-10 hover:opacity-90 transition duration-300"
      >
        <Image
          src="/lecturer.jpg"
          alt="Lecturer"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40"
        /> 
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Lecturer Portal</h2>
          <p className="text-sm">Click to log in as a lecturer</p>
        </div>
      </Link>

      {/* Student Section */}
      <Link
        href="/student"
        className="relative group bg-purple-900 text-white flex flex-col justify-center items-center p-10 hover:opacity-90 transition duration-300"
      >
        <Image
          src="/student.jpg"
          alt="Student"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Student Portal</h2>
          <p className="text-sm">Click to log in as a student</p>
        </div>
      </Link>
    </div>
  );
}
