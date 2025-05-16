import React from "react";
import ProjectDetail from "../ProjectDetail";



export default function MSTProject() {
  return (
    <ProjectDetail
      title="MUN Society Taiwan"
      banner="/MST_Banner.png"
      about="It's very my honor to participate in the MUN Society Taiwan. As a CTO, I was responsible for building the official website and co-organizing an international conference with Harvard University."
      services={[
        "Lorem ipsum dolor",
        "Sed ut perspiciatis",
        "Vitae dicta sunt explicabo",
        "Veritatis et quasi architecto",
        "Beatae vitae dicta sunt",
        "Explicabo Nemo enim",
        "Explicabo Nemo enim",
        "Explicabo Nemo enim"
      ]}
      industries={[
        "Healthcare",
        "E-Commerce",
        "Real Estate",
        "Education",
        "Finance",
        "Fitness",
        "Sports",
        "Hospitality"
      ]}
      benefits={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ]}
      images={[
        "/app-design-1.jpg",
        "/app-design-2.jpg"
      ]}
    />
  );
}
