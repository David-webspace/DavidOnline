import React from "react";
import EventDetail from "../EventDetail";

export default function NCCUGolden2023Project() {
  return (
    <EventDetail
      title="政大金旋獎 2023"
      banner="/nccu_gold_sing.jpg"
      category="Event"
      url=""
      about={[
        ""
      ]}
      skills={[
        {
          name: "Sing",
          icon: "FaMicrophoneAlt",
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
      benefits={[]}
      images={[
        "/nccu_gold_sing.jpg",
        "/nccu_gold_celebrity.jpg",
        "/nccu_gold_song.jpg",
        "/nccu_door.jpg",
      ]}
    />
  );
}
