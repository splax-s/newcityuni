"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";
import { getUserName, getApplicationSummary } from "@/services/api/admissionsService";
import { useAppSelector } from '../../../../store/hooks';
import { useSearchParams } from 'next/navigation';
import { programs } from '@/data/programs';

export default function AdmissionsDashboardPage() {
  const [userName, setUserName] = useState<string | null>(null);

  const auth = useAppSelector((s) => s.auth);
  const [applicationId, setApplicationId] = useState<string | null>(
    auth?.user?.id != null ? String(auth?.user?.id) : null
  );
  const searchParams = useSearchParams();
  const [relatedProgramTitle, setRelatedProgramTitle] = useState<string | null>(null);
  const searchParamsString = searchParams ? searchParams.toString() : '';

  // Initialize userName from Redux auth if available
  useEffect(() => {
    if (auth?.user) {
      const u = auth.user;
      const first = u.first_name?.trim();
      const last = u.last_name?.trim();
      if (first && last) {
        setUserName(`${first} ${last}`);
        return;
      }
      if (first) {
        setUserName(first);
        return;
      }
      if (u.username) {
        setUserName(u.username as string);
        return;
      }
    }
    // otherwise leave existing effect to call API below
  }, [auth]);

  // derive selected program from query param (e.g. ?program=program-slug)
  useEffect(() => {
    try {
      const params = new URLSearchParams(searchParamsString || '');
      const slug = params.get('program');
      if (slug) {
        const p = programs.find((pr) => pr.slug === slug);
        setRelatedProgramTitle(p ? p.title : slug);
      } else {
        setRelatedProgramTitle(null);
      }
    } catch {
      // ignore if searchParams not available for some reason
    }
  }, [searchParamsString]);

  // If Redux doesn't have the selected program (e.g. after refresh), try localStorage
  useEffect(() => {
    try {
      if (!auth?.selectedProgram && !relatedProgramTitle) {
        const raw = typeof window !== 'undefined' ? localStorage.getItem('selectedProgram') : null;
        if (raw) {
          const parsed = JSON.parse(raw) as { slug: string; title: string } | null;
          if (parsed?.title) setRelatedProgramTitle(parsed.title);
        }
      }
    } catch {
      // ignore
    }
  }, [auth?.selectedProgram, relatedProgramTitle]);

  useEffect(() => {
    // If we already populated userName from Redux, skip the API call.
    if (userName) return;

    let mounted = true;
    (async () => {
      try {
        const res = await getUserName();
        if (!mounted) return;
        const obj = res as Record<string, unknown> | null;

        // Prefer full_name, then first_name+last_name, then fallback keys
        let name: string | null = null;
        if (obj) {
          const o = obj as Record<string, unknown>;
          const first = o['first_name'] as string | undefined;
          const full = o['full_name'] as string | undefined;
          const last = o['last_name'] as string | undefined;
          const uname = (o['user_name'] ?? o['display_name'] ?? o['name']) as string | undefined;

          // Prefer first_name (e.g. "Bidi"), then full_name, then first+last, then username/display_name/name
          if (first) {
            name = first;
          } else if (full) {
            name = full;
          } else if (first || last) {
            name = `${first ?? ''}${first && last ? ' ' : ''}${last ?? ''}`.trim() || null;
          } else if (uname) {
            name = uname;
          }
        }

        setUserName(name);
      } catch {
        // If the API fails, keep the fallback label
      }
    })();
    return () => {
      mounted = false;
    };
  }, [userName]);

  // Fetch application summary to get application_id and update applicationId
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getApplicationSummary();
        if (!mounted) return;
        const obj = res as Record<string, unknown> | null;
        const appId = obj ? (obj['application_id'] as string | undefined) : undefined;
        if (appId) setApplicationId(appId);
      } catch {
        // ignore errors and keep fallback
      }
    })();
    return () => {
      mounted = false;
    };
  }, [auth?.user?.id]);

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
        <AdmissionsSidebar />

        {/* Main Content */}
        <main className="md:col-span-7">
          <div className=" mb-10 p-4 border rounded bg-white shadow-sm border-[rgba(232, 234, 236, 1))]">
            {" "}
            <h2 className="text-2xl text-black font-bold mb-2">
              Welcome, {auth?.user?.first_name ?? (userName ? String(userName).split(' ')[0] : 'Applicant')}! 👋
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
                      <h4 className="font-semibold text-[#1C1F22] flex items-center gap-2">
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
                    <p className="text-sm text-[#6F7C89]">{card.desc}</p>
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
                <p className="text-gray-800">{userName ?? 'Applicant'}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">Application ID:</p>
                <p className="text-gray-800">{applicationId ?? '—'}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-500">
                  Program of Interest:
                </p>
                <p className="text-gray-800">{auth?.selectedProgram?.title ?? relatedProgramTitle ?? '—'}</p>
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
