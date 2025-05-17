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
        "Europa is an e-commerce platform that offers a wide range of products, including cosmetics, skincare, and beauty products. The platform is designed to provide a seamless shopping experience for customers, with features such as a user-friendly interface, secure payment processing, and easy product search. The platform is built using Shopify, a popular e-commerce platform, and is optimized for mobile devices, ensuring that customers can shop on the go.",
        "Europa is an e-commerce platform that offers a wide range of products, including cosmetics, skincare, and beauty products. The platform is designed to provide a seamless shopping experience for customers, with features such as a user-friendly interface, secure payment processing, and easy product search. The platform is built using Shopify, a popular e-commerce platform, and is optimized for mobile devices, ensuring that customers can shop on the go."
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
        "/mst_welcome.jpg",
        "/mst_ceremony.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg"
      ]}
    />
  );
}
