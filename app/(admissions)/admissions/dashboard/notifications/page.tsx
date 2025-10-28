"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
};

export default function NotificationsPage() {
  const [items, setItems] = useState<NotificationItem[]>([]);

 

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
              {["All", "Read", "Unread"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === "All") setItems([...items]);
                    else if (tab === "Read")
                      setItems(
                        [...items].sort(
                          (a, b) => Number(!a.read) - Number(!b.read)
                        )
                      );
                    else if (tab === "Unread")
                      setItems(
                        [...items].sort(
                          (a, b) => Number(a.read) - Number(b.read)
                        )
                      );
                  }}
                  className={`px-3 py-1 rounded ${
                    tab === "All"
                      ? "bg-[#F9F5F6] text-[#61213C] font-medium"
                      : "hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Notifications List (static demo for now) */}
            <ul className="space-y-6">
              <li className="relative p-4 border rounded-lg bg-[#FFF8FA]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-[#F9E9EF]">
                    🎉
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm">Admission offer</h3>

                    <div className="mt-3 bg-gray-50 rounded-md p-3 text-sm text-gray-700">
                      <p className="font-semibold mb-1">🎉 Congratulations, Joshua!</p>
                      <p>
                        You have been offered provisional admission into the <strong>Master of Science (MSc) in Technology</strong> program.
                      </p>

                      <p className="mt-2 font-medium">Next Steps:</p>
                      <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm mt-1">
                        <li>Download your admission letter</li>
                        <li>Pay your acceptance fee</li>
                        <li>Complete your enrollment requirements</li>
                      </ol>

                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        <button className="px-4 py-2 bg-[#61213C] text-white rounded text-sm">Pay Acceptance Fee</button>
                        <button className="px-4 py-2 border rounded text-sm">Download Admission Letter</button>
                        <button className="px-4 py-2 text-sm text-gray-600 hover:underline">Decline Offer</button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">{new Date().toLocaleString()}</p>
                  </div>

                  <span className="absolute top-3 right-3 w-2 h-2 bg-[#91204D] rounded-full" />
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
