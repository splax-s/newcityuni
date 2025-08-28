import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Breadcrumb from "@/reuseComponents/Breadcrumb";
import TextImageBlock from "@/reuseComponents/TextImageBlock";
import AcademicsTabs from "@/reuseComponents/AcademicsTabs";

export default function Academics() {
  return (
    <>
      <Navbar />
      <TextImageBlock
        text="Academics"
        imageSrc="/acad.png"
        imageAlt="acad view"
      />
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row  lg:py-[80px] gap-[40px] lg:gap-[88px] justify-center items-center lg:items-start">
        <aside className="w-full lg:w-auto">
          <AcademicsTabs />
        </aside>
        <main className="w-full px-4 lg:w-[50%] text-black pb-[24px]">
          <div className="space-y-6">
            <div>
              <h2 className="text-[28px] lg:text-[32px] font-bold text-[#61213C] mb-4">
                Undergraduate Admissions
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                At New City University (NCU), we welcome ambitious and talented students from diverse backgrounds who are ready to shape the future. Our undergraduate programs span across five innovative faculties, offering comprehensive education that prepares you for global opportunities.
              </p>
            </div>

            {/* General Entry Requirements */}
            <div>
              <h3 className="text-[24px] font-[600] leading-[32px] text-[#61213C] mb-4">
                General Entry Requirements
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    1. Academic Qualifications
                  </h4>
                  <div className="ml-4 space-y-3">
                    <div>
                      <h5 className="font-[600] mb-1">Senior Secondary School Certificate (SSCE) or Equivalent:</h5>
                      <p className="mb-2">
                        Five (5) credit passes in relevant subjects, including English Language and Mathematics, obtained at not more than two sittings in any of the following examinations:
                      </p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>WAEC (West African Examination Council)</li>
                        <li>NECO (National Examination Council)</li>
                        <li>NABTEB (National Business and Technical Examinations Board)</li>
                        <li>Or other equivalent certificates approved by the university</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-[600] mb-1">Subject Combination:</h5>
                      <p>
                        Applicants must have credit passes in subjects relevant to their chosen program.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    2. Unified Tertiary Matriculation Examination (UTME)
                  </h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>All candidates must sit for the UTME and attain the approved minimum JAMB cut-off mark for universities</li>
                    <li>Candidates must also select New City University as their first-choice institution</li>
                    <li>If you initially selected another institution, you can easily change to New City University through the JAMB change of institution process</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    3. Post-UTME Screening
                  </h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Applicants who meet the UTME requirements will be invited for the New City University Post-UTME Screening Exercise</li>
                    <li>Details of the screening schedule and guidelines will be communicated through our admissions portal and official channels</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    4. Direct Entry Admission
                  </h4>
                  <p className="mb-2">Direct Entry candidates must possess one of the following:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>A minimum of two (2) A-Level passes in relevant subjects</li>
                    <li>National Diploma (ND), NCE, or equivalent with at least Lower Credit from a recognized institution</li>
                    <li>JUPEB/Interim Joint Matriculation Board (IJMB) advanced level passes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    5. Age Requirement
                  </h4>
                  <p>
                    Candidates must be at least 16 years old by the time of admission.
                  </p>
                </div>

                <div>
                  <h4 className="text-[18px] font-[600] leading-[24px] mb-2">
                    6. International Students
                  </h4>
                  <p className="mb-2">International applicants must provide:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Evidence of academic qualifications equivalent to the Nigerian SSCE</li>
                    <li>A valid international passport</li>
                    <li>English Language proficiency certificate (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Apply Section */}
            <div>
              <h3 className="text-[24px] font-[600] leading-[32px] text-[#61213C] mb-4">
                How to Apply (Step-by-Step)
              </h3>
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  <div>
                    <strong>Obtain JAMB UTME Form</strong>
                    <p className="mt-1">Choose New City University (NCU) as your first choice.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Register for NCU Post-UTME</strong>
                    <p className="mt-1">Visit https://newcity.edu.ng/admissions</p>
                    <p>Fill in your details and upload required documents.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Participate in Screening Exercise</strong>
                    <p className="mt-1">Attend the scheduled Post-UTME screening (online or on campus).</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Check Admission Status</strong>
                    <p className="mt-1">Monitor your admission status on JAMB CAPS and New City University Admissions Portal.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Accept and Complete Registration</strong>
                    <p className="mt-1">Accept your admission on JAMB CAPS.</p>
                    <p>Pay your acceptance fee and complete online registration.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#61213C]">
              <h3 className="text-[20px] font-semibold mb-3 text-[#61213C]">
                Need More Information?
              </h3>
              <p className="mb-2">
                <strong>Admissions Portal:</strong> https://newcity.edu.ng/admissions
              </p>
              <p className="mb-2">
                <strong>Email:</strong> admissions@newcity.edu.ng
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +234 (0) 123 456 7890
              </p>
              <p className="text-sm text-gray-600 mt-4">
                For detailed information about specific programs and faculty requirements, please use the tabs on the left to explore our different academic offerings.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
