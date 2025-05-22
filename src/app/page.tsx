import JavaScriptLogo from "../../public/javascript-logo-svgrepo-com.png";
import TypeScriptLogo from "../../public/typescript-official-svgrepo-com.png";
import ReactLogo from "../../public/react-svgrepo-com.png";
import NextLogo from "../../public/nextjs-fill-svgrepo-com.png";
import PayloadLogo from "../../public/payload.png";
import TailwindLogo from "../../public/tailwind-svgrepo-com.png";
import MongoDBLogo from "../../public/mongodb-svgrepo-com.png";
import NodeLogo from "../../public/nodejs-icon-logo-svgrepo-com.png";

import Image from "next/image";

const skillsArray = [
  {
    id: 1,
    skill: "JavaScript",
    aboutSkill:
      "A versatile scripting language used to create dynamic web applications.",
    icon: JavaScriptLogo,
    bg: "bg-yellow-100",
  },
  {
    id: 2,
    skill: "TypeScript",
    aboutSkill:
      "A strongly typed superset of JavaScript that enhances developer productivity.",
    icon: TypeScriptLogo,
    bg: "bg-[#3279c778]",
  },
  {
    id: 3,
    skill: "React",
    aboutSkill:
      "A JavaScript library for building fast and interactive user interfaces.",
    icon: ReactLogo,
    bg: "bg-[#5bc2dd4f]",
  },
  {
    id: 4,
    skill: "Next.js",
    aboutSkill:
      "A React framework for building server-side rendered and static websites.",
    icon: NextLogo,
    bg: "bg-[#00000029]",
  },
  {
    id: 5,
    skill: "Node.js",
    aboutSkill:
      "A runtime environment that lets you run JavaScript on the server.",
    icon: NodeLogo,
    bg: "bg-[#76b35d52]",
  },
  {
    id: 6,
    skill: "MongoDB",
    aboutSkill:
      "A NoSQL database designed for high scalability and flexibility.",
    icon: MongoDBLogo,
    bg: "bg-[#28aa533b]",
  },
  {
    id: 7,
    skill: "Tailwind",
    aboutSkill: "A utility-first CSS framework for rapid UI development.",
    icon: TailwindLogo,
    bg: "bg-[#42a8b442]",
  },
  {
    id: 8,
    skill: "Payload CMS",
    aboutSkill:
      "A headless CMS built with Node.js that offers flexibility, powerful APIs, and a developer-first experience.",
    icon: PayloadLogo,
    bg: "bg-[#00000029]",
  },
];

export default function Home() {
  return (
    <div className="rounded-2xl md:shadow-md md:border-1 md:p-12 mt-20 bg-white">
      <div className="flex md:gap-8 gap-3 items-center">
        <div className="text-4xl font-extrabold">
          <h1>About Me</h1>
        </div>
        <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-[2px] md:w-40 w-20"></div>
      </div>

      <p className="mb-5 mt-10 text-[#47596e] font-semibold">
        Im Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </p>
      <p className="my-5 text-[#47596e] font-semibold">
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
      </p>

      <h2 className="text-3xl font-bold mt-20">My Skills!</h2>

      <div className="grid grid-cols-2 gap-5 mt-10">
        {skillsArray.map((skill) => (
          <div
            key={skill.id}
            className={`md:col-span-1 col-span-2 rounded-xl p-5 shadow-md ${skill.bg}`}
          >
            <div className="flex gap-3">
              <div className="relative w-10 h-10 mb-2">
                <Image src={skill.icon} alt={skill.skill} fill />
              </div>
              <p className="text-xl font-semibold">{skill.skill}</p>
            </div>
            <p className="font-semibold text-[#47596e]">{skill.aboutSkill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
