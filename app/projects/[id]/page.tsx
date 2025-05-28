import { notFound } from "next/navigation";

const components: Record<string, () => Promise<{ default: React.ComponentType<object> }>> = {
  mst: () => import("../../components/projects/mst"),
  europa: () => import("../../components/projects/europa"),
  chuangchihhui: () => import("../../components/projects/chuangchihhui"),
  synopsyssemiconductorcamp: () =>
    import("../../components/projects/synopsys-semiconductorcamp"),
  nycugraduationrepresentative: () =>
    import("../../components/events/nycu-graduation-representitive"),
  bluegear2023: () => import("../../components/events/bluegear-2023"),
  bat2022: () => import("../../components/events/bat-2022"),
  nccugolden2023: () => import("../../components/events/nccu-golden-2023"),
  // Add all your project files here
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
