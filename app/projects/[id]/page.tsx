import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  // Slug should match the filename in components/projects (e.g., mst)
  const componentPath = `../../components/projects/${params.id}`;
  let ProjectComponent;
  try {
    ProjectComponent = (await import(componentPath)).default;
  } catch {
    notFound();
  }
  return <ProjectComponent />;
}

