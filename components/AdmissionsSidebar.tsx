"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logout as apiLogout } from "@/services/api/authService";

type Item = { label: string; href: string; icon: string };

export default function AdmissionsSidebar({ items }: { items?: Item[] }) {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const defaultItems: Item[] = [
    { label: "Dashboard", href: "/admissions/dashboard", icon: "SquaresFour.svg" },
    { label: "My Application", href: "/admissions/dashboard/application", icon: "Files.svg" },
    { label: "Uploads", href: "/admissions/dashboard/uploads", icon: "document-upload.svg" },
    { label: "Payment", href: "/admissions/dashboard/payment", icon: "receipt-item.svg" },
    { label: "Notifications", href: "/admissions/dashboard/notifications", icon: "notification-bing2.svg" },
    { label: "Logout", href: "/admissions/logout", icon: "notification-bing.svg" },
  ];

  const menu = items ?? defaultItems;

  const handleLogout = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await apiLogout();
    } catch {
      // ignore - apiLogout already logs warnings
    } finally {
      setLoggingOut(false);
      try { localStorage.removeItem('access'); localStorage.removeItem('refresh'); localStorage.removeItem('user'); } catch {}
      router.push('/');
    }
  };

  return (
    <aside className="md:col-span-2 bg-white border shadow-sm border-[rgba(232,234,236,1)] rounded p-2">
      <nav className="space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const base = "flex items-center gap-2 p-2 rounded hover:bg-gray-50 text-gray-700";
          const activeClass = active
            ? "bg-gray-100 font-semibold border-l-4 border-[#61213C] text-[#61213C]"
            : "";

          // Render Logout as a button that calls the API instead of a normal link
          if (item.label.toLowerCase() === 'logout') {
            return (
              <>
                <button
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirmOpen(true);
                  }}
                  disabled={loggingOut}
                  className={`${base} ${activeClass} w-full text-left ${loggingOut ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/${item.icon}`} alt={`${item.label} icon`} className="w-5 h-5" />
                  <span className="text-sm text-[#545D66]">{loggingOut ? 'Signing out...' : item.label}</span>
                </button>

                {confirmOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 mx-4">
                      <h3 className="text-lg font-semibold mb-2 text-neutral-950">Confirm logout</h3>
                      <p className="text-sm text-gray-600 mb-4">Are you sure you want to sign out?</p>
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => setConfirmOpen(false)}
                          className="px-4 py-2 border rounded-sm text-[#61213C]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={async (ev) => {
                            ev.preventDefault();
                            setConfirmOpen(false);
                            await handleLogout();
                          }}
                          className="bg-[#61213C] text-white px-4 py-2 rounded-sm font-semibold"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          }

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
