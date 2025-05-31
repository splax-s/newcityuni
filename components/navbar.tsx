"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Academics", path: "/academics/FTundergraduate" },
  { label: "Campus Life", path: "/campus/accomodation" },
  { label: "Admissions", path: "/admissions/undergraduate" },
  { label: "News & Events", path: "/news" },
  { label: "Careers", path: "/career" },
  { label: "Portals", path: "/portals" },
  { label: "About Us", path: "/about-us/history" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col relative z-50">
        {/* Top bar */}
        <div className="bg-[#61213C] h-[80px] flex items-center px-[20px] lg:px-[59px] justify-between text-white">
          {/* Logo */}
          <Link href="/" aria-label="Homepage">
            <Image
              src="/Logo2.png"
              alt="New City University Logo"
              width={130}
              height={40}
              className="w-[130px] h-[40px]"
              priority
            />
          </Link>

          {/* Search & Hamburger */}
          <div className="flex items-center gap-3 lg:gap-2">
            <Image
              src="/Mag.svg"
              alt="Search"
              width={24}
              height={24}
              className="lg:w-[16px] w-[24px]"
            />

            <span className="hidden lg:block text-[16px] leading-[24px]">
              Search
            </span>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden"
            >
              <Image src="/menu.svg" alt="Open menu" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex justify-end items-center px-[58px] text-black">
          {navLinks.map(({ label, path }) => {
            const isActive =
              label === "About Us"
                ? pathname.startsWith("/about-us")
                : pathname === path;

            return (
              <Link
                key={label}
                href={path}
                className={`py-3 px-4 border-b-2 text-sm font-medium transition-all duration-200
              ${isActive ? "border-[#61213C]" : "border-transparent hover:border-[#61213C]"}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-[#61213C] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-end items-center p-2 border-b border-[#7e4262]">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-gray-300 text-3xl font-bold px-2"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`text-left py-3 px-2 rounded font-semibold transition-colors duration-200
                ${pathname === path ? "bg-[#7e4262]" : "hover:bg-[#7e4262]"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
