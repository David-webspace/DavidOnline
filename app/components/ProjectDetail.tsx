"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiReact, SiFigma, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import NavigationBar from "./NavigationBar";

interface ProjectDetailProps { title: string; banner: string; category: string; url: string; about: string[]; skills: { name: string; icon: string }[]; industries: string[]; benefits: string[]; images: string[]; }

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  SiReact,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  // Add more icons here as needed
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ title, banner, category, url, about, skills, industries, benefits, images }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/projects" className="hover:underline">專案經驗</Link>
            <span className="mx-2">&gt;</span>
            <span className="font-semibold">{title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">{title}</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Image Banner */}
        <div className="mb-6">
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
            <h2 className="text-5xl font-bold text-black">{title}</h2>
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
          <h3 className="font-semibold mb-2 text-xl text-black">Services Benefits:</h3>
          <ul className="list-disc pl-5 text-md text-gray-700">
            {benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="font-semibold mb-2 text-xl text-black">Skills Include:</h3>
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
            <h3 className="font-semibold mb-2 text-xl text-black">Project Photos: </h3>
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

        {/* Industries */}
        <section className="mb-8">
          <h3 className="font-semibold mb-2">Top Industries I Cover in App Design</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {industries.map((industry, i) => (
              <div key={i} className="bg-gray-50 p-2 rounded-lg border flex items-center gap-2">
                <span className="text-black">🏷️</span> {industry}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

  );
};

export default ProjectDetail;
