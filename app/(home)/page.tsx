import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Feature from "@/components/featured";
import Discover from "@/components/discover";
import Steps from "@/components/steps";
import Benefits from "@/components/benefits";
import News from "@/components/new";
import Team from "@/components/team";
import Showcase from "@/components/campus";

export const metadata = {
    title: "New City Univeristy",
    description: "University",
    // metadataBase: new URL("https://rotimishabach.vercel.app/"), 
    openGraph: {
      title: "New City Univeristy",
      description: "University",
      // url: "https://rotimishabach.vercel.app/",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "New City Univeristy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "New City Univeristy",
      description: "University",
      images: [
        "/logo2.png",
      ],
    },
  };

export default function Home() {
  return (
    <div className="w-[100%] items-center smooth-scroll">
      <Navbar />
      <div>
        <Hero />
        <Banner />
        <Feature />
        <Discover />
        <Steps />
        <Benefits />
        <News />
        <Team />
        <Showcase />
      </div>
      <Footer />
    </div>
  );
}
