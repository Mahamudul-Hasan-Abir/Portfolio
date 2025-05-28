"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1748465776/Screenshot_2025-05-29_at_2.33.05_AM_j6yvfm.png",
    projectName: "Blue Berry",
    description:
      "Developed a full-featured e-commerce platform with user and admin dashboards, enabling users to browse detailed product listings, manage their cart, place orders, and track order status, while admins can add, update, and delete products, manage user roles, and monitor orders—all with role-based access controls, responsive and modern UI/UX built using Tailwind CSS and Shadcn components, and seamless integration of RESTful APIs for authentication, product data, and order management.",
    projectLink: "https://blue-berry-v2.vercel.app/",
    backgroundColor: "#6c7fd821",
    category: "E-Commerce",
  },
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1748467167/Screenshot_2025-05-29_at_3.18.50_AM_jrzzdm.png",
    projectName: "Maya",
    description:
      "Contributed extensively to the development of Maya, a professional-grade herbal e-commerce platform built for Square Group—one of Bangladesh's largest companies—by implementing responsive product listings with Swiper.js, crafting clean and modern UI using Tailwind CSS and Shadcn/UI, enabling efficient navigation through Next.js Pages Router with SSR, and collaborating on core components, page layouts, and key UI features for a production-ready, enterprise-scale application.",

    projectLink: "https://maya.com.bd",
    backgroundColor: "#FFF0FA",
    category: "Harbal E-Commerce",
  },
  {
    projectImage:
      "https://res.cloudinary.com/dnfqhy8di/image/upload/v1747352352/blog4_t9emdq.jpg",
    projectName: "Vidinfra",
    description:
      "Built using Payload CMS, Vidinfra is a dynamic blog platform with a fully customizable admin dashboard that allows administrators to create, update, or remove any content or page without code changes, featuring a rich text editor for writing blogs, automatic generation of a table of contents from headings, dynamic page management, and a modern UI built with Tailwind CSS and Shadcn/UI, all while leveraging SSR and ISR for optimized performance and seamless content delivery.",
    projectLink: "https://github.com/Mahamudul-Hasan-Abir/Vidinfra",
    backgroundColor: "#E6FBFF",
    category: "PayloadCMS-Blog Site",
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
