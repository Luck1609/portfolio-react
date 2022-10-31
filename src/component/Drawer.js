import React, { useState } from 'react';
import { UilBars } from "@iconscout/react-unicons";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Btn } from "component/Btn";


export default function Sidenav() {
  const [state, setState] = useState(false);

  const toggleDrawer =  (event) => {
    console.log('Current event', event.key)
    // if (event.type === 'keydown' && ((event).key === 'Tab' || (event).key === 'Shift')) {
    //   return;
    // }

    setState(!state);
  };

  const list = () => (
    <Box
      sx={{ width: 250, height: '100%' }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      className="relative"
    >
      <ul className={`absolute w-[250px] z-30 transition lg:left-0 h-full bg-gradient-to-tr from-slate-800 to-slate-600`}>
        <li className="flex p-2 justify-center">
          <a href="#home" className="p-2 text-slate-300 text-lg">Home</a>
        </li>
        <li className="flex p-2 justify-center">
          <a href="#about" className="p-2 text-slate-300 text-lg">About</a>
        </li>
        <li className="flex p-2 justify-center">
          <a href="#about" className="p-2 text-slate-300 text-lg">Work Experience</a>
        </li>
        <li className="flex p-2 justify-center">
          <a href="#projects" className="p-2 text-slate-300 text-lg">Projects</a>
        </li>
        <li className="flex p-2 justify-center">
          <a href="#contact" className="p-2 text-slate-300 text-lg">Contact</a>
        </li>
      </ul>
    </Box>
  );

  return (
    <div className="md:hidden">
      <Btn 
        content={<UilBars />}
        className="fixed top-3 hover:bg-black hover:bg-opacity-20 right-0"
        click={toggleDrawer}
      />

      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </div>
  );
}
