import { notFound } from "next/navigation";

const components: Record<string, () => Promise<{ default: React.ComponentType<object> }>> = {
  mst: () => import("../../components/projects/mst"),
  europa: () => import("../../components/projects/europa"),
  chuangchihhui: () => import("../../components/projects/chuangchihhui"),
  synopsyssemiconductorcamp: () =>
    import("../../components/projects/synopsys-semiconductorcamp"),
  // ...add all your project files here
};

interface PageProps {
  params: {
    id: string; // Explicitly define the type for params
  };
}

const Page = async ({ params }: PageProps) => {
  const importComponent = components[params.id];

  if (!importComponent) {
    return notFound();
  }

  const ProjectComponent = (await importComponent()).default;

  return <ProjectComponent />;
};

export default Page;
