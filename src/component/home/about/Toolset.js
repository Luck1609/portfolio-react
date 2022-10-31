// import { Chip } from "@mui/material";
import React from "react";
import skills from "assets/graphics/skills";

export default function Toolset() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-skill-wallpaper bg-contain md:bg-cover w-[220px] m-auto md:w-3/5 lg:basis-1/3 h-56 md:h-[360px] md:mb-8"></div>
      
      <div className="lg:basis-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-7 lg:pl-5">
        <div className="col-span-2 md:col-span-3">
          <label className="text-2xl md:text-3xl font-semibold block text-center p-3">My Skill Set</label>
          <p className="text-lg md:text-2xl mb-5 md:leading-10">Below is a list of languages, frameworks, and tools that I have knowledge of, which I normally use on my projects.</p>
        </div>
        {skills_info.map(({ name, logo }) => {
          return (
            <div
              className="flex items-center bg-slate-200 rounded-full border border-slate-300 pl-1"
              key={name}
            >
              <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10  lg:h-12 relative rounded-full overflow-hidden bg-white">
                <img src={logo} alt={`${name} logo`} layout="fill" />
              </div>

              <span className="ml-3 text-sm md:text-[16px] lg:text-lg">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


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
