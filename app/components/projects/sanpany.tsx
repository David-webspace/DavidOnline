import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function SanpanyProject() {
  return (
    <ProjectDetail
      title="三朋儀器"
      banner="/sanpany_banner.jpg"
      category="Website"
      url="https://xn-ehq0wi2cnmf9h5wepp2bma6600dcl5b.myshopify.com/"
      about={[
        "三朋儀器股份有限公司的發展歷史可以追溯到三光儀器股份有限公司，三光儀器早在1945年就已成立，在國內儀器界已有超過70年的歷史。三朋儀器原本是三光儀器公司的機械部門，為了強化對市場的專業性服務，於1998年4月1日獨立成立為三朋儀器股份有限公司。公司自成立以來承蒙各界先進厚愛，業務得以持續擴充發展，總公司設立在台北市中正區忠孝東路，並在新竹、台中、台南、高雄等地設有辦事處，形成完整的全台服務網絡。",
        "三朋儀器秉持「誠信、負責、和諧」的企業精神，主要從事國外品管儀器設備的代理銷售，並具備完整的售後服務能力。公司的營業項目涵蓋多個專業領域，包括材料試驗設備、精密量測儀器、金相設備、環境試驗設備、光電半導體研發設備，以及各類檢測設備等。作為專業的儀器設備貿易商，三朋儀器不僅提供高品質的進口儀器設備，更重視客戶的技術支援與維修服務，致力於成為客戶在精密儀器領域的可靠合作夥伴。"
      ]}
      skills={[
        {
          name: "Shopify",
          icon: "SiShopify",
        },
      ]}
      industries={[
        "Equipment",
        "Shopify",
      ]}
      benefits={[
        "舊網站資料移轉",
        "上排選單排版設定、商品系列分類、商品標籤分類",
        "部落格文章設定",
        "客製化商品價格展示"
      ]}
      images={[
        // "/sanpany_logo.jpg",
        "/sanpany_logo.png",
        "/sanpany_banner.jpg",
      ]}
    />
  );
}
