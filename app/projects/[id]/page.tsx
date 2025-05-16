import { notFound } from "next/navigation";
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // Slug should match the filename in components/projects (e.g., mst)
  const componentPath = `../../components/projects/${(await params).id}`;
  let ProjectComponent;
  try {
    ProjectComponent = (await import(componentPath)).default;
  } catch {
    notFound();
  }
  return <ProjectComponent />;
}

