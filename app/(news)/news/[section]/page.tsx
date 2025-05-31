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
