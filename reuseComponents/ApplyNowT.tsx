import Image from "next/image";

export default function Applyy() {
  return (
    <div className="flex gap-[20px] border text-black border-[#E8EAEC] rounded-[8px]">
      <div className="bg-[#FCF3ED] w-[160px] h-[160px] flex items-center justify-center">
        <Image
          src="/apply.svg"
          alt="apply"
          width={20}
          height={20}
          className="w-[73px] h-[]"
        />
      </div>
      <div className="justify-evenly w-[80%] flex flex-col items-left">
        <p className="text-[18px] font-[600] leading-[28px]">
          Admission Portal
        </p>
        {/* <br/> */}
        <p>Visit the application portal to begin your journey</p>
        {/* <br/> */}
        <button className="flex text-[#61213C] gap-[9px] items-center justify-start">
          Apply Now
          <Image
            src="/arrowd.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />
        </button>
      </div>
    </div>
  );
}
