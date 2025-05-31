import Image from "next/image";

type CategoryCardProps = {
  icon?: string; // path to icon/image
  title: string;
  items: string[];
};

export default function CategoryCard({
  icon,
  title,
  items,
}: CategoryCardProps) {
  return (
    <div className="rounded-[8px] overflow-hidden bg-[#F4F5F6]">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-3">
        <div className="flex items-center gap-2">
          {icon && (
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px]"
            />
          )}
          <h2 className="text-[16px] lg:text-[24px] font-[500] text-gray-800">
            {title}
          </h2>
        </div>

        {/* Learn More (Desktop only) */}
        <a
          href="#"
          className="hidden lg:flex items-center text-sm text-[#61213C] hover:underline gap-1"
        >
          Learn More
          <Image src="/rightd.svg" alt="right" width={20} height={20} />
        </a>
      </div>

      {/* Items Grid */}
      <div className="grid lg:grid-cols-2 rounded-[4px] gap-[16px] px-4 py-3 text-[16px] bg-white m-[10px] text-gray-900">
        {items.map((item, index) => (
          <div key={index} className="p-2">
            {item}
          </div>
        ))}
      </div>

      {/* Learn More (Mobile only) */}
      <a
        href="#"
        className="flex lg:hidden items-center justify-between text-sm px-2 text-[#61213C] hover:underline gap-1 mb-[10px]"
      >
        Learn More
        <Image src="/rightd.svg" alt="right" width={20} height={20} />
      </a>
    </div>
  );
}
