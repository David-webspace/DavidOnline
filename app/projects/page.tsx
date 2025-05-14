"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span> <span className="font-semibold">Projects</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">PROJECTS</h1>
          <div className="text-blue-200">Home &gt; Projects</div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
            <Image src="/project1.jpg" alt="Car Rental App" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">UIUX Design</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">App</span>
            </div>
            <div className="font-semibold text-lg mb-1">Car Rental - Ecommerce Mobile App Solution</div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
            <Image src="/project2.jpg" alt="Beauty Product App" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">UIUX Design</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Ecommerce</span>
            </div>
            <div className="font-semibold text-lg mb-1">Beauty Product - Ecommerce Mobile App Solution</div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
            <Image src="/project3.jpg" alt="Travel Website" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Web Design</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Travel</span>
            </div>
            <div className="font-semibold text-lg mb-1">Travel Website - UIUX & Development</div>
          </div>
          {/* Project Card 4 */}
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
            <Image src="/project4.jpg" alt="Portfolio Website" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">UIUX Design</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Portfolio</span>
            </div>
            <div className="font-semibold text-lg mb-1">Personal Portfolio Website</div>
          </div>
        </div>
      </main>
    </div>
  );
}

