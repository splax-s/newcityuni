import TeamCard from "@/reuseComponents/TeamCard";
import Link from "next/link";

export default function Team() {
  return (
    <div className="text-black px-6 md:px-[58px] py-[80px]">
      <h1 className="text-[28px] md:text-[36px] font-[700] leading-[36px] md:leading-[44px] mb-[36px]">
        Meet Our Team
      </h1>

      {/* Carousel on Mobile, Flex on Desktop */}
      <div className="flex md:gap-[20px] md:overflow-visible overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth  scrollbar-hide transition-all duration-300">
        {[
          {
            imageSrc: "/team1.png",
            name: "Chief Akingbesote",
            position: "Pro Chancellor",
            description:
              "A visionary leader committed to academic excellence and community development.",
          },
          // {
          //   imageSrc: "/team2.png",
          //   name: "Prof Ralph Akinfeleye",
          //   position: "Dean Faculty",
          //   description:
          //     "Passionate about innovative teaching methods and student engagement.",
          // },
          {
            imageSrc: "/team3.jpeg",
            name: "Prof Akinfeleye",
            position: "Chancellor",
            description:
              "Driving research initiatives that impact local and global communities.",
          },
          // {
          //   imageSrc: "/team4.png",
          //   name: "Dr. Samuel",
          //   position: "Chief Administrator",
          //   description:
          //     "Overseeing university operations and strategic planning for future growth.",
          // },
        ].map((member, index) => (
          <div key={index} className=" snap-start md:w-auto  w-[280px]">
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Hiring Section */}
      <div className="mt-[36px]">
        <h1 className="font-[700] text-[18px] md:text-[20px] leading-[28px] mb-2 md:leading-[30px]">
          We’re Hiring
        </h1>
        <p className="font-[400] text-[14px] mb-2">
          Join our dynamic team and make a difference.
        </p>
        <Link href="/career" className="cursor-pointer">
        <button className="border border-[#61213C] px-[24px] py-[12px] text-sm">
          Open Positions
        </button>
        </Link>
      </div>
    </div>
  );
}
