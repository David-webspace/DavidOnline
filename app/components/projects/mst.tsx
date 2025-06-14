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
        "台灣模擬聯合國學會是由一群熱愛英文、模擬聯合國的台灣大學生所組成，目前已經成立學會，正在努力的推廣台灣模擬聯合國活動。台灣大多數模聯是由高中生在參與，因為大學的模聯資源較少，社團也不太推廣，因此我們的忠旨是希望將模聯推廣為更加容易參與的活動。",
        "非常感謝總招的邀請，擔任這次活動的工作人員，我主要負責學位官網架設與維護，同時負責與廠商接洽贊助品事宜。",
        "多虧了這次活動，才有機會到台北國際會議中心一探究竟，活動五天必須穿著整齊西裝。"
      ]}
      skills={[
        {
          name: "English Speaking",
          icon: "SiReact",
        },
        {
          name: "NextJs",
          icon: "SiNextdotjs",
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
        "提供模擬聯合國學會官網，整個網站由我一人開發，使用ReactJs端框架，並使用Github來綁定網域。",
        "官網UIUX介面設計",
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
