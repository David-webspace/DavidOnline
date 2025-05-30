import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function SynopsysSemiconductorCampProject() {
  return (
    <ProjectDetail
      title="新思科技Ｘ交大校友會 半導體營隊官網"
      banner="/Semiconductorcamp.png"
      category="Website"
      url="https://semiconductorcamp.com/"
      about={[
        "感謝總召邀請我一起參與這類型的活動，去年我也有參與這個營隊活動，在某個環節中必須對高中生們分享一些我對於人生探索這件事情的想法。今年有幸能為學校貢獻心力，提升活動品質。",
        "此網站為我一人獨自開發，使用ReactJs + TailwindCss 完成。網站中首頁一開始以動畫進場，點擊之後方會進到官網主頁。主頁中會有活動介紹、營隊特色等資訊。"
      ]}
      skills={[
        {
          name: "ReactJs",
          icon: "SiReact",
        },
        {
          name: "TypeScript",
          icon: "SiTypescript",
        },
        {
          name: "TailwindCSS",
          icon: "SiTailwindcss",
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
        "陳列活動相關時程、報名資訊、線上資源等，以及報名表單",
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
