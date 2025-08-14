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
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          <AboutTabs />
        </aside>
        <main className="w-[60%]  text-black leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-2">
              New City University at a Glance
            </h2>
            <p>
              <strong>New City University (NCU)</strong> is a dynamic,
              forward-looking institution established to redefine higher
              education in Nigeria and beyond. Strategically located in{" "}
              <strong>Ayetoro, Ogun State</strong>, NCU is the product of a
              visionary initiative by Integrated Contract Services Limited, a
              private organization inspired to create a lasting impact on the
              educational landscape of the nation.
            </p>
            <p>
              As a conventional university, NCU is committed to academic
              excellence and innovation, offering a broad spectrum of
              internationally aligned programmes across multiple disciplines:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Faculty of Basic Medical and Allied health Sciences</li>
              <li>Faculty of Communication and Media Studies</li>
              <li>Faculty of Computing and Sciences</li>
              <li>Faculty of Social and Management Sciences</li>
            </ul>
            <p>
              In the university’s development roadmap, additional faculties such
              as{" "}
              <strong>
                Engineering, Environmental Sciences, Medicine and Dentistry,
                Pharmaceutical Sciences, and Law
              </strong>{" "}
              are set to be established in the near future.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p>
              To positively contribute to the educational and economic
              development of our local, national, regional, and international
              communities by providing accessible, internationally recognized
              educational programmes that focus on developing professional
              skills.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              To provide quality education through relevant curricula, using the
              reservoir of knowledge and hands-on skills gained through
              teaching, research, and entrepreneurship for the benefit of our
              local and global community.{" "}
              <em>
                Education at New City University is for growth and for gain.
              </em>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Our Philosophy</h3>
            <p>
              We believe that education must be of quality and relevance. We
              recognize the transformative role education plays in shaping the
              socio-political, economic, and philosophical foundations of
              society. Our teaching and research are driven by a purpose — to
              empower individuals and communities through knowledge, skills, and
              values that promote national and global development.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Our Motto</h3>
            <p className="italic">
              {" "}
              &quot;LUX ET VERITAS&quot; — <strong>Light and Truth</strong>
            </p>
            <p>
              This phrase encapsulates our pursuit of academic brilliance and
              moral integrity. Every student and stakeholder of NCU is expected
              to carry the torch of knowledge and truth into the world.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Our Slogan</h3>
            <p className="font-medium text-gray-800">
              New City University — Raising Global Ambassadors
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Historical Background</h3>
            <p>
              The founding of New City University is deeply rooted in the
              commitment of its proprietor to reshape and elevate the standard
              of university education in Nigeria. Drawing inspiration from a
              personal passion for learning and community development, the
              university was established to serve as a centre of excellence,
              innovation, and character formation.
            </p>
            <p>
              The name “New City University” reflects this vision — a new model
              of learning that brings value, colour, and glamour to the noble
              ideals of higher education.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Core Values</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Inclusiveness</li>
              <li>Service to Humanity</li>
              <li>Global Competitiveness</li>
              <li>Academic Freedom</li>
              <li>Accountability</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold">Objectives</h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                Advance learning and research without discrimination, offering
                liberal, higher education to all.
              </li>
              <li>
                Provide practical and theoretical education across disciplines
                with state-of-the-art facilities.
              </li>
              <li>
                Promote scholarship and support interdisciplinary research for
                sustainable development.
              </li>
              <li>
                Adapt curricula to societal needs, ensuring relevance through
                continuous innovation.
              </li>
              <li>
                Expand access to education, attracting top talent in students
                and faculty to drive national growth.
              </li>
              <li>
                Produce globally competitive graduates meeting international
                standards of knowledge and skill.
              </li>
              <li>
                Apply new technologies to local challenges through strategic
                academic collaborations.
              </li>
              <li>
                Foster entrepreneurship via a centre of excellence in innovation
                and enterprise.
              </li>
              <li>
                Engage in impactful teaching, research, and community service,
                befitting a 21st-century university.
              </li>
              <li>
                Promote understanding of Artificial Intelligence (AI) as a
                driver of future change and opportunity.
              </li>
            </ol>
          </section>

          <section>
            <p className="text-lg font-medium text-gray-900">
              New City University is more than just an academic institution — it
              is a movement for transformation, preparing students to be ethical
              leaders, critical thinkers, and global change agents.
            </p>
          </section>
        </main>
      </div>
      {/* <h1 className="text-red-500">This is the About Page</h1> */}
      <Footer />
    </>
  );
}