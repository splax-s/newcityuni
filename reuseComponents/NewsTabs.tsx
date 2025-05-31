"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { title: "News", slug: "news" },
  { title: "Events", slug: "events" },
];

export default function NewsTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const currentSlug = pathname.split("/").pop() || "history";

  return (
    <div>
      {/* Desktop vertical tab list */}
      <div className=" flex  ">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => router.push(`/news/${tab.slug}`)}
            className={` w-full text-center py-2 text-[18px] transition-all ${
              currentSlug === tab.slug
                ? "text-[#61213C] font-[700] border-b-[#C06921] border-b-2"
                : "text-[#D1D6DA] hover:text-[#61213C] hover:border-[#C06921] border-b-1 border-[#D1D6DA]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
