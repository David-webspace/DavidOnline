import { notFound } from "next/navigation";
import Image from "next/image";

// Example static data for demonstration
const projects: { slug: string; title: string; image: string; tags: string[]; description: string; }[] = [
  {
    slug: "mun-society-website",
    title: "MUN Society Website",
    image: "/MST_Banner.png",
    tags: ["UIUX Design", "App"],
    description: "A modern website for the MUN Society, featuring event management and resources.",
  },
  {
    slug: "chuang-chih-hui",
    title: "Chuang Chih Hui",
    image: "/ChuangChihHui_Banner.jpg",
    tags: ["UIUX Design", "Ecommerce"],
    description: "Ecommerce platform for beauty products with a focus on user experience.",
  },
  {
    slug: "semiconductor-camp",
    title: "Synopsys X NCTU Alumin Semiconductor Camp",
    image: "/Semiconductorcamp.png",
    tags: ["Web Design", "Travel"],
    description: "Camp website for Synopsys X NCTU Alumni, providing information and registration.",
  },
  {
    slug: "europa-ecommerce-website",
    title: "Europa Eccommerce Website",
    image: "/Europa_Banner.jpg",
    tags: ["UIUX Design", "Portfolio"],
    description: "Portfolio and ecommerce site for Europa, showcasing products and design skills.",
  },
];

export const dynamicParams = false;

// Trivial change: force fresh build

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="flex gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
        ))}
      </div>
      <Image src={project.image} alt={project.title} width={600} height={360} className="rounded-xl w-full h-72 object-cover mb-6" />
      <p className="text-lg text-gray-700">{project.description}</p>
    </div>
  );
}
