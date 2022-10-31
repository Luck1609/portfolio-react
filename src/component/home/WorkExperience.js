import React from 'react';
import { Avatar } from '@mui/material';
import skills from 'assets/graphics/skills';

export default function WorkExperience() {
  return (
    <div id="experience" className="w-full bg-exp bg-cover py-20 bg-fixed relative after:absolute after:w-full after:top-0 after:left-0 after:h-full after:bg-black after:bg-opacity-25">
      <h2 className="text-4xl font-bold text-center text-white relative z-10 mb-10">Work Experience</h2>

      <div className="w-full max-w-6xl m-auto grid lg:grid-cols-2 z-10 relative">
        
        <div className="w-full border-r">
          <div className="flex gap-5 flex-col lg:flex-row items-center p-5">
            <Avatar alt="ReachAfrika logo" src={skills.ra} className="h-24 w-24" />
            <div className="w-full leading-8 bg-white rounded p-5 lg:text-lg">
              <label className="font-semibold text-2xl">ReachAfrika</label>
              <div className="">
                <div className="grow">
                  <span className="font-semibold mr-3">Role:</span>
                  <span className="font-normal">Front End Developer <span className="font-semibold">(Remote)</span></span>
                </div>
                
                <div className="flex">
                  <label className="font-semibold mr-3">Date:</label>
                  <span className="font-medium mr-2">Apr., 2021</span> - <span className="font-medium ml-2">Sept., 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-l"></div>
        <div className="w-full border-r"></div>

        
        <div className="w-full border-l">
          <div className="flex gap-5 flex-col lg:flex-row items-center p-5">
            <Avatar alt="ElMed logo" className="h-24 w-24 lg:order-1 bg-teal-500">ED</Avatar>
            <div className="w-full leading-8 bg-white rounded p-5 lg:text-lg">
              <label className="font-semibold text-2xl">ELMed Diagnostic Center</label>
              <div className="">
                <div className="grow">
                  <span className="font-semibold mr-3">Role:</span>
                  <span className="font-normal">Freelancer <span className="font-semibold">(Contract)</span> </span>
                </div>
                
                <div className="flex">
                  <label className="font-semibold mr-3">Date:</label>
                  <span className="font-medium mr-2">May, 2019</span> - <span className="font-medium ml-2">Jun., 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-r">
          <div className="flex gap-5 flex-col lg:flex-row items-center p-5">
            <Avatar alt="GRSC logo" src={skills.grsc} className="h-24 w-24" />
            <div className="w-full leading-8 bg-white rounded p-5 lg:text-lg">
              <label className="font-semibold text-2xl">GetStart Research Solution Center</label>
              <div className="">
                <div className="grow">
                  <span className="font-semibold mr-3">Role:</span>
                  <span className="font-normal">Freelancer <span className="font-semibold">(Contract)</span> </span>
                </div>
                
                <div className="flex">
                  <label className="font-semibold mr-3">Date:</label>
                  <span className="font-medium mr-2">Oct., 2018</span> - <span className="font-medium ml-2">Mar., 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full border-l"></div>
        <div className="w-full border-r"></div>

        <div className="w-full border-l">
          <div className="flex gap-5 flex-col lg:flex-row items-center p-5">
            <Avatar alt="LE Scientific Med logo" className="h-24 w-24 bg-rose-500 lg:order-1">LE</Avatar>
            <div className="w-full leading-8 bg-white rounded p-5 lg:text-lg">
              <label className="font-semibold text-2xl">LE Scientific Med</label>
              <div className="">
                <div className="grow">
                  <span className="font-semibold mr-3">Role:</span>
                  <span className="font-normal">Freelancer <span className="font-semibold">(Contract)</span></span>
                </div>
                
                <div className="flex">
                  <label className="font-semibold mr-3">Date:</label>
                  <span className="font-medium mr-2">Apr, 2018</span> - <span className="font-medium ml-2">Aug, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
