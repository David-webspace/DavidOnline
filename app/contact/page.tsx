"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  console.log(error,submitted);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      setError(true);
      return;
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) {
      setError(true);
      return;
    }
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 mt-6 md:mt-0 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">聯絡我</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">聯絡我</h1>
        </div>
      </section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-6xl mx-auto py-12 px-4"
      >
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-blue-600">Contact</span>
        </h2>
        <div>
        <form
          className="grid grid-cols-1 md:grid-cols-1 gap-6"
          onSubmit={handleSubmit}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0 }}
          >
            <label className="block">
              <span className="text-gray-700">姓名</span>
              <input type="text" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <label className="block">
              <span className="text-gray-700">電子郵件</span>
              <input type="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <label className="block">
              <span className="text-gray-700">訊息</span>
              <textarea name="message" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black" rows={6} />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 w-[120px] justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              送出
            </button>
          </motion.div>
        </form>
        </div>
      </motion.section>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

