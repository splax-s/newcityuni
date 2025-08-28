// app/(about-us)/about-us/[section]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
// import AboutTabs from "@/reuseComponents/AboutTabs";
import Image from "next/image";
import React from "react";
import CampusTabs from "@/reuseComponents/CampusTabs";
import Apply from "@/reuseComponents/ApplyNow";

const contentMap = {
  "campus-life": (
    <>
      <h2 className="text-2xl font-bold text-black mb-4">Campus Life at New City University</h2>
      <p className="text-black mb-4">
        At New City University, campus life isn&apos;t just an add-on — it&apos;s the heartbeat of our vibrant community, designed to enrich every facet of your student journey. We are committed to creating an environment where your well-being, social connections, and personal growth are paramount.
      </p>
      <br />
      
      <h3 className="text-lg font-bold text-black mb-2">Accommodation</h3>
      <p className="text-black mb-2">
        Imagine stepping into a living space that feels like home yet opens up a world of possibilities. Our modern and secure student hostel is fully equipped with essential amenities for your comfort and convenience.
      </p>
      <p className="text-black mb-4">
        But it&apos;s more than just a room — our dedicated Residence Life team fosters a thriving community through engaging events and constant support. With housing located just steps from classes and campus activities, you gain more time to learn, explore, and connect.
      </p>
      
      <h3 className="text-lg font-bold text-black mb-2">Campus Cafeteria</h3>
      <p className="text-black mb-2">
        The campus cafeteria is more than a dining space — it&apos;s a social hub where healthy, delicious, and affordable meals meet warm conversation. Our diverse menu caters to every taste, providing nourishment for both your body and your relationships.
      </p>
      <p className="text-black mb-4">
        It&apos;s the perfect spot to relax, chat with friends, and feel part of the NCU family.
      </p>
      
      <h3 className="text-lg font-bold text-black mb-2">Sports and Recreation</h3>
      <p className="text-black mb-2">
        We believe that a healthy body fuels a healthy mind. Our state-of-the-art facilities cater to both competitive and recreational sports.
      </p>
      <ul className="list-disc space-y-1 pl-6 text-black mb-2">
        <li>Competitive sports programs</li>
        <li>Fitness classes for all levels</li>
        <li>Recreational activities and student clubs</li>
      </ul>
      <p className="text-black mb-4">
        At NCU, sports are not just about fitness — they&apos;re about teamwork, camaraderie, and balance.
      </p>
      
      <h3 className="text-lg font-bold text-black mb-2">Health Services</h3>
      <p className="text-black mb-2">
        Your well-being is our priority. The Health and Wellness Centre offers:
      </p>
      <ul className="list-disc space-y-1 pl-6 text-black mb-2">
        <li>Confidential primary care</li>
        <li>Expert consultations</li>
        <li>Preventative health education</li>
      </ul>
      <p className="text-black mb-4">
        For specialized needs, we provide seamless referrals to trusted off-campus specialists, so you can focus on your studies knowing your health is in good hands.
      </p>
      
      <h3 className="text-lg font-bold text-black mb-2">Campus Safety</h3>
      <p className="text-black mb-2">
        Safety is the foundation of a thriving campus. Our 24/7 Campus Safety Department ensures a secure environment through:
      </p>
      <ul className="list-disc space-y-1 pl-6 text-black mb-2">
        <li>Round-the-clock patrols by trained personnel</li>
        <li>Extensive CCTV surveillance</li>
        <li>Crime prevention education</li>
      </ul>
      <p className="text-black mb-6">
        We nurture a culture of collective responsibility so New City University remains a safe and welcoming sanctuary for everyone.
      </p>
      
      <div className="relative w-full h-[300px]">
        <Image
          src="/campus.png"
          alt="Campus Life"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  accomodation: (
    <>
      <h1 className="text-2xl font-bold mb-4">Student Housing</h1>
      <p className="text-black mb-4">
        Imagine stepping into a living space that feels like home yet opens up a world of possibilities. Our modern and secure student housing is fully equipped with essential amenities for your comfort and convenience.
      </p>
      <p className="text-black mb-6">
        But it&apos;s more than just a room — our dedicated Residence Life team fosters a thriving community through engaging events and constant support. With housing located just steps from classes and campus activities, you gain more time to learn, explore, and connect.
      </p>
      <div className="relative w-full h-[300px]">
        <Image
          src="/hostel.png"
          alt="Student Housing"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  athletics: (
    <>
      <p>
        At New City University, a dynamic new institution in Nigeria, we’re
        passionate about sports as a vital extracurricular activity that builds
        teamwork, resilience, and excellence. These qualities prepare our
        students for success in Nigeria and globally.
      </p>
      <br />
      <p>
        We encourage all students, to engage in sports like football,
        basketball, volleyball, lawn tennis, table tennis, athletics, and indoor
        games such as chess. Our modern facilities support training and
        competition for all.
      </p>
      <br />
      <p>
        As a new university, we’re excited to join the Nigeria Private
        University Games Association (NPUGA) in 2026, aiming to win medals in
        our first year. We offer scholarships to top performers to support their
        academic and athletic goals. To foster a sports culture, we’re launching
        events like the Inter-Faculty Sports Challenge, Chancellor’s Cup, New
        City League of Stars, and New City Marathon, uniting our diverse
        community, including transfer students with JAMB Admission Letter,
        Transcript, and Attestation Letter. With over 60% of Nigeria’s
        population under 25, we’re committed to nurturing future athletes and
        leaders
      </p>
      <br />
      <h1>
        <strong>Our Goal</strong>
      </h1>
      <p>
        We aim to win NPUGA medals in 2025, build a vibrant sports culture, and
        position New City University as a leader in university athletics in
        Nigeria
      </p>
      <br />
      <h1>
        <strong>Get Involved</strong>
      </h1>
      <p>
        Discover sports at New City University. Visit{" "}
        <a
          href="https://www.newcity.edu.ng/sports"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:text-[#61213C] hover:cursor-pointer"
        >
          www.newcity.edu.ng/sports
        </a>{" "}
        to learn more and join a team. Let’s make history together!
      </p>
      <br />

      {/* <br /> */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/sport.png"
          alt="sport"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  dining: (
    <>
      <p>
        At New City University, our cafeteria is a vibrant hub where students
        can enjoy affordable, delicious meals while connecting with peers from
        Nigeria and beyond. Meals can be purchased with a campus card or cash.
      </p>
      <br />
      <p>
        Open daily from 7 AM to 9 PM, the cafeteria accommodates all students.
        With modern seating, natural lighting, and weekly cultural food days
        like “Taste of Nigeria,” it fosters community for our global student
        body, which includes students from over 10 countries.
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/dining.png"
          alt="dining"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  health: (
    <>
      <p>
        New City University’s Health Centre offers a wide range of comprehensive
        healthcare services, tailored to meet the diverse medical needs of our
        campus community. Staffed with experienced physicians, nurses, and
        support staff who are deeply committed to providing exceptional care,
        the centre ensures that health concerns are addressed with
        professionalism and compassion. As a newly established institution with
        a global focus, we understand the importance of reliable on-campus
        healthcare for academic success. We prioritize the well-being of our
        community, giving students and parents confidence that their health is
        in trusted hands, supporting their educational and personal growth.
      </p>
      <br />
      <p>
        <strong>General Medical Consultations: </strong>
        The Health Centre provides general medical consultations for a variety
        of health conditions, ensuring prompt and accurate care. From common
        ailments like colds and fevers to managing chronic illnesses, our
        medical professionals offer thorough diagnoses and personalized
        treatment plans. This service helps students stay healthy and focused on
        their studies, while reassuring parents that their loved ones have
        access to expert care whenever needed.
      </p>
      <br />
      <p>
        <strong>Preventive Care: </strong>
        The Health Centre places a strong emphasis on preventive care, aiming to
        promote overall wellness within our community. We offer vaccinations,
        health screenings, and wellness programs to identify potential health
        risks early and encourage healthy habits. These initiatives help
        students maintain their energy and focus for academic success, giving
        parents peace of mind that proactive care is in place to support their
        well-being.
      </p>
      <br />
      <p>
        <strong>Emergency Care: </strong>
        For urgent medical situations, the Health Centre is fully equipped to
        provide immediate care around the clock. Our trained medical staff
        responds swiftly to stabilize patients, offering critical care until
        further assistance is available if needed. This 24/7 emergency support
        ensures students are safe during health crises, providing parents with
        the assurance that their children are protected at all times, no matter
        the hour
      </p>
      <br />
      <p>
        <strong>Laboratory and Diagnostic Services: </strong>
        To support accurate diagnoses, the Health Centre features modern
        laboratory facilities and diagnostic equipment. We conduct a range of
        tests, including blood work, urinalysis, and basic imaging, enabling
        precise identification and treatment of illnesses. This capability helps
        students receive timely and effective care, minimizing disruptions to
        their studies, while offering parents confidence that health issues are
        thoroughly investigated and managed.
      </p>
      <br />
      <p>
        <strong>Counselling Services: </strong>
        Recognizing the importance of mental health, the Health Centre provides
        counselling services to support the emotional well-being of our
        community. Trained counsellors offer guidance, stress management, and
        therapeutic interventions to address challenges like anxiety and
        academic pressure. This support helps students thrive emotionally and
        academically, ensuring parents that their loved ones are cared for
        holistically in a nurturing environment. For more details or to book an
        appointment, visit www.newcity.edu.ng/healthcentre.
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/health.png"
          alt="health"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  tech: (
    <>
      <p>
        New City University’s ICT Department is a hub of technological
        innovation and excellence, dedicated to empowering our campus community
        with cutting-edge technology solutions. Led by a visionary team of IT
        professionals, the department focuses on fostering digital advancement
        through strategic partnerships and impactful projects. As a newly
        established institution with a global outlook, we are committed to
        providing a robust technological foundation that supports academic
        success and prepares our community for the digital age. The ICT
        Department ensures seamless access to modern tools, giving students and
        parents confidence that they are supported by a forward-thinking
        technology infrastructure
      </p>
      <br />
      <p>
        <strong>Cloud Storage</strong>
        <br />
        Our community benefits from an Office 365 online account, automatically
        assigned upon enrolment, which includes access to OneDrive with 1TB of
        online storage space per user. This service allows users to securely
        store, access, and share files from anywhere, ensuring flexibility for
        academic and collaborative work. It helps students stay organized and
        productive, while giving parents assurance that their children have
        reliable access to essential resources
      </p>
      <br />
      <p>
        <strong>Printing</strong>
        <br />
        New City University provides convenient printing, copying, and scanning
        services through multifunction devices located across the campus. Users
        can access these services using their university-issued ID card,
        ensuring a streamlined and efficient process. This setup supports
        students in completing their assignments and projects with ease,
        offering parents peace of mind that practical academic needs are met
      </p>
      <br />
      <p>
        <strong>Network Access</strong>
        <br />
        The university offers secure wireless access points across all campus
        areas, including public spaces, providing mobile users with convenient
        and reliable connectivity to the campus network and the internet. This
        robust network infrastructure supports research, communication, and
        learning activities, ensuring students can stay connected and
        productive, while reassuring parents of a dependable digital
        environment.
      </p>
      <br />
      <p>
        <strong>Security</strong>
        <br />
        New City University is dedicated to maintaining a safe and secure
        computing environment that protects electronic resources and individual
        privacy. Our ICT Department implements advanced security measures to
        safeguard data and systems, ensuring a worry-free experience for users.
        This commitment helps students focus on their studies, giving parents
        confidence that their children’s information is protected
      </p>
      <br />
      <p>
        <strong>IT Information Sessions</strong>
        <br />
        Before each academic semester begins, New City University hosts IT
        Information Sessions for new members of our community. These one-hour
        online sessions offer practical guidance and live demonstrations on
        accessing and setting up IT services, such as downloading software,
        configuring email and OneDrive, and managing passwords. These sessions
        help students start their journey with confidence, while assuring
        parents that their children are well-supported in navigating university
        technology
      </p>
      <br />
      <p>
        <strong>IT Support Services</strong>
        <br />
        The ICT Service Desk serves as the primary point of contact for incident
        reporting, IT service requests, and technical support. Our IT
        specialists are available 24 hours a day, seven days a week, ensuring
        continuous assistance for our global community. This round-the-clock
        support helps students resolve issues quickly, minimizing disruptions to
        their studies, and provides parents with the assurance that help is
        always available.
      </p>
      <br />
      <p>
        <strong>Artificial Intelligence (AI)</strong>
        <br />
        The ICT Department at New City University is at the forefront of
        integrating artificial intelligence to enhance learning and
        administrative processes. We leverage AI tools to support personalized
        learning experiences, such as intelligent tutoring systems, and to
        streamline operations like admissions and scheduling. This innovative
        approach helps students achieve academic success through tailored
        support, while giving parents confidence that their children are part of
        a cutting-edge educational environment
      </p>
      <br />
      <p>
        <strong>Remote Classes</strong>
        <br />
        New City University utilizes advanced technology to deliver remote
        classes, ensuring flexibility and accessibility for our community.
        Through our Learning Management System (LMS), users can access online
        courses, collaborate with peers, and engage with resources from anywhere
        in the world. This capability helps students maintain their academic
        progress regardless of location, offering parents reassurance that their
        children’s education remains uninterrupted in any circumstance. For more
        details on our ICT services,{" "}
        <a
          href="https://www.newcity.edu.ng/ict"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:text-[#61213C] hover:cursor-pointer"
        >
          www.newcity.edu.ng/ict
        </a>{" "}
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/tech.png"
          alt="health"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  library: (
    <>
      <p>
        New City University Library subscribes to a comprehensive range of
        electronic resources and databases, providing state-of-the-art
        facilities to access them. The Library&apos;s internet service is
        exceptional with over 100 computers connected to the library&apos;s
        server, professionally managed by our Systems Administrator.
      </p>
      <br />
      <p>
        Internet search is free for all registered staff, students and community
        users. Access to library resources outside of the library is provided
        through secure password authentication. The ICT department also monitors
        and enforces access to authorized sites using advanced proxy servers.
      </p>
      <p>
        The multimedia division houses extensive electronic resources including
        audio-visual materials, slides, filmstrips and all necessary equipment
        for operating them. Our digital infrastructure ensures seamless access
        to academic resources that support teaching, learning and research
        across all disciplines.
      </p>
      <br />
      <p>
        Click to visit the e-library Page at &apos;
        <a
          href="https://www.newcity.edu.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:text-[#61213C] hover:cursor-pointer"
        >
          www.newcity.edu.ng/
        </a>{" "}
        &apos;
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/lib.png"
          alt="library"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  activities: (
    <>
      <p>
        At New City University, we believe that education extends far beyond the
        classroom. Our vibrant student organizations serve as the heartbeat of
        campus life, fostering leadership, building lifelong connections, and
        empowering every student to discover their potential.
      </p>
      <br />
      <p>
        <strong>Empowering Your Journey</strong>
        <br />
        <br />
        Our diverse network of student organizations provides platforms for
        personal growth, professional development, and meaningful community
        engagement. Whether you&apos;re passionate about academics, arts,
        sports, social causes, or cultural heritage, there&apos;s a place for
        you to thrive and make your mark.
      </p>
      <br />
      <p>
        <strong>Building Stronger Communities</strong>
        <br />
        <br />
        Through collaborative initiatives, service projects, and peer mentorship
        programs, our student organizations create supportive environments where
        every voice matters. Students lead, inspire, and uplift one another
        while developing the skills and confidence needed to become
        tomorrow&apos;s changemakers.
      </p>
      <br />
      <p>
        <strong>Your Voice, Your Impact</strong>
        <br />
        <br />
        From student government to specialized clubs, cultural associations to
        professional societies, these organizations are student-driven spaces
        where your ideas take flight. Here, you&apos;ll find mentorship,
        friendship, and opportunities to lead initiatives that shape not only
        your university experience but also impact the wider community.
      </p>
      <br />
      <p>
        <strong>Join the Movement</strong>
        <br />
        <br />
        Every student organization at NUC is more than just a group – it&apos;s
        a family committed to excellence, inclusivity, and collective success.
        Together, we&apos;re building a legacy of empowered graduates who leave
        their mark on the world.
        <br />
        <br />
        Your journey of leadership and community begins here. Join us and
        discover the leader within you.
      </p>
      <br />
      <div className="relative w-full h-[300px]">
        <Image
          src="/activity.png"
          alt="activity"
          fill
          style={{ objectFit: "cover" }} // or 'contain' depending on your needs
        />
      </div>
      <br />
      <Apply />
    </>
  ),
  // } as const;
} satisfies Record<string, React.ReactNode>;

// ✅ REMOVE async from here
export default async function CampusSection({
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
      <TextImageBlock
        text="Campus Life"
        imageSrc="/campus.png"
        imageAlt="Campus"
      />
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          {/* <AboutTabs /> */}
          <CampusTabs />
        </aside>
        <main className="w-full px-4 lg:w-[40%] pb-[24px]  text-black">
          {sectionContent}
        </main>
      </div>
      <Footer />
    </>
  );
}
