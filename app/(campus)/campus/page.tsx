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
      <Breadcrumb />
      <div className="flex px-4 py-[80px] gap-4 justify-center">
        <aside className="">
          {/* <AboutTabs /> */}
          <CampusTabs />
        </aside>
        <main className="w-[60%]  text-black leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-2">
              Campus Life at New City University
            </h2>
            <p>
              At New City University, campus life isn&apos;t just an add-on —
              it&apos;s the <strong>heartbeat</strong> of our vibrant community,
              designed to enrich every facet of your student journey. We are
              committed to creating an environment where your{" "}
              <em>well-being</em>, <em>social connections</em>, and{" "}
              <em>personal growth</em> are paramount.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Student Housing</h3>
            <p>
              Imagine stepping into a living space that feels like home yet
              opens up a world of possibilities. Our modern and secure student
              housing is fully equipped with essential amenities for your
              comfort and convenience.
            </p>
            <p>
              But it&apos;s more than just a room — our dedicated{" "}
              <strong>Residence Life</strong> team fosters a thriving community
              through engaging events and constant support. With housing located
              just steps from classes and campus activities, you gain more time
              to <em>learn, explore, and connect</em>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Campus Cafeteria</h3>
            <p>
              The campus cafeteria is more than a dining space — it’s a{" "}
              <strong>social hub</strong> where healthy, delicious, and
              affordable meals meet warm conversation. Our diverse menu caters
              to every taste, providing nourishment for both your body and your
              relationships.
            </p>
            <p>
              It’s the perfect spot to relax, chat with friends, and feel part
              of the <em>NCU family</em>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Sports and Recreation</h3>
            <p>
              We believe that a healthy body fuels a healthy mind. Our
              state-of-the-art facilities cater to both competitive and
              recreational sports.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Competitive sports programs</li>
              <li>Fitness classes for all levels</li>
              <li>Recreational activities and student clubs</li>
            </ul>
            <p>
              At NCU, sports are not just about fitness — they’re about{" "}
              <em>teamwork, camaraderie, and balance</em>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Health Services</h3>
            <p>
              Your well-being is our priority. The{" "}
              <strong>Health and Wellness Centre</strong> offers:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Confidential primary care</li>
              <li>Expert consultations</li>
              <li>Preventative health education</li>
            </ul>
            <p>
              For specialized needs, we provide seamless referrals to trusted
              off-campus specialists, so you can focus on your studies knowing
              your health is in good hands.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Campus Safety</h3>
            <p>
              Safety is the foundation of a thriving campus. Our{" "}
              <strong>24/7 Campus Safety Department</strong> ensures a secure
              environment through:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Round-the-clock patrols by trained personnel</li>
              <li>Extensive CCTV surveillance</li>
              <li>Crime prevention education</li>
            </ul>
            <p>
              We nurture a culture of <em>collective responsibility</em> so New
              City University remains a safe and welcoming sanctuary for
              everyone.
            </p>
          </section>
        </main>
      </div>
      {/* <h1 className="text-red-500">This is the Campus Page</h1> */}
      <Footer />
    </>
  );
}