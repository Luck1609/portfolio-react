import React from 'react'
import * as Icon from '@iconscout/react-unicons'
// import { useState } from 'react'
// import Link from '../Link'
import Lucky from 'assets/me.png'

export default function HeroSection() {

  return (
    <div className="center bg-gradient-to-tr from-slate-900 to-slate-700 h-[450px] lg:h-[600px] flex items-center" id="home">
      <div className="centered flex">
        <div className="text-3xl lg:text-5xl text-center lg:basis-3/4 my-auto">
          <p className="font-medium">I&apos;m <span className="text-rose-500 font-bold">Nathaniel</span> Obeng</p>
          
          <label className="text-lg lg:text-2xl font-semibold block my-7">Frontend Web Developer</label>

          <ul>
            <li className="inline-flex mx-3">
              <a href="https://www.linkedin.com/in/nathaniel-obeng-056b4b138/" rel="noreferrer" target="_blank" className="flex border border-blue-500 text-blue-500 items-center justify-center h-16 w-16 m-auto rounded-lg">
                <Icon.UilLinkedinAlt size={35} />
              </a>
            </li>
            <li className="inline-flex mx-3">
              <a href="https://github.com/Luck1609" rel="noreferrer" target="_blank" className="flex border border-amber-500 text-amber-500 items-center justify-center h-16 w-16 m-auto rounded-lg">
                <Icon.UilGithubAlt size={35} />
              </a>
            </li>
            <li className="inline-flex mx-3">
              <a href="https://api.whatsapp.com/send" rel="noreferrer" target="_blank" className="flex border border-fuchsia-500 text-fuchsia-500 items-center justify-center h-16 w-16 m-auto rounded-lg">
                <Icon.UilWhatsapp size={35} />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full h-full hidden md:block">
          <div className="relative w-[350px] h-[350px] m-auto rounded-full bg-sky-500 flex overflow-hidden">
            <img src={Lucky} alt="Nathaniel Obeng" className="h-[350px] -mb-5 m-auto" />
          </div>
        </div>
      </div>

    </div>
  )
}
