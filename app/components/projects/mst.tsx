import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function MSTProject() {
  return (
    <ProjectDetail
      title="台灣模擬聯合國學會"
      banner="/MST_Banner.png"
      category="Website"
      url="https://munsoc.tw/"
      about={[
        "It was an incredible honor to participate in the MUN Society Taiwan project as the CTO. I single-handedly designed and developed the official website from scratch, ensuring it met modern usability and design standards. Additionally, I co-organized an international conference in collaboration with Harvard University, which was a milestone achievement for the organization.",
        "The MUN Society Taiwan (MST) is a cross-campus organization established in 2021 to promote Model United Nations (MUN) activities in Taiwan. It connects MUN enthusiasts, organizes conferences like the Taiwan International Model United Nations (TIMUN), and provides resources to enhance students' international awareness and leadership skills. MST has represented Taiwan at global events, such as WorldMUN Paris in 2023, and hosted large-scale conferences in collaboration with educational and research organizations."
      ]}
      skills={[
        {
          name: "ReactJs",
          icon: "SiReact",
        },
        {
          name: "NextJs",
          icon: "SiNextdotjs",
        },
        {
          name: "TypeScript",
          icon: "SiTypescript",
        },
        {
          name: "TailwindCSS",
          icon: "SiTailwindcss",
        },
        {
          name: "Figma",
          icon: "SiFigma",
        },
      ]}
      industries={[
        "Education",
        "MUN Society Taiwan",
        "Harvard University",
        "English Communication",
        "Web Development",
        "UIUX Design",
      ]}
      benefits={[
        "Designed and developed the official website independently, ensuring seamless user experience and responsive design.",
        "Collaborated with international organizations like Harvard University to organize large-scale events.",
        "Enhanced the visibility and impact of the MUN Society Taiwan through innovative web solutions.",
        "Utilized modern web development tools and frameworks to create a high-quality platform for MUN enthusiasts."
      ]}
      images={[
        "/mst_welcome.jpg",
        "/mst_ceremony.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg"
      ]}
    />
  );
}
