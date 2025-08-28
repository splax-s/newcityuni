// app/(about-us)/about-us/[section]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import React from "react";
import AcademicsTabs from "@/reuseComponents/AcademicsTabs";
import Apply from "@/reuseComponents/ApplyNow";
import CategoryCard from "@/reuseComponents/CategoryCard";
import AppBanner from "@/reuseComponents/ApplyBanner";

const contentMap = {
  FTundergraduate: (
    <>
      <p>
        At New City University, a dynamic new institution in Nigeria, you can
        pursue an undergraduate degree exploring diverse disciplines across our 
        five innovative faculties. With undergraduate majors and programs, our 
        comprehensive offerings allow you to combine courses that align with your 
        passions and career goals, preparing you for global opportunities.
      </p>
      <br />
      <CategoryCard
        icon="/medlab.svg"
        title="Faculty of Basic Medical and Allied health Sciences"
        items={[
          "Medical Laboratory Science",
          "Nursing",
          "Physiotherapy",
          "Public Health",
        ]}
      />
      <br />
      <CategoryCard
        icon="/sms.svg"
        title="Faculty of Social and Management Sciences"
        items={["Accounting", "Economics", "Business Admin"]}
      />
      <br />
      <CategoryCard
        icon="/masscom.svg"
        title="Faculty of Communication & Media Studies"
        items={[
          "Mass Communication",
          "Public Relations",
          "Strategic Communication",
          "Journalism",
          "Advertising",
          "Broadcasting",
        ]}
      />
      <br />
      <CategoryCard
        icon="/comp.svg"
        title="Faculty of Computing and Sciences"
        items={[
          "Computer Science",
          "Information Technology",
          "Cyber Security",
          "Microbiology",
          "Biochemistry",
        ]}
      />
      <br />
      <CategoryCard
        icon="/law.svg"
        title="Faculty of Law"
        items={[
          "Private & Property Law",
          "Public Law",
          "Commercial Law",
          "International Law",
        ]}
      />
      <br />
      <AppBanner />
      <br />
      <Apply />
    </>
  ),
  // PTundergraduate: (
  //   <>
  //     <p>
  //       At New City University, a dynamic new institution in Nigeria, you can
  //       pursue a part-time undergraduate degree tailored to your schedule,
  //       exploring diverse disciplines across our five innovative faculties. With
  //       undergraduate majors and programs, our flexible part-time offerings
  //       allow you to combine courses that align with your passions, career
  //       goals, and busy lifestyle, preparing you for global opportunities.
  //     </p>
  //     <br />
  //     <br />
  //     <CategoryCard
  //       icon="/sms.svg"
  //       title="Faculty of Social & Management Sciences"
  //       items={["Accounting", "Economics", "Business Admin"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon="/masscom.svg"
  //       title="Faculty of Communication & Media Studies"
  //       items={[
  //         "Mass Communication",
  //         "Public Relations",
  //         "Strategic Communication",
  //         "Journalism",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon="/comp.svg"
  //       title="Faculty of Computing and Sciences"
  //       items={["Computer Science", "Information Technology"]}
  //     />
  //     <br />
  //     <AppBanner />
  //     <br />
  //     <Apply />
  //   </>
  // ),
  // PostGrad: (
  //   <>
  //     <p>
  //       As a dynamic new institution in Nigeria, New City University offers
  //       postgraduate programs across our five innovative faculties, allowing you
  //       to explore diverse disciplines and create a path tailored to your
  //       professional and academic aspirations. With 10 postgraduate programs,
  //       including Postgraduate Diploma (PGD), Master’s, M.Phil, and PhD, our
  //       flexible curriculum empowers you to combine courses that align with your
  //       goals, preparing you for global career success.
  //     </p>
  //     <br />
  //     {/* <br /> */}
  //     <CategoryCard
  //       icon=""
  //       title="Accounting"
  //       items={["PGD, MSc (Accounting)", "PhD (Accounting)"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Behavioural Studies"
  //       items={[
  //         "PGD, M.Sc, M.Phil/PhD Psychology",
  //         "MSc Sociology",
  //         "PGD Social Work",
  //         "MMP Masters in Managerial Psychology",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Biological Sciences"
  //       items={["Msc, PhD (Microbiology)"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Biochemistry"
  //       items={[
  //         "MSc in Biochemistry",
  //         "M.Phil in Biochemistry",
  //         "Ph.D in Biochemistry",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Business Administration & Marketing"
  //       items={[
  //         "PGD, MSc Administration",
  //         "PGD, MSc Marketing Business",
  //         "PGD, MSc Human Resource Management",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Chemical Sciences"
  //       items={[
  //         "MSc Materials Chemistry",
  //         "PhD Industrial Chemistry",
  //         "MSc Environmental & Analytical Chemistry",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Computer Science"
  //       items={["MSc/MPhil/PhD Computer Sciences", "PGD in Computer Science"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Economics"
  //       items={["PGD, MSc, Mphil, PhD Economics"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="History & International Studies"
  //       items={[
  //         "MA, PhD History & Int'l Studies",
  //         "PGD, Security and Strategic Studies",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Multidisciplinary MBAs"
  //       items={[
  //         "Accounting",
  //         "Business Administration",
  //         "Human Resource Management",
  //       ]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Mass Communication"
  //       items={["PGD, MSc, PhD: Communication and Media Studies"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Political Science"
  //       items={["M.Sc and PhD in Political Science"]}
  //     />
  //     <br />
  //     <CategoryCard
  //       icon=""
  //       title="Physical Sciences"
  //       items={[
  //         "MSc, PhD Communication Physics",
  //         "MSc, PhD Lower Atmospheric Physics",
  //         "MSc, PhD Theoretical and Computational Physics",
  //         "MSc, PhD Instrumentation",
  //       ]}
  //     />
  //     <br />
  //     <br />
  //     <AppBanner />
  //     <br />
  //     <Apply />
  //   </>
  // ),
  Foundation: (
    <>
      <p className="text-[24px] font-[500] leading-[32px]">
        Foundation Programme
      </p>
      <br />
      <p>
        As a new and innovative institution in Nigeria, New City University
        offers a Foundation Programme designed to bridge the gap for students
        preparing for undergraduate studies, providing a strong academic base
        across our five faculties. This one-year program allows you to explore
        foundational courses in disciplines like Business, Technology,
        Humanities, Sciences, and Social Sciences, ensuring you’re ready to
        excel in your chosen undergraduate major while gaining skills for global
        opportunities.
      </p>
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">
        Admission Requirement
      </p>
      <br />
      <p>
        Candidates must possess a minimum of five (5) credit passes in
        SSCE/GCE/NECO in relevant subjects at a sitting or two sittings.
      </p>
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">
        Admission Requirements into 200 level direct entry degree programme on
        completion of the Foundation Programme
      </p>
      <br />
      <ol className="list-disc ml-8 space-y-2">
        <li>
          Candidates must obtain JAMB Direct Entry application form and choose
          New City University.
        </li>
        <li>
          Candidates can only be offered admission into 200 level for courses
          enrolled at Foundation Programme.
        </li>
        <li>
          Candidates must pass all the subjects offered in the Foundation
          Programme at a satisfactory level
        </li>
        <li>
          Candidates must obtain and submit the University admission form for
          Direct Entry.
        </li>
      </ol>
      <br />
      <div className="w-full border border-[#E8EAEC]"></div>
      <br />
      <p className="text-[24px] font-[500] leading-[32px]">
        Joint Universities Preliminary Examination Board (JUPEB)
      </p>
      <br />
      <p>
        JUPEB is the Joint Universities Preliminary Examinations Board, with its
        headquarters in Lagos.
        <br />
        <br />
        JUPEB was set up through a consortium of some Nigeria Universities to
        unify the admission process of partner institutions through their
        respective preliminary programmes.
      </p>
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">
        Eligibility Criteria
      </p>
      <br />
      <p>
        To be eligible to take examinations leading to the award of JUPEB’s
        Direct Entry Certificates, the candidate must have undergone an
        intensive academic work relevant to his/her proposed university course.
      </p>
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">
        Admission Requirements into 200 level direct entry degree programme on
        completion of the Foundation Programme
      </p>
      <br />
      <ol className="list-disc ml-8 space-y-2">
        <li>
          Each candidate must register, sit for Examinations and satisfy the
          Board in three subjects and a General Studies course relevant to the
          proposed course in any of the universities.
        </li>
        <li>
          Each candidate is expected to take twelve (12) courses, six per
          semester, and a General Studies course.
        </li>
        <li>
          Each subject is broken into four courses to be taken, two per
          semester, by the candidate. The results in all the courses are to be
          merged at the end of the second semester to obtain the candidate’s
          grade in that particular subject
        </li>
        <li>
          The general Studies for courses in each University Faculty will be
          based on relevant General courses suggested for that Faculty by each
          university.
        </li>
        <li>
          The students upon completion of the programme will be issued
          certificates based on their level of performance which bear Letter
          Grades of A, B, C, D, E or F in each of the three subjects and General
          Studies Paper. For admission into each university, each candidate, in
          addition to passing the prescribed.
        </li>
      </ol>
      <br />
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">
        Admission Requirements into 200 level direct entry degree programme on
        completion of the Foundation Programme
      </p>
      <br />
      <ol className="list-disc ml-8 space-y-2">
        <li>
          Candidates must obtain JAMB Direct Entry application form and choose
          New City University.
        </li>
        <li>
          Candidates can only be offered admission into 200 level for courses
          enrolled at Foundation Programme.
        </li>
        <li>
          Candidates must pass all the subjects offered in the Foundation
          Programme at a satisfactory level
        </li>
        <li>
          Candidates must obtain and submit the University admission form for
          Direct Entry.
        </li>
      </ol>
      <br />
      <p className="text-[16px] font-[600] leading-[24px]">Duration</p>
      <br />
      <p>
        The duration of the Programme of courses for the Board’s Examination is
        a minimum of one academic session of two semesters.
      </p>
      <br />
      <AppBanner />
      <br />
      <Apply />
    </>
  ),
  // } as const;
} satisfies Record<string, React.ReactNode>;

// ✅ REMOVE async from here
export default async function AcademicsSection({
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
      <TextImageBlock text="Academics" imageSrc="/acad.png" imageAlt="Campus" />
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          {/* <AboutTabs /> */}
          <AcademicsTabs />
        </aside>
        <main className="w-full px-4 lg:w-[40%] pb-[24px]  text-black">
          {sectionContent}
        </main>
      </div>
      <Footer />
    </>
  );
}
