"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  projectImage: string;
  projectName: string;
  description: string;
  projectLink: string;
  backgroundColor: string;
  category?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div
        className="rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl"
        style={{ backgroundColor: project.backgroundColor }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.projectImage || "/placeholder.svg"}
            alt={project.projectName}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovering ? "scale-110" : "scale-100"
            }`}
          />
        </div>
        <div className="p-4">
          {project.category && (
            <p className="text-sm opacity-80 mb-1">{project.category}</p>
          )}
          <h3 className="text-xl font-bold mb-2">{project.projectName}</h3>
          <p className="text-sm opacity-90">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
