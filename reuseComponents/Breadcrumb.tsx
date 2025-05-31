"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

function formatLabel(segment: string) {
  return segment
    .replace(/-/g, " ")          // Replace dashes with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize each word
}

const Breadcrumb = () => {
  const pathname = usePathname(); // e.g. "/about-us/history"
  const segments = pathname.split("/").filter(Boolean); // remove empty parts

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      return { label: formatLabel(segment), href };
    }),
  ];

  return (
    <nav className="bg-[#7B2C4B] py-3 px-6 text-white text-sm font-medium flex items-center space-x-2">
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index !== crumbs.length - 1 ? (
            <Link href={crumb.href} className="hover:underline">
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index < crumbs.length - 1 && (
            <ChevronRight size={14} className="text-[#E4A859]" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
