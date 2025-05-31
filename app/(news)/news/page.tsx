import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import NewsTabs from "@/reuseComponents/NewsTabs";

export default function News() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="News & Events"
        imageSrc="/news.png"
        imageAlt="admissions view"
      />
      <Breadcrumb />
      <div className="flex flex-col w-full px-[40px] py-[40px]  lg:py-[20px] gap-[40px] lg:gap-[36px] justify-center items-center">
        <p className="text-black text-center mt-[20px] font-[700] text-[20px] leading-[28px] px-4 sm:text-[24px] sm:leading-[32px] md:text-[30px] md:leading-[38px] md:max-w-[652px] md:mx-auto">
          What’s on at the New City University – the latest news, events and
          blogs.
        </p>

        <aside className="w-[100%] ">
          {/* <AdmissionsTab /> */}
          <NewsTabs />
        </aside>
        <main className="w-[100%] text-black ">
          <h2 className="text-3xl font-extrabold text-primary mb-4">
            🎓 Welcome to New City University
          </h2>
          <p className="text-base text-muted-foreground mb-3">
            You&apos;re now on the official <strong>News Page</strong> — the
            heartbeat of everything happening at New City University 🗞️. Whether
            you&apos;re a student, staff, alum, or just curious, you&apos;re in
            the right place to catch up on all the latest buzz.
          </p>
          <p className="text-base text-muted-foreground mb-3">
            From groundbreaking research 🧬 and inspiring student stories 📚 to
            major events 🎤 and exciting opportunities 💼 — we’ve got it all
            covered right here. We&apos;re more than a university — we&apos;re a
            dynamic community shaping the future, one story at a time.
          </p>
          <p className="text-base text-muted-foreground mb-3">
            Use the tabs above to navigate through different categories,
            including Campus Life, Academics, Achievements, and Events.
            Everything you need to stay updated and inspired is just a click
            away 🚀.
          </p>
          <p className="text-base text-muted-foreground">
            So grab a cup of coffee ☕, kick back, and explore what&apos;s
            making waves at New City University. There&apos;s always something
            exciting unfolding — and we can’t wait for you to be a part of it
            🌟.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
