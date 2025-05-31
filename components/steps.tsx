import CompactMediaCard from "@/reuseComponents/CompactMediaCard";

export default function Steps() {
  return (
    <div className="text-black px-4 md:px-[58px] py-12 md:py-[80px]">
      <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-[700] leading-[36px] sm:leading-[40px] md:leading-[44px] mb-9 w-full md:w-[652px] transition-all duration-300">
        Discover the Simple Steps to Join New City University Today
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        <CompactMediaCard
          mediaSrc="/step1.svg"
          title="Your Journey to Higher Education Starts Here at New City University"
          description="Our application process is straightforward and designed to guide you every step of the way."
          buttonText="Apply Now"
        />
        <CompactMediaCard
          mediaSrc="/step2.svg"
          title="Step-by-Step Guidance for a Seamless Application Experience"
          description="From initial inquiry to enrolment, we support you throughout the process."
          buttonText="Apply Now"
        />
        <CompactMediaCard
          mediaSrc="/step3.svg"
          title="Stay Informed with Our Application Timeline and Important Dates"
          description="Make sure to check our website for deadlines and updates regularly."
          buttonText="Apply Now"
        />
      </div>
    </div>
  );
}
