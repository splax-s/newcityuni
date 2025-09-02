import DiscoverMedia from "@/reuseComponents/DiscoverMedia";

export default function Discover() {
  return (
    <div className="px-[58px] py-20 text-center flex flex-col items-center text-black bg-[#FCF3ED] transition-all duration-300">
      <div className="mb-9 max-w-3xl">
        <h1 className="font-bold text-[28px] md:text-[36px]">
          Discover Your Future at New City University
        </h1>
        <p className="text-[16px] leading-[24px] mt-4">
          At New City University, we are committed to providing an exceptional
          educational experience. Our focus is on nurturing talent and fostering
          innovation.
        </p>
      </div>

      {/* Responsive scrollable carousel */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-max md:min-w-0">
          <DiscoverMedia
            mediaSrc="/camp9.jpg"
            title="Quality Education Tailored for Your Success"
            description="We offer a diverse range of programmes designed to equip you with the skills needed for today's competitive job market."
          />
          <DiscoverMedia
            mediaSrc="/camp10.jpg"
            title="Learn from Our Experienced Faculty Members"
            description="Our faculty comprises industry experts dedicated to your academic growth."
          />
          <DiscoverMedia
            mediaSrc="/discover3.png"
            title="Explore Our State-of-the-Art Facilities"
            description="Our modern campus is equipped with cutting-edge technology to enhance your learning experience."
          />
        </div>
      </div>
    </div>
  );
}
