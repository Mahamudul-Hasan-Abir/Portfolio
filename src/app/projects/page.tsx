"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1747352649/one_nug6bu.jpg",
    projectName: "Chul urina",
    description:
      "component presents educational history using a responsive and styled layout in React with Tailwind CSS. It maps over an array of education objects containing year, degree, institution, and a background color. Each education card is styled with a light background, border, and padding for a clean visual appearance.",
    projectLink: "https://www.google.com",
    backgroundColor: "#FFF5F5",
    category: "UI/UX",
  },
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1747352352/blog5_bjbzxu.jpg",
    projectName: "Aura Dione",
    description:
      "component presents educational history using a responsive and styled layout in React with Tailwind CSS. It maps over an array of education objects containing year, degree, institution, and a background color. Each education card is styled with a light background, border, and padding for a clean visual appearance.",

    projectLink: "https://www.google.com",
    backgroundColor: "#FFF0FA",
    category: "Web Design",
  },
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1747352352/blog4_t9emdq.jpg",
    projectName: "Chul urina",
    description:
      "component presents educational history using a responsive and styled layout in React with Tailwind CSS. It maps over an array of education objects containing year, degree, institution, and a background color. Each education card is styled with a light background, border, and padding for a clean visual appearance.",
    projectLink: "https://www.google.com",
    backgroundColor: "#E6FBFF",
    category: "Logo",
  },
];

const Projects = () => {
  return (
    <div className="rounded-2xl md:shadow-md md:border-1 md:p-12 mt-20 bg-white">
      <div className="flex md:gap-8 gap-3 items-center">
        <div className="text-4xl font-extrabold">
          <h1>Projects</h1>
        </div>
        <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-[2px] md:w-40 w-20"></div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link
            href={project.projectLink}
            key={index}
            target="_blank"
            className={`rounded-xl p-5 shadow-md transition-transform hover:scale-[1.02] duration-300`}
            style={{ backgroundColor: project.backgroundColor }}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                width={600}
                height={300}
                className="rounded-lg w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">{project.projectName}</h3>
            <p className="text-sm text-gray-600 mt-1">{project.category}</p>
            <p className="text-[#44566c] mt-2 text-sm">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
