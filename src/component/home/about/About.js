import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-about-wallpaper bg-cover lg:basis-1/2 h-80"></div>
      <div className="lg:basis-1/2 text-lg lg:text-2xl">
        <label className="text-3xl font-bold block w-full p-3 sm:p-5 text-center">About Me</label>
        <p className="leading-8 md:leading-10 text-justify mb-5">
          I am a passionate fullstack web developer with 4 years of experience. I love developing softwares and I strive to learn more to better myself both personally and professionally.
        </p>
        <p className="leading-8 md:leading-10">
          I enjoy learning new stuff to help me progress as a software developer and I would love to work for a company that will help me achieve this.
        </p>
      </div>
    </div>
  )
}
