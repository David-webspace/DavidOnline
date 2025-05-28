
"use client";
import { FaFigma, FaReact, FaNodeJs, FaShopify, FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaBehanceSquare, FaGithubSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

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
    let text = (typeof children === "string" ? children : el.textContent) || "";
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

const HeroSection =() => {
  return(
    <main className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center px-8 pt-12 pb-24 gap-8 md:gap-50 relative">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl mt-8 md:mt-0">
        <span className="text-lg font-medium text-gray-700 mb-2 bg-blue-50 px-3 py-1 rounded">Hello !</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          I’m <span className="text-blue-600 underline">Justin Pan</span>,<br/>
          <span className="text-black">Web Designer & Developer</span>
        </h1>
        <p className="text-gray-500 mb-4 text-base md:text-lg">
          我叫潘丞詡。畢業於國立陽明交通大學百川學士學位學程，接觸過電機工程、跨領域設計相關課程。目前負責前端網站架設，也能夠進行UIUX研究流程，並熟悉Figma操作。
        </p>
        <p className="text-gray-500 mb-4 text-base md:text-lg">
          我使用NextJS, ReactJS, NodeJS等框架建立網站，也有完成RWD的能力，並熟悉使用Shopify來建立電商網站。
        </p>
        <p className="text-gray-500 mb-6 text-base md:text-lg">
          我很積極，好相處善溝通，懂得如何進行團體合作，並盡力達成團隊的需求。我喜歡學習新的知識，不斷地提升自我能力將會創造更大的價值。若您有外包設計需求，歡迎與我聯絡。
        </p>
        <div className="flex gap-4 mb-8">
          <a href="https://www.instagram.com/chenshshei/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition"><FaInstagramSquare size={28} /></a>
          <a href="https://www.facebook.com/justin.pan.277434/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition"><FaFacebookSquare size={28} /></a>
          <a href="https://www.linkedin.com/in/justin-pan-375560255/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition"><FaLinkedin size={28} /></a>
          <a href="https://www.behance.net/altondesignplace" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition"><FaBehanceSquare size={28} /></a>
          <a href="https://github.com/David-webspace" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition"><FaGithubSquare size={28} /></a>
        </div>
      </div>
      {/* Right: Photo */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative z-0">
          <Image
            src="/profile.jpeg"
            alt="Justin Pan photo"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl object-cover border-4 border-blue-100"
            priority
          />
          <span className ="absolute top-4 left-0 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">WEB Designer</span>
          <span className="absolute bottom-4 right-0 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">UIUX Designer</span>
        </div>
      </div>
    </main>
  )
}

const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
    <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-black">提供的</span> <span className="text-blue-600">服務</span>
        </h2>
      </div>
      <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
        查看更多
        <span className="inline-block transform translate-x-0.5">→</span>
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/website.svg" alt="Website" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">網站開發</h3>
        <p className="text-gray-500 text-sm mb-2">建立功能完整、引人入勝且使用者友好的網站。</p>
        <p className="text-gray-500 text-sm mb-2">提供跨境支付流程和本地物流整合。</p>
        <p className="text-gray-500 text-sm mb-2">綁定域名並建立電子商務後台。</p>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/wireframe.svg" alt="Wireframe" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">UIUX設計</h3>
        <p className="text-gray-500 text-sm mb-2">直覺且使用者友好的設計：設計應簡單且清晰，使使用者能夠快速開始並高效完成任務。</p>
        <p className="text-gray-500 text-sm mb-2">解決使用者的痛點，幫助實現目標，並提供實用的價值。</p>
        <p className="text-gray-500 text-sm mb-2">建立積極的互動和情感聯繫，增強使用者的滿意度和忠誠度。</p>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/communication.svg" alt="Communication" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">高效率的溝通能力</h3>
        <p className="text-gray-500 text-sm">溝通需求、建立信任、促進內部和外部合作，以實現價值創造</p>
      </div>
    </div>
    </div>
  </section>
)}

const JourneySection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          學術與職涯 <span className="text-blue-600">歷程</span>
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
      </div>
    </section>
  )
}

const BlogSection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="block text-gray-500 italic mb-1">&ndash; Blogs</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-blue-600">Blog</span> <span className="text-black">My</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
              See More
              <span className="inline-block transform translate-x-0.5">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Blog Card */}
            <div className="md:col-span-2 bg-gray-50 rounded-2xl p-0 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <Image src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Main Blog" className="w-full md:w-2/3 h-60 md:h-auto object-cover" width={600} height={400} />
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">RUNNING</span>
                </div>
                <h3 className="text-xl font-bold mb-2">10 Essential Tips For Beginner Runners: Start Your Running Journey Right</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>by Mike Chen</span>
                  <span>•</span>
                  <span>Oct 12, 2023</span>
                </div>
              </div>
            </div>
            {/* Blog List */}
            <div className="flex flex-col gap-4">
              {/* Blog Item 1 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80" alt="Blog 1" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RACE</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">The Science Behind Running: How It Benefits You</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Lee Li</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              {/* Blog Item 2 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80" alt="Blog 2" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RUNNING</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">From Couch To 5K: A Step-By-Step Guide To Becoming A Runner</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Mike Chen</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              {/* Blog Item 3 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80" alt="Blog 3" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RUNNING</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">The Best Running Shoes For Every Terrain, Find Your Fit</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Hannah Smith</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

const SkillSection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="block text-gray-500 italic mb-1">&ndash; 擅長工具</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-600 italic font-medium">用對的工具   </span>
            <span className="text-black"> 完成對的任務</span>
          </h2>
        </div>
        <div className="flex justify-between">
          {/* Tool 1: Figma */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaFigma className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">90%</span>
            <span className="text-gray-500 font-bold">Figma</span>
          </div>
          {/* Tool 2: ReactJs */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaReact className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">80%</span>
            <span className="text-gray-500 font-bold">ReactJs</span>
          </div>
          {/* Tool 3: NodeJs */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaNodeJs className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">60%</span>
            <span className="text-gray-500 font-bold">NodeJs</span>
          </div>
          {/* Tool 4: Shopify */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaShopify className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">90%</span>
            <span className="text-gray-500 font-bold">Shopify</span>
          </div>
          {/* Tool 5: VSCodes */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <VscVscode className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">80%</span>
            <span className="text-gray-500 font-bold">VSCode</span>
          </div>
        </div>
      </div>
    </section>
  )
}

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
        <Link href="/projects/meizhu2023" className="hover:shadow-lg transition-shadow rounded-xl">
          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-between max-h-[480px] overflow-hidden cursor-pointer">
            <Image src="/fox.png" alt="Update 3" width={400} height={200} className="rounded mb-4 object-cover w-full h-40" />
            <div className="text-xs text-gray-400 mb-1">2023/03</div>
            <div className="text-black font-bold text-xl mb-2">清交梅竹大賽狐狸 2023</div>
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Navigation Bar */}
      <NavigationBar/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Services Section */}
      <ServiceSection/>

      {/* Academic & Professional Journey Section */}
      <JourneySection />

      {/* Blog Section */}
      {/* <BlogSection/> */}

      {/* Highlight Section */}
      <HeightLightSection/>

      {/* Tools Section */}
      <SkillSection/>

      {/* Bottom Skill/Service Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white flex items-center justify-center gap-8 py-3 text-sm font-medium z-20">
        <span>Digital Marketing</span>
        <span className="mx-2">★</span>
        <span>Website Development</span>
        <span className="mx-2">★</span>
        <span>UIUX Design</span>
        <span className="mx-2">★</span>
        <span>Email Marketing</span>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}


