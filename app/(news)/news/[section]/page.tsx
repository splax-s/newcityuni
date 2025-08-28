// app/(about-us)/about-us/[section]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import React from "react";
import NewsTabs from "@/reuseComponents/NewsTabs";
import NewsListings from "@/reuseComponents/NewsListings";
import EventsListings from "@/reuseComponents/EventsListings";

const contentMap = {
  "news-events": (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">News & Events</h2>
        <p className="text-lg text-black mb-4">
          Welcome to the official News and Events page of New City University (NCU) — the pulse of our campus community.
        </p>
        <p className="text-black mb-4">
          This is where ideas spark, milestones are celebrated, and stories come to life. Whether you&apos;re a student charting your path, a faculty member driving innovation, an alumnus staying connected, or a guest curious about New City University, you&apos;re in the right place.
        </p>
        <p className="text-black mb-4">
          From groundbreaking research shaping industries and student achievements making headlines to major campus events, strategic collaborations, and new opportunities — everything that defines the New City University experience is right here.
        </p>
        <p className="text-black mb-4">
          Use the navigation tabs above to explore updates. Each section is designed to keep you informed, inspired, and connected to our journey.
        </p>
        <p className="text-black mb-6">
          Take a moment to browse, engage, and discover what&apos;s next. At New City University, there&apos;s always something remarkable unfolding — and every story is a step toward the future we are building together.
        </p>
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#61213C] mb-3">Latest News</h3>
              <p className="text-black">
                Stay updated with the latest developments, achievements, and announcements from across our university community.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#61213C] mb-3">Upcoming Events</h3>
              <p className="text-black">
                Discover exciting events, workshops, seminars, and activities happening on campus and in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
  news: (
    <>
      <NewsListings />
    </>
  ),
  events: (
    <>
      <EventsListings />
    </>
  ),

  // } as const;
} satisfies Record<string, React.ReactNode>;

// ✅ REMOVE async from here
export default async function NewsSection({
  params,
}: {
  params: Promise<{ section: keyof typeof contentMap }>;
}) {
  const resolvedParams = await params;
  const sectionContent = contentMap[resolvedParams.section];

  if (!sectionContent) return notFound();

  return (
    <>
      <Navbar />
      <TextImageBlock
        text="News & Events"
        imageSrc="/news.png"
        imageAlt="Campus"
      />
      <Breadcrumb />
      <div className="flex flex-col lg:px-[40px]  lg:py-[80px] gap-[10px]  justify-center items-center ">
        <p className="text-black text-center mt-[20px] font-[700] text-[20px] leading-[28px] px-4 sm:text-[24px] sm:leading-[32px] md:text-[30px] md:leading-[38px] md:max-w-[652px] md:mx-auto">
          What’s on at the New City University – the latest news, events and
          blogs.
        </p>
        <br className="block lg:hidden " />
        <aside className="w-full  space-y-[36px]">
          <NewsTabs />
        </aside>
        <main className="w-full    mb-[24px]  text-black">
          {sectionContent}
        </main>
      </div>

      <Footer />
    </>
  );
}
