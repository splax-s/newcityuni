import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
// import AboutTabs from "@/reuseComponents/AboutTabs";
import CampusTabs from "@/reuseComponents/CampusTabs";

export default function Campus() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="Campus Life"
        imageSrc="/campus.png"
        imageAlt="Campus view"
      />
      <Breadcrumb/>
      <div className="flex px-4 py-[80px] gap-4 justify-center">
        <aside className="">
          {/* <AboutTabs /> */}
          <CampusTabs />
        </aside>
        <main className="w-[50%] text-black">
          <h2 className="text-xl font-bold ">Welcome to New City University</h2>
          <p>This is the overview campus. Select a tab on the left to view details.</p>
        </main>
      </div>
      {/* <h1 className="text-red-500">This is the Campus Page</h1> */}
      <Footer />
    </>
  );
}
