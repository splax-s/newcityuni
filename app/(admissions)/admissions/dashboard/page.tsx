"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AdmissionsDashboardPage() {
  const sidebarItems = [
    { label: "Dashboard", href: "/admissions/dashboard", icon: "SquaresFour.svg" },
    {
      label: "My Application",
      href: "/admissions/dashboard/application",
      icon: "Files.svg",
    },
    { label: "Uploads", href: "/admissions/dashboard/uploads", icon: "document-upload.svg" },
    { label: "Payment", href: "/admissions/dashboard/payment", icon: "receipt-item.svg" },
    {
      label: "Notifications",
      href: "/admissions/dashboard/notifications",
      icon: "notification-bing2.svg",
    },
    { label: "Logout", href: "/admissions/logout", icon: "notification-bing.svg" },
  ];

  const progressCards = [
    {
      title: "Complete Application",
      desc: "Fill in your personal details, academic history, and program choices to begin your journey.",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: "display-icon",
      iconn: "export",
      link: "/admissions/form/step-1",
    },
    {
      title: "Upload Documents",
      desc: "Submit required documents such as transcripts, certificates, and identification.",
      icon: "display-icon",
      iconn: "export",
    },
    {
      title: "Make Payment",
      desc: "Secure your application by paying the non-refundable admission fee.",
      borderColor: "border-red-300",
      icon: "display-icon",
      iconn: "export",
    },
    {
      title: "Track Status",
      desc: "Monitor the progress of your application from submission to final decision.",
      icon: "display-icon",
      iconn: "export",
    },
    {
      title: "Support / Contact Admissions",
      desc: "Need help? Reach out to our admissions team for guidance and assistance.",
      borderColor: "border-yellow-300",
      icon: "display-icon",
      iconn: "export",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#61213C] text-white p-2">
        <div className="max-w-6xl mx-auto ">
          <div className="flex items-center mb-4 text-xs sm:text-sm">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Admissions</span>
            <span className="mx-2">›</span>
            <span className="text-[#FFB800]">Programs & Eligibility</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-2 bg-white border shadow-sm border-[rgba(232, 234, 236, 1))] rounded p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 text-gray-700"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.label + " icon"}
                  className="w-5 h-5"
                />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-7">
          <div className=" mb-10 p-4 border rounded bg-white shadow-sm border-[rgba(232, 234, 236, 1))]">
            {" "}
            <h2 className="text-2xl text-black font-bold mb-2">
              Welcome, Joshua! 👋
            </h2>
            <p className="text-gray-600 mb-6">
              Track your progress and manage your application from here.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {progressCards.map((card, idx) => {
              const cardClass = `p-4 border rounded bg-white shadow-sm border-[rgba(232, 234, 236, 1))] ${
                card.borderColor ? card.borderColor : "border-gray-200"
              }`;

              const inner = (
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/icons/${card.icon}.svg`}
                      alt={card.title + " icon"}
                      className="w-12 h-12"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <span>{card.title}</span>
                        <span className="w-5 h-5 inline-flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/icons/${card.iconn}.svg`}
                            alt={card.title + " small icon"}
                            className="w-4 h-4"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </span>
                      </h4>
                      {card.status && (
                        <span className={`px-2 py-1 text-xs rounded ${card.statusColor}`}>
                          {card.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                </div>
              );

              return card.link ? (
                <Link key={idx} href={card.link} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <div key={idx} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="md:col-span-3 space-y-6">
          {/* Notifications */}
          <div className="bg-white border shadow-sm border-[rgba(232, 234, 236, 1))] rounded p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-black">Notifications</h3>
              <Link href="#" className="text-sm text-[#61213C]">
                See all
              </Link>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Dr Pelumi added a new online lecture...</span>
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2"></span>
              </li>
              <li>2025/26 First semester Exam timetable now available...</li>
              <li>Course registration deadline updated...</li>
            </ul>
          </div>

          {/* Application Summary */}
          <div className="bg-white border shadow-sm border-[rgba(232, 234, 236, 1))] rounded p-4 text-sm">
            <h3 className="font-semibold text-black mb-3">
              Application Summary
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">Full Name:</p>
                <p className="text-gray-800">Oluwademilade Joshua Sam-Alade</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">Application ID:</p>
                <p className="text-gray-800">SJdXen120</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">
                  Program of Interest:
                </p>
                <p className="text-gray-800">Computer Engineering</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">Submission Date:</p>
                <p className="text-gray-800">22/10/2025</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}
