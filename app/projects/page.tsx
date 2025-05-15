"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">Projects</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">PROJECTS</h1>
          {/* <div className="text-blue-200">Home &gt; Projects</div> */}
        </div>
      </section>

      {/* Projects Grid */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <Link href="/projects/mun-society-website" className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition">
            <Image src="/MST_Banner.png" alt="Car Rental App" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" priority={true} />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Web Development</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">UIUX Design</span>
            </div>
            <div className="font-semibold text-lg mb-1">MUN Society Website</div>
          </Link>
          {/* Project Card 2 */}
          <Link href="/projects/chuang-chih-hui" className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition">
            <Image src="/ChuangChihHui_Banner.jpg" alt="Beauty Product App" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Web Development</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">ReactJs</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Ecommerce</span>
            </div>
            <div className="font-semibold text-lg mb-1">Chuang Chih Hui</div>
          </Link>
          {/* Project Card 3 */}
          <Link href="/projects/semiconductor-camp" className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition">
            <Image src="/Semiconductorcamp.png" alt="Travel Website" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Web Development</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">ReactJs</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">UIUX Design</span>
            </div>
            <div className="font-semibold text-lg mb-1">Synopsys X NCTU Alumin Semiconductor Camp</div>
          </Link>
          {/* Project Card 4 */}
          <Link href="/projects/europa-ecommerce-website" className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition">
            <Image src="/Europa_Banner.jpg" alt="Europa Eccommerce Website" width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Shopify</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Ecommerce</span>
            </div>
            <div className="font-semibold text-lg mb-1">Europa Eccommerce Website</div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

