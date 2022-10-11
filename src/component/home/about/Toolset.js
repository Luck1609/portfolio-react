// import { Chip } from "@mui/material";
import React from "react";
import skills from "assets/graphics/skills";

export default function Toolset() {
  return (
    <div className="flex flex-col">
      <div className="bg-skill-wallpaper bg-contain w-[220px] m-auto lg:basis-1/2 h-56"></div>
      
      <div className="lg:basis-1/2 text-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-7">
        {skills_info.map(({ name, logo }) => {
          return (
            <div
              className="flex items-center bg-slate-200 rounded-full border border-slate-300 pl-1"
              key={name}
            >
              <div className="w-8 md:w-12 h-8 md:h-12 relative rounded-full overflow-hidden bg-white">
                <img src={logo} alt={`${name} logo`} layout="fill" />
              </div>

              <span className="ml-3 text-sm md:text-lg">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// <Chip
//   avatar={
//     <div className="w-14 h-14 relative rounded-full overflow-hidden">
//       <Image src={logo} alt={`${name} logo`} layout="fill" />
//     </div>
//   }
//   label={name}
//   key={name}
//   className="flex justify-start"
// />

const skills_info = [
  {
    name: "HTML",
    logo: skills.html,
  },
  {
    name: "CSS",
    logo: skills.css,
  },
  {
    name: "Javascript",
    logo: skills.js,
  },
  {
    name: "jQuery",
    logo: skills.jquery,
  },
  {
    name: "React JS",
    logo: skills.react,
  },
  {
    name: "Next JS",
    logo: skills.next,
  },
  {
    name: "Node JS",
    logo: skills.node,
  },
  {
    name: "PHP",
    logo: skills.php,
  },
  {
    name: "Laravel",
    logo: skills.laravel,
  },
  {
    name: "MySQL",
    logo: skills.mysql,
  },
  {
    name: "Git",
    logo: skills.git,
  },
  {
    name: "GitHub",
    logo: skills.github,
  },
  {
    name: "Tailwind CSS",
    logo: skills.tailwind,
  },
  {
    name: "Bootsrap",
    logo: skills.bootstrap,
  },
];
