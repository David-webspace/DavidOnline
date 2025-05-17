import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function SynopsysSemiconductorCampProject() {
  return (
    <ProjectDetail
      title="Synopsys X NCTU Alumin Semiconductor Camp"
      banner="/Semiconductorcamp.png"
      category="Website"
      url="https://semiconductorcamp.com/"
      about={[
        "I was honored to lead the Synopsys X NCTU Alumin Semiconductor Camp project as the CTO. I single-handedly designed and developed the official website from scratch, ensuring it met modern usability and design standards. I also co-organized the camp with Synopsys, a leading semiconductor company, which was a milestone achievement for the organization.",
        "The Synopsys X NCTU Alumin Semiconductor Camp is a cross-campus organization established in 2021 to promote Model United Nations (MUN) activities in Taiwan. It connects MUN enthusiasts, organizes conferences like the Taiwan International Model United Nations (TIMUN), and provides resources to enhance students' international awareness and leadership skills. MST has represented Taiwan at global events, such as WorldMUN Paris in 2023, and hosted large-scale conferences in collaboration with educational and research organizations."
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
        "Synopsys X NCTU Alumin Semiconductor Camp",
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
