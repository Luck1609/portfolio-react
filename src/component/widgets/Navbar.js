import React from 'react'
import LinkItem from 'component/Link'
import img from 'assets/img'

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
      <div className="flex px-8 py-3 items-center default-gradient fixed h-screen -ml-[260px]  top-0 left-0 w-[250px] z-50 md:h-auto md:relative md:w-full md:mx-auto">
        <LinkItem url='/' className="grow">
          <img src={img.logo} alt="" className="h-16" />
        </LinkItem>

        <ul className="">
          {
            links.map(({name, url}) => {
              return (
                <li className="block md:inline-flex" key={name}>
                  <LinkItem url={url} className="p-3 md:p-5 md:px-3">
                    <span className="">{name}</span>
                  </LinkItem>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}



const links = [
  {
    name: 'AAN',
    url: '/'
  },
  {
    name: 'Contact Us',
    url: '/contact-us'
  },
  {
    name: 'What is Neuro Diversity',
    url: '/about-neuro-diversity'
  },
  {
    name: 'Get Involved',
    url: '/get-involved'
  },
  {
    name: 'Awesome Stores',
    url: '/stories'
  },
  {
    name: 'Events',
    url: '/events'
  },
  {
    name: 'Donate',
    url: '/donate'
  },
  {
    name: 'Projects',
    url: '/projects'
  },
]