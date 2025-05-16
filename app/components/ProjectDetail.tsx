import React from "react";
import Image from "next/image";

interface ProjectDetailProps {
  title: string;
  banner: string;
  about: string;
  services: string[];
  industries: string[];
  benefits: string[];
  images: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  banner,
  about,
  services,
  industries,
  benefits,
  images,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="mb-6">
          <Image
            src={banner}
            alt={title}
            width={800}
            height={400}
            className="rounded-xl w-full object-cover mb-4"
          />
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">MUN Society Taiwan</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{about}</p>
        </section>
        <section className="mb-8">
          <h3 className="font-semibold mb-2">Services Include:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-orange-500">●</span> {service}
              </li>
            ))}
          </ul>
        </section>
        {images && images.length > 0 && (
          <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={title + " screenshot " + (i + 1)}
                width={400}
                height={260}
                className="rounded-xl w-full object-cover"
              />
            ))}
          </section>
        )}
        <section className="mb-8">
          <h3 className="font-semibold mb-2">Top Industries I Cover in App Design</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {industries.map((industry, i) => (
              <div key={i} className="bg-gray-50 p-2 rounded-lg border flex items-center gap-2">
                <span className="text-black">🏷️</span> {industry}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="font-semibold mb-2">Services Benefits:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>

  );
};

export default ProjectDetail;
