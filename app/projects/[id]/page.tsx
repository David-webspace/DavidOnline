import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { id: string };
}

const page = async ({ params }: ProjectPageProps) => {
  // Slug should match the filename in components/projects (e.g., mst)
  const componentPath = `../../components/projects/${params.id}`;
  let ProjectComponent;
  try {
    ProjectComponent = (await import(componentPath)).default;
  } catch {
    notFound();
  }
  return <ProjectComponent />;
};

export default page;


