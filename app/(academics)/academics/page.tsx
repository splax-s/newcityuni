import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import AcademicsTabs from "@/reuseComponents/AcademicsTabs";

export default function Academics() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="Academics"
        imageSrc="/acad.png"
        imageAlt="acad view"
      />
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          <AcademicsTabs />
        </aside>
        <main className="w-[50%] text-black">
          <h2 className="text-xl font-bold ">Welcome to New City University</h2>
          <p>
            This is the Academics Page. Select a tab on the left to view
            details.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
