// "use client"; // Only if you're using this in Next.js App Router (optional but safe)

// import { useState } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { FaClipboardList } from "react-icons/fa6";
// import { BsBoxFill } from "react-icons/bs";
// import { RiContactsBookLine } from "react-icons/ri";

// const Header = () => {
//   const [active, setActive] = useState("home");

//   const navItems = [
//     {
//       name: "Home",
//       key: "home",
//       link: "/",
//       icon: <AiOutlineHome className="size-5" />,
//     },
//     {
//       name: "Resume",
//       key: "resume",
//       link: "/resume",
//       icon: <FaClipboardList className="size-5" />,
//     },
//     {
//       name: "Projects",
//       key: "projects",
//       link: "/projects",
//       icon: <BsBoxFill className="size-5" />,
//     },
//     {
//       name: "Contact",
//       key: "contact",
//       link: "/contact",
//       icon: <RiContactsBookLine className="size-5" />,
//     },
//   ];

//   return (
//     <nav className="lg:flex justify-between border-[1px] shadow-xl lg:p-5 xl:p-10 rounded-2xl hidden">
//       {navItems.map((item) => (
//         <div
//           key={item.key}
//           onClick={() => setActive(item.key)}
//           className={`flex justify-center items-center flex-col p-5 rounded-md font-semibold cursor-pointer transition-all duration-300 ${
//             active === item.key
//               ? "text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
//               : "text-[#44566c] bg-[#f3f6f6]"
//           }`}
//         >
//           {item.icon}
//           <p>{item.name}</p>
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Header;
"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";

const Header = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    {
      name: "Home",
      key: "home",
      link: "/",
      icon: <AiOutlineHome className="size-5" />,
    },
    {
      name: "Resume",
      key: "resume",
      link: "/resume",
      icon: <FaClipboardList className="size-5" />,
    },
    {
      name: "Projects",
      key: "projects",
      link: "/projects",
      icon: <BsBoxFill className="size-5" />,
    },
    {
      name: "Contact",
      key: "contact",
      link: "/contact",
      icon: <RiContactsBookLine className="size-5" />,
    },
  ];

  return (
    <nav className="lg:flex justify-between border-[1px] shadow-xl lg:p-5 xl:p-10 rounded-2xl hidden bg-white">
      {navItems.map((item) => (
        <Link href={item.link} key={item.key}>
          <div
            onClick={() => setActive(item.key)}
            className={`flex justify-center items-center flex-col p-5 rounded-md font-semibold cursor-pointer transition-all duration-300 ${
              active === item.key
                ? "text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                : "text-[#44566c] bg-[#f3f6f6]"
            }`}
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
