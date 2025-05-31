import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import AboutTabs from "@/reuseComponents/AboutTabs";

export default function About() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="About Us"
        imageSrc="/about.png"
        imageAlt="Campus view"
      />
      <Breadcrumb/>
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          <AboutTabs />
        </aside>
        <main className="w-[50%] text-black">
          <h2 className="text-xl font-bold ">Welcome to New City University</h2>
          <p>This is the overview about us. Select a tab on the left to view details.</p>
        </main>
      </div>
      {/* <h1 className="text-red-500">This is the About Page</h1> */}
      <Footer />
    </>
  );
}
