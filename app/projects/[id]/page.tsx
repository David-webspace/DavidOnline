import React from "react";
import ProjectDetail from "../../components/ProjectDetail";

const page = () => {
  // Placeholder data; replace with dynamic data based on params in the future
  return (
    <ProjectDetail
      title="Application Design Services"
      banner="/app-design-banner.jpg"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
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
};

export default page;
