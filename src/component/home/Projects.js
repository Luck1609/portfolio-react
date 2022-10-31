import React from "react";
import { Chip } from "@mui/material";
import skills from "assets/graphics/skills";
import { motion } from "framer-motion";
// import Image from 'next/image'
import Link from "component/Link";

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: '-15%'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
  }
}

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: '15%'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
  }
}

export default function Projects() {
  return (
    <div className="py-5" id="projects">
      <div className="centered">
        <div className="text-center my-8">
          <h3 className="text-4xl text-center font-bold mb-4">My Projects</h3>

          <p className="text-xl leading-9">
            All these websites where built from scratch to finished product
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Link
            // initial={{opacity: 0, x: '-15%'}}                
            // animate={{opacity: 1, x: 0}}
            // transition={{duration: 0.3, type: 'spring', dampness: 25, stiffness: 500}}
            // exit="exit"
            url="https://paradise-international.netlify.app/"
            target="_blank"
            className="block"
          >
            <motion.div
              variant={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="w-full hover:bg-slate-50 rounded overflow-hidden p-4 lg:px-0"
            >
              <div className="w-full relative">
                <img
                  src={skills.paradise}            
                  alt="A preview of Paradise International website"
                  className="w-full"
                />
              </div>

              <div className="w-full p-4">
                <label className="text-xl sm:text-2xl font-bold block">
                  Paradise International Church
                </label>
                <p className="my-4 text-lg md:text-xl">
                  A website that was built for paradise international church in
                  Ghana
                </p>
                <label className="font-medium text-md block mb-3">
                  Skills/Framework used
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  <Chip label="# React JS" />
                  <Chip label="# Tailwind CSS" />
                </div>
              </div>
            </motion.div>
          </Link>

          <Link
            // variant={slideInRight}
            initial={{opacity: 0, x: '15%'}}                                            
            animate={{opacity: 1, x: 0}}
            transition={{duratio: 0.3, type: 'spring', dampness: 25, stiffness: 500}}
            // exit="exit"
            url="https://french-tutor.netlify.app/"
            target="_blank"
            className="w-full hover:bg-slate-50 rounded overflow-hidden p-4 lg:px-0"
          >
            <div className="w-full relative">
              <img src={skills.tutor} alt="" className="w-full" />
            </div>

            <div className="w-full p-4">
              <label className="text-xl sm:text-2xl font-bold block">
                French Tutor
              </label>
              <p className="my-4 text-xl">
                A demo landing page for an online course platform that was built
                for ReachAfrika
              </p>
              <label className="font-medium text-md block mb-3">
                Skills/Framework used
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                <Chip label="# React JS" />
                <Chip label="# Tailwind CSS" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
