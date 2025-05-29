import React from "react";
import EventDetail from "../EventDetail";

export default function HarvardWMUN2024Project() {
  return (
    <EventDetail
      title="Harvard WMUN 2024"
      banner="/harvardwmun_2024_banner.jpg"
      category="Event"
      url=""
      about={[
        "I was honored to serve as the Graduation Representative for the National Yang Ming University (NYCU) in 2024. As the representative, I was responsible for representing the interests of the students and ensuring their rights were protected. I worked closely with the university administration and faculty to address any concerns or issues that arose during the graduation process."
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
        "/harvardwmun_2024_banner.jpg",
        "/harvardwmun_2024_personal.jpg",
        "/mst_welcome.jpg",
        "/mst_ceremony.jpg",
        "/mst_conference.jpg"
      ]}
    />
  );
}
