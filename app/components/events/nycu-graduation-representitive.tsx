import React from "react";
import ProjectDetail from "../ProjectDetail";

export default function GraduationRepresentativeProject() {
  return (
    <ProjectDetail
      title="國立陽明交通大學 畢業典禮 在校生致詞代表"
      banner="/graduation.jpg"
      category="Event"
      url=""
      about={[
        "很榮幸有機會擔任畢業典禮的在校生致詞，我從大一剛入學其實在人際相處上有很大的障礙，但我也很願意改變，使自己不斷的進步，現在的我也相對更穩重多了。很謝謝各位願意相信我與支持我，我能夠站在台上很大部分也是因為我身邊的各位不斷地希望我變好，願意花超級多時間在我身上，我很感激! 我會帶著感恩的心一直往前走!"
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
        "/mst_welcome.jpg",
        "/mst_ceremony.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg",
        "/mst_conference.jpg"
      ]}
    />
  );
}
