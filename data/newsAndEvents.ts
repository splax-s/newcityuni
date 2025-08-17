// data/newsAndEvents.ts

export interface NewsItem {
  id: number;
  image: string;
  header: string;
  subheader: string;
  date: string;
  category: string;
  type: 'news' | 'event';
  slug: string;
  content?: string; // Full article content for news items
}


export const newsData: NewsItem[] = [
  {
    id: 1,
    image: "/news1.png",
    header: "New Semester Orientation Program for First Year Students",
    subheader: "Welcome session scheduled for incoming students to familiarize them with campus facilities and academic requirements.",
    date: "15 Aug 2025",
    category: "campus life",
    type: 'news',
    slug: "new-semester-orientation-program-for-first-year-students",
    content: "New City University is pleased to announce a comprehensive orientation program for all first-year students beginning their academic journey with us. This three-day program has been carefully designed to ensure smooth integration into university life and academic excellence.\n\nThe orientation will cover essential topics including campus navigation, academic policies, student support services, and extracurricular opportunities. Students will have the chance to meet their academic advisors, explore faculty facilities, and connect with upperclassmen who will serve as mentors throughout their first semester.\n\nKey highlights of the program include interactive sessions with department heads, campus tours led by student ambassadors, and workshops on effective study techniques and time management. Additionally, students will receive their official student handbooks, ID cards, and access credentials for university systems.\n\nThe program kicks off on Monday morning at the main auditorium with a welcome address from the Vice-Chancellor. Parents and guardians are invited to attend the opening ceremony and a special information session designed specifically for them.\n\nAll new students are required to attend this mandatory orientation program. Those unable to attend due to exceptional circumstances should contact the Student Affairs Office immediately to arrange alternative arrangements."
  },
  {
    id: 2,
    image: "/news2.png",
    header: "Faculty Development Workshop on Modern Teaching Methods",
    subheader: "Professional development session focusing on innovative pedagogical approaches and digital learning tools.",
    date: "20 Aug 2025",
    category: "academics",
    type: 'news',
    slug: "faculty-development-workshop-on-modern-teaching-methods",
    content: "New City University's commitment to academic excellence extends beyond students to continuous professional development for our esteemed faculty members. This month, we are hosting an intensive three-day faculty development workshop focused on modern teaching methodologies and digital integration in education.\n\nThe workshop will feature renowned education experts and technology specialists who will guide our faculty through the latest pedagogical approaches, including flipped classroom techniques, blended learning strategies, and interactive digital tools that enhance student engagement and learning outcomes.\n\nParticipating faculty members will explore innovative assessment methods, learn to create multimedia learning materials, and discover how to effectively use learning management systems to create more dynamic and accessible course content. Special emphasis will be placed on inclusive teaching practices that accommodate diverse learning styles and backgrounds.\n\nDr. Sarah Johnson, an internationally recognized expert in educational technology from the University of Cambridge, will serve as the keynote speaker. She will share insights on how digital transformation is reshaping higher education globally and provide practical strategies for implementation.\n\nThe workshop includes hands-on sessions where faculty can practice new techniques, collaborate on curriculum development, and receive personalized feedback from experts. All participants will receive certificates of completion and access to a comprehensive resource library for continued professional growth."
  },
  {
    id: 3,
    image: "/news3.png",
    header: "Student Registration for 2024/2025 Academic Session Ongoing",
    subheader: "Current and new students are advised to complete their registration process before the deadline.",
    date: "25 Aug 2025",
    category: "admissions",
    type: 'news',
    slug: "student-registration-for-2024-2025-academic-session-ongoing",
    content: "New City University announces that student registration for the 2024/2025 academic session is now in full swing. Both returning students and newly admitted candidates are urged to complete their registration process promptly to secure their academic standing for the upcoming semester.\n\nThe registration process has been streamlined through our online portal, making it more convenient for students to complete all necessary requirements from anywhere. Students can access course selection, fee payment, and document submission features through their student dashboard.\n\nNew students must submit their original certificates, complete medical examinations, and attend mandatory orientation sessions as part of the registration requirements. Returning students need to clear any outstanding fees, update their course selections, and ensure their academic records are current.\n\nThe university has extended registration support hours to accommodate the high volume of students. Special help desks have been set up in the main administrative building, and technical support is available 24/7 for online registration issues.\n\nImportant deadlines to remember: Course registration closes on September 15th, fee payment deadline is September 20th, and late registration (with penalty fees) will be available until September 30th. Students who fail to register by the final deadline will not be permitted to attend classes for the semester.\n\nFor assistance, students can visit the registrar's office, call the hotline, or send emails to the student support team. Step-by-step registration guides are available on the university website and mobile app."
  },
  {
    id: 4,
    image: "/newscard.png",
    header: "Library Hours Extended for Examination Period",
    subheader: "The university library will operate 24/7 during the upcoming examination period to support student studies.",
    date: "30 Aug 2025",
    category: "campus life",
    type: 'news',
    slug: "library-hours-extended-for-examination-period",
    content: "In recognition of the intensive study requirements during examination periods, New City University Library will extend its operating hours to provide 24/7 access for all students starting September 1st through the end of the examination period.\n\nThis extended service ensures that students have uninterrupted access to library resources, quiet study spaces, and research materials when they need them most. The library will maintain full staffing during regular hours and provide security personnel and basic assistance during overnight hours.\n\nFacilities available during extended hours include individual study carrels, group study rooms, computer labs, printing services, and access to the digital resource collection. The library café will operate extended hours until midnight, providing refreshments and light meals for students.\n\nStudents planning to use overnight facilities must present valid student IDs and follow library guidelines for after-hours access. Special safety protocols are in place, including increased security patrols and emergency contact systems.\n\nLibrarian support will be available until 10 PM for research assistance, database navigation, and citation help. Self-service options for book checkout and returns will remain available throughout the 24-hour period.\n\nThe extended hours policy reflects the university's commitment to student success and creates an optimal environment for academic achievement during this critical period."
  },
  {
    id: 5,
    image: "/newscard.png",
    header: "New Computing Lab Officially Opens",
    subheader: "State-of-the-art computer laboratory with modern equipment now available for student use.",
    date: "02 Sep 2025",
    category: "academics",
    type: 'news',
    slug: "new-computing-lab-officially-opens",
    content: "New City University proudly unveils its newest state-of-the-art computing laboratory, featuring cutting-edge technology and modern equipment designed to enhance the learning experience for all students in technology-related disciplines.\n\nThe new facility houses 50 high-performance computers equipped with the latest processors, graphics cards, and professional software suites including programming environments, design applications, and data analysis tools. Each workstation features dual monitors, ergonomic seating, and individual power outlets for personal devices.\n\nSpecial features include a dedicated server room for advanced computing projects, high-speed internet connectivity, and specialized equipment for robotics and AI development. The lab also includes a presentation area with smart boards and audio-visual equipment for collaborative projects and demonstrations.\n\nSoftware installations include industry-standard applications such as AutoCAD, Adobe Creative Suite, Microsoft Office Professional, various programming IDEs, statistical analysis packages, and virtual machine environments for systems administration training.\n\nThe lab will be available to students from all faculties, with priority scheduling for computer science, engineering, and information technology courses. Booking systems are available online, and trained technical staff will be present during operating hours to provide assistance.\n\nInauguration ceremonies will include demonstrations of the lab's capabilities and special workshops introducing students to the new resources available for their academic and research projects."
  },
  {
    id: 6,
    image: "/newscard.png",
    header: "Academic Calendar for 2024/2025 Session Released",
    subheader: "Important dates including exam periods, holidays, and academic activities have been published.",
    date: "05 Sep 2025",
    category: "academics",
    type: 'news',
    slug: "academic-calendar-for-2024-2025-session-released",
    content: "The Academic Planning Committee has finalized and released the official academic calendar for the 2024/2025 session, providing students, faculty, and staff with essential dates for effective planning throughout the academic year.\n\nKey dates include semester start and end dates, examination periods, registration deadlines, holiday breaks, and important academic milestones. The first semester begins September 15th and concludes January 10th, followed by examinations from January 13th to January 25th.\n\nMid-semester breaks are scheduled for October 15-20 and March 10-15, providing students with necessary rest periods and opportunities for personal and academic reflection. Major holidays including Independence Day, Christmas, and New Year are incorporated into the academic schedule.\n\nSpecial academic events are highlighted throughout the calendar, including research presentation weeks, career fairs, cultural celebrations, and graduation ceremonies. Faculty development days and staff training periods are also clearly marked to ensure smooth institutional operations.\n\nThe calendar emphasizes the university's commitment to balanced academic rigor and student well-being, providing adequate time for coursework, examinations, and extracurricular activities. Digital copies are available on the university website and mobile app.\n\nStudents are advised to synchronize the academic calendar with their personal schedules and plan their academic activities, internships, and personal commitments accordingly. Faculty members should align their course schedules and assessment timelines with the published dates."
  },
  {
    id: 7,
    image: "/newscard.png",
    header: "Student Health Services Now Available",
    subheader: "Basic medical services and health consultations are now available on campus for all students.",
    date: "08 Sep 2025",
    category: "campus life",
    type: 'news',
    slug: "student-health-services-now-available",
    content: "New City University is proud to announce the launch of comprehensive on-campus health services, providing convenient and accessible medical care for all enrolled students throughout the academic year.\n\nThe new health center is staffed by qualified medical professionals including a resident doctor, registered nurses, and a counseling psychologist. Services include routine check-ups, treatment of minor illnesses and injuries, health screenings, vaccinations, and mental health support.\n\nFacilities include modern examination rooms, a pharmacy for essential medications, and comfortable waiting areas. Emergency medical equipment and protocols are in place to handle urgent situations, with direct communication links to nearby hospitals for serious cases requiring specialized care.\n\nPreventive health programs will be offered regularly, including health education workshops, fitness assessments, nutritional counseling, and stress management sessions. Special attention is given to common student health concerns such as study-related stress, sleep disorders, and lifestyle-related health issues.\n\nThe health center operates Monday through Friday from 8 AM to 6 PM, with emergency protocols available for after-hours urgent situations. Students can book appointments through the online portal or visit the center for walk-in consultations during designated hours.\n\nAll services are provided at subsidized rates for enrolled students, with some basic services available at no cost. Health insurance information and guidance are also available to help students navigate healthcare options."
  },
  {
    id: 8,
    image: "/newscard.png",
    header: "Scholarship Opportunities for Academic Excellence",
    subheader: "Merit-based scholarships available for outstanding students in various academic programs.",
    date: "10 Sep 2025",
    category: "admissions",
    type: 'news',
    slug: "scholarship-opportunities-for-academic-excellence",
    content: "New City University announces the availability of multiple scholarship opportunities designed to recognize and support outstanding academic achievement across all faculties and programs for the 2024/2025 academic session.\n\nScholarship categories include merit-based awards for academic excellence, need-based assistance for deserving students, and specialized scholarships for research projects and community service initiatives. Awards range from partial tuition coverage to full scholarships including living allowances.\n\nEligibility criteria vary by scholarship type but generally include minimum GPA requirements, demonstrated financial need, leadership qualities, and commitment to academic and personal growth. Some scholarships are specifically designated for students in particular fields such as STEM, arts, or social sciences.\n\nThe application process is straightforward and entirely online, requiring academic transcripts, personal statements, letters of recommendation, and documentation of financial circumstances where applicable. A dedicated scholarship committee reviews all applications using transparent and fair evaluation criteria.\n\nSpecial recognition scholarships are available for students who demonstrate exceptional leadership, innovation, or community service. These awards not only provide financial support but also include mentorship opportunities and special academic programs.\n\nApplication deadlines vary by scholarship type, with the earliest deadline set for October 15th. Students are encouraged to apply early and for multiple scholarships where eligible. Detailed information about all available scholarships, eligibility requirements, and application procedures is available on the university website and through the financial aid office."
  },
  {
    id: 9,
    image: "/newscard.png",
    header: "Campus Security Measures Enhanced",
    subheader: "Additional security personnel and surveillance systems installed to ensure student safety.",
    date: "12 Sep 2025",
    category: "campus life",
    type: 'news',
    slug: "campus-security-measures-enhanced",
    content: "New City University has implemented comprehensive security enhancements across campus to ensure the safety and well-being of all students, faculty, and staff members throughout the academic year.\n\nUpgrades include the installation of modern CCTV surveillance systems at strategic locations, increased security personnel during peak hours, improved lighting in walkways and parking areas, and enhanced access control systems for academic and residential buildings.\n\nTrained security officers now patrol campus grounds 24/7, with special attention to areas such as parking lots, dormitories, library, and recreational facilities. Emergency call boxes have been installed at regular intervals across campus, providing direct communication with security headquarters.\n\nThe security operations center has been equipped with state-of-the-art monitoring equipment and communication systems, enabling rapid response to any security concerns or emergency situations. Coordination protocols with local law enforcement and emergency services have been strengthened.\n\nStudent safety orientation programs will be conducted regularly to educate the campus community about security procedures, emergency protocols, and personal safety measures. These sessions cover topics such as walking safely at night, securing personal belongings, and reporting suspicious activities.\n\nA mobile safety app has been developed for students, providing features such as emergency alerts, safety escort requests, and direct communication with security services. The app also includes campus maps with safety information and emergency contact details.\n\nThe university remains committed to maintaining an open, welcoming campus environment while ensuring the highest standards of safety and security for all community members."
  },
  {
    id: 10,
    image: "/newscard.png",
    header: "New Cafeteria Menu Introduces Local Dishes",
    subheader: "Diverse meal options including traditional Nigerian cuisine now available in the student cafeteria.",
    date: "15 Sep 2025",
    category: "campus life",
    type: 'news',
    slug: "new-cafeteria-menu-introduces-local-dishes",
    content: "New City University's student cafeteria has unveiled an exciting new menu featuring authentic Nigerian cuisine alongside international dishes, reflecting the rich cultural diversity of our student body and celebrating local culinary traditions.\n\nThe expanded menu includes popular Nigerian dishes such as jollof rice, pounded yam with various soups, suya, moi moi, and chin chin, prepared by experienced local chefs using traditional recipes and fresh, high-quality ingredients sourced from local suppliers.\n\nInternational options continue to be available, including continental breakfast items, pasta dishes, sandwiches, salads, and vegetarian alternatives to accommodate diverse dietary preferences and nutritional needs of students from different cultural backgrounds.\n\nNutritional information is clearly displayed for all menu items, helping students make informed food choices that support their health and academic performance. Special dietary accommodations are available for students with allergies, religious dietary restrictions, or medical conditions.\n\nMeal plans have been restructured to offer greater flexibility and value, with options for daily purchases, weekly plans, and full semester packages. Digital payment systems have been implemented to streamline transactions and reduce waiting times during peak meal periods.\n\nThe cafeteria environment has been enhanced with comfortable seating areas, cultural decorations, and background music that creates a welcoming atmosphere for dining and social interaction among students from diverse backgrounds.\n\nStudent feedback is actively encouraged through suggestion boxes and regular surveys to ensure the cafeteria continues to meet evolving preferences and dietary needs throughout the academic year."
  },
  {
    id: 11,
    image: "/newscard.png",
    header: "ICT Training Program for Staff Members",
    subheader: "Comprehensive digital literacy program designed to enhance staff technical capabilities.",
    date: "18 Sep 2025",
    category: "academics",
    type: 'news',
    slug: "ict-training-program-for-staff-members",
    content: "New City University launches a comprehensive Information and Communication Technology training program for all administrative and academic staff members, ensuring our institution stays at the forefront of digital transformation in higher education.\n\nThe six-week program covers essential digital skills including advanced computer applications, cloud-based collaboration tools, cybersecurity awareness, digital communication platforms, and data management systems that are increasingly vital for modern educational administration.\n\nTraining modules are tailored to different staff roles and responsibilities, with specialized tracks for academic staff focusing on learning management systems, online assessment tools, and multimedia content creation, while administrative staff concentrate on office productivity, database management, and customer service technologies.\n\nExperienced ICT professionals and certified trainers will conduct hands-on workshops in small groups, ensuring personalized attention and practical learning experiences. Training materials and resources will remain accessible for ongoing reference and skill development.\n\nThe program emphasizes practical application of newly acquired skills through real-world scenarios and projects relevant to daily work responsibilities. Participants will receive certificates upon successful completion, which can contribute to professional development portfolios.\n\nOngoing technical support will be available to all staff members following the training program, including help desk services, user guides, and periodic refresher sessions to keep pace with technological updates and new software implementations.\n\nThis initiative demonstrates the university's commitment to staff development and organizational excellence through strategic technology adoption and digital literacy enhancement."
  },
  {
    id: 12,
    image: "/newscard.png",
    header: "Student Union Election Guidelines Published",
    subheader: "Electoral process and requirements for student leadership positions have been announced.",
    date: "20 Sep 2025",
    category: "campus life",
    type: 'news',
    slug: "student-union-election-guidelines-published",
    content: "The Student Affairs Office has released comprehensive guidelines for the upcoming Student Union elections, providing clear procedures and requirements for students interested in pursuing leadership positions within the university's student government structure.\n\nElection positions include Student Union President, Vice President, Secretary, Treasurer, and various faculty representatives, each with specific roles and responsibilities in representing student interests and organizing campus activities throughout the academic year.\n\nEligibility requirements include minimum GPA standards, good disciplinary standing, completion of specific credit hours, and demonstrated commitment to student welfare and campus community development. Candidates must be nominated by fellow students and submit detailed campaign platforms.\n\nThe electoral process includes candidate registration, campaign periods with organized debates and forums, and electronic voting systems that ensure transparency, accessibility, and accurate vote counting. All registered students are eligible to vote in the elections.\n\nCampaign guidelines establish fair practices for all candidates, including spending limits, approved campaigning locations, and prohibited activities to ensure ethical competition and equal opportunities for all participants regardless of their backgrounds or resources.\n\nVoting will take place over three days using secure online platforms and physical polling stations, accommodating different student preferences and ensuring maximum participation from the student body. Results will be announced immediately following vote counting.\n\nElected student leaders will receive comprehensive orientation and training to prepare them for their responsibilities, including leadership development workshops, university policy education, and mentorship from current student leaders and university administrators."
  }
];

