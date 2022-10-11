import React from 'react'
import { Chip } from '@mui/material'
import skills from 'assets/graphics/skills'
// import Image from 'next/image'
import Link from 'component/Link'

export default function Projects() {
  return (
    <div className="py-10">
      <div className="centered" id="projects">
        <div className="text-center my-8">
          <h3 className="text-4xl text-center font-bold mb-4">My Projects</h3>

          <p className="text-xl leading-9">All these websites where built from scratch to finished product</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Link url="https://paradise-international.netlify.app/" target="_blank" className="w-full hover:bg-slate-50 rounded overflow-hidden p-4 lg:px-0">
            <div className="w-full h-[170px] md:h-[270px] relative">
              <img 
                src={skills.paradise}
                alt="A preview of Paradise International website"
                layout="fill"
              />
            </div>

            <div className="w-full p-4">
              <p className="my-4 text-xl">A website that was built for paradise international church in Ghana</p>
              <label className="font-medium text-md block mb-3">Skills/Framework used</label>

              <div className="grid grid-cols-4 gap-3">
                <Chip label="# React JS" />
                <Chip label="# Tailwind CSS" />
              </div>
            </div>
          </Link>
          
          <Link url="https://french-tutor.netlify.app/" target="_blank" className="w-full hover:bg-slate-50 rounded overflow-hidden p-4 lg:px-0">
            <div className="w-full h-[170px] md:h-[270px] relative">
              <img 
                src={skills.tutor}
                alt=""
                layout="fill"
              />
            </div>

            <div className="w-full p-4">
              <p className="my-4 text-xl">A demo landing page for an online course platform that was built for ReachAfrika</p>
              <label className="font-medium text-md block mb-3">Skills/Framework used</label>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Chip label="# React JS" />
                <Chip label="# Tailwind CSS" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
