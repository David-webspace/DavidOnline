import { notFound } from "next/navigation";
const components: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  mst: () => import("../../components/projects/mst"),
  europa: () => import("../../components/projects/europa"),
  chuangchihhui: () => import("../../components/projects/chuangchihhui"),
  synopsyssemiconductorcamp: () => import("../../components/projects/synopsys-semiconductorcamp"),
  // ...add all your project files here
};

export default async function Page({ params }: { params: { id: string } }) {
  const importComponent = components[params.id];
  if (!importComponent) return notFound();
  const ProjectComponent = (await importComponent()).default;
  return <ProjectComponent />;
}