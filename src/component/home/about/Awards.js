import skills from 'assets/graphics/skills'
import React from 'react'

export default function Awards() {
  return (
    <div>
      <label className="text-2xl md:text-3xl font-semibold block text-center p-3">See My Resume</label>
      <p className="text-lg lg:text-2xl">You can download my resume from <a href={skills.resume} className="font-bold text-rose-500" download={true}>here</a> for your perusal</p>
      
    </div>
  )
}
