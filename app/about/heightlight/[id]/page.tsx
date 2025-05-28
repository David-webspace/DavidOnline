import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const highlights = [
  {
    slug: "nccu-golden-2023",
    title: "政大金旋獎 2023",
    date: "2023/05",
    image: "/nccu_golden.jpg",
    component: () => import('../../../components/events/nccu-golden-2023'),
  },
  {
    slug: "meizhu-2023",
    title: "清交梅竹大賽狐狸 2023",
    date: "2023/03",
    image: "/fox.png",
    component: () => import('../../../components/events/meizhu-2023'),
  },
  {
    slug: "bat-2022",
    title: "交大國際志工團 BAT 2022",
    date: "2022/07",
    image: "/bat2022.jpeg",
    component: () => import('../../../components/events/bat-2022'),
  },
  {
    slug: "nycu-graduation-representitive",
    title: "畢業典禮 在校生致詞",
    date: "2024/06",
    image: "/graduation.jpg",
    component: () => import('../../../components/events/nycu-graduation-representitive'),
  },
  {
    slug: "bluegear-2023",
    title: "交大管理顧問社 2023",
    date: "2023/12",
    image: "/bluegear.png",
    component: () => import('../../../components/events/bluegear-2023'),
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function HighlightEventPage({ params }: PageProps) {
  const event = highlights.find((e) => e.slug === params.id);
  if (!event) return notFound();

  const EventComponent = dynamic(event.component);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Link href="/about" className="text-blue-600 hover:underline">← 返回關於我</Link>
        <div className="mt-8 bg-white rounded-xl shadow p-8">
          <Image src={event.image} alt={event.title} width={600} height={300} className="rounded mb-4 object-cover w-full h-64" />
          <div className="text-xs text-gray-400 mb-2">{event.date}</div>
          <div className="text-black font-bold text-2xl mb-4">{event.title}</div>
          <EventComponent />
        </div>
      </div>
    </div>
  );
}
