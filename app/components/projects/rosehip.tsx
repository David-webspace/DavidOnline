import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function RosehipProject() {
  return (
    <ProjectDetail
      title="樂雅寵物"
      banner="/rosehip_banner.jpeg"
      category="Website"
      url="https://xn-7dtv04aoqgzk3b.myshopify.com/"
      about={[
        "Rosehip is an e-commerce platform that offers a wide range of products, including cosmetics, skincare, and beauty products. The platform is designed to provide a seamless shopping experience for customers, with features such as a user-friendly interface, secure payment processing, and easy product search. The platform is built using Shopify, a popular e-commerce platform, and is optimized for mobile devices, ensuring that customers can shop on the go.",
        "Rosehip is an e-commerce platform that offers a wide range of products, including cosmetics, skincare, and beauty products. The platform is designed to provide a seamless shopping experience for customers, with features such as a user-friendly interface, secure payment processing, and easy product search. The platform is built using Shopify, a popular e-commerce platform, and is optimized for mobile devices, ensuring that customers can shop on the go."
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
        "/rosehip_banner.jpeg",
      ]}
    />
  );
}
