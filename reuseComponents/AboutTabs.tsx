"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { title: "History & Background", slug: "history" },
  { title: "Mission Statement", slug: "mission" },
  { title: "Vision Statement", slug: "vision" },
  { title: "Motto & Slogan", slug: "motto" },
  { title: "Philosophy", slug: "philosophy" },
  { title: "Objectives", slug: "objectives" },
  { title: "Chancellor's Desk", slug: "chancellor" },
  { title: "Pro-Chancellor’s Pen", slug: "proChancellor" },
  { title: "Chancellor’s Address", slug: "chancellor1" },
  // { title: "Brand Story", slug: "brandstory" },
];

export default function AboutTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const currentSlug = pathname.split("/").pop() || "history";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/about-us/${e.target.value}`);
  };

  return (
    <div>
      {/* Mobile dropdown */}
      <div className="block lg:hidden">
        <select
          value={currentSlug}
          onChange={handleChange}
          className="w-full px-[20px] py-[12px]  text-black border-b-1 border-b-[#C06921]  text-[16px]"
        >
          {tabs.map((tab) => (
            <option key={tab.slug} value={tab.slug}>
              {tab.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop vertical tab list */}
      <div className="hidden lg:block space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => router.push(`/about-us/${tab.slug}`)}
            className={`block w-full text-left py-2 text-[18px] transition-all ${
              currentSlug === tab.slug
                ? "text-[#61213C] font-[700] border-b-[#C06921] border-b-2"
                : "text-gray-800 hover:text-[#61213C]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
