import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function ChuangChihHuiProject() {
  return (
    <ProjectDetail
      title="莊志輝藝術作品官網"
      banner="/ChuangChihHui_Banner.jpg"
      category="Website"
      url="https://chuangchihhui.com/"
      about={[
        "莊志輝為澎湖出生的台灣藝術家，擁有與眾不同的審美及創作手法，在國內外舉辦畫廊、博覽會等藝術宣傳，很開心可以為莊志輝的藝術作品製作一個專屬的官網。"
      ]}
      skills={[
        {
          name: "ReactJs",
          icon: "SiReact",
        },
        {
          name: "CSS",
          icon: "SiCss3",
        },
        {
          name: "Figma",
          icon: "SiFigma",
        },
      ]}
      industries={[
        "Chuang Chih Hui",
        "Web Development",
        "Art",
        "UIUX Design",
      ]}
      benefits={[
        "形象網站建立、作品陳列、客製化展示各頁排版，並完成RWD設計",
        "選單層級分類管理",
        "藝評與報導相關文章展示",
        "支援雙語切換（中英文，使用i18next作為語系切換套件）"
      ]}
      images={[
        "/chuangchihhui_national.png",
        "/chuangchihhui_classic.png",
        "/chuangchihhui_taipei.png",
        "/chuangchihhui_early.png",
      ]}
    />
  );
}
