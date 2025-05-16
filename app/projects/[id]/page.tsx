import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

interface ProjectPageProps {
  params: { id: string };
}

const page = async ({ params }: ProjectPageProps) => {
  // Slug should match the filename in components/projects (e.g., mun-society-website)
  const componentPath = `../../components/projects/${params.id}`;
  let ProjectComponent;
  try {
    ProjectComponent = (await import(componentPath)).default;
  } catch (error) {
    notFound();
  }
  return <ProjectComponent />;
};

export default page;


