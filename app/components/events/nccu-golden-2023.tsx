import React from "react";
import EventDetail from "../EventDetail";

export default function NCCUGolden2023Project() {
  return (
    <EventDetail
      title="NCCU Golden 2023"
      banner="/nccu_gold_sing.jpg"
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
      images={[
        "/nccu_gold_sing.jpg",
        "/nccu_gold_celebrity.jpg",
        "/nccu_gold_song.jpg",
        "/nccu_door.jpg",
      ]}
    />
  );
}
