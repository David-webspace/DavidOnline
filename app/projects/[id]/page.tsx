import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

const components: Record<string, () => Promise<{ default: React.ComponentType<object> }>> = {
  mst: () => import("../../components/projects/mst"),
  europa: () => import("../../components/projects/europa"),
  chuangchihhui: () => import("../../components/projects/chuangchihhui"),
  synopsyssemiconductorcamp: () => import("../../components/projects/synopsys-semiconductorcamp"),
  sanpany: () => import("../../components/projects/sanpany"),
  artisdivoce: () => import("../../components/projects/artisdivoce"),
  nycugraduationrepresentative: () => import("../../components/events/nycu-graduation-representitive"),
  bluegear2023: () => import("../../components/events/bluegear-2023"),
  bat2022: () => import("../../components/events/bat-2022"),
  rosehip: () => import("../../components/projects/rosehip"),
  harvardwmun2024: () => import("../../components/events/harvardwmun2024"),
  nccugolden2023: () => import("../../components/events/nccu-golden-2023"),
};

const Page = async ({ params }: PageProps) => {
  const importComponent = components[params.id];

  if (!importComponent) {
    return notFound();
  }

  const ProjectComponent = (await importComponent()).default;

  return <ProjectComponent />;
};

export default Page;
