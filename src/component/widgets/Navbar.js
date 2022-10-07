import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center">
        <form action="">
          <input type="text" className="" placeholder="Search..." />
        </form>

        <ul>
          <li className="">
            
          </li>
        </ul>
      </div>
      <ul className="fixed h-screen -ml-[260px]  top-0 left-0 w-[250px] z-50 md:h-auto md:relative md:w-full max-w-6xl default-gradient md:mx-auto rounded">
        <li className="block md:inline-flex p-3 md:p-5">
          AAN
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          What We Do
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          What is Neuro Diversity
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          Get Involved
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          Awesome Stores
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          Events
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          Donate
        </li>
        <li className="block md:inline-flex p-3 md:p-5">
          Projects
        </li>
      </ul>
    </nav>
  )
}
