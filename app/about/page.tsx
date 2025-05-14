"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span> <span className="font-semibold">About me</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">ABOUT US</h1>
          <div className="text-blue-200">Home &gt; About me</div>
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
          <p className="text-gray-600 mb-6">Innovative Website Developer with expertise in driving online growth through strategic design and development. Passionate about UI/UX and delivering impactful digital experiences.</p>
          <div className="flex gap-8 mb-6">
            <div>
              <div className="text-2xl font-bold text-blue-600">600+</div>
              <div className="text-gray-500 text-xs">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-gray-500 text-xs">Industry Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">18+</div>
              <div className="text-gray-500 text-xs">Years of Experience</div>
            </div>
          </div>
          <a href="/cv.pdf" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition w-max">
            Download CV
            <span className="inline-block transform translate-x-0.5">→</span>
          </a>
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
    </div>

  );
}