export const eventsData: NewsItem[] = [
  {
    id: 13,
    image: "/eventslisting.png",
    header: "Matriculation Ceremony for New Students",
    subheader: "Official induction ceremony for newly admitted students into the university community.",
    date: "25 Sep 2025",
    category: "ceremony",
    type: 'event',
    slug: "matriculation-ceremony-for-new-students"
  },
  {
    id: 14,
    image: "/eventslisting.png",
    header: "Career Guidance Workshop",
    subheader: "Professional development session to help students identify career paths and prepare for job markets.",
    date: "30 Sep 2025",
    category: "career",
    type: 'event',
    slug: "career-guidance-workshop"
  },
  {
    id: 15,
    image: "/eventslisting.png",
    header: "Inter-Faculty Sports Competition",
    subheader: "Annual sports tournament featuring various games and competitions between different faculties.",
    date: "05 Oct 2025",
    category: "sports",
    type: 'event',
    slug: "inter-faculty-sports-competition"
  },
  {
    id: 16,
    image: "/eventslisting.png",
    header: "Academic Writing Skills Seminar",
    subheader: "Training session on research methodology and academic writing for undergraduate students.",
    date: "10 Oct 2025",
    category: "academics",
    type: 'event',
    slug: "academic-writing-skills-seminar"
  },
  {
    id: 17,
    image: "/eventslisting.png",
    header: "Cultural Day Celebration",
    subheader: "Showcase of Nigerian cultural heritage through music, dance, and traditional displays.",
    date: "15 Oct 2025",
    category: "cultural",
    type: 'event',
    slug: "cultural-day-celebration"
  },
  {
    id: 18,
    image: "/eventslisting.png",
    header: "Industry Professionals Guest Lecture Series",
    subheader: "Weekly sessions featuring professionals sharing industry insights with students.",
    date: "20 Oct 2025",
    category: "academics",
    type: 'event',
    slug: "industry-professionals-guest-lecture-series"
  },
  {
    id: 19,
    image: "/eventslisting.png",
    header: "Student Entrepreneurship Fair",
    subheader: "Platform for students to showcase business ideas and connect with potential mentors.",
    date: "25 Oct 2025",
    category: "entrepreneurship",
    type: 'event',
    slug: "student-entrepreneurship-fair"
  },
  {
    id: 20,
    image: "/eventslisting.png",
    header: "Blood Donation Drive",
    subheader: "Community health initiative in partnership with local hospitals to support medical needs.",
    date: "30 Oct 2025",
    category: "community",
    type: 'event',
    slug: "blood-donation-drive"
  },
  {
    id: 21,
    image: "/eventslisting.png",
    header: "Technology Innovation Showcase",
    subheader: "Exhibition of student technology projects and innovative solutions developed during the semester.",
    date: "05 Nov 2025",
    category: "technology",
    type: 'event',
    slug: "technology-innovation-showcase"
  },
  {
    id: 22,
    image: "/eventslisting.png",
    header: "Parent-Teacher Conference",
    subheader: "Annual meeting between faculty members and parents to discuss student academic progress.",
    date: "10 Nov 2025",
    category: "academic",
    type: 'event',
    slug: "parent-teacher-conference"
  },
  {
    id: 23,
    image: "/eventslisting.png",
    header: "Environmental Awareness Campaign",
    subheader: "Educational activities promoting sustainability and environmental conservation on campus.",
    date: "15 Nov 2025",
    category: "environment",
    type: 'event',
    slug: "environmental-awareness-campaign"
  },
  {
    id: 24,
    image: "/eventslisting.png",
    header: "End of Semester Academic Conference",
    subheader: "Student research presentations and academic achievements recognition ceremony.",
    date: "20 Nov 2025",
    category: "academics",
    type: 'event',
    slug: "end-of-semester-academic-conference"
  }
];

// Combined data for easy access
export const allNewsAndEvents = [...newsData, ...eventsData];

// Helper functions
export const getNewsByCategory = (category: string) => 
  newsData.filter(item => item.category.toLowerCase() === category.toLowerCase());

export const getEventsByCategory = (category: string) => 
  eventsData.filter(item => item.category.toLowerCase() === category.toLowerCase());

export const getRecentNews = (limit: number = 3) => 
  newsData.slice(0, limit);

export const getUpcomingEvents = (limit: number = 3) => 
  eventsData.slice(0, limit);
