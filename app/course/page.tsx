"use client";

import NavigationBar from "../components/NavigationBar";
import Link from "next/link";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

export default function CoursePage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 md:mt-0 mt-6 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">課程購買</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">課程購買</h1>
        </div>
      </section>

      {/* Service Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="bg-white rounded-lg shadow p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">網站開發 / Web Development</h2>
            <p className="mb-2 text-gray-700">
              我擅長前端網頁開發，能根據客戶需求打造響應式（RWD）、與易維護的網站。無論是個人作品集、企業形象官網、活動宣傳網頁等等，都能提供專業的解決方案。
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>React / Next.js / TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS / UI 設計</li>
              <li>SEO & 性能優化</li>
            </ul>
          </motion.div>
          {/* Shopify E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.20 }}
            className="bg-white rounded-lg shadow p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Shopify 電商網站建置</h2>
            <p className="mb-2 text-gray-700">
              提供電商網站規劃、設計與上線一條龍服務，協助品牌快速進入線上銷售市場。可協助客製化主題、功能擴充與第三方整合。
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Shopify 佈景主題設定與客製化</li>
              <li>商品上架與金流整合（綠界、PayPal、Apple Pay、信用卡等）</li>
              <li>行銷工具整合（如 EDM、Google/Facebook）</li>
              <li>後台教學與維護諮詢</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">歡迎聯絡我，討論您的專屬需求！</p>
          <Link href="/contact" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">聯絡我</Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      </div>
    </AnimatedPage>
  )
}