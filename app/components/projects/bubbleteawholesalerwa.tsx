import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function BubbleTeaWholesalerProject() {
  return (
    <ProjectDetail
      title="Bubble Tea Wholesaler"
      banner="/bbtwholesalerwa-logo.png"
      category="Website"
      url="https://bubbleteawholesalerwa.com/"
      about={[
        "Bubble Tea Wholesaler 這是一家專門服務珍珠奶茶店的B2B批發商，透過線上平台提供原料和設備供應，讓客戶能夠輕鬆經營珍珠奶茶業務。成立於2001年，是西澳洲(WA)最老牌，規模最大的珍珠奶茶批發商之一。",
        "致力於提供高品質原料、行業標準設備（針對珍珠奶茶業務量身訂製）、並且提供優質客戶服務。",
        "提供廣泛的優質產品選擇，高品質產品保證，本地三天內送達，出色的客戶服務。",
      ]}
      skills={[
        {
          name: "Shopify",
          icon: "SiShopify",
        }
      ]}
      industries={[
        "Web Development",
      ]}
      benefits={[
        "佈景主題畫面客製",
        "版面調整、主選單父子層分類管理",
        "新增客戶客製化價格功能",
      ]}
      images={[
        "/bubbleteawholesaler.jpg",
        "/bubbleteawholesaler03.webp",
        "/bubbleteawholesaler02.webp",
        "/bbtwholesalerwa-logo.png",
      ]}
    />
  );
}
