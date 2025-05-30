import React from "react";
import EventDetail from "../EventDetail";

export default function BlueGear2023Project() {
  return (
    <EventDetail
      title="交大管理顧問社 2023"
      banner="/bluegear.png"
      category="Event"
      url=""
      about={[
        ""
      ]}
      skills={[
        {
          name: "ReactJs",
          icon: "SiReact",
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
        "Designed and developed the official website independently, ensuring seamless user experience and responsive design.",
        "Collaborated with international organizations like Harvard University to organize large-scale events.",
        "Enhanced the visibility and impact of the MUN Society Taiwan through innovative web solutions.",
        "Utilized modern web development tools and frameworks to create a high-quality platform for MUN enthusiasts."
      ]}
      images={[]}
    />
  );
}
