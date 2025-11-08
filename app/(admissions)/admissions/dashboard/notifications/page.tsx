"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import { getAdmissionNotifications } from "@/services/api";

type NotificationItem = {
  id: string | number;
  title: string;
  message: string;
  notification_type: string;
  type_display: string;
  priority: string;
  priority_display: string;
  is_read: boolean;
  created_at: string;
};

export default function NotificationsPage() {
   const [items, setItems] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"All" | "Read" | "Unread">("All");

   useEffect(() => {
    setLoading(true);
    getAdmissionNotifications()
      .then((res) => {
        setItems(res?.notifications || []);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems =
    tab === "All"
      ? items
      : tab === "Read"
      ? items.filter((n) => n.is_read)
      : items.filter((n) => !n.is_read);


  return (
    <>
      <Navbar />

      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Notifications</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <AdmissionsSidebar />

        <main className="md:col-span-9">
          <div className="bg-white border rounded shadow-sm p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Notification history
              </h2>
            </div>

           {/* Tabs */}
            <div className="flex items-center gap-3 mb-6 border-b pb-2 text-sm">
              {["All", "Read", "Unread"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t as typeof tab)}
                  className={`px-3 py-1 cursor-pointer rounded ${
                    tab === t
                      ? "bg-[#F9F5F6] text-[#61213C] font-medium"
                      : "hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Loading State */}
            {loading && (
              <div className="py-12 text-center text-gray-500">Loading notifications...</div>
            )}

            {/* Empty State */}
            {!loading && filteredItems.length === 0 && (
              <div className="py-12 text-center text-gray-400">
                No notifications found.
              </div>
            )}

            {/* Notifications List */}
            {!loading && filteredItems.length > 0 && (
              <ul className="space-y-6">
                {filteredItems.map((n) => (
                  <li
                    key={n.id}
                    className={`relative p-4 border rounded-lg ${
                      n.is_read ? "bg-gray-50" : "bg-[#FFF8FA]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-[#F9E9EF]">
                        {n.notification_type === "application_update" ? "📄" : "🔔"}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 text-sm">{n.title}</h3>
                        <div className="mt-3 bg-gray-50 rounded-md p-3 text-sm text-gray-700">
                          <p>{n.message}</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(n.created_at).toLocaleString()}
                        </p>
                      </div>
                      {!n.is_read && (
                        <span className="absolute top-3 right-3 w-2 h-2 bg-[#91204D] rounded-full" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
