import Image from "next/image";

export default function AppBanner() {
  return (
    <div className="bg-[#FDF7F3] p-[16px] rounded-[8px]">
      <h1 className="text-[#383E44] text-[24px] font-[500] leading-[24px] mb-[12px]">
        For enquiries or to apply:
      </h1>
      <div className="flex-col flex lg:flex-row space-y-[12px] lg:space-y-0 justify-between">
        <p className="flex gap-[10px] py-[10px] text-[16px]">
          <Image src="/globed.svg" alt="globe" width={24} height={24} />
          adms.nuc.edu.edu.ng
        </p>
        <p className="flex gap-[10px] py-[10px] text-[16px]">
          {" "}
          <Image src="/letter.svg" alt="letter" width={24} height={24} />
          info.adms@nuc.edu.ng
        </p>
        <p className="flex gap-[10px] py-[10px] text-[16px]">
          {" "}
          <Image src="/phone.svg" alt="phone" width={24} height={24} />
          +234 810 2849 247
        </p>
      </div>
    </div>
  );
}
