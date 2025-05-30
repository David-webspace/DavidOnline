"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiReact, SiFigma, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

interface ProjectDetailProps { title: string; banner: string; category: string; url: string; about: string[]; skills: { name: string; icon: string }[]; industries: string[]; benefits: string[]; images: string[]; }

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  SiReact,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  // Add more icons here as needed
};

const EventDetail: React.FC<ProjectDetailProps> = ({ title, banner, category, url, about, skills, benefits, images }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
    {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 md:mt-0 mt-6 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/projects" className="hover:underline">專案經驗</Link>
            <span className="mx-2">&gt;</span>
            <span className="font-semibold">{title}</span>
          </nav>
          <h1 className="md:text-5xl text-2xl font-bold tracking-wide mb-2">{title}</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Image Banner */}
        <div className="mb-6 w-full md:h-[600px] flex justify-center items-center overflow-hidden rounded-xl">
          <Image
            src={banner}
            alt={title}
            width={800}
            height={400}
            className="rounded-xl w-full object-cover mb-4"
          />
        </div>
        
        {/* Descriptions */}
        <section className="mb-8">
          <div className="mb-4 flex justify-between items-end gap-2">
            <h2 className="md:text-5xl text-2xl font-bold text-black">{title}</h2>
            {category !== "Website" ? null : (
              <Link
                href={url}
                className="text-blue-600 hover:underline text-sm font-semibold bg-blue-50 px-4 py-2 rounded shadow-sm hover:bg-blue-600 hover:text-white transition"
                target="_blank"
              >
                {title}
              </Link>
            )}
          </div>
          {about.map((paragraph, i) => (
            <p key={i} className="text-gray-700 text-md leading-relaxed mb-3">{paragraph}</p>
          ))}
        </section>

          {/* Benefits */}
          <section className="mb-8">
          <h3 className="font-semibold mb-2 text-xl text-black">學習項目:</h3>
          <ul className="list-disc pl-5 text-md text-gray-700">
            {benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="font-semibold mb-2 text-xl text-black">技術能力:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-6 gap-2 text-sm">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-lg">
                {iconMap[skill.icon as string] ? React.createElement(iconMap[skill.icon as string], { size: 24, className: "text-black" }) : null}
                {skill.name}
              </li>
            ))}
          </ul>
         </section>

        {/* Image */}
        {images && images.length > 0 && (
          <>
            <h3 className="font-semibold mb-2 text-xl text-black">專案照片: </h3>
            <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {(showAllImages ? images : images.slice(0, 3)).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={title + " img " + (i + 1)}
                  width={400}
                  height={260}
                  className="rounded-xl w-full object-cover"
                />
              ))}
            </section>
            {images.length > 3 && (
              <div className="mb-8 flex justify-center">
                <button
                  className="px-6 py-2 bg-blue-300 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setShowAllImages(!showAllImages)}
                >
                  {showAllImages ? "See less" : "See more"}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>

  );
};

export default EventDetail;
