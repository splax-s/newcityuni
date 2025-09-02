"use client";

import Image from "next/image";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center py-[80px] px-[20px] md:px-[58px] text-black transition-all duration-300">
      <h2 className="text-[28px] md:text-[36px] font-bold leading-[44px] mb-3 text-center">
        Campus Showcase
      </h2>
      <p className="mb-9 text-[14px] md:text-[16px] leading-[24px] text-center max-w-2xl">
        Explore vibrant moments of our university life.
      </p>

      {/* Scrollable Image Carousel */}
      <div className="flex gap-4 overflow-x-auto w-full no-scrollbar scroll-smooth snap-x snap-mandatory justify-between">
        {[
          { src: "/camp1.png", alt: "Campus event 1" },
          { src: "/camp2.png", alt: "Campus event 2" },
          { src: "/camp3.png", alt: "Campus event 3" },
          { src: "/camp4.png", alt: "Campus event 4" },
          { src: "/camp5.jpg", alt: "Campus event 5" },
          { src: "/camp6.jpg", alt: "Campus event 6" },
          { src: "/camp7.jpg", alt: "Campus event 7" },
          { src: "/camp8.jpg", alt: "Campus event 8" },
          { src: "/camp9.jpg", alt: "Campus event 9" },
          { src: "/camp10.jpg", alt: "Campus event 10" },
          { src: "/camp11.jpg", alt: "Campus event 11" },
        ].map((img, index) => (
          <div
            key={index}
            className="relative min-w-[280px] md:w-[400px] h-[316px] md:h-[400px] rounded-md overflow-hidden snap-start"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 400px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
