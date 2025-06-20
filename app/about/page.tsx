"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type Clamp8LinesProps = {
  children: React.ReactNode;
  className?: string;
};

const Clamp8Lines: React.FC<Clamp8LinesProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [clampedText, setClampedText] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "24");
    const maxHeight = lineHeight * 8;
    const text = (typeof children === "string" ? children : el.textContent) || "";
    el.textContent = text;
    if (el.scrollHeight <= maxHeight) {
      setClampedText(text);
      return;
    }
    let low = 0, high = text.length, mid;
    while (low < high) {
      mid = Math.floor((low + high) / 2);
      el.textContent = text.slice(0, mid) + "...";
      if (el.scrollHeight > maxHeight) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    setClampedText(text.slice(0, low - 1) + "...");
    el.textContent = text;
  }, [children]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      {clampedText}
    </div>
  );
};

const IntroSection = () => {
  return (
    <>
     {/* Who is Section */}
     <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mt-[-48px] relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 w-40 h-40 relative overflow-hidden rounded-2xl border-1">
          <Image src="/profile.jpeg" alt="Justin Pan photo" fill className="object-cover" />
        </div>
        {/* Right: Info */}
        <div className="flex-1">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">關於我</h2> */}
          <p className="text-gray-600 mb-6">我叫潘丞詡。畢業於國立陽明交通大學百川學士學位學程，接觸過電機工程、跨領域設計相關課程。目前負責前端網站架設，也能夠進行UIUX研究流程，並熟悉Figma操作。</p>

          <div className="flex gap-8 mb-6">
            <div>
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-gray-500 text-xs">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-gray-500 text-xs">Industry Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">1+</div>
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
        
        <Link href="/projects/nycugraduationrepresentative" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden">
            <Image src="/graduation.jpg" alt="Update 1" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2024/06</div>
            <div className="text-black font-bold text-xl mb-2">畢業典禮 在校生致詞</div>
            <Clamp8Lines className="text-gray-900 text-sm mb-4">很榮幸有機會擔任畢業典禮的在校生致詞，我從大一剛入學其實在人際相處上有很大的障礙，但我也很願意改變，使自己不斷的進步，現在的我也相對更穩重多了。很謝謝各位願意相信我與支持我，我能夠站在台上很大部分也是因為我身邊的各位不斷地希望我變好，願意花超級多時間在我身上，我很感激! 我會帶著感恩的心一直往前走!</Clamp8Lines>
            <div className="flex justify-end">
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </div>
        </Link>
        {/* Card 2 */}
        <Link href="/projects/bluegear2023" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden">
            <Image src="/bluegear.png" alt="Update 2" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2023/12</div>
            <div className="text-black font-bold text-xl mb-2">交大管理顧問社 2023</div>
            <Clamp8Lines className="text-gray-900 text-sm mb-4">我積極參與校園活動，並在陽明交通大學管理顧問社中展現了行銷與創意的能力。期間，我提出了四項產品顧問提案，其中一項校園提案的行銷貼文在短短一夜間就獲得超過800個讚數，充分展現了我在行銷策略和創意表現上的實力。此外，我還與建築系合作，參與台東縣興隆國小的校園改善計畫。透過將設計理念轉化為實際成果，我成功為當地學生創造了更優質的學習環境，展現了跨領域合作與實務執行的能力。</Clamp8Lines>
            <div className="flex justify-end">
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </div>
        </Link>
        {/* Card 3 */}
        <Link href="/projects/bat2022" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden">
            <Image src="/bat2022.jpeg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2022/07</div>
            <div className="text-black font-bold text-xl mb-2">交大國際志工團 BAT 2022</div>
            <Clamp8Lines className="text-gray-900 text-sm mb-4">本志工活動主要是透過建築來傳達永續的概念，同時為當地創造新氣象。我們大家都不是建築相關背景，從0開始學習如何提案、概念發想，甚至也從頭開始學習使用建模軟體。我是其中建模軟體使用的最好的，最後大家也是延續我發想的提案，持續優化。同時我們也學習了木工技術，包含各種加工技巧，以便在未來可以順利製作出成品。在一切都規畫好之後，我們到了台東興隆國小，同時木材與工具等材料也運送過去，我們就直接開始了製作。作品名稱叫做「生生」，上面有許多的木箱以及集水通道，木箱中放有植物，實現自己自足的概念。同時整個建築像是一顆種子，有一個中空的空間，可以讓國小小朋友有個新的天下，增加校園的流動性。</Clamp8Lines>
            <div className="flex justify-end">
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </div>
        </Link>
        {/* Card 4 */}
        <Link href="/projects/nccugolden2023" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden cursor-pointer">
            <Image src="/nccu_golden.jpg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2023/05</div>
            <div className="text-black font-bold text-xl mb-2">政大金旋獎 2023</div>
            <Clamp8Lines className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</Clamp8Lines>
            <div className="flex justify-end">
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </div>
        </Link>
        {/* Card 5 */}
        <Link href="/projects/harvardwmun2024" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden cursor-pointer">
            <Image src="/harvardwmun_2024_banner.jpg" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2024/03</div>
            <div className="text-black font-bold text-xl mb-2">哈佛世傑模擬聯合國大會2024</div>
            <Clamp8Lines className="text-gray-900 text-sm mb-4">Lana Del Rey is headlining the 2025 Coachella Festival, bringing her signature style and new music to the stage. Fans are eagerly anticipating her performance at one of the world&#39;s biggest music festivals...</Clamp8Lines>
            <div className="flex justify-end">
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </div>
        </Link>
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
      <section className="bg-blue-600 text-white py-12 md:mt-0 mt-6 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">關於我</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">關於我</h1>
        </div>
      </section>

      {/* IntroSection */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.18 }}
      >
        <IntroSection />
      </motion.section>

      {/* Academic & Professional Journey Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.18, delay: 0.1 }}
      >
        <EducationSection />
      </motion.section>

      {/* Latest Updates Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.18, delay: 0.2 }}
      >
        <HeightLightSection />
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>

  );
}
