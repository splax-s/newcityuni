import Image from "next/image";
import Link from "next/link";

export default function Apply() {
  return (
    <div className="flex gap-[20px] border border-[#E8EAEC] rounded-[8px]">
      <div className="bg-[#FCF3ED] w-[160px] h-[160px] flex items-center justify-center">
        <Image
          src="/apply.svg"
          alt="apply"
          width={20}
          height={20}
          className="w-[73px] h-[]"
        />
      </div>
      <div className="justify-evenly flex flex-col items-left">
        <p className="text-[18px] font-[600] leading-[28px]">Admission Portal</p>
        {/* <br/> */}
        <p>Visit the application portal to begin your journey</p>
        {/* <br/> */}
        <Link href="/admissions" className="flex text-[#61213C] gap-[9px] items-center justify-start hover:underline">
          Apply Now
          <Image
            src="/arrowd.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />
        </Link>
      </div>
    </div>
  );
}
