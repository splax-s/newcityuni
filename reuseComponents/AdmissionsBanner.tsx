import CompactMediaCard from "@/reuseComponents/CompactMediaCard";

export default function AdmissionsBanner() {
  return (
    <div className="bg-[#FCF3ED] flex flex-col items-center pt-[24px] px-[20px] lg:px-[0]">
      <h1 className="text-black text-[30px] leading-[38px] font-[700] text-center lg:w-[652px]">
        At New City University, take a bold step toward your global aspiration;
        Start now and don’t wait for the perfect moment or plan.
      </h1>
      <div className="flex flex-col w-full lg:flex-row justify-evenly gap-6 md:gap-8 mt-[36px] mb-[24px] lg:mb-[80px]">
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
