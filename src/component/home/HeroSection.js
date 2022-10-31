import React from "react";
import * as Icon from "@iconscout/react-unicons";
import { motion } from "framer-motion";
// import Link from '../Link'
import Lucky from "assets/me.png";

export default function HeroSection() {
  return (
    <div
      className="center bg-gradient-to-tr from-slate-900 to-slate-700 h-[600px] relative lg:h-[600px] flex items-center"
      id="home"
    >
      <div className="centered z-10 flex flex-col lg:flex-row">
        <div className="text-3xl lg:text-5xl text-center lg:basis-3/4 my-auto order-2 lg:order-1">
          <p className="font-medium text-slate-400">
            I&apos;m <span className="text-rose-500 font-bold">Nathaniel</span>{" "}
            Obeng
          </p>

          <div className="text-center my-7">
            <label className="text-lg lg:text-2xl font-semibold text-slate-400 typewriter m-auto block">
              Fullstack Web Developer
            </label>
          </div>

          <ul>
            <li className="inline-flex mx-3">
              <motion.a
                href="https://www.linkedin.com/in/nathaniel-obeng-056b4b138/"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="flex border border-[#0A66C2] text-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2] items-center justify-center h-16 w-16 m-auto rounded-lg"
              >
                <Icon.UilLinkedinAlt size={35} />
              </motion.a>
            </li>
            <li className="inline-flex mx-3">
              <motion.a
                href="https://github.com/Luck1609"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="flex border border-slate-300 text-slate-300 hover:border-black hover:bg-black hover:text-slate-300 items-center justify-center h-16 w-16 m-auto rounded-lg"
              >
                <Icon.UilGithubAlt size={35} />
              </motion.a>
            </li>
            <li className="inline-flex mx-3">
              <motion.a
                href="https://wa.me/0503894555"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="flex border border-green-500 text-green-500 hover:bg-green-500 hover:border-green-500 hover:text-white items-center justify-center h-16 w-16 m-auto rounded-lg"
              >
                <Icon.UilWhatsapp size={35} />
              </motion.a>
            </li>
          </ul>
        </div>

        <div className="w-full h-full mb-10 lg:mb-0 order-1 lg:order-2">
          <div className="relative w-[200px] lg:w-[350px] h-[200px] lg:h-[350px] m-auto rounded-full bg-sky-500 flex overflow-hidden">
            <img
              src={Lucky}
              alt="Nathaniel Obeng"
              className="h-[200px] lg:h-[350px] -mb-3 lg:-mb-5 m-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-1.5 w-full z-0">
        <svg
          className="relative w-full min-h-[40px] h-40 lg:h-80 -mb-[7px] lg:min-h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              className="opacity-50"
              href="#gentle-wave"
              x="48"
              y="0"
              fill="#334155"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
