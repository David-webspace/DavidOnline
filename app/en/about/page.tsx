"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import ScrollToTop from "../../components/ScrollToTop";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">About me</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">ABOUT US</h1>
        </div>
      </section>

      {/* Who is Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mt-[-48px] relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 w-40 h-40 relative overflow-hidden rounded-2xl border-4 border-blue-100">
          <Image src="/profile.jpeg" alt="Justin Pan photo" fill className="object-cover" />
        </div>
        {/* Right: Info */}
        <div className="flex-1">
          <span className="block text-gray-500 italic mb-1">&ndash; About Me</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Who is Justin Pan?</h2>
          <p className="text-gray-600 mb-6">I am Cheng-Hsu Pan, a graduate of National Yang Ming Chiao Tung University, majoring in Innovative Technology and Interdisciplinary Design. I have a strong foundation in electrical engineering, interdisciplinary design, and front-end web development, with experience in courses like electronics, circuit theory, and 3D modeling. During my internships at Chi策 Intelligent Cloud and QNAP Systems, I designed user interfaces, optimized workflows, and enhanced product satisfaction data utilization. I also actively participated in competitions, proposing innovative solutions, and served as CTO of the Taiwan Model United Nations Association, where I built the official website and co-organized an international conference with Harvard University. I am passionate about learning, problem-solving, and creating value through continuous growth and collaboration.</p>

          <div className="flex gap-8 mb-6">
            <div>
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-gray-500 text-xs">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-gray-500 text-xs">Industry Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">0+</div>
              <div className="text-gray-500 text-xs">Years of Experience</div>
            </div>
          </div>
          <Link href="/Cheng_Syu_Pan_CV.pdf" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition w-max">
            Download CV
            <span className="inline-block transform translate-x-0.5">→</span>
          </Link>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-6">I am Cheng-Hsu Pan, a graduate of the Bachelor Program in Interdisciplinary Studies at National Yang Ming Chiao Tung University, majoring in Innovative Technology and Interdisciplinary Design. During my studies, I explored various disciplines, including electrical engineering, interdisciplinary design, and front-end web development. My coursework encompassed subjects such as electronics, circuit theory, logic design, signals and systems, architectural design, 3D modeling, and parametric design. I was also honored to represent my program as the student speaker at the 2024 commencement ceremony.</p>
          <p className="text-gray-600 mb-6">I am passionate about learning and embracing new challenges, and I have gained valuable internship experience throughout my academic journey. At Chi策 Intelligent Cloud and QNAP Systems, Inc., I served as a UI/UX user experience intern. During my internship at Chi策 Intelligent Cloud, I designed two website interfaces, including a user backend post management system and a dashboard interface. I also conducted competitive analysis to enhance consistency in product design. At QNAP, I introduced a product satisfaction survey workflow, redefined Jira processes, and significantly improved the efficiency of satisfaction data utilization in product development. Additionally, I completed multiple UI designs, product redesign proposals, and provided recommendations for a digital transformation platform.</p>
          <p className="text-gray-600 mb-6">Beyond my internships, I actively participated in competitions and extracurricular activities. I proposed an innovative solution combining customized medical seating with digital manufacturing technologies in the University Entrepreneurship Simulation Competition, earning a commendation award. As the Chief Technology Officer at the Taiwan Model United Nations Association, I successfully established the association&#39;s official website and collaborated with Harvard University to organize an international conference.</p>
          <p className="text-gray-600 mb-6">These experiences have strengthened my belief that continuous learning and practical application enable me to create more value for both my team and myself. I look forward to leveraging my skills in diverse fields and continuing to grow in the future.</p>
        </div>
      </section>

      {/* Academic & Professional Journey Section */}
      <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            My Academic and Professional <span className="text-blue-600">Journey</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Education Card */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 17l10 6 10-6"/></svg>
                </span>
                <span className="font-semibold text-lg">Education</span>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="text-xs text-gray-400 mb-1">29 JAN 2018 - 22 JAN 2020</div>
                  <div className="font-bold text-sm">SECONDARY SCHOOL CERTIFICATE <span className="font-normal text-xs text-gray-400">(Frontier Student Academy)</span></div>
                  <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                </li>
                <li>
                  <div className="text-xs text-gray-400 mb-1">6 OCT 2020 - 6 OCT 2022</div>
                  <div className="font-bold text-sm">HIGHER SECONDARY SCHOOL CERTIFICATE <span className="font-normal text-xs text-gray-400">(B.C.T - DHOOD)</span></div>
                  <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                </li>
                <li>
                  <div className="text-xs text-gray-400 mb-1">9 MAY 2023 - 3 SEP 2023</div>
                  <div className="font-bold text-sm">ADDITIONAL MATHEMATICS <span className="font-normal text-xs text-gray-400">(DONI Degree College Shabqadar)</span></div>
                  <div className="text-xs text-gray-400">Shabqadar, Pakistan</div>
                </li>
              </ul>
            </div>
            {/* Work Experience Card */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                </span>
                <span className="font-semibold text-lg">Work Experience</span>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="text-xs text-gray-400 mb-1">MAR 2022 - JUL 2022</div>
                  <div className="font-bold text-sm">SALES ASSISTANT INSPIRED SUPERMARKET</div>
                  <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                </li>
                <li>
                  <div className="text-xs text-gray-400 mb-1">FEB 2023 - JAN 2024</div>
                  <div className="font-bold text-sm">FRONT DESK MANAGER FERN STEAK HOUSE</div>
                  <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                </li>
                <li>
                  <div className="text-xs text-gray-400 mb-1">JAN 2023 - JAN 2024</div>
                  <div className="font-bold text-sm">RETAIL MANAGER MYWAZ</div>
                  <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-10 tracking-widest">HEIGHTLIGHT</h2>
          <div className="flex justify-start mb-8">
            <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded hover:bg-gray-700 transition">Explore</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/graduation.jpg" alt="Update 1" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">Graduation Presentation</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey is set to release her highly anticipated tenth studio album, The Right Person Will Stay, on May 21, 2025. This album marks a significant shift towards country and Americana genres, showcasing Lana&#39;s versatility and artistic evolution...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/bluegear.png" alt="Update 2" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">BlueGear 2023</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey announces her 2025 UK and Ireland tour dates, with shows in London, Manchester, Dublin, and more. Tickets go on sale soon. Don&#39;t miss out on this unforgettable experience...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/bat2022.jpeg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">BAT 2022</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
             {/* Card 4 */}
             <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/nccu_golden.jpg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">NCCU Golden Melody Awards 2023</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
             {/* Card 5 */}
             <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/fox.png" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">Meichu 2023</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
             {/* Card 6 */}
             <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
              <Image src="/updates/update3.jpg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
              <div className="text-black font-bold text-xl mb-2">2025 COACHELLA</div>
              <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
              <div className="flex justify-end">
                <span className="text-gray-400 text-2xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>

  );
}
