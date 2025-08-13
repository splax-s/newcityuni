// app/(about-us)/about-us/[section]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import AboutTabs from "@/reuseComponents/AboutTabs";
import Image from "next/image";
import React from "react";

const contentMap = {
  history: (
    <>
      <h2 className="text-xl font-bold text-black">History & Background</h2>
      <br />
      <p className="text-black">
        New City University is established by Integrated Contract Services
        Limited, which is a private organisation located in Ayetoro, Ogun State.
        The proprietor got his inspiration to establish or have an influence on
        the educational system of the country from his background. <br />
        <br />
        The New City University is conventional institution and shall offer
        programmes in various disciplines within the approved Faculties by the
        National Universities Commission (NUC), namely: Faculty of Basic Medical
        and Allied Sciences, Faculty of Communication and Media Studies, Faculty
        of Computing and Sciences, Faculty of Social and Management Sciences,
        Faculty of Law. Other Faculties are Engineering, Environmental Sciences,
        Medicine and Dentistry; Pharmaceutical Sciences are to be established in
        the short and long- term plan of the University. Our core value is that
        the university will be a Centre of academic excellence committed to the
        growth and development of human capital in our nation, Nigeria and
        around the world. 
      </p>
      <br />
      <h2 className="text-xl font-bold text-black">Name of the University</h2>
      <br />
      <p className="text-black">
        The name of the University is called NEW CITY UNIVERSITY (NCU). The
        University derives her name from the newness and inspiration of the
        proprietor to add value, colour and glamour to the pedagogical purity of
        the University education in Nigeria. The promoter of the University  
        decided to christen the  University New City University.
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/history.png"
          alt="history"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
    </>
  ),
  mission: (
    <>
      <p>
        The mission of the New City University is to provide quality education
        through curricular of relevance as well as{" "}
        <strong>
          &quot;to use the reservoir of knowledge and hands-on skills garnered
          through teaching,  research and entrepreneurship  for the benefit of
          its immediate environment, the locality, regional, international  and
          the country in general.&quot;
        </strong>{" "}
        Consequently, the university provide education for growth and as well as
        for gain.
      </p>
    </>
  ),
  vision: (
    <>
      <p>
        The vision of the New City University is{" "}
        <strong>
          &quot;to positively contribute to the educational and economic
          development of our local community, national, regional  and
          international as a whole through      the provision of accessible,
          internationally recognised educational programmes that focus on
          developing professional skills.&quot;
        </strong>
      </p>
    </>
  ),
  motto: (
    <>
      <h2 className="text-xl font-bold text-black">Our Motto</h2>
      <br />
      <p>
        The motto of the New City University is derived from a latin phrase{" "}
        <strong>&quot;LUX ET VERITAS&quot;</strong> meaning{" "}
        <strong>&quot;LIGHT AND TRUTH.&quot;</strong> The university aspires to
        be a Centre of academic excellence from which all who come in    contact
        with it, especially her students, are inspired to acquire knowledge
        while upholding truth as a constant variable at all times.
      </p>
      <br />

      <h2 className="text-xl font-bold text-black">Slogan</h2>
      <br />
      <p>
        New City University.... <strong>Raising Global Ambassadors</strong>
      </p>
    </>
  ),
  philosophy: (
    <>
      <p>
        The New City University recognizes the importance of quality education
        and education of relevance and how it impacts the socio-political and
        socio-economic and philosophical foundational development of any nation.
      </p>
    </>
  ),
  objectives: (
    <>
      <p>
        The University pursues the following under listed objectives as provided
        in the enabling law of the University:
      </p>
      <br />
      <ol className="list-decimal space-y-4 pl-6 text-justify">
        <li>
          Encourage the advancement of learning and research, and hold out to
          all persons—without distinction of race, creed, gender, religious, or
          political conviction—the opportunity of acquiring a higher and more
          liberal education.
        </li>
        <li>
          Provide both practical and theoretical frameworks of instruction and
          other facilities for the pursuit of learning in all its branches, and
          make those facilities available on proper terms to such persons as are
          equipped to benefit from them.
        </li>
        <li>
          Encourage and promote scholarship and conduct research in all fields
          of learning and human endeavour.
        </li>
        <li>
          Evolve academic programmes to suit the changing social and economic
          needs of society through continuous review of curricula and the
          development of new programmes with structural flexibility to respond
          to societal and technological changes.
        </li>
        <li>
          Create and expand access and opportunities for education, attract and
          retain quality students, researchers, and teachers, and in so doing,
          assist in developing human capital to advance the nation&apos;s
          economy.
        </li>
        <li>
          Produce internationally acceptable graduates who can compete
          favourably with their peers anywhere in the world.
        </li>
        <li>
          Carry out basic and applied research leading to the domestication and
          application of new technology to the Nigerian context through
          collaborative linkages with other academic and research institutions
          in Africa and the rest of the world.
        </li>
        <li>
          Establish a centre of excellence and entrepreneurial studies to
          stimulate job creation and innovative abilities in students from the
          onset of their studies, such that graduates shall be resourceful,
          self-reliant, and job creators.
        </li>
        <li>
          Undertake other activities appropriate for teaching, research, and
          community service as expected of a university of high standard.
        </li>
        <li>
          Provide proper understanding of the Artificial Intelligence (AI)
          concept.
        </li>
      </ol>
    </>
  ),
  chancellor: (
    <>
      <p>
        Dear Esteemed Students, <br /> <br /> We are delighted to welcome you to
        New City University a home of global ambassadors, where your energy and
        excitement enrich our vibrant campus life. Whether you are beginning or
        continuing your educational journey with us, we look forward to
        learning, exploring, and growing together in NCU vision and mission.{" "}
        <br /> <br />
        At New City University, you as our students – are our highest priority,
        and we are dedicated to both your academic and your all-round personal
        growth. As you experience our campus life and all it has to offer, we
        hope you will feel the strong sense of community that is of best value
        to your daily experience. We are not only passionate about education,
        but care deeply about our neighbours, our environment, and each other,
        as well as no discrimination on account of gender, religion and social
        affiliations. This attitude of sensitivity and support affirms our
        approach to daily campus life. <br /> <br />
        As part of our commitment in the promotion of pedagogical purity in
        higher education in Nigeria, we will provide adequate facilities for
        your general well-being including security, water, electricity, medical
        assistance throughout your stay in New City university. <br /> <br />
        At New City University, we work collaboratively to foster a campus
        culture that is compassionate, inclusive, supportive, and safe. This is
        a place where we celebrate our differences, and learn from the variety
        of perspectives represented in our vibrant community. By honoring and
        respecting each other, we create a living and learning environment where
        we can all pursue our dreams and reach our highest potential. This is
        also a place of high ambition and broad impacts. Your academic
        excellence and diversity are central to New City University’s vision and
        mission, as demonstrated by our campus’s exceptional value and training.{" "}
        <br /> <br /> We look forward to seeing your smiling faces during your
        daily campus life activities on our beautiful campus! <br /> <br />{" "}
        Sincerely yours, <br /> <br />
        <strong>Prof. Ralph A. Akinfeleye, Ph.D, FNIPR, FNGE, FCIDS</strong>
        <br />
        Chancellor
      </p>
      <br />
      <Image
        src="/team2.png"
        alt="chancellor"
        width={120}
        height={120}
        className="w-[120px] h-[120px] rounded-full object-cover border-[#61213C] border-2"
      />
    </>
  ),
  proChancellor: (
    <>
      <p>
        I am honored to welcome you to New City University, and I congratulate
        you on this significant achievement of being admitted to our highly
        esteemed University
        <br /> <br /> Your time here is an opportunity for development and
        immense growth, both academically and personally.
        <br /> <br />
        I encourage you to actively participate in your studies, engage in
        extracurricular activities, and explore the diverse resources and
        opportunities available to you to be above your equals.
        <br /> <br />
        Remember that learning is a lifelong process, and every experience, both
        in and out of the classroom, laboratories, studios, and workshops,
        contribute to your development and community building. 
        <br /> <br />
        We are a community built on unity and diversity, and I encourage you to
        embrace the unique perspectives and talents of your fellow students.
        Please note that we have instructed all our staff both academic and
        non-academic to continue to play the role of in-loco parentis throughout
        your studies in this University.
        <br /> <br /> We are committed to an institution fostering a supportive
        and collaborative environment where you can thrive academically and in
        all areas of your future endeavours and as earlier stated in the address
        of the Chancellor, I hereby reiterate as part of our commitment in the
        promotion of pedagogical purity in higher education in Nigeria, we will
        provide adequate facilities for your general well-being including
        security, water, electricity, medical assistance throughout your stay in
        New City University.
        <br /> <br /> As members of this New City University, we expect you to
        uphold the highest standards of respect, integrity, and responsibility.
        <br />
        <br />
        You are the future leaders, innovators, bridge builders and change
        makers of our world, and we have every confidence in your ability to
        make a positive impact. <br />
        <br />
        As you embark on this new chapter, I urge you to make the most of your
        time here and leave your mark on New City University soil and the
        world. Be rest assured on this new chapter that limitless opportunities
        await you. <br />
        <br />
        See you at the topmost top.
        <br />
        <br />
        <strong>Chief. Akin M. Akingbesote</strong>
        <br />
        <br />
        Pro-Chancellor and Chairman of Council
      </p>
      <br />
      <Image
        src="/team1.png"
        alt="prochancellor"
        width={120}
        height={120}
        className="w-[120px] h-[120px] rounded-full object-cover border-[#61213C] border-2"
      />
    </>
  ),
  // viceChancellor: (
  //   <>
  //     <p>
  //       New City University (NCU) Information Handbook is a written guide,
  //       carefully prepared and packaged, to serve as an indispensable compass
  //       for all students as you navigate through this great intuition of
  //       learning from the beginning of your sojourn at matriculation to the end
  //       at convocation. New City University is a distinct God global-driven,
  //       vision-propelled and value adding institution, committed to providing a
  //       world class education to students from diverse in Nigeria and around the
  //       globe. <br />
  //       <br />
  //       New City University was licensed in 2025 by the Federal Government of
  //       Nigeria, with a clear, mandate of &apos;building a people of global
  //       excellence&apos; through education of relevance. <br />
  //       <br /> Our operations since conception and  inception clearly spotlight
  //       the great potential we have as a University in attaining quite speedily,
  //       the status of a world class University in view of the following
  //       accomplishments among others: competent and highly committed staff,
  //       hitch-free and flawless adherence to academic calendar approved by the
  //       University Senate, <br />
  //       <br /> This handbook is designed to educate you about the University and
  //       its expectation from you as a stakeholder. It provides information on
  //       some of the important places and people on campus, their functions and
  //       other necessary details that will make your learning and living very
  //       impactful and most productive. <br />
  //       <br />
  //       In this book, you will find information on Hall of Residence which are
  //       under the governance of Hall Management Committee. The Halls are managed
  //       by well-trained professionals who are saddled with the responsibilities
  //       of their day-to-day running and administration. I assure you that New
  //       City University is a home away - from home where every staff stands
  //       in-loco parentis to every student. There is also information about the
  //       Student Disciplinary Committee (SDC).
  //       <br />
  //       <br /> The SDC is a committee responsible for dealing with all forms of
  //       misconduct by students, some of which are listed in this information
  //       handbook. Our disciplinary posture as a University brings to the fore
  //       the essential requirement of worthiness in character and learning for
  //       any student to be awarded a degree at New City University. <br />
  //       <br />
  //       It is in view of the foregoing that I urge you to see this handbook as
  //       an indispensable guide, the content of which should be read carefully
  //       and thoroughly, from time to time, so as to ensure strict compliance
  //       with the rules and regulations there-in contained. <br />
  //       <br />I welcome you all to an exciting global adventure at New City
  //       University, a unique place for making of champions of our generations.
  //       It is my prayer that your great dreams and aspirations will find
  //       fulfillment as you yield yourself totally to the limitless opportunities
  //       and possibilities that abound in NCU. <br />
  //       <br />
  //       God bless you.
  //       <br />
  //       <br />
  //       <strong> Prof. Ralph A. Akinfeleye, Ph.D, FNIPR, FNGE, FCIDS </strong>
  //       <br />
  //       <br />
  //       Vice-Chancellor
  //     </p>
  //     <br />
  //     <Image
  //       src="/team2.png"
  //       alt="prochancellor"
  //       width={120}
  //       height={120}
  //       className="w-[120px] h-[120px] rounded-full object-cover border-[#61213C] border-2"
  //     />
  //   </>
  // ),
  // brandstory: (
  //   <>
  //     <p className="text-[100px] text-center">
  //       <strong>This is the Brand Story Page</strong>
  //     </p>
  //   </>
  // ),
  // } as const;
} satisfies Record<string, React.ReactNode>;

// ✅ REMOVE async from here
export default async function AboutSection({
  params,
}: {
  params: Promise<{ section: keyof typeof contentMap }>;
}) {
  // const sectionContent = contentMap[params.section];
  const resolvedParams = await params;
  const sectionContent = contentMap[resolvedParams.section];

  if (!sectionContent) return notFound();

  return (
    <>
      <Navbar />
      <TextImageBlock text="About Us" imageSrc="/about.png" imageAlt="Campus" />
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          <AboutTabs />
        </aside>
        <main className="w-full px-4 lg:w-[40%] pb-[24px]  text-black">
          {sectionContent}
        </main>
      </div>
      <Footer />
    </>
  );
}
