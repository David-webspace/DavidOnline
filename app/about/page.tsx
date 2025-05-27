"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";

const IntroSection = () => {
  return (
    <>
     {/* Who is Section */}
     <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mt-[-48px] relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 w-40 h-40 relative overflow-hidden rounded-2xl border-4 border-blue-100">
          <Image src="/profile.jpeg" alt="Justin Pan photo" fill className="object-cover" />
        </div>
        {/* Right: Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">關於我</h2>
          <p className="text-gray-600 mb-6">我叫潘丞詡。畢業於國立陽明交通大學百川學士學位學程，接觸過電機工程、跨領域設計相關課程。目前負責前端網站架設，也能夠進行UIUX研究流程，並熟悉Figma操作。</p>

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
          下載履歷
            <span className="inline-block transform translate-x-0.5">→</span>
          </Link>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-6">我是潘丞詡，畢業於國立陽明交通大學百川學士學位學程，主修創新科技與跨領域設計。在學期間，我接觸了電機工程、跨領域設計，以及前端網站架設等多元領域，並修習了電子學、電路學、邏輯設計、訊號與系統、建築設計、3D建模與參數化設計等課程。我也有幸代表學程在2024年畢業典禮上擔任致詞代表。</p>
          <p className="text-gray-600 mb-6">我熱愛學習與挑戰新事物，並在學習過程中累積了豐富的實習經驗。例如，在威聯通科技擔任UX使用者體驗實習生時，我導入了產品滿意度調查工作流程，重新定義Jira流程，並顯著提升了滿意度數據在產品開發中的應用效率。此外，我還完成了多項UI設計及重新設計提案，並提出數位轉型平台設計的建議。</p>
          <p className="text-gray-600 mb-6">在奇策智能雲端的實習中，我設計了兩項網站介面，包括用戶後台發文管理系統與儀表板界面，並進行了競品分析，優化了產品設計的一致性。</p>
          <p className="text-gray-600 mb-6">除了實習經驗，我也積極參與比賽與社團活動。我曾在大專校院創業實戰模擬學習平台競賽中，提出結合客製化醫療座椅與數位製造技術的創新解決方案，並獲得佳作。在台灣模擬聯合國學會，我擔任技術長，成功建立學會官網，並與哈佛大學合作舉辦國際會議。</p>
          <p className="text-gray-600 mb-6">這些經歷讓我更加堅信，透過持續學習與實踐，我能為團隊與自己創造更多價值。我期待未來能在更多領域中發揮所長，持續成長。</p>
        </div>
      </section>
    </>
  )
}

const EducationSection = () => (
    <section className="w-full bg-white py-16 px-4 md:px-0 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          學術與專業 <span className="text-blue-600">歷程</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 17l10 6 10-6"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-600">教育</span>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="font-bold text-xl">國立陽明交通大學百川學士學位學程</div>
                <div className="text-xs text-gray-400 mb-1">新竹, 台灣</div>
                <div className="text-xs text-gray-400 mb-1">Sep 2019 - Jun 2024</div>
              </li>
              <li>
                <div className="font-bold text-xl">台北市立成功高級中學</div>
                <div className="text-xs text-gray-400 mb-1">台北市, 台灣</div>
                <div className="text-xs text-gray-400 mb-1">2016 - Jun 2019</div>
              </li>
            </ul>
          </div>
          {/* Work Experience Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              </span>
              <span className="font-semibold text-lg text-blue-600">工作經驗</span>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="font-bold text-xl">電商網站工程師</div>
                <div className="font-bold text-sm mb-1">潮網科技股份有限公司（Wavenet）</div>
                <div className="text-xs text-gray-400 mb-1">APR 2025 - Present</div>
              </li>
              <li>
                <div className="font-bold text-xl">UX實習生</div>
                <div className="font-bold text-sm mb-1">威聯通科技股份有限公司 （QNAP Systems, Inc.）</div>
                <div className="text-xs text-gray-400 mb-1">JUN 2024 - NOV 2024</div>
              </li>
              <li>
                <div className="font-bold text-xl">UIUX實習生</div>
                <div className="font-bold text-sm mb-1">奇策智能雲端有限公司 （CRYPTO-ARSENAL TECHNOLOGY CO.）</div>
                <div className="text-xs text-gray-400 mb-1">Feb 2024 - JUN 2024</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            查看更多
            <span className="inline-block transform translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </section>
)

const HeightLightSection = () => (
  <section className="w-full bg-white py-16 px-4 md:px-0">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10 tracking-widest">重要事項</h2>
      <div className="flex justify-start mb-8">
        <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded hover:bg-gray-700 transition">查看更多</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
          <Image src="/graduation.jpg" alt="Update 1" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
          <div className="text-black font-bold text-xl mb-2">畢業典禮 在校生致詞</div>
          <div className="text-gray-900 text-sm mb-4">Lana Del Rey is set to release her highly anticipated tenth studio album, The Right Person Will Stay, on May 21, 2025. This album marks a significant shift towards country and Americana genres, showcasing Lana&#39;s versatility and artistic evolution...</div>
          <div className="flex justify-end">
            <span className="text-gray-400 text-2xl">→</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
          <Image src="/bluegear.png" alt="Update 2" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
          <div className="text-black font-bold text-xl mb-2">交大管理顧問社 2023</div>
          <div className="text-gray-900 text-sm mb-4">Lana Del Rey announces her 2025 UK and Ireland tour dates, with shows in London, Manchester, Dublin, and more. Tickets go on sale soon. Don&#39;t miss out on this unforgettable experience...</div>
          <div className="flex justify-end">
            <span className="text-gray-400 text-2xl">→</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
          <Image src="/bat2022.jpeg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
          <div className="text-black font-bold text-xl mb-2">交大國際志工團 BAT 2022</div>
          <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
          <div className="flex justify-end">
            <span className="text-gray-400 text-2xl">→</span>
          </div>
        </div>
          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
          <Image src="/nccu_golden.jpg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
          <div className="text-black font-bold text-xl mb-2">政大金旋獎 2023</div>
          <div className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</div>
          <div className="flex justify-end">
            <span className="text-gray-400 text-2xl">→</span>
          </div>
        </div>
          {/* Card 5 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between min-h-[280px]">
          <Image src="/fox.png" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
          <div className="text-black font-bold text-xl mb-2">清交梅竹大賽狐狸 2023</div>
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
)


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">關於我</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">關於我</h1>
        </div>
      </section>

      {/* IntroSection */}
      <IntroSection />

      {/* Academic & Professional Journey Section */}
      <EducationSection />

      {/* Latest Updates Section */}
      <HeightLightSection />

      <Footer />
      <ScrollToTop />
    </div>

  );
}
