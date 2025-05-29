"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useState } from "react";

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}

const categories = [
  { label: "全部", value: "all" },
  { label: "網站架設", value: "Web Development" },
  { label: "電商網站", value: "Ecommerce" },
  { label: "精選活動", value: "Events" },
];

function getProjectCategories(project: { tags: string[] }) {
  if (project.tags.includes("Ecommerce")) return "Ecommerce";
  if (project.tags.includes("Events")) return "Events";
  return "Web Development";
}

function Tabs({ onChange, value }: { onChange: (val: string) => void; value: string }) {
  const [selected, setSelected] = useState(value || "all");
  const handleClick = (val: string) => {
    setSelected(val);
    if (onChange) onChange(val);
  };
  return (
    <div className="flex gap-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`px-3 md:px-6 py-2 rounded-full font-semibold border transition text-ms ${selected === cat.value ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"}`}
          onClick={() => handleClick(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

type Project = {
  name: string;
  pathname: string;
  image: string;
  tags: string[];
  time?: string;
};

export default function ProjectsPage() {
  const [tab, setTab] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const filteredProjects = tab === "all"
    ? projects
    : projects.filter((p: Project) => getProjectCategories(p) === tab);
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Top Banner */}
      <section className="bg-blue-600 text-white py-12 md:mt-0 mt-6 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-4 text-sm text-blue-100">
            <Link href="/" className="hover:underline">首頁</Link> <span className="mx-2">&gt;</span> <span className="font-semibold">專案經驗</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">專案經驗</h1>
          {/* <div className="text-blue-200">Home &gt; Projects</div> */}
        </div>
      </section>

      {/* Projects Grid */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">
          My <span className="text-blue-600">Projects</span>
        </h2>
        {/* Tabs for categories */}
        <Tabs onChange={setTab} value={tab} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Render project cards dynamically */}
          {filteredProjects.map((project: Project) => (
            <Link
              key={project.pathname}
              href={`/projects/${slugify(project.pathname)}`}
              className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
            >
              <Image src={"/" + project.image} alt={project.name} width={400} height={260} className="rounded-xl w-full h-56 object-cover mb-4" priority={true} />
              <div className="flex gap-2 mb-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="font-semibold text-lg mb-1 text-blue-600">{project.name}</div>
              {project.time && (
                <div className="text-md text-gray-500 mb-1">{project.time}</div>
              )}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

