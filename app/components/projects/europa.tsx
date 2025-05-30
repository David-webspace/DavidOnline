import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function EuropaProject() {
  return (
    <ProjectDetail
      title="Europa"
      banner="/europa.jpg"
      category="Website"
      url="https://www.euro168168.com/"
      about={[
        "歐台絲路創立於2014年，初期專注於引進歐洲高品質商品到台灣，如醫療健康產品、廚房用品等，並致力於將台灣優秀產品推向全球，搭建現代化的「絲路」。隨著業務發展，品牌在新冠疫情的挑戰下成功轉型，拓展至多角化經營，涵蓋保養品、食品、珠寶及家庭用品等領域。歐台絲路以「優質、創新、永續」為經營理念，並堅守「以善為本」的核心價值，積極回饋社會，連結台灣與世界，致力於創造更美好的未來。",
      ]}
      skills={[
        {
          name: "Shopify",
          icon: "SiShopify",
        },
        {
          name: "NextJs",
          icon: "SiNextdotjs",
        },
      ]}
      industries={[
        "Web Development",
      ]}
      benefits={[
        "台灣綠界付款功能(信用卡分期、ATM虛擬帳號、TWQR)",
        "綁定金流平台與物流配送（超商取貨、宅急便）",
        "首頁彈跳視窗的加入會員通知",
        "版面調整、主選單父子層分類管理",
        "第三方社群帳號加入會員",
        "產品評論與管理功能",
        "折扣碼設定"
      ]}
      images={[
        "/europa_payments.jpg",
        "/europa_discount.jpg",
        "/europa_login.jpg",
        "/europa_feedback.jpg",
      ]}
    />
  );
}
