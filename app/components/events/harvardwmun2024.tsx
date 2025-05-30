import React from "react";
import EventDetail from "../EventDetail";

export default function HarvardWMUN2024Project() {
  return (
    <EventDetail
      title="哈佛世界模擬聯合國大會 2024"
      banner="/harvardwmun_2024_banner.jpg"
      category="Event"
      url=""
      about={[
        "感謝總召的邀請，讓我有機會見識這麼大型的國際交流場合。一直認為英語溝通是一項重要的技能，也因此次機會可以進到台北國際會議中心。",
        "在這次的活動當中，我擔任公關部元進行與廠商之間的贊助商品協調，同時擔任部門CTO進行活動網站的開發。"
      ]}
      skills={[
        {
          name: "ReactJs",
          icon: "SiReact",
        }
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
        "/harvardwmun_2024_banner.jpg",
        "/harvardwmun_2024_personal.jpg",
        "/harvardwmun2024_celavi.jpg",
        "/harvardwmun2024_west.jpg",
        "/harvardwmun2024_delegate_01.jpg",
        "/harvardwmun2024_stage.jpeg",
        "/harvardwmun2024_delegate_02.jpg",
        "/harvardwmun2024_me_02.jpg",
        "/harvardwmun2024_me_03.jpg",
      ]}
    />
  );
}
