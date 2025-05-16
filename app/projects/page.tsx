"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

const projects = [
  {
    name: "MUN Society Taiwan",
    pathname : "mst",
    image: "/MST_Banner.png",
    tags: ["Web Development", "UIUX Design"],
  },
  {
    name: "Chuang Chih Hui",
    pathname : "chuangchihhui",
    image: "/ChuangChihHui_Banner.jpg",
    tags: ["Web Development", "ReactJs", "Ecommerce"],
  },
  {
    name: "Synopsys X NCTU Alumin Semiconductor Camp",
    pathname : "synopsys semiconductorcamp",
    image: "/Semiconductorcamp.png",
    tags: ["Web Development", "ReactJs", "UIUX Design"],
  },
  {
    name: "Europa Eccommerce Website",
    pathname : "europa",
    image: "/Europa_Banner.jpg",
    tags: ["Shopify", "Ecommerce"],
  },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}

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
          {/* Render project cards dynamically */}
          {projects.map((project) => (
            <Link
              key={project.pathname}
              href={`/projects/${slugify(project.pathname)}`}
              className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
            >
              <Image src={project.image} alt={project.name} width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" priority={true} />
              <div className="flex gap-2 mb-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="font-semibold text-lg mb-1">{project.name}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

