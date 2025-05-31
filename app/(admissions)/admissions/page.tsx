import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import AdmissionsTab from "@/reuseComponents/AdmissionsTab";

export default function Admissions() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="Admissions"
        imageSrc="/admissions.png"
        imageAlt="admissions view"
      />
      <Breadcrumb />
      <div className="flex flex-col w-full   lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center">
        <aside className="w-[50%] ">
          <AdmissionsTab />
        </aside>
        <main className="w-[50%] text-black ">
          <h2 className="text-xl font-bold ">Welcome to New City University</h2>
          <p>
            This is the Academics Page. Select a tab on the top to view details.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
