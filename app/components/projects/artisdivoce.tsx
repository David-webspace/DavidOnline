import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function ArtisdivoceProject() {
  return (
    <ProjectDetail
      title="娜拉坡 Artisdivoce"
      banner="/artisdivoce_banner.webp"
      category="Website"
      url="https://www.artisdivocehk.myshopify.com/"
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
        "Designed and developed the official website independently, ensuring seamless user experience and responsive design.",
        "Collaborated with international organizations like Harvard University to organize large-scale events.",
        "Enhanced the visibility and impact of the MUN Society Taiwan through innovative web solutions.",
        "Utilized modern web development tools and frameworks to create a high-quality platform for MUN enthusiasts."
      ]}
      images={[
        "/artisdivoce_banner.webp",
      ]}
    />
  );
}
