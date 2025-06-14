import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function Bat2022Project() {
  return (
    <ProjectDetail
      title="交大國際志工（BAT）2022"
      banner="/bat2022.jpeg"
      category="Website"
      url=""
      about={[
        "經過面試後，我有幸成為交大國際志工（BAT）2022屆的成員，由交通大學建築所許倍銜教授帶領，一同前往台東的興隆國小進行當地建築。結合台灣文化與自然素材，木頭與竹子自然成為我們手中的材料，並經過一學期的設計提案與修正，終於將設計轉圖面為實際建築。"
      ]}
      skills={[
        {
          name: "Rhino",
          icon: "SiRhinoceros",
        }
      ]}
      industries={[
        "Education",
        "Architecture",
        "Taitune",
        "Wood",
        "Bamboo",
      ]}
      benefits={[
        "建築設計提案",
        "木工技術（裁切、榫卯、上漆、打磨與上角料等）",
        "3D建模能力、數位製造",
        "建築設計轉圖面為實際建築"
      ]}
      images={[
        "/bat2022_02.jpeg",
        "/bat2022_03.jpeg",
        "/bat2022_04.jpeg",
        "/bat2022_06.jpeg",
        "/bat2022_07.jpeg",
        "/bat2022_05.jpeg"
      ]}
    />
  );
}
