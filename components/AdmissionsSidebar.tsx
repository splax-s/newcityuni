"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string; icon: string };

export default function AdmissionsSidebar({ items }: { items?: Item[] }) {
  const pathname = usePathname() || "";

  const defaultItems: Item[] = [
    { label: "Dashboard", href: "/admissions/dashboard", icon: "SquaresFour.svg" },
    { label: "My Application", href: "/admissions/dashboard/application", icon: "Files.svg" },
    { label: "Uploads", href: "/admissions/dashboard/uploads", icon: "document-upload.svg" },
    { label: "Payment", href: "/admissions/dashboard/payment", icon: "receipt-item.svg" },
    { label: "Notifications", href: "/admissions/dashboard/notifications", icon: "notification-bing2.svg" },
    { label: "Logout", href: "/admissions/logout", icon: "notification-bing.svg" },
  ];

  const menu = items ?? defaultItems;

  return (
    <aside className="md:col-span-2 bg-white border shadow-sm border-[rgba(232,234,236,1)] rounded p-2">
      <nav className="space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const base = "flex items-center gap-2 p-2 rounded hover:bg-gray-50 text-gray-700";
          const activeClass = active
            ? "bg-gray-100 font-semibold border-l-4 border-[#61213C] text-[#61213C]"
            : "";

          return (
            <Link key={item.href} href={item.href} className={`${base} ${activeClass}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/icons/${item.icon}`} alt={`${item.label} icon`} className="w-5 h-5" />
              <span className="text-sm text-[#545D66]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
