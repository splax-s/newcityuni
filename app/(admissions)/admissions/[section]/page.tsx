// app/(about-us)/about-us/[section]/page.tsx

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import React from "react";
import AdmissionsTab from "@/reuseComponents/AdmissionsTab";
import Applyy from "@/reuseComponents/ApplyNowT";
import Image from "next/image";
import AdmissionsBanner from "@/reuseComponents/AdmissionsBanner";

const contentMap = {
  undergraduate: (
    <>
      <p className="text-[18px] font-[600] leading-[28px]">
        General Entry Requirements
      </p>
      <br />
      <p>
        This is to inform the candidates who chose New City University as first
        choice in the 2024 Joint Admissions and Matriculation Board (JAMB) that
        they can now apply for the Post Unified Tertiary Matriculation
        Examination (Post-UTME) by visiting; https://admissions.newcity.edu.ng
        <br />
        <br />
        Minimum qualification for the First Degree Programme: 5 credits at the
        GCE/SSCE/NECO Examinations or their equivalent (in not more than 2
        sittings), one sitting only for Medicine, and 2024/2025 UTME Aggregate
        Score NOT lower than 170. Only candidates from 16years of age and above
        are eligible to apply.
      </p>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="space-y-[16px] p-[24px] bg-[#F4F5F6] rounded-[8px]">
        <p className="text-[18px] font-[600] leading-[28px] ">Note</p>
        <p>
          Admission to New City University&apos;s undergraduate programs is
          exclusively through the Unified Tertiary Matriculation Examination
          (UTME) or Joint Admissions and Matriculation Board Direct Entry (JAMB
          DE). Only candidates who chose New City University as their first
          choice in UTME or DE are eligible for the screening process.
        </p>
        <p>
          Candidates who did not initially select New City University as their
          first choice may apply but must change their first choice to New City
          University at an accredited JAMB CBT Centre to complete the admission
          process.
        </p>
        <p>
          For Inter-University Transfer Admissions, candidates must submit their
          JAMB Admission Letter, Transcript, and Attestation Letter from their
          previous university to facilitate the transfer through JAMB. Foreign
          applicants are also eligible, provided they meet the general entry and
          JAMB requirements.
        </p>
      </div>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="flex gap-[20px] flex-col lg:flex-row">
        <div className="bg-[#FCF3ED] w-[160px] h-[160px] flex items-center rounded-[8px] justify-center">
          <Image
            src="/book.svg"
            alt="book"
            width={20}
            height={20}
            className="w-[73px] h-[]"
          />
        </div>
        <div className="justify-evenly lg:w-[80%] flex flex-col items-left">
          <p>
            You can view more details about the requirement by downloading
            Admission requirement prospectus here
          </p>
          <button className="flex w-[70%] lg:w-[35%] lg:mt-[0] mt-[20px] text-[white] bg-[#61213C] hover:bg-[#724456] gap-[9px] py-[12px] px-[12px] rounded-[4px]  items-center justify-center">
            <Image
              src="/down.svg"
              alt="svg"
              width={20}
              height={20}
              className="w-[24px]"
            />
            Download Prospectus
          </button>
        </div>
      </div>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="space-y-[16px]">
        <p className="text-[18px] font-[600] leading-[28px]">
          Office of the Registrar
        </p>
        <p>
          Embark on your global academic journey with us! We&apos;re here to
          guide you through every step of your admission process, ensuring a
          seamless transition into our vibrant community. Start today and let’s
          shape your future together!
        </p>
        <p>For inquiries, contact us at</p>
        <p className="flex  items-center gap-[16px]">
          <Image
            src="/letter.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />{" "}
          registrar@newcity.edu.ng
        </p>
        <p className="flex  items-center gap-[16px]">
          <Image
            src="/phone.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />{" "}
          +234 708 5530 656
        </p>
      </div>
      <br />
      <Applyy />
    </>
  ),
  PostGrad: (
    <>
      <p className="text-[18px] font-[600] leading-[28px]">
        General Entry Requirements
      </p>
      <br />
      <p>
        To apply for the Postgraduate Diploma (PGD) programme at New City
        University, candidates must hold a degree from New City University or
        another university recognized by the University Senate. Applicants with
        a Higher National Diploma (HND) or equivalent professional
        qualifications (e.g., ACA, ANAN, ACIB, ACCA, ACTI) are also eligible.
        The full-time PGD programme lasts for two semesters.
      </p>
      <br />
      <p className="text-[18px] font-[600] leading-[28px]">
        Masters (M.SC, MBA and M.A) Requirements
      </p>
      <br />
      <p>
        To apply for the Master’s Degree programme at New City University,
        candidates must be graduates of New City University or another
        university recognized by the University Senate, with at least a Second
        Class (Lower Division) degree. The full-time Master’s programme lasts 18
        months (3 semesters). Additional requirements may apply depending on the
        Faculty, Department, or specific programme option.
      </p>
      <br />
      <p className="text-[18px] font-[600] leading-[28px]">
        Master of Philosophy M.Phil
      </p>
      <br />
      <p>
        To apply for the M.Phil programme at New City University, candidates
        must hold an M.Sc from New City University or another university
        recognized by the University Senate. The full-time M.Phil programme has
        a minimum duration of four semesters. After the first year, candidates
        may transfer to the PhD programme if they meet the conversion
        requirement with a CGPA of 4.0 or 60% in coursework and submit an
        acceptable PhD research proposal. Time spent in the M.Phil programme
        counts toward the minimum duration required for the PhD programme.
      </p>
      <br />
      <p className="text-[18px] font-[600] leading-[28px]">
        Master of Philosophy M.Phil
      </p>
      <br />
      <p>
        To apply for the direct PhD Degree programme at New City University,
        candidates must hold an M.Phil from New City University or another
        university recognized by the University Senate, with a CGPA of 4.00 or
        60%. The PhD programme has a duration of six semesters.
      </p>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="space-y-[16px] p-[24px] bg-[#F4F5F6] rounded-[8px]">
        <p className="text-[18px] font-[600] leading-[28px] ">Note</p>
        <p>
          Opportunities exist for suitably qualified candidates for postgraduate
          training leading to the award of the Postgraduate Diploma, and
          Master’s and Doctoral Degree at Lead City University.
        </p>
      </div>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="flex gap-[20px] flex-col lg:flex-row">
        <div className="bg-[#FCF3ED] w-[160px] h-[160px] flex items-center rounded-[8px] justify-center">
          <Image
            src="/book.svg"
            alt="book"
            width={20}
            height={20}
            className="w-[73px] h-[]"
          />
        </div>
        <div className="justify-evenly lg:w-[80%] flex flex-col items-left">
          <p>
            You can view more details about the requirement by downloading
            Admission requirement prospectus here
          </p>
          <button className="flex w-[70%] lg:w-[35%] lg:mt-[0] mt-[20px] text-[white] bg-[#61213C] hover:bg-[#724456] gap-[9px] py-[12px] px-[12px] rounded-[4px]  items-center justify-center">
            <Image
              src="/down.svg"
              alt="svg"
              width={20}
              height={20}
              className="w-[24px]"
            />
            Download Prospectus
          </button>
        </div>
      </div>
      <br />
      <div className="border-b-1 border-[#D1D6DA]" />
      <br />
      <div className="space-y-[16px]">
        <p className="text-[18px] font-[600] leading-[28px]">
          Office of the Registrar
        </p>
        <p>
          Embark on your global academic journey with us! We&apos;re here to
          guide you through every step of your admission process, ensuring a
          seamless transition into our vibrant community. Start today and let’s
          shape your future together!
        </p>
        <p>For inquiries, contact us at</p>
        <p className="flex  items-center gap-[16px]">
          <Image
            src="/letter.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />{" "}
          registrar@newcity.edu.ng
        </p>
        <p className="flex  items-center gap-[16px]">
          <Image
            src="/phone.svg"
            alt="svg"
            width={20}
            height={20}
            className="w-[24px]"
          />{" "}
          +234 708 5530 656
        </p>
      </div>
      <br />
      <Applyy />
    </>
  ),

  // } as const;
} satisfies Record<string, React.ReactNode>;

// ✅ REMOVE async from here
export default async function AdmissionSection({
  params,
}: {
  params: Promise<{ section: keyof typeof contentMap }>;
}) {
  const resolvedParams = await params;
  const sectionContent = contentMap[resolvedParams.section];

  if (!sectionContent) return notFound();

  return (
    <>
      <Navbar />
      <TextImageBlock text="Academics" imageSrc="/acad.png" imageAlt="Campus" />
      <Breadcrumb />
      <div className="flex flex-col px-[20px]  lg:py-[80px] gap-[40px]  justify-center items-center ">
        <br className="block lg:hidden " />
        <aside className="w-full lg:w-[50%] space-y-[36px]">
          <Applyy />
          <AdmissionsTab />
        </aside>
        <main className="w-full lg:w-[50%]   pb-[px]  text-black">
          {sectionContent}
        </main>
      </div>
      <AdmissionsBanner />
      <Footer />
    </>
  );
}
