import { FaGraduationCap } from "react-icons/fa";
const knowledges = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Firebase",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Mongoose",
  "MongoDB",
  "Express",
  "GitHub",
  "PayloadCms",
  "Post Man",
];
const Resume = () => {
  const educationArray = [
    {
      id: 1,
      year: "2016",
      degree: "Secondary School Certificate",
      institution: "Madartek Abdul Aziz High School & College,Dhaka",
      bg: "bg-blue-50",
    },
    {
      id: 2,
      year: "2016–2018",
      degree: "Higher Secondary Certificate",
      institution: "Willes Little Flower School And College",
      bg: "bg-green-50",
    },
    {
      id: 3,
      year: "2019–2023",
      degree: "B.Sc Electrical & Electronics Engineering",
      institution: "American International University-Bangladesh(AIUB)",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="rounded-2xl md:shadow-md md:border bg-white mt-20 overflow-hidden">
      {/* Header */}
      <div className="full-div p-0 md:p-12">
        <div className="flex md:gap-8 gap-3 items-center">
          <h1 className="text-4xl font-extrabold">Resume</h1>
          <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-[2px] md:w-40 w-20" />
        </div>

        {/* Education Section */}
        <div className="mt-10">
          <div className="flex gap-2 items-center">
            <FaGraduationCap className="text-2xl text-[#f95054]" />
            <h2 className="text-xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {educationArray.map((edu) => (
              <div key={edu.id} className={`${edu.bg} p-5 rounded-xl border`}>
                <p className="text-sm text-gray-500">{edu.year}</p>
                <h3 className="text-lg font-semibold mt-1">{edu.degree}</h3>
                <p className="text-sm text-gray-700 mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Header */}
      <div className=" bg-gray-50">
        <div className="p-0 md:p-12">
          <h2 className="text-2xl font-bold my-6 ">Knowledges</h2>
          <div className="flex flex-wrap gap-3 p-5">
            {knowledges.map((knowledge, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
              >
                {knowledge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
