import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function ArtisdivoceProject() {
  return (
    <ProjectDetail
      title="娜拉坡香港 Artisdivoce HK"
      banner="/artisdivoce_banner.webp"
      category="Website"
      url="https://artis-di-voce-hk.myshopify.com/"
      about={[
        "Artisdivoce是香港本地的電商平台，專門銷售化妝品、護膚品和美容產品。平台設計旨在為客戶提供流暢的購物體驗，並提供易於使用的界面、安全的支付處理和簡單的產品搜索功能。平台使用Shopify，一個流行的電商平台，並針對移動設備進行優化，確保客戶可以在路上購物。",
        "Artisdivoce是香港本地的電商平台，專門銷售化妝品、護膚品和美容產品。平台設計旨在為客戶提供流暢的購物體驗，並提供易於使用的界面、安全的支付處理和簡單的產品搜索功能。平台使用Shopify，一個流行的電商平台，並針對移動設備進行優化，確保客戶可以在路上購物。"
      ]}
      skills={[
        {
          name: "Shopify",
          icon: "SiShopify",
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
        "跨境金流串接（使用Shopify Payment）",
        "網站資料轉移、網域移轉",
      ]}
      images={[
        "/artisdivoce_banner.webp",
      ]}
    />
  );
}
